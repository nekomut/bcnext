// アドバンス検索用のヘルパー関数とタイプ定義

import { UnitAbility } from './types';

/**
 * アドバンス検索に新しい能力・効果を追加する手順:
 * 
 * 1. このファイル (searchHelpers.ts):
 *    - AbilityType型に新しい能力キーを追加 (例: 'newAbility')
 *    - ABILITY_SEARCH_CONFIG に新しい能力の設定を追加
 *    
 * 2. page.tsx:
 *    - 能力選択UIに新しいボタンを追加（アイコン付き）
 *    - icons.abilityXXX を使用してアイコンを設定
 *    - AbilityType as でキャストして型安全性を保つ
 *    
 * 3. types.tsx:
 *    - getAbilities関数内で新しい能力の検出ロジックを追加
 *    - 本能・超本能の場合はswitch文にcase追加（talent.id に対応）
 *    - 基本能力の場合は該当するstats配列インデックスをチェック
 *    
 * 4. テスト:
 *    - npm run buildで型エラーがないことを確認
 *    - Playwrightで実際の検索動作をテスト
 *    - 該当ユニットが正しく検索されることを確認
 */

// 能力タイプの定義
export type AbilityType = 
  | 'weaken' 
  | 'freeze' 
  | 'slow' 
  | 'attacksOnly' 
  | 'strongAgainst' 
  | 'resistant' 
  | 'insanelyTough' 
  | 'massiveDamage' 
  | 'insaneDamage' 
  | 'knockback' 
  | 'warp' 
  | 'curse'
  | 'dodgeAttack'
  | 'strengthen'
  | 'survive'
  | 'baseDestroyer'
  | 'critical'
  | 'metalKiller'
  | 'zombieKiller'
  | 'soulStrike'
  | 'barrierBreaker'
  | 'shieldPiercing'
  | 'savageBlow'
  | 'extraMoney'
  | 'metal'
  | 'miniWave'
  | 'wave';

// 能力検索設定の型定義
interface AbilitySearchConfig {
  searchTerms: string[];
  immunityTerms?: string[];
  searchBothNameAndValue?: boolean;
}

