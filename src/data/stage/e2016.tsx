// Stage 2016 Data
import type { StageData } from '../../app/stage/types';

export const e2016Data: StageData = {
  eventId: 2016,
  eventName: "極道大戦争",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 16,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "極道のネコたち",
      baseHp: 15000,
      width: 5000,
      enemyLimit: 8,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "60000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "15000",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "0",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "3",
            spawnTime: "22.0s",
            spawnTimeFrames: "660f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "3",
            spawnTime: "24.0s",
            spawnTimeFrames: "720f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 80,
            actualDps: 150.0,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "20",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "161",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQGBgYHBwcJCQkPDw4UFBQZGRkaGhobGxshISEiIiItLS01NTU5OTk6OjpDQ0NLS0tQUFBTU1NcXFxqampvb297e3uIiIiOjo6WlpagoKCoqKixsbG6urrDw8PMzMzV1dXd3d3i4uLo6Ojt7e319fX6+vr///969NxuAAAAQHRSTlMAAyEJFSo1QWiDT1xwlcPM5Ot6oK22+Yz/3fLU/6u+/+jN///l9f///+7////t///1////////////////////fT6E1gAABqpJREFUWIWNWAl7qjwTvYqIexU3RFqUVBJJLnzsi4D//199E3DBpe/t+BQLZE5mOTNJ/PPnRYS22Gm9Pv69tIeyJLx7IQjCr4DF9URuvxkpiJL4FvhZuvPNcvA6siXKi17nVwCL3W7dfTGhM5xs++3fAEifB7IfdVqPIkjz3Wb9O4Cvv+7xc9AWu2IbLl0RvuB7/W19j38DIAz2dmDv5qP1eC3L/fG43+/L/fV8S53jp/jvNAiivLNsqs82M3U2m85UuHJRDWYfvgb/YIjQ6Yijj5Vu6MpqpSga/1xE0QykzRbDduc/UimIvf54oipXqfQ0vQbg96vZsj/s/ogAmZ5spnd9pZ5ev5oAt4q6mazf8xT026MPVblMdge4AXEEXVNWW/k9nQRxNFkpGqYE6XzwBeLuC/8y4Dqbv2V0qy3z+bEXRy7DRsMMrngB05BpaKuP0TsEYbAE73U7KYpTEjoWN0N5RNEM4vjMUNRt/5UPrY68BQcM93Q+n8sijXy7MuOOoiHLCdOTjyEMk5dia3WG3AAFefm5kjJPAocRpF3ioGPmRVlRljHjcXwpy85gMatmuQKAFFkcQDiQoenIsv24KDlwaoNv02cfWt35rDKzduEmZZEErk2ZC5NfnmQOT+Vk+MhpYfCxqhzVnbQed/kARHFK0wJsr5+UCdPBJ3X+yKZOb1MDaDSqx/0oEAPIKqSyaUJL7M8uoTa9EwQwTe6S5kWe3e8iVuVXXTRNaInjawVwE04eo3dhju/ZjTsHV6kFQt9NEKTFrYSQm6fMMEzEo68jBH8EIyhwTTcQPKS+WyGoy8EtldBDtqurBdjLMwcZmFqmriFCDGQxYugAp5mUYoNGqUd4YU7HYoMENw+wm5ZFxJBJmWVyXdOOsxDuEScDw6aTlZlPIJDqRHoBgElcSHiZRzYxMcEgJg3zMg8ouIQtCyMWQUZPHoZMbHo3F7p1DLl+WtS14MPcyECYuX5S5KFjU46GWZTXbEKKMr0BdKR5bcFFvy6F0HNsJ4g86iSRzYIo8H0vSCo+n8uIggXDK0B7uKxiaNhJ2aAxsCEritDCNjNZUmZxmpfX9ycXNVyoWhEICYsGADiS5eUZ/EWIBHkRukFxf+Wbyqx/BZDGNZExH1FeZynL1AtzXn6GwSAODnEaleohRR1fAepSBhd4iE85L4VqUERZzKsHGcSLAorvALyoldkNQJrXFmiIJXkYnsqq+M5lAjpp4mJCiQk5oeHdBR7EqdwIonotpdhzgiSoknXOXaABNQk8JNAOo1urgBAQTV3eiCSI/alW84B5UEg286uxZeIQIDVwE9xwktv8ABAyo0HlP8LwY8Wr3CDU9amO7OiS7sxn4BY0AYrv9vMXsWNuGruNlrRcYWJoiNqBTw3kZjcuBITGZVFdmwBQDhu5CbA4uAGvICcOHAqEz09pVvXQhGEvi23sZOemAL+anbnVHR+CDAhvB9kpDYF4vuvUcQAeUc/GNCoeAKCzbYeN1t6Wd26Wp3F8gnF5YBomscO8DqRtQlkH+aM+5HHZXOaFwZbF8Lia5uSbmkb8rKITlDYjzMvKB4Bz4R/Hzb1kq/t5vDK9iGxoRtjPsktpx2F0etIHJu4fF6f2aO+k9Sgofs8liHqud1kjnrSrGB4/HxcGQbqZUGRJnnnYMPFlkXkjmfP9tMuAxXkP3aCeq+TZ0zXTz3/QL4JnA3hbmx/vCys0QehnD/2lqR8ziMDzDqEz/Dpe6Qq5Y7ZNsPMWoUyd7/WbHQbEkV0QysQPktRjl6J61ne/5+82arC8AEJeL8k5dIQ89sPn/Ff6sJF+u2EVuv09CxopL4riOf/nInG/f9CvbTh6aXH+QcpqyflZnx+3Rh8HFp6eJ74C5Ilr7dfSf2y4he5CRdQJMw7xiAIxSTyGd2/j1wQ4MEao7Vc7sgft0GWWRXbrd+exO4D0xaLIhpUEthVhnKQZlzSJ+FbLNCzPO4xfT1NNgMGXzfeSyKLYPP7930X+Hg+mBXtXACf/cIEDJDbCXsh2X5+fX3uQL/hnf/A8oh68yHopgrvwoxkAJP5hs7N9tu1JXWkAIkndwfjbdb4n+6ONPwdC640TLaEDBzNpIG+Zx3aT7YEctvy0dZH1cmeZ28Vig/SJLMEprvN0CG6JQ3k9ni+Wk5lJ0AyOLauVOm3ITNVW0+12ulpNJws4yPW6j+1A6I7GoD352E5VVZ1u7oe1m6iz6WazmU43H5PlYi5Lz/2kDfYPeyMZcObjNVjzJGP+lDsj93rDQff+A8H/AY3fxzwBs3x8AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 250,
            dps: 202.7,
            speed: 8,
            range: 170,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 250,
            actualDps: 202.7,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "噛まれたら、みんなヤクザ",
      baseHp: 50000,
      width: 5200,
      enemyLimit: 12,
      requiredCost: 60,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "100000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "8",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "8",
            spawnTime: "8.3s",
            spawnTimeFrames: "250f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 120,
            actualDps: 49.32,
            magnification: "100%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 150,
            actualDps: 195.65,
            magnification: "100%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "60.0-80.0s",
            delayFrames: "1,800-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 150,
            actualDps: 195.65,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "2",
            spawnTime: "68.3s",
            spawnTimeFrames: "2,050f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 250,
            actualDps: 208.33,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 250,
            actualDps: 208.33,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "162",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAEBAQEBAQGBgUHBwcHBwcMDAwNDQwODg4PDg0QDg8RERETEhIUEhIVFBQVFBQXFhcbGxsbGxodHBwjISEmJiYtKiotKiosLCwyLi41MTEzMzM9OTlBOTc/Pz9DPz5LR0ZMSUkmaiRSUlJbVlRAaj5jY2NoaGhqampzdXF8fHyxb1WEhISGhoaKioqOjo6Xl5eXmJajo6Orq6uws7O7v8DHyMjLz83Y2tjj4+Pr6+vx8fH39/f+/v5NRpwkAAAAQHRSTlMABgwV/0Yp3x52pFGQOWaFtfbURsj/olrc/3Hw/4D/9p7/xP//sP7/6//M/f/+4P/y/+z+/+r+///+////////gR+dXQAABD1JREFUWIWdl12XqjoMhgVGxA/UUVFRrCBbRpANIkxboMD//1cnBefsm3PWLuZGXcs8pMmbpAwGfzFZlQYDRfrb3/7fhgt5II31t/1leysPlOX4bYAeXeWBFlyVN/2lQ3rR1WkUvXkGdTYyPkejkXGETLxh8uTDdT5aGw3fCmAUsjI2Pz4M31u8U8n5uWwakqVJRoqL1t9fnmQNAPKmztOKHPqHoF4ggKapaEpZw4L+IQxvNfizJHFDCOW57g1YP/nzM/+exgCgh/cAxdcvsHvV5KfeAC3Iqxr/+gK7s/p71xsgre3g5n4RlsfP78ju2Q6SNl0sTvbNzaqG3ZdzvZ+/pC82R4QykkMFoRIkOE3VHkKQpntkIQclOU4ggoamafoIDuJB6HvwNi3k0qZiIAZWsLrAT2ExKlvkOEBwEJSvM1aWhESiWpoeOcBBloNo51/nBaUE22L+8rZ1RzyEsG4BRZ5jQshFDKDuub8Dz4dE5m0/kYISmpNADLDmJ0DgjUwEIZRlU5KCEAhBEDA/twBuUIiCFgCgfoxzchPyl06oSwF8mMhKsgJGwuPIcyAIWHQAqyuEm1ZQhGCLIQliR5DaIjgWBzimY8VVU2b27puK5uAFACF2B3ExpY+1/sBYsIzyC4B+5JhSfFX0COrQD9AeATrCcWPYCmpUlfgqBNA2qIvAeenZcn9fNC0oC0EpT4+vR3cESKP3+6JqASWp2Fgctq2ErBeAz4XzXIIIaCI2mH960Q89l8sBxGQuFSWomCBgd+4O7+M0TeLwHsapt1IBUKdigPEL4GUZByQ4z73jUI1qQUDXCjyLng9PBwt9ZI53GPasGGDWAVop8oa0TMO0JnbRCC6nl5J/hMBbGgCrC4z3whYByP8CrJcOXNDEnq/6UgigbJw/R+CpQL5vmkt+BCYkZW3vvDSM2nY0UZKZn/MDgdEoBOBLxfkzUYCCc2ul8l1fCc2DHyE6nZZNmIrMXcpqJAqYn52ufOYrBR6r46UCQmpqIcD4eDy6foL97gQmiuuGwhEi0tSRCECdDm0K+wj/zGa4HxXH6TXNBCMAO/B1xEKrbWYXfrDz7JlhwRyA7b7bfejx9YhcUFDlTZ55XBViIw0q2d3vQn5JQCYXgLeMWIgT0Ysaz3hTpzHic8mABV37oydNkofoVVEJWFUXWcxVYBoJwHwLJyR+iF4wJDtLSJrdoYuQ4UATUD4bsjhQBQGD9Q2WceJDGyMjhRT4hut7PraFX1tk2wuzMGznKVSRmMbnOYyFr0gD3lF+GLuwXw2HQQYMY7Xd3049LorKxPQsw7CsTw+u2fBtow7Hfe6q0inL7pvZbLGIahYtV58bZdDrjUULqirSJUnSn/X3QVHH454vPKBFFpx2inSiDbbXmtb3tVGPWFWQ50G7lnWdP4OTIvUJQVLHmxvYebUceeHj8bivZuPhfwfxD5zf0FfvtbABAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 413.79,
            speed: 6,
            range: 255,
            rangeType: "範囲",
            kbLevel: 1,
            money: 893,
            freq: 87,
            foreswing: 18,
            backswing: 13,
            tba: 35
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 1200,
            actualDps: 413.79,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "大戦争頂上決戦！！",
      baseHp: 150000,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 90,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "3",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "89300",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "161",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 250,
            dps: 202.7,
            speed: 8,
            range: 170,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 1250,
            actualDps: 1013.5,
            magnification: "500%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "40.0-50.0s",
            delayFrames: "1,200-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1600,
            actualAp: 160,
            actualDps: 160.0,
            magnification: "800%",
            count: "0",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "161",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 250,
            dps: 202.7,
            speed: 8,
            range: 170,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 1250,
            actualDps: 1013.5,
            magnification: "500%",
            count: "8",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-66.7s",
            delayFrames: "1,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "161",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 250,
            dps: 202.7,
            speed: 8,
            range: 170,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 1250,
            actualDps: 1013.5,
            magnification: "500%",
            count: "8",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "33.3-66.7s",
            delayFrames: "1,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 2000,
            dps: 1463.41,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 8,
            money: 400,
            freq: 41,
            foreswing: 4,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 2000,
            dps: 1463.41,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 8,
            money: 400,
            freq: 41,
            foreswing: 4,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "0",
            spawnTime: "41.0s",
            spawnTimeFrames: "1,230f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "161",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 250,
            dps: 202.7,
            speed: 8,
            range: 170,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 1250,
            actualDps: 1013.5,
            magnification: "500%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "161",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 250,
            dps: 202.7,
            speed: 8,
            range: 170,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 1250,
            actualDps: 1013.5,
            magnification: "500%",
            count: "1",
            spawnTime: "48.3s",
            spawnTimeFrames: "1,450f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "161",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 250,
            dps: 202.7,
            speed: 8,
            range: 170,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 1250,
            actualDps: 1013.5,
            magnification: "500%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 2000,
            dps: 1463.41,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 8,
            money: 400,
            freq: 41,
            foreswing: 4,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "40.0-80.0s",
            delayFrames: "1,200-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1600,
            actualAp: 160,
            actualDps: 160.0,
            magnification: "800%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "161",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 250,
            dps: 202.7,
            speed: 8,
            range: 170,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 1250,
            actualDps: 1013.5,
            magnification: "500%",
            count: "20",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "2.0-8.0s",
            delayFrames: "60-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "162",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAEBAQEBAQGBgUHBwcHBwcMDAwNDQwODg4PDg0QDg8RERETEhIUEhIVFBQVFBQXFhcbGxsbGxodHBwjISEmJiYtKiotKiosLCwyLi41MTEzMzM9OTlBOTc/Pz9DPz5LR0ZMSUkmaiRSUlJbVlRAaj5jY2NoaGhqampzdXF8fHyxb1WEhISGhoaKioqOjo6Xl5eXmJajo6Orq6uws7O7v8DHyMjLz83Y2tjj4+Pr6+vx8fH39/f+/v5NRpwkAAAAQHRSTlMABgwV/0Yp3x52pFGQOWaFtfbURsj/olrc/3Hw/4D/9p7/xP//sP7/6//M/f/+4P/y/+z+/+r+///+////////gR+dXQAABD1JREFUWIWdl12XqjoMhgVGxA/UUVFRrCBbRpANIkxboMD//1cnBefsm3PWLuZGXcs8pMmbpAwGfzFZlQYDRfrb3/7fhgt5II31t/1leysPlOX4bYAeXeWBFlyVN/2lQ3rR1WkUvXkGdTYyPkejkXGETLxh8uTDdT5aGw3fCmAUsjI2Pz4M31u8U8n5uWwakqVJRoqL1t9fnmQNAPKmztOKHPqHoF4ggKapaEpZw4L+IQxvNfizJHFDCOW57g1YP/nzM/+exgCgh/cAxdcvsHvV5KfeAC3Iqxr/+gK7s/p71xsgre3g5n4RlsfP78ju2Q6SNl0sTvbNzaqG3ZdzvZ+/pC82R4QykkMFoRIkOE3VHkKQpntkIQclOU4ggoamafoIDuJB6HvwNi3k0qZiIAZWsLrAT2ExKlvkOEBwEJSvM1aWhESiWpoeOcBBloNo51/nBaUE22L+8rZ1RzyEsG4BRZ5jQshFDKDuub8Dz4dE5m0/kYISmpNADLDmJ0DgjUwEIZRlU5KCEAhBEDA/twBuUIiCFgCgfoxzchPyl06oSwF8mMhKsgJGwuPIcyAIWHQAqyuEm1ZQhGCLIQliR5DaIjgWBzimY8VVU2b27puK5uAFACF2B3ExpY+1/sBYsIzyC4B+5JhSfFX0COrQD9AeATrCcWPYCmpUlfgqBNA2qIvAeenZcn9fNC0oC0EpT4+vR3cESKP3+6JqASWp2Fgctq2ErBeAz4XzXIIIaCI2mH960Q89l8sBxGQuFSWomCBgd+4O7+M0TeLwHsapt1IBUKdigPEL4GUZByQ4z73jUI1qQUDXCjyLng9PBwt9ZI53GPasGGDWAVop8oa0TMO0JnbRCC6nl5J/hMBbGgCrC4z3whYByP8CrJcOXNDEnq/6UgigbJw/R+CpQL5vmkt+BCYkZW3vvDSM2nY0UZKZn/MDgdEoBOBLxfkzUYCCc2ul8l1fCc2DHyE6nZZNmIrMXcpqJAqYn52ufOYrBR6r46UCQmpqIcD4eDy6foL97gQmiuuGwhEi0tSRCECdDm0K+wj/zGa4HxXH6TXNBCMAO/B1xEKrbWYXfrDz7JlhwRyA7b7bfejx9YhcUFDlTZ55XBViIw0q2d3vQn5JQCYXgLeMWIgT0Ysaz3hTpzHic8mABV37oydNkofoVVEJWFUXWcxVYBoJwHwLJyR+iF4wJDtLSJrdoYuQ4UATUD4bsjhQBQGD9Q2WceJDGyMjhRT4hut7PraFX1tk2wuzMGznKVSRmMbnOYyFr0gD3lF+GLuwXw2HQQYMY7Xd3049LorKxPQsw7CsTw+u2fBtow7Hfe6q0inL7pvZbLGIahYtV58bZdDrjUULqirSJUnSn/X3QVHH454vPKBFFpx2inSiDbbXmtb3tVGPWFWQ50G7lnWdP4OTIvUJQVLHmxvYebUceeHj8bivZuPhfwfxD5zf0FfvtbABAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 413.79,
            speed: 6,
            range: 255,
            rangeType: "範囲",
            kbLevel: 1,
            money: 893,
            freq: 87,
            foreswing: 18,
            backswing: 13,
            tba: 35
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6000,
            actualDps: 2068.95,
            magnification: "500%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "162",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAEBAQEBAQGBgUHBwcHBwcMDAwNDQwODg4PDg0QDg8RERETEhIUEhIVFBQVFBQXFhcbGxsbGxodHBwjISEmJiYtKiotKiosLCwyLi41MTEzMzM9OTlBOTc/Pz9DPz5LR0ZMSUkmaiRSUlJbVlRAaj5jY2NoaGhqampzdXF8fHyxb1WEhISGhoaKioqOjo6Xl5eXmJajo6Orq6uws7O7v8DHyMjLz83Y2tjj4+Pr6+vx8fH39/f+/v5NRpwkAAAAQHRSTlMABgwV/0Yp3x52pFGQOWaFtfbURsj/olrc/3Hw/4D/9p7/xP//sP7/6//M/f/+4P/y/+z+/+r+///+////////gR+dXQAABD1JREFUWIWdl12XqjoMhgVGxA/UUVFRrCBbRpANIkxboMD//1cnBefsm3PWLuZGXcs8pMmbpAwGfzFZlQYDRfrb3/7fhgt5II31t/1leysPlOX4bYAeXeWBFlyVN/2lQ3rR1WkUvXkGdTYyPkejkXGETLxh8uTDdT5aGw3fCmAUsjI2Pz4M31u8U8n5uWwakqVJRoqL1t9fnmQNAPKmztOKHPqHoF4ggKapaEpZw4L+IQxvNfizJHFDCOW57g1YP/nzM/+exgCgh/cAxdcvsHvV5KfeAC3Iqxr/+gK7s/p71xsgre3g5n4RlsfP78ju2Q6SNl0sTvbNzaqG3ZdzvZ+/pC82R4QykkMFoRIkOE3VHkKQpntkIQclOU4ggoamafoIDuJB6HvwNi3k0qZiIAZWsLrAT2ExKlvkOEBwEJSvM1aWhESiWpoeOcBBloNo51/nBaUE22L+8rZ1RzyEsG4BRZ5jQshFDKDuub8Dz4dE5m0/kYISmpNADLDmJ0DgjUwEIZRlU5KCEAhBEDA/twBuUIiCFgCgfoxzchPyl06oSwF8mMhKsgJGwuPIcyAIWHQAqyuEm1ZQhGCLIQliR5DaIjgWBzimY8VVU2b27puK5uAFACF2B3ExpY+1/sBYsIzyC4B+5JhSfFX0COrQD9AeATrCcWPYCmpUlfgqBNA2qIvAeenZcn9fNC0oC0EpT4+vR3cESKP3+6JqASWp2Fgctq2ErBeAz4XzXIIIaCI2mH960Q89l8sBxGQuFSWomCBgd+4O7+M0TeLwHsapt1IBUKdigPEL4GUZByQ4z73jUI1qQUDXCjyLng9PBwt9ZI53GPasGGDWAVop8oa0TMO0JnbRCC6nl5J/hMBbGgCrC4z3whYByP8CrJcOXNDEnq/6UgigbJw/R+CpQL5vmkt+BCYkZW3vvDSM2nY0UZKZn/MDgdEoBOBLxfkzUYCCc2ul8l1fCc2DHyE6nZZNmIrMXcpqJAqYn52ufOYrBR6r46UCQmpqIcD4eDy6foL97gQmiuuGwhEi0tSRCECdDm0K+wj/zGa4HxXH6TXNBCMAO/B1xEKrbWYXfrDz7JlhwRyA7b7bfejx9YhcUFDlTZ55XBViIw0q2d3vQn5JQCYXgLeMWIgT0Ysaz3hTpzHic8mABV37oydNkofoVVEJWFUXWcxVYBoJwHwLJyR+iF4wJDtLSJrdoYuQ4UATUD4bsjhQBQGD9Q2WceJDGyMjhRT4hut7PraFX1tk2wuzMGznKVSRmMbnOYyFr0gD3lF+GLuwXw2HQQYMY7Xd3049LorKxPQsw7CsTw+u2fBtow7Hfe6q0inL7pvZbLGIahYtV58bZdDrjUULqirSJUnSn/X3QVHH454vPKBFFpx2inSiDbbXmtb3tVGPWFWQ50G7lnWdP4OTIvUJQVLHmxvYebUceeHj8bivZuPhfwfxD5zf0FfvtbABAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 413.79,
            speed: 6,
            range: 255,
            rangeType: "範囲",
            kbLevel: 1,
            money: 893,
            freq: 87,
            foreswing: 18,
            backswing: 13,
            tba: 35
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6000,
            actualDps: 2068.95,
            magnification: "500%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "8.0-16.7s",
            delayFrames: "240-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "161",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 250,
            dps: 202.7,
            speed: 8,
            range: 170,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 1250,
            actualDps: 1013.5,
            magnification: "500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2016Data;

