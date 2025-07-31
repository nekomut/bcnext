// Java互換アニメーションシステム - パフォーマンス監視とデバッグツール



// パフォーマンス監視
export class AnimationPerformanceMonitor {
  private static readonly PERFORMANCE_THRESHOLD = 16; // 60FPSの1フレーム時間
  private static measurements: Map<string, number[]> = new Map();

  public static track(operation: string, startTime: number): void {
    const duration = performance.now() - startTime;
    
    // 測定値を記録
    if (!this.measurements.has(operation)) {
      this.measurements.set(operation, []);
    }
    const measurements = this.measurements.get(operation)!;
    measurements.push(duration);
    
    // 直近10回の平均を保持
    if (measurements.length > 10) {
      measurements.shift();
    }
    
    if (duration > this.PERFORMANCE_THRESHOLD) {
      const avg = measurements.reduce((a, b) => a + b, 0) / measurements.length;
      console.warn(
        `⚠️ Animation operation '${operation}' took ${duration.toFixed(2)}ms ` +
        `(avg: ${avg.toFixed(2)}ms, threshold: ${this.PERFORMANCE_THRESHOLD}ms)`
      );
    }
  }

  public static measure<T>(operation: string, fn: () => T): T {
    const startTime = performance.now();
    const result = fn();
    this.track(operation, startTime);
    return result;
  }

  public static getStats(): Record<string, { avg: number; min: number; max: number; count: number }> {
    const stats: Record<string, { avg: number; min: number; max: number; count: number }> = {};
    
    this.measurements.forEach((measurements, operation) => {
      if (measurements.length > 0) {
        const avg = measurements.reduce((a, b) => a + b, 0) / measurements.length;
        const min = Math.min(...measurements);
        const max = Math.max(...measurements);
        stats[operation] = { avg, min, max, count: measurements.length };
      }
    });
    
    return stats;
  }

  public static clearStats(): void {
    this.measurements.clear();
  }
}

// グローバル設定（開発用）
if (typeof window !== 'undefined') {
  (window as unknown as { AnimationPerformanceMonitor: typeof AnimationPerformanceMonitor }).AnimationPerformanceMonitor = AnimationPerformanceMonitor;
}