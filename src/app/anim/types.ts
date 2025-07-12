export interface AnimationViewerProps {
  animationData: Record<string, unknown>;
  selectedForm: string;
  selectedAnimation: string;
  isPlaying: boolean;
  onStop: () => void;
  unitId: string; // 追加されたプロパティ
  showBoundaries?: boolean; // 境界線表示フラグ
  onShowBoundariesChange?: (value: boolean) => void; // 境界線表示変更コールバック
}

export interface ImageLoadError {
  message: string;
  unitId: string;
  timestamp: number;
}

export interface UnitImageCache {
  [unitId: string]: string[];
}