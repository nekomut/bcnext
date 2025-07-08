// Stage 1397 Data
import type { StageData } from '../../app/stage/types';

export const e1397Data: StageData = {
  eventId: 1397,
  eventName: "チョコサプ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 397,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "おいしいだけじゃつまらない",
      baseHp: 1500,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "13",
          treasureName: "ネコカン",
          probability: "100",
          amount: "30",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "718",
          enemyName: "チョコサプネコカプセル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBAMFBAQFBQQHBgUJCAcLBwYNDAsRDgweEw4dGRc0HRU+JBs0LilHKR1QMCJKNyxZNCVhNyRKRDplOyZWQjRrQi1xSTNiUkV3UjqBXERzZVdwaFiLaFGSdFyefGSeh3CskHWuoY29qZHFs5bMuZvPvqHSxKXXyKzazrHh1brl3cDq4MXt5cnu6Mv07NT589n89uX//fC4xLyWAAAAQHRSTlMACRIeKTM/UFpngY92m8f+p+Oz77zU/OX//+n///7//0b//////v///xL/////////////////////////////ZPVhXwAAA1lJREFUWIXtlll3qjAUha3WqVWvVVEG0SsV5RKCEOZB+P//6p6AWoeg9t3NgyyW384+yUmgVnvppZdeeumhmh8jTpQVRZFFbth7/yVd704kDRmGgRDS9e1ano7ab7/gu5yCTIz07Waz+QbBj8JP2s/i7yMFmwbQa2BXR33Pp/3GU3x7hgCnQwO2PGoBl8C1nokvYJOGp/zyRwvQXBo/LqMnmzR+YXCJg8HisUNHAB4ZGKPNbYLFfC6M71fRnMH0GaYTeBZaf9/yc0ng7s3k2wBR3kviyDHWjBrAgR/emwB1B/ntOL02WBwjSJI0rZ6Gxgy6BxlumiaBpa9XzAQCP6hXGXyosIC64cRxYBubiwrOEkjTTgVf5zCGBdRNQixjy5iC0kHgJxXboq2YiHY/bCJ0xZ+XIAhT9t6sDxHWof/Xmy3dBrddcErAfzAjNDlcBF99ry+3wQkvEkAEfsLsha5ows4/7L3lpS4SCMIXsx37qqlf9W9FAmHcZRmMVLy9WLurGTxLMP1kGUw0tsEZfzJgtvNAMdgJFtcl8GyDiaxsGAaLmwS8ILMNdjtZWh5WYMXCy93IyzutzzIY4jzECvT6grqs6CH4w8/nS3qkweiqQQKlxzLoqXmepwSrMpQpzYsj7HSQFC0sKRq2fd9xROaObolZlu2zfRI4O6ypilxS1EyWFVXHlhsmceA5jjVgbobGxM+zPZwFabrf79MkDHzHtm3Ldv0gTA7PfM8hLu6zT4QezrMMDA5KCyPKHZ7FURT4LiGuWnEmNcSMRkgqFMdhSHlicVVH0tApa6jmoQDioo8KvtZSaQ3VfOC5BGZlVv2uH1pFDXF8Q8fRkXe1ygDwXhaTPEvh32BxcKE38IDyPuWJyf2rNqh1NYgAo0VRFJ9U0EHJ27b49w5fe/vE+T6NwiAsTAqFIeXp/AFOVGYXnzmMzHwfwf+DsFAQlqOX0wc88yg5V506hL7v+cFBcF+ObhOi9h9/Kb31tTSDCXe9gxxYe4rbjiXfWYAz9USSRcA5hLLl2HR4NKt6p12rOVLdJPQoVVzw6xAsP/mNVag9Uk3iuTQAoVF2SBw+84FVqtFstbufg5msIYxN+NpRha9Bv9fttFvvlW/2c3Um3Nf4z43GX9zg8zbGfyCc7+tJ3KCOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 20,
            ap: 15,
            dps: 4.46,
            speed: 35,
            range: 200,
            rangeType: "単体",
            kbLevel: 2,
            money: 30,
            freq: 101,
            foreswing: 16,
            backswing: 85,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 15,
            actualDps: 4.46,
            magnification: "100%",
            count: "1",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "718",
          enemyName: "チョコサプネコカプセル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBAMFBAQFBQQHBgUJCAcLBwYNDAsRDgweEw4dGRc0HRU+JBs0LilHKR1QMCJKNyxZNCVhNyRKRDplOyZWQjRrQi1xSTNiUkV3UjqBXERzZVdwaFiLaFGSdFyefGSeh3CskHWuoY29qZHFs5bMuZvPvqHSxKXXyKzazrHh1brl3cDq4MXt5cnu6Mv07NT589n89uX//fC4xLyWAAAAQHRSTlMACRIeKTM/UFpngY92m8f+p+Oz77zU/OX//+n///7//0b//////v///xL/////////////////////////////ZPVhXwAAA1lJREFUWIXtlll3qjAUha3WqVWvVVEG0SsV5RKCEOZB+P//6p6AWoeg9t3NgyyW384+yUmgVnvppZdeeumhmh8jTpQVRZFFbth7/yVd704kDRmGgRDS9e1ano7ab7/gu5yCTIz07Waz+QbBj8JP2s/i7yMFmwbQa2BXR33Pp/3GU3x7hgCnQwO2PGoBl8C1nokvYJOGp/zyRwvQXBo/LqMnmzR+YXCJg8HisUNHAB4ZGKPNbYLFfC6M71fRnMH0GaYTeBZaf9/yc0ng7s3k2wBR3kviyDHWjBrAgR/emwB1B/ntOL02WBwjSJI0rZ6Gxgy6BxlumiaBpa9XzAQCP6hXGXyosIC64cRxYBubiwrOEkjTTgVf5zCGBdRNQixjy5iC0kHgJxXboq2YiHY/bCJ0xZ+XIAhT9t6sDxHWof/Xmy3dBrddcErAfzAjNDlcBF99ry+3wQkvEkAEfsLsha5ows4/7L3lpS4SCMIXsx37qqlf9W9FAmHcZRmMVLy9WLurGTxLMP1kGUw0tsEZfzJgtvNAMdgJFtcl8GyDiaxsGAaLmwS8ILMNdjtZWh5WYMXCy93IyzutzzIY4jzECvT6grqs6CH4w8/nS3qkweiqQQKlxzLoqXmepwSrMpQpzYsj7HSQFC0sKRq2fd9xROaObolZlu2zfRI4O6ypilxS1EyWFVXHlhsmceA5jjVgbobGxM+zPZwFabrf79MkDHzHtm3Ldv0gTA7PfM8hLu6zT4QezrMMDA5KCyPKHZ7FURT4LiGuWnEmNcSMRkgqFMdhSHlicVVH0tApa6jmoQDioo8KvtZSaQ3VfOC5BGZlVv2uH1pFDXF8Q8fRkXe1ygDwXhaTPEvh32BxcKE38IDyPuWJyf2rNqh1NYgAo0VRFJ9U0EHJ27b49w5fe/vE+T6NwiAsTAqFIeXp/AFOVGYXnzmMzHwfwf+DsFAQlqOX0wc88yg5V506hL7v+cFBcF+ObhOi9h9/Kb31tTSDCXe9gxxYe4rbjiXfWYAz9USSRcA5hLLl2HR4NKt6p12rOVLdJPQoVVzw6xAsP/mNVag9Uk3iuTQAoVF2SBw+84FVqtFstbufg5msIYxN+NpRha9Bv9fttFvvlW/2c3Um3Nf4z43GX9zg8zbGfyCc7+tJ3KCOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 20,
            ap: 15,
            dps: 4.46,
            speed: 35,
            range: 200,
            rangeType: "単体",
            kbLevel: 2,
            money: 30,
            freq: 101,
            foreswing: 16,
            backswing: 85,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 15,
            actualDps: 4.46,
            magnification: "100%",
            count: "2",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "718",
          enemyName: "チョコサプネコカプセル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBAMFBAQFBQQHBgUJCAcLBwYNDAsRDgweEw4dGRc0HRU+JBs0LilHKR1QMCJKNyxZNCVhNyRKRDplOyZWQjRrQi1xSTNiUkV3UjqBXERzZVdwaFiLaFGSdFyefGSeh3CskHWuoY29qZHFs5bMuZvPvqHSxKXXyKzazrHh1brl3cDq4MXt5cnu6Mv07NT589n89uX//fC4xLyWAAAAQHRSTlMACRIeKTM/UFpngY92m8f+p+Oz77zU/OX//+n///7//0b//////v///xL/////////////////////////////ZPVhXwAAA1lJREFUWIXtlll3qjAUha3WqVWvVVEG0SsV5RKCEOZB+P//6p6AWoeg9t3NgyyW384+yUmgVnvppZdeeumhmh8jTpQVRZFFbth7/yVd704kDRmGgRDS9e1ano7ab7/gu5yCTIz07Waz+QbBj8JP2s/i7yMFmwbQa2BXR33Pp/3GU3x7hgCnQwO2PGoBl8C1nokvYJOGp/zyRwvQXBo/LqMnmzR+YXCJg8HisUNHAB4ZGKPNbYLFfC6M71fRnMH0GaYTeBZaf9/yc0ng7s3k2wBR3kviyDHWjBrAgR/emwB1B/ntOL02WBwjSJI0rZ6Gxgy6BxlumiaBpa9XzAQCP6hXGXyosIC64cRxYBubiwrOEkjTTgVf5zCGBdRNQixjy5iC0kHgJxXboq2YiHY/bCJ0xZ+XIAhT9t6sDxHWof/Xmy3dBrddcErAfzAjNDlcBF99ry+3wQkvEkAEfsLsha5ows4/7L3lpS4SCMIXsx37qqlf9W9FAmHcZRmMVLy9WLurGTxLMP1kGUw0tsEZfzJgtvNAMdgJFtcl8GyDiaxsGAaLmwS8ILMNdjtZWh5WYMXCy93IyzutzzIY4jzECvT6grqs6CH4w8/nS3qkweiqQQKlxzLoqXmepwSrMpQpzYsj7HSQFC0sKRq2fd9xROaObolZlu2zfRI4O6ypilxS1EyWFVXHlhsmceA5jjVgbobGxM+zPZwFabrf79MkDHzHtm3Ldv0gTA7PfM8hLu6zT4QezrMMDA5KCyPKHZ7FURT4LiGuWnEmNcSMRkgqFMdhSHlicVVH0tApa6jmoQDioo8KvtZSaQ3VfOC5BGZlVv2uH1pFDXF8Q8fRkXe1ygDwXhaTPEvh32BxcKE38IDyPuWJyf2rNqh1NYgAo0VRFJ9U0EHJ27b49w5fe/vE+T6NwiAsTAqFIeXp/AFOVGYXnzmMzHwfwf+DsFAQlqOX0wc88yg5V506hL7v+cFBcF+ObhOi9h9/Kb31tTSDCXe9gxxYe4rbjiXfWYAz9USSRcA5hLLl2HR4NKt6p12rOVLdJPQoVVzw6xAsP/mNVag9Uk3iuTQAoVF2SBw+84FVqtFstbufg5msIYxN+NpRha9Bv9fttFvvlW/2c3Um3Nf4z43GX9zg8zbGfyCc7+tJ3KCOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 20,
            ap: 15,
            dps: 4.46,
            speed: 35,
            range: 200,
            rangeType: "単体",
            kbLevel: 2,
            money: 30,
            freq: 101,
            foreswing: 16,
            backswing: 85,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 15,
            actualDps: 4.46,
            magnification: "100%",
            count: "3",
            spawnTime: "18.7s",
            spawnTimeFrames: "560f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "718",
          enemyName: "チョコサプネコカプセル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBAMFBAQFBQQHBgUJCAcLBwYNDAsRDgweEw4dGRc0HRU+JBs0LilHKR1QMCJKNyxZNCVhNyRKRDplOyZWQjRrQi1xSTNiUkV3UjqBXERzZVdwaFiLaFGSdFyefGSeh3CskHWuoY29qZHFs5bMuZvPvqHSxKXXyKzazrHh1brl3cDq4MXt5cnu6Mv07NT589n89uX//fC4xLyWAAAAQHRSTlMACRIeKTM/UFpngY92m8f+p+Oz77zU/OX//+n///7//0b//////v///xL/////////////////////////////ZPVhXwAAA1lJREFUWIXtlll3qjAUha3WqVWvVVEG0SsV5RKCEOZB+P//6p6AWoeg9t3NgyyW384+yUmgVnvppZdeeumhmh8jTpQVRZFFbth7/yVd704kDRmGgRDS9e1ano7ab7/gu5yCTIz07Waz+QbBj8JP2s/i7yMFmwbQa2BXR33Pp/3GU3x7hgCnQwO2PGoBl8C1nokvYJOGp/zyRwvQXBo/LqMnmzR+YXCJg8HisUNHAB4ZGKPNbYLFfC6M71fRnMH0GaYTeBZaf9/yc0ng7s3k2wBR3kviyDHWjBrAgR/emwB1B/ntOL02WBwjSJI0rZ6Gxgy6BxlumiaBpa9XzAQCP6hXGXyosIC64cRxYBubiwrOEkjTTgVf5zCGBdRNQixjy5iC0kHgJxXboq2YiHY/bCJ0xZ+XIAhT9t6sDxHWof/Xmy3dBrddcErAfzAjNDlcBF99ry+3wQkvEkAEfsLsha5ows4/7L3lpS4SCMIXsx37qqlf9W9FAmHcZRmMVLy9WLurGTxLMP1kGUw0tsEZfzJgtvNAMdgJFtcl8GyDiaxsGAaLmwS8ILMNdjtZWh5WYMXCy93IyzutzzIY4jzECvT6grqs6CH4w8/nS3qkweiqQQKlxzLoqXmepwSrMpQpzYsj7HSQFC0sKRq2fd9xROaObolZlu2zfRI4O6ypilxS1EyWFVXHlhsmceA5jjVgbobGxM+zPZwFabrf79MkDHzHtm3Ldv0gTA7PfM8hLu6zT4QezrMMDA5KCyPKHZ7FURT4LiGuWnEmNcSMRkgqFMdhSHlicVVH0tApa6jmoQDioo8KvtZSaQ3VfOC5BGZlVv2uH1pFDXF8Q8fRkXe1ygDwXhaTPEvh32BxcKE38IDyPuWJyf2rNqh1NYgAo0VRFJ9U0EHJ27b49w5fe/vE+T6NwiAsTAqFIeXp/AFOVGYXnzmMzHwfwf+DsFAQlqOX0wc88yg5V506hL7v+cFBcF+ObhOi9h9/Kb31tTSDCXe9gxxYe4rbjiXfWYAz9USSRcA5hLLl2HR4NKt6p12rOVLdJPQoVVzw6xAsP/mNVag9Uk3iuTQAoVF2SBw+84FVqtFstbufg5msIYxN+NpRha9Bv9fttFvvlW/2c3Um3Nf4z43GX9zg8zbGfyCc7+tJ3KCOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 20,
            ap: 15,
            dps: 4.46,
            speed: 35,
            range: 200,
            rangeType: "単体",
            kbLevel: 2,
            money: 30,
            freq: 101,
            foreswing: 16,
            backswing: 85,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 15,
            actualDps: 4.46,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "718",
          enemyName: "チョコサプネコカプセル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBAMFBAQFBQQHBgUJCAcLBwYNDAsRDgweEw4dGRc0HRU+JBs0LilHKR1QMCJKNyxZNCVhNyRKRDplOyZWQjRrQi1xSTNiUkV3UjqBXERzZVdwaFiLaFGSdFyefGSeh3CskHWuoY29qZHFs5bMuZvPvqHSxKXXyKzazrHh1brl3cDq4MXt5cnu6Mv07NT589n89uX//fC4xLyWAAAAQHRSTlMACRIeKTM/UFpngY92m8f+p+Oz77zU/OX//+n///7//0b//////v///xL/////////////////////////////ZPVhXwAAA1lJREFUWIXtlll3qjAUha3WqVWvVVEG0SsV5RKCEOZB+P//6p6AWoeg9t3NgyyW384+yUmgVnvppZdeeumhmh8jTpQVRZFFbth7/yVd704kDRmGgRDS9e1ano7ab7/gu5yCTIz07Waz+QbBj8JP2s/i7yMFmwbQa2BXR33Pp/3GU3x7hgCnQwO2PGoBl8C1nokvYJOGp/zyRwvQXBo/LqMnmzR+YXCJg8HisUNHAB4ZGKPNbYLFfC6M71fRnMH0GaYTeBZaf9/yc0ng7s3k2wBR3kviyDHWjBrAgR/emwB1B/ntOL02WBwjSJI0rZ6Gxgy6BxlumiaBpa9XzAQCP6hXGXyosIC64cRxYBubiwrOEkjTTgVf5zCGBdRNQixjy5iC0kHgJxXboq2YiHY/bCJ0xZ+XIAhT9t6sDxHWof/Xmy3dBrddcErAfzAjNDlcBF99ry+3wQkvEkAEfsLsha5ows4/7L3lpS4SCMIXsx37qqlf9W9FAmHcZRmMVLy9WLurGTxLMP1kGUw0tsEZfzJgtvNAMdgJFtcl8GyDiaxsGAaLmwS8ILMNdjtZWh5WYMXCy93IyzutzzIY4jzECvT6grqs6CH4w8/nS3qkweiqQQKlxzLoqXmepwSrMpQpzYsj7HSQFC0sKRq2fd9xROaObolZlu2zfRI4O6ypilxS1EyWFVXHlhsmceA5jjVgbobGxM+zPZwFabrf79MkDHzHtm3Ldv0gTA7PfM8hLu6zT4QezrMMDA5KCyPKHZ7FURT4LiGuWnEmNcSMRkgqFMdhSHlicVVH0tApa6jmoQDioo8KvtZSaQ3VfOC5BGZlVv2uH1pFDXF8Q8fRkXe1ygDwXhaTPEvh32BxcKE38IDyPuWJyf2rNqh1NYgAo0VRFJ9U0EHJ27b49w5fe/vE+T6NwiAsTAqFIeXp/AFOVGYXnzmMzHwfwf+DsFAQlqOX0wc88yg5V506hL7v+cFBcF+ObhOi9h9/Kb31tTSDCXe9gxxYe4rbjiXfWYAz9USSRcA5hLLl2HR4NKt6p12rOVLdJPQoVVzw6xAsP/mNVag9Uk3iuTQAoVF2SBw+84FVqtFstbufg5msIYxN+NpRha9Bv9fttFvvlW/2c3Um3Nf4z43GX9zg8zbGfyCc7+tJ3KCOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 20,
            ap: 15,
            dps: 4.46,
            speed: 35,
            range: 200,
            rangeType: "単体",
            kbLevel: 2,
            money: 30,
            freq: 101,
            foreswing: 16,
            backswing: 85,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 15,
            actualDps: 4.46,
            magnification: "100%",
            count: "2",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "718",
          enemyName: "チョコサプネコカプセル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBAMFBAQFBQQHBgUJCAcLBwYNDAsRDgweEw4dGRc0HRU+JBs0LilHKR1QMCJKNyxZNCVhNyRKRDplOyZWQjRrQi1xSTNiUkV3UjqBXERzZVdwaFiLaFGSdFyefGSeh3CskHWuoY29qZHFs5bMuZvPvqHSxKXXyKzazrHh1brl3cDq4MXt5cnu6Mv07NT589n89uX//fC4xLyWAAAAQHRSTlMACRIeKTM/UFpngY92m8f+p+Oz77zU/OX//+n///7//0b//////v///xL/////////////////////////////ZPVhXwAAA1lJREFUWIXtlll3qjAUha3WqVWvVVEG0SsV5RKCEOZB+P//6p6AWoeg9t3NgyyW384+yUmgVnvppZdeeumhmh8jTpQVRZFFbth7/yVd704kDRmGgRDS9e1ano7ab7/gu5yCTIz07Waz+QbBj8JP2s/i7yMFmwbQa2BXR33Pp/3GU3x7hgCnQwO2PGoBl8C1nokvYJOGp/zyRwvQXBo/LqMnmzR+YXCJg8HisUNHAB4ZGKPNbYLFfC6M71fRnMH0GaYTeBZaf9/yc0ng7s3k2wBR3kviyDHWjBrAgR/emwB1B/ntOL02WBwjSJI0rZ6Gxgy6BxlumiaBpa9XzAQCP6hXGXyosIC64cRxYBubiwrOEkjTTgVf5zCGBdRNQixjy5iC0kHgJxXboq2YiHY/bCJ0xZ+XIAhT9t6sDxHWof/Xmy3dBrddcErAfzAjNDlcBF99ry+3wQkvEkAEfsLsha5ows4/7L3lpS4SCMIXsx37qqlf9W9FAmHcZRmMVLy9WLurGTxLMP1kGUw0tsEZfzJgtvNAMdgJFtcl8GyDiaxsGAaLmwS8ILMNdjtZWh5WYMXCy93IyzutzzIY4jzECvT6grqs6CH4w8/nS3qkweiqQQKlxzLoqXmepwSrMpQpzYsj7HSQFC0sKRq2fd9xROaObolZlu2zfRI4O6ypilxS1EyWFVXHlhsmceA5jjVgbobGxM+zPZwFabrf79MkDHzHtm3Ldv0gTA7PfM8hLu6zT4QezrMMDA5KCyPKHZ7FURT4LiGuWnEmNcSMRkgqFMdhSHlicVVH0tApa6jmoQDioo8KvtZSaQ3VfOC5BGZlVv2uH1pFDXF8Q8fRkXe1ygDwXhaTPEvh32BxcKE38IDyPuWJyf2rNqh1NYgAo0VRFJ9U0EHJ27b49w5fe/vE+T6NwiAsTAqFIeXp/AFOVGYXnzmMzHwfwf+DsFAQlqOX0wc88yg5V506hL7v+cFBcF+ObhOi9h9/Kb31tTSDCXe9gxxYe4rbjiXfWYAz9USSRcA5hLLl2HR4NKt6p12rOVLdJPQoVVzw6xAsP/mNVag9Uk3iuTQAoVF2SBw+84FVqtFstbufg5msIYxN+NpRha9Bv9fttFvvlW/2c3Um3Nf4z43GX9zg8zbGfyCc7+tJ3KCOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 20,
            ap: 15,
            dps: 4.46,
            speed: 35,
            range: 200,
            rangeType: "単体",
            kbLevel: 2,
            money: 30,
            freq: 101,
            foreswing: 16,
            backswing: 85,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 15,
            actualDps: 4.46,
            magnification: "100%",
            count: "1",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "718",
          enemyName: "チョコサプネコカプセル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBAMFBAQFBQQHBgUJCAcLBwYNDAsRDgweEw4dGRc0HRU+JBs0LilHKR1QMCJKNyxZNCVhNyRKRDplOyZWQjRrQi1xSTNiUkV3UjqBXERzZVdwaFiLaFGSdFyefGSeh3CskHWuoY29qZHFs5bMuZvPvqHSxKXXyKzazrHh1brl3cDq4MXt5cnu6Mv07NT589n89uX//fC4xLyWAAAAQHRSTlMACRIeKTM/UFpngY92m8f+p+Oz77zU/OX//+n///7//0b//////v///xL/////////////////////////////ZPVhXwAAA1lJREFUWIXtlll3qjAUha3WqVWvVVEG0SsV5RKCEOZB+P//6p6AWoeg9t3NgyyW384+yUmgVnvppZdeeumhmh8jTpQVRZFFbth7/yVd704kDRmGgRDS9e1ano7ab7/gu5yCTIz07Waz+QbBj8JP2s/i7yMFmwbQa2BXR33Pp/3GU3x7hgCnQwO2PGoBl8C1nokvYJOGp/zyRwvQXBo/LqMnmzR+YXCJg8HisUNHAB4ZGKPNbYLFfC6M71fRnMH0GaYTeBZaf9/yc0ng7s3k2wBR3kviyDHWjBrAgR/emwB1B/ntOL02WBwjSJI0rZ6Gxgy6BxlumiaBpa9XzAQCP6hXGXyosIC64cRxYBubiwrOEkjTTgVf5zCGBdRNQixjy5iC0kHgJxXboq2YiHY/bCJ0xZ+XIAhT9t6sDxHWof/Xmy3dBrddcErAfzAjNDlcBF99ry+3wQkvEkAEfsLsha5ows4/7L3lpS4SCMIXsx37qqlf9W9FAmHcZRmMVLy9WLurGTxLMP1kGUw0tsEZfzJgtvNAMdgJFtcl8GyDiaxsGAaLmwS8ILMNdjtZWh5WYMXCy93IyzutzzIY4jzECvT6grqs6CH4w8/nS3qkweiqQQKlxzLoqXmepwSrMpQpzYsj7HSQFC0sKRq2fd9xROaObolZlu2zfRI4O6ypilxS1EyWFVXHlhsmceA5jjVgbobGxM+zPZwFabrf79MkDHzHtm3Ldv0gTA7PfM8hLu6zT4QezrMMDA5KCyPKHZ7FURT4LiGuWnEmNcSMRkgqFMdhSHlicVVH0tApa6jmoQDioo8KvtZSaQ3VfOC5BGZlVv2uH1pFDXF8Q8fRkXe1ygDwXhaTPEvh32BxcKE38IDyPuWJyf2rNqh1NYgAo0VRFJ9U0EHJ27b49w5fe/vE+T6NwiAsTAqFIeXp/AFOVGYXnzmMzHwfwf+DsFAQlqOX0wc88yg5V506hL7v+cFBcF+ObhOi9h9/Kb31tTSDCXe9gxxYe4rbjiXfWYAz9USSRcA5hLLl2HR4NKt6p12rOVLdJPQoVVzw6xAsP/mNVag9Uk3iuTQAoVF2SBw+84FVqtFstbufg5msIYxN+NpRha9Bv9fttFvvlW/2c3Um3Nf4z43GX9zg8zbGfyCc7+tJ3KCOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 20,
            ap: 15,
            dps: 4.46,
            speed: 35,
            range: 200,
            rangeType: "単体",
            kbLevel: 2,
            money: 30,
            freq: 101,
            foreswing: 16,
            backswing: 85,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 15,
            actualDps: 4.46,
            magnification: "100%",
            count: "8",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "718",
          enemyName: "チョコサプネコカプセル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBAMFBAQFBQQHBgUJCAcLBwYNDAsRDgweEw4dGRc0HRU+JBs0LilHKR1QMCJKNyxZNCVhNyRKRDplOyZWQjRrQi1xSTNiUkV3UjqBXERzZVdwaFiLaFGSdFyefGSeh3CskHWuoY29qZHFs5bMuZvPvqHSxKXXyKzazrHh1brl3cDq4MXt5cnu6Mv07NT589n89uX//fC4xLyWAAAAQHRSTlMACRIeKTM/UFpngY92m8f+p+Oz77zU/OX//+n///7//0b//////v///xL/////////////////////////////ZPVhXwAAA1lJREFUWIXtlll3qjAUha3WqVWvVVEG0SsV5RKCEOZB+P//6p6AWoeg9t3NgyyW384+yUmgVnvppZdeeumhmh8jTpQVRZFFbth7/yVd704kDRmGgRDS9e1ano7ab7/gu5yCTIz07Waz+QbBj8JP2s/i7yMFmwbQa2BXR33Pp/3GU3x7hgCnQwO2PGoBl8C1nokvYJOGp/zyRwvQXBo/LqMnmzR+YXCJg8HisUNHAB4ZGKPNbYLFfC6M71fRnMH0GaYTeBZaf9/yc0ng7s3k2wBR3kviyDHWjBrAgR/emwB1B/ntOL02WBwjSJI0rZ6Gxgy6BxlumiaBpa9XzAQCP6hXGXyosIC64cRxYBubiwrOEkjTTgVf5zCGBdRNQixjy5iC0kHgJxXboq2YiHY/bCJ0xZ+XIAhT9t6sDxHWof/Xmy3dBrddcErAfzAjNDlcBF99ry+3wQkvEkAEfsLsha5ows4/7L3lpS4SCMIXsx37qqlf9W9FAmHcZRmMVLy9WLurGTxLMP1kGUw0tsEZfzJgtvNAMdgJFtcl8GyDiaxsGAaLmwS8ILMNdjtZWh5WYMXCy93IyzutzzIY4jzECvT6grqs6CH4w8/nS3qkweiqQQKlxzLoqXmepwSrMpQpzYsj7HSQFC0sKRq2fd9xROaObolZlu2zfRI4O6ypilxS1EyWFVXHlhsmceA5jjVgbobGxM+zPZwFabrf79MkDHzHtm3Ldv0gTA7PfM8hLu6zT4QezrMMDA5KCyPKHZ7FURT4LiGuWnEmNcSMRkgqFMdhSHlicVVH0tApa6jmoQDioo8KvtZSaQ3VfOC5BGZlVv2uH1pFDXF8Q8fRkXe1ygDwXhaTPEvh32BxcKE38IDyPuWJyf2rNqh1NYgAo0VRFJ9U0EHJ27b49w5fe/vE+T6NwiAsTAqFIeXp/AFOVGYXnzmMzHwfwf+DsFAQlqOX0wc88yg5V506hL7v+cFBcF+ObhOi9h9/Kb31tTSDCXe9gxxYe4rbjiXfWYAz9USSRcA5hLLl2HR4NKt6p12rOVLdJPQoVVzw6xAsP/mNVag9Uk3iuTQAoVF2SBw+84FVqtFstbufg5msIYxN+NpRha9Bv9fttFvvlW/2c3Um3Nf4z43GX9zg8zbGfyCc7+tJ3KCOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 20,
            ap: 15,
            dps: 4.46,
            speed: 35,
            range: 200,
            rangeType: "単体",
            kbLevel: 2,
            money: 30,
            freq: 101,
            foreswing: 16,
            backswing: 85,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 15,
            actualDps: 4.46,
            magnification: "100%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "718",
          enemyName: "チョコサプネコカプセル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBAMFBAQFBQQHBgUJCAcLBwYNDAsRDgweEw4dGRc0HRU+JBs0LilHKR1QMCJKNyxZNCVhNyRKRDplOyZWQjRrQi1xSTNiUkV3UjqBXERzZVdwaFiLaFGSdFyefGSeh3CskHWuoY29qZHFs5bMuZvPvqHSxKXXyKzazrHh1brl3cDq4MXt5cnu6Mv07NT589n89uX//fC4xLyWAAAAQHRSTlMACRIeKTM/UFpngY92m8f+p+Oz77zU/OX//+n///7//0b//////v///xL/////////////////////////////ZPVhXwAAA1lJREFUWIXtlll3qjAUha3WqVWvVVEG0SsV5RKCEOZB+P//6p6AWoeg9t3NgyyW384+yUmgVnvppZdeeumhmh8jTpQVRZFFbth7/yVd704kDRmGgRDS9e1ano7ab7/gu5yCTIz07Waz+QbBj8JP2s/i7yMFmwbQa2BXR33Pp/3GU3x7hgCnQwO2PGoBl8C1nokvYJOGp/zyRwvQXBo/LqMnmzR+YXCJg8HisUNHAB4ZGKPNbYLFfC6M71fRnMH0GaYTeBZaf9/yc0ng7s3k2wBR3kviyDHWjBrAgR/emwB1B/ntOL02WBwjSJI0rZ6Gxgy6BxlumiaBpa9XzAQCP6hXGXyosIC64cRxYBubiwrOEkjTTgVf5zCGBdRNQixjy5iC0kHgJxXboq2YiHY/bCJ0xZ+XIAhT9t6sDxHWof/Xmy3dBrddcErAfzAjNDlcBF99ry+3wQkvEkAEfsLsha5ows4/7L3lpS4SCMIXsx37qqlf9W9FAmHcZRmMVLy9WLurGTxLMP1kGUw0tsEZfzJgtvNAMdgJFtcl8GyDiaxsGAaLmwS8ILMNdjtZWh5WYMXCy93IyzutzzIY4jzECvT6grqs6CH4w8/nS3qkweiqQQKlxzLoqXmepwSrMpQpzYsj7HSQFC0sKRq2fd9xROaObolZlu2zfRI4O6ypilxS1EyWFVXHlhsmceA5jjVgbobGxM+zPZwFabrf79MkDHzHtm3Ldv0gTA7PfM8hLu6zT4QezrMMDA5KCyPKHZ7FURT4LiGuWnEmNcSMRkgqFMdhSHlicVVH0tApa6jmoQDioo8KvtZSaQ3VfOC5BGZlVv2uH1pFDXF8Q8fRkXe1ygDwXhaTPEvh32BxcKE38IDyPuWJyf2rNqh1NYgAo0VRFJ9U0EHJ27b49w5fe/vE+T6NwiAsTAqFIeXp/AFOVGYXnzmMzHwfwf+DsFAQlqOX0wc88yg5V506hL7v+cFBcF+ObhOi9h9/Kb31tTSDCXe9gxxYe4rbjiXfWYAz9USSRcA5hLLl2HR4NKt6p12rOVLdJPQoVVzw6xAsP/mNVag9Uk3iuTQAoVF2SBw+84FVqtFstbufg5msIYxN+NpRha9Bv9fttFvvlW/2c3Um3Nf4z43GX9zg8zbGfyCc7+tJ3KCOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 20,
            ap: 15,
            dps: 4.46,
            speed: 35,
            range: 200,
            rangeType: "単体",
            kbLevel: 2,
            money: 30,
            freq: 101,
            foreswing: 16,
            backswing: 85,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 15,
            actualDps: 4.46,
            magnification: "100%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "5.3-10.7s",
            delayFrames: "160-320f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1397Data;