// 能力検索設定マップ
// 新しい能力を追加する際は、ここに設定を追加してください
// searchTerms: 検索対象となる日本語名称
// immunityTerms: 無効/耐性の場合に除外する用語（オプション）
// searchBothNameAndValue: ability.nameとability.valueの両方を検索するか（通常はtrue）
const ABILITY_SEARCH_CONFIG: Record<AbilityType, AbilitySearchConfig> = {
  weaken: {
    searchTerms: ['攻撃力ダウン'],
    immunityTerms: ['攻撃力ダウン無効', '攻撃力ダウン耐性'],
    searchBothNameAndValue: true
  },
  freeze: {
    searchTerms: ['動きを止める'],
    immunityTerms: ['動きを止める無効', '動きを止める耐性'],
    searchBothNameAndValue: true
  },
  slow: {
    searchTerms: ['動きを遅くする'],
    immunityTerms: ['動きを遅くする無効', '動きを遅くする耐性'],
    searchBothNameAndValue: true
  },
  attacksOnly: {
    searchTerms: ['攻撃ターゲット限定'],
    searchBothNameAndValue: false
  },
  strongAgainst: {
    searchTerms: ['めっぽう強い'],
    searchBothNameAndValue: false
  },
  resistant: {
    searchTerms: ['打たれ強い'],
    searchBothNameAndValue: false
  },
  insanelyTough: {
    searchTerms: ['超打たれ強い'],
    searchBothNameAndValue: false
  },
  massiveDamage: {
    searchTerms: ['超ダメージ'],
    searchBothNameAndValue: false
  },
  insaneDamage: {
    searchTerms: ['極ダメージ'],
    searchBothNameAndValue: false
  },
  knockback: {
    searchTerms: ['ふっとばす'],
    immunityTerms: ['ふっとばし無効', 'ふっとばし耐性'],
    searchBothNameAndValue: true
  },
  warp: {
    searchTerms: ['ワープ'],
    immunityTerms: ['ワープ無効', 'ワープ耐性'],
    searchBothNameAndValue: true
  },
  curse: {
    searchTerms: ['呪い'],
    immunityTerms: ['呪い無効', '呪い耐性'],
    searchBothNameAndValue: true
  },
  dodgeAttack: {
    searchTerms: ['攻撃無効'],
    searchBothNameAndValue: true
  },
  strengthen: {
    searchTerms: ['攻撃力アップ'],
    searchBothNameAndValue: true
  },
  survive: {
    searchTerms: ['生き残る'],
    searchBothNameAndValue: true
  },
  baseDestroyer: {
    searchTerms: ['城破壊が得意'],
    searchBothNameAndValue: false
  },
  critical: {
    searchTerms: ['クリティカル'],
    searchBothNameAndValue: true
  },
  metalKiller: {
    searchTerms: ['メタルキラー'],
    searchBothNameAndValue: false
  },
  zombieKiller: {
    searchTerms: ['ゾンビキラー'],
    searchBothNameAndValue: false
  },
  soulStrike: {
    searchTerms: ['魂攻撃'],
    searchBothNameAndValue: false
  },
  barrierBreaker: {
    searchTerms: ['バリアブレイカー'],
    searchBothNameAndValue: false
  },
  shieldPiercing: {
    searchTerms: ['シールドブレイカー'],
    searchBothNameAndValue: false
  },
  savageBlow: {
    searchTerms: ['渾身の一撃'],
    searchBothNameAndValue: false
  },
  extraMoney: {
    searchTerms: ['撃破時お金アップ'],
    searchBothNameAndValue: false
  },
  metal: {
    searchTerms: ['メタル'],
    immunityTerms: ['メタルキラー'],
    searchBothNameAndValue: false
  },
  miniWave: {
    searchTerms: ['小波動'],
    immunityTerms: ['小波動無効', '小波動耐性'],
    searchBothNameAndValue: true
  },
  wave: {
    searchTerms: ['波動攻撃'],
    immunityTerms: ['波動攻撃無効', '波動攻撃耐性'],
    searchBothNameAndValue: true
  }
};

/**
 * 能力から文字列を抽出する
 */
function extractAbilityStrings(ability: UnitAbility): { name: string; value: string } {
  const name = typeof ability.name === 'string' ? ability.name : '';
  const value = typeof ability.value === 'string' ? ability.value : '';
  return { name, value };
}

/**
 * テキストに検索用語が含まれているかチェック
 */
function containsAnyTerm(text: string, terms: string[]): boolean {
  return terms.some(term => text.includes(term));
}

/**
 * 特定の能力タイプが能力リストに含まれているかチェック
 */
export function hasAbilityType(abilities: UnitAbility[], abilityType: AbilityType): boolean {
  const config = ABILITY_SEARCH_CONFIG[abilityType];
  
  return abilities.some(ability => {
    const { name, value } = extractAbilityStrings(ability);
    
    // 検索対象テキストを決定
    const searchTexts = config.searchBothNameAndValue ? [name, value] : [name];
    const searchText = searchTexts.join(' ');
    
    // 能力が存在するかチェック
    const hasAbility = containsAnyTerm(searchText, config.searchTerms);
    
    // 無効/耐性チェック（設定されている場合のみ）
    const hasImmunity = config.immunityTerms 
      ? containsAnyTerm(searchText, config.immunityTerms)
      : false;
    
    return hasAbility && !hasImmunity;
  });
}

/**
 * 複数の能力タイプをAND/OR検索でチェック
 */
export function checkAbilityTypes(
  abilities: UnitAbility[], 
  abilityTypes: AbilityType[], 
  searchMode: 'AND' | 'OR'
): boolean {
  if (abilityTypes.length === 0) return true;
  
  const checks = abilityTypes.map(abilityType => hasAbilityType(abilities, abilityType));
  
  return searchMode === 'OR' 
    ? checks.some(check => check) 
    : checks.every(check => check);
}

/**
 * 能力検索設定を取得（デバッグ用）
 */
export function getAbilitySearchConfig(): Record<AbilityType, AbilitySearchConfig> {
  return ABILITY_SEARCH_CONFIG;
}