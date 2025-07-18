// Stage Data Types

export interface StageData {
  eventId: number;
  eventName: string;
  typeId: number;
  typeName: string;
  prefix: string;
  mapId: number;
  specialRule?: {
    name: string;
    explanation: string;
    ruleTypes: Record<string, { Parameters: number[] }>;
    contentsType: number;
  } | null;
  stages: StageInfo[];
  selectedStageIndex?: number; // 特定のステージを選択する場合のインデックス
  crownData?: {
    crownCount: number;        // 利用可能な星の数（1-4）
    magnifications: number[];  // 各星の倍率 [100, 150, 200, 300]
    baseDifficulty: number;    // 基本難易度
  } | null;
}

export interface StageInfo {
  stageId: number;
  stageName: string;
  baseHp: number;
  width: number;
  enemyLimit: number;
  requiredCost: number;
  costLimits: {
    lower: number;
    upper: number;
  };
  treasures: TreasureInfo[];
  enemies: EnemyStageInfo[];
  crownData?: {
    crownCount: number;        // 利用可能な星の数（1-4）
    magnifications: number[];  // 各星の倍率 [100, 150, 200, 300]
    baseDifficulty: number;    // 基本難易度
  } | null;
}

export interface TreasureInfo {
  treasureId: string;
  treasureName: string;
  probability: string;
  amount: string;
  times: string;
  limitText: string;
}

export interface EnemyStageInfo {
  enemyId: string;
  enemyName: string;
  icon?: string;
  traits: string[];
  baseStats: {
    hp: number;
    ap: number;
    dps: number;
    speed: number;
    range: number;
    rangeType: string;
    kbLevel: number;
    money: number;
    freq: number;
    foreswing: number;
    backswing: number;
    tba: number;
  };
  stageStats: {
    actualHp: number;
    actualAp: number;
    actualDps: number;
    magnification: string;
    count: string;
    spawnTime: string;
    spawnTimeFrames: string;
    delay: string;
    delayFrames: string;
    baseHpRatio: string;
    isBoss: boolean;
  };
  abilities: Record<string, unknown>;
}

export interface EnemyData {
  enemyId: string;
  enemyName: string;
  stats: {
    hp: number;
    ap: number;
    dps: number;
    speed: number;
    range: number;
    rangeType: string;
    kbLevel: number;
    money: number;
  };
  traits: string[];
}

export interface StageIndexData {
  events: EventInfo[];
  totalEvents: number;
  totalStages: number;
}

export interface EventInfo {
  eventId: number;
  eventName: string;
  typeId: number;
  typeName: string;
  mapId: number;
  prefix: string;
  stageCount: number;
  stageIds: number[];
  stageInfo: Record<number, string>;
}

export interface StageSearchParams {
  eventId?: number;
  stageName?: string;
  typeId?: number;
  sortBy?: 'id-desc' | 'id-asc';
}

export interface StageDisplayMode {
  showDetail: boolean;
  showFrames: boolean;
}