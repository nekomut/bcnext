// Stage 14029 Data
import type { StageData } from '../../app/stage/types';

export const e14029Data: StageData = {
  eventId: 14029,
  eventName: "狂乱のトリ降臨",
  typeId: 14,
  typeName: "ネコビタン",
  prefix: "B",
  mapId: 29,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "猪鹿鳥 超激ムズ",
      baseHp: 400000,
      width: 5700,
      enemyLimit: 10,
      requiredCost: 2,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1108",
          treasureName: "狂乱のネコノトリ(96)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 4547,
            dps: 3327.07,
            speed: 25,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 800,
            freq: 41,
            foreswing: 20,
            backswing: 21,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 4547,
            actualDps: 3327.07,
            magnification: "100%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "60.0-73.3s",
            delayFrames: "1,800-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "038",
          enemyName: "イノシャシ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4837,
            dps: 13191.82,
            speed: 14,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2100,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 4837,
            actualDps: 13191.82,
            magnification: "100%",
            count: "0",
            spawnTime: "186.7s",
            spawnTimeFrames: "5,600f",
            delay: "233.3-233.3s",
            delayFrames: "7,000-7,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "080",
          enemyName: "狂乱のネコノトリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQQCAQQCAQQEAQUFAAgFBAcIAQ0OBRgMDAwZADcaAzQeAEAfAEMiAEcfDCwoAVEsAForAGM0AHM8AWQgICA7AXdBAIZBAIREAIlDAI5RAJ4wJjlTAKNTAKNVAKsAAP5iALVjALdjALczMzNqAKx/AH9rAL9tAMFnAMtwAMVzAMdzAMp0AMh/AL0+OkB/ANF1AP9HR0dMSk6oAN1XV1dnZ2f/AP98fHybm5u3t7fPz8/j4+P09PT+/v5SmGLKAAAAQHRSTlMAigxOcaOw9STj/8PQtn+QUKidbrYE/12GkXmfT+phbAMBVDtF/wYCLDMFJB0MFAbtCgL/8wP//gH/////////+dBKSAAAA9tJREFUWIXtVmmTokgQHRuV4egD2wORUy7FAwEFqzj8//9qMovejZlYUXsi9psvDCXU9+plVmVm/fjxv8E5n8MW57+ih3YctYjt0PkLegT8HSLZRXYaOt/TOAN/t9u32IGLNDx/R+Fs2wHQtxvEdg8u4jhNH1eA9aMd0FcttmAiCaJT+mgy2/WR77qe67qrDUrE0aO5dGwMf4t0XZ/NdB0lQCGI7IcsQP4Zf+16yEfozMTODiYPrY/8zQrpwP9EzHTPXWEuAzu8u34ax7i+6y2Xpvn5+Yb4nC29Now4uKcQnlj+1t7StCztTX1HqJoFCmsM465CGCf/8DV1PhoNFEUZjeaqZS69ViHuVvjJcR8Ms5lmWep8oby2GCuLOZjQZ+3PHxzHXRXo87xxRBwOhsL4giAxjGUJFJQDwj/wPC9cd9ATRL/I8rwghbxYjF+lQyHIDEdjMZ8bhOR55meiKPevx/DS48Wpn+WEkKM0HkvysToIiGNpjBcSfF/k/lQU+f5LRxY4CRQKcJAXBjiXD8AAVlZQYzw+5Ox5KvLD6ylAC31eFH0/J3mWC5JskKpumkvTVPQgGxAcKXxfFAWu+0RyQx4lCljUF4qquVzgdUGJ3M8zCAD8CwPO7hSY/OwPQQFcZHlRA7Wk8N5Q2tTEzyB94P9tte8+TWGw/xhIsgA+8gqXpgQEagLvdQaLy9JwBlWRdFpwkt3WNbW5IhmUma/rpqyqGs1QQXnXTB3LKok7HUS77Vo3LVUxKDrA8GlGK3wujyNVM9u67BRIoRKwEDQQqJkALWlGihKUqqPSCmxuOEi/Stka8aRucAuqoiiLku1lrkBN3RHAZgjNRAeBloX70EAKm6qmhqKZbWPoDAHaMeumnqkKfgmHiAlUpGqqivr8CHLorW86gHaACu5Sk8S8hOw3l5JQFCgLUXi3oLetbybxnEa7ZA8NxRzx05yWzAWgpsWUf0UD2JiS7nMAFuK2pVkSPy0IZYcA4s+nvKS2KQADSdopcA7bmbaGIPgpFAUhlBICp1CGlgLHiPW1oHvCOGyqtWlQBKyKqT/FFiDBFn71xSTujoDNlRgVVnCe1FcsChE6mAQbsPy3M8e3JpQTBmyyQxTucmlpI+jK0NZhcdwA5CfRLQPsbhHYLJM43TwYMMD9YrM5Hd0bT6AwOcFm4vVgtUYAdcPYe7wqnO7PaGdyggOFmWDAyQwXHYY4iB+7aNhh1Grg1QLSDnGlSRIF8YN82I0JZBMosW23FyzHOafx6VsXNuc/f4ar4+P0J5544oknfsPLn/gum+v3eoPBYIiAz16vz13X+AVW2dD/ykborQAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 1180000,
            ap: 12000,
            dps: 2130.18,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1999,
            freq: 169,
            foreswing: 10,
            backswing: 4,
            tba: 80
          },
          stageStats: {
            actualHp: 1180000,
            actualAp: 12000,
            actualDps: 2130.18,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "933.3-933.3s",
            delayFrames: "28,000-28,000f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 500,
            actualDps: 681.82,
            magnification: "100%",
            count: "0",
            spawnTime: "920.0s",
            spawnTimeFrames: "27,600f",
            delay: "133.3-133.3s",
            delayFrames: "4,000-4,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "0",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "133.3-133.3s",
            delayFrames: "4,000-4,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e14029Data;

