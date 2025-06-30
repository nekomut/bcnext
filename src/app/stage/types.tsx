// Stage Data Types

export interface StageData {
  eventId: number;
  eventName: string;
  typeId: number;
  typeName: string;
  prefix: string;
  mapId: number;
  stages: StageInfo[];
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
  icon: string;  // base64エンコードされたアイコン
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
  sortBy?: 'id' | 'type' | 'name' | 'stages';
}

export interface StageDisplayMode {
  showDetail: boolean;
  showFrames: boolean;
}