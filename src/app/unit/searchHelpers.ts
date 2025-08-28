// アドバンス検索用のヘルパー関数とタイプ定義

import { UnitAbility } from './types';

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
  | 'curse';

// 能力検索設定の型定義
interface AbilitySearchConfig {
  searchTerms: string[];
  immunityTerms?: string[];
  searchBothNameAndValue?: boolean;
}

// 能力検索設定マップ
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