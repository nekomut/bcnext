/**
 * Unit 686のめっぽう強い能力表示テスト（ブラウザログ確認付き）
 */
import { test, expect } from '@playwright/test';

test.describe('Unit 686 めっぽう強い ability display', () => {
  test('should display correct mighty ability with proper textbox visibility', async ({ page }) => {
    // ブラウザのコンソールログを収集
    const logs: string[] = [];
    page.on('console', msg => {
      logs.push(`[${msg.type()}] ${msg.text()}`);
    });

    // ページエラーも収集
    const errors: string[] = [];
    page.on('pageerror', error => {
      errors.push(`Page error: ${error.message}`);
    });

    // Unit 686のページを開く
    await page.goto('/unit?id=686');
    
    // ページが読み込まれるまで待機
    await expect(page.locator('h2:has-text("光の女神シリウス")')).toBeVisible();
    
    // 能力・効果セクションが表示されるまで待機
    await expect(page.locator('h3:has-text("能力・効果")')).toBeVisible();
    
    // めっぽう強い能力を確認
    const mightySection = page.locator('.bg-gray-50:has-text("めっぽう強い")');
    await expect(mightySection).toBeVisible();
    
    // テキストボックスの存在を確認
    const apTextbox = mightySection.locator('input[type="number"]').first();
    const dmgTextbox = mightySection.locator('input[type="number"]').last();
    
    // デバッグ情報を追加
    console.log('ブラウザログ:');
    logs.forEach(log => console.log(log));
    
    if (errors.length > 0) {
      console.log('ページエラー:');
      errors.forEach(error => console.log(error));
    }
    
    // ターゲット属性を確認（Unit 686は古代種・悪魔以外の対象なのでテキストボックスが表示されるはず）
    const unit686Data = await page.evaluate(() => {
      // ブラウザ内でUnitDataを取得（デバッグ用）
      return {
        unitId: 686,
        formStats: [2700, 4, 15, 750, 55, 430, 3350, 1300, 0, 320, 1, 0, 1, 20, 0, 9, 1, 1, 1, 0, 1, 1, 1, 1] // stats[23] = 1 (めっぽう強い)
      };
    });
    
    console.log('Unit 686 データ:', unit686Data);
    
    // Unit 686のターゲット属性を確認するためのデバッグ
    const debugInfo = await page.evaluate(() => {
      const mightySection = document.querySelector('.bg-gray-50:has-text("めっぽう強い")');
      const ability = Array.from(document.querySelectorAll('.bg-gray-50')).find(el => 
        el.textContent?.includes('めっぽう強い')
      );
      
      if (ability) {
        const abilityText = ability.textContent;
        const hasRelic = abilityText?.includes('古代種');
        const hasAku = abilityText?.includes('悪魔');
        const hasOtherTraits = abilityText?.includes('白い敵') || abilityText?.includes('赤い敵') || 
                              abilityText?.includes('黒い敵') || abilityText?.includes('メタル') || 
                              abilityText?.includes('天使') || abilityText?.includes('エイリアン') || 
                              abilityText?.includes('ゾンビ') || abilityText?.includes('超獣') || 
                              abilityText?.includes('浮いてる敵');
        
        return {
          abilityText,
          hasRelic,
          hasAku,
          hasOtherTraits,
          shouldHideTextbox: !hasOtherTraits && ((hasRelic && !hasAku) || (!hasRelic && hasAku) || (hasRelic && hasAku))
        };
      }
      
      return null;
    });
    
    console.log('デバッグ情報:', debugInfo);
    
    // テキストボックスの表示状態を確認
    if (debugInfo?.shouldHideTextbox) {
      // 古のみ・悪のみ・古と悪のみの場合はテキストボックス非表示
      await expect(apTextbox).not.toBeVisible();
      await expect(dmgTextbox).not.toBeVisible();
    } else {
      // その他の場合はテキストボックス表示
      await expect(apTextbox).toBeVisible();
      await expect(dmgTextbox).toBeVisible();
      
      // テキストボックスの値を確認
      await expect(apTextbox).toHaveValue('1.8');
      await expect(dmgTextbox).toHaveValue('0.4');
    }
  });
});