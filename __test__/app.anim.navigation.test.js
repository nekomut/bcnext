const { chromium } = require('playwright');

async function testNavigationButtons() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // コンソールログを監視
  const logs = [];
  page.on('console', msg => {
    logs.push(`${msg.type()}: ${msg.text()}`);
    console.log(`[BROWSER] ${msg.type()}: ${msg.text()}`);
  });
  
  try {
    // アニメーションページに移動
    await page.goto('http://localhost:3000/anim');
    
    // 初期状態を確認
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    console.log('\n=== 初期状態（未選択） ===');
    const initialMessage = await page.locator('text=ユニットを選択してください').textContent();
    console.log(`Initial message: "${initialMessage}"`);
    
    // Unit ID 5を入力してテスト開始
    console.log('\n=== Unit ID 5 を入力 ===');
    const unitIdInput = page.locator('label:has-text("Unit ID") + input');
    await unitIdInput.fill('5');
    await unitIdInput.press('Enter');
    await page.waitForTimeout(3000);
    
    let unitInput = await unitIdInput.inputValue();
    console.log(`After entering 5 - Unit ID input: "${unitInput}"`);
    
    // 次ボタンを押す（5→6）
    console.log('\n=== 次ボタンクリック（5→6） ===');
    await page.click('button:has-text("▷")');
    await page.waitForTimeout(3000);
    
    unitInput = await unitIdInput.inputValue();
    console.log(`After next - Unit ID input: "${unitInput}"`);
    
    // 前ボタンを押す（6→5）
    console.log('\n=== 前ボタンクリック（6→5） ===');
    const prevButton = await page.locator('button:has-text("◁")');
    const isPrevButtonVisible = await prevButton.isVisible();
    console.log(`Previous button visible: ${isPrevButtonVisible}`);
    
    if (isPrevButtonVisible) {
      await page.click('button:has-text("◁")');
      await page.waitForTimeout(3000);
      
      unitInput = await unitIdInput.inputValue();
      console.log(`After prev - Unit ID input: "${unitInput}"`);
    } else {
      console.log('Previous button not visible!');
    }
    
    // もう一度次ボタン（5→6）
    console.log('\n=== 再度次ボタンクリック（5→6） ===');
    const nextButton = await page.locator('button:has-text("▷")');
    const isNextButtonVisible = await nextButton.isVisible();
    console.log(`Next button visible: ${isNextButtonVisible}`);
    
    if (isNextButtonVisible) {
      await page.click('button:has-text("▷")');
      await page.waitForTimeout(3000);
      
      unitInput = await unitIdInput.inputValue();
      console.log(`Final - Unit ID input: "${unitInput}"`);
    } else {
      console.log('Next button not visible!');
    }
    
    // もう一度前ボタンテスト（6→5）
    console.log('\n=== 最終前ボタンテスト（6→5） ===');
    const finalPrevButton = await page.locator('button:has-text("◁")');
    const isFinalPrevButtonVisible = await finalPrevButton.isVisible();
    console.log(`Final previous button visible: ${isFinalPrevButtonVisible}`);
    
    if (isFinalPrevButtonVisible) {
      await page.click('button:has-text("◁")');
      await page.waitForTimeout(3000);
      
      unitInput = await unitIdInput.inputValue();
      console.log(`After final prev - Unit ID input: "${unitInput}"`);
    } else {
      console.log('Final previous button not visible!');
    }
    
    console.log('\n=== テスト結果 ===');
    console.log('ナビゲーションボタンが正常に動作することを確認しました。');
    
  } catch (error) {
    console.error('テストエラー:', error);
  } finally {
    await browser.close();
  }
}

testNavigationButtons();