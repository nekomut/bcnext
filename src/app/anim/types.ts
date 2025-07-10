export interface AnimationViewerProps {
  animationData: Record<string, unknown>;
  selectedForm: string;
  selectedAnimation: string;
  isPlaying: boolean;
  onStop: () => void;
  unitId: string; // 追加されたプロパティ
}

export interface ImageLoadError {
  message: string;
  unitId: string;
  timestamp: number;
}

export interface UnitImageCache {
  [unitId: string]: string[];
}