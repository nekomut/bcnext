// Stage 1112 Data
import type { StageData } from '../../app/stage/types';

export const e1112Data: StageData = {
  eventId: 1112,
  eventName: "神判の日",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 112,
  stages: [
    {
      stageId: 0,
      stageName: "厄災飛来 超激ムズ",
      baseHp: 400000,
      width: 5000,
      enemyLimit: 9,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
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
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkJCQkKCgoNDQ0SEhIVFRUZGRkeHh4gICAkJCQkJCQlJSUxMTE0NDQ2NjY5OTlBQUFJSUlLS0tOTk5QUFBYWFhgYGBoaGhxcXF1dXV6enqEhISOjo6Wlpafn5+qqqqysrK4uLi/v7/CwsLFxcXQ0NDa2trg4ODo6Ojy8vL4+Pj+/v7OT5paAAAAQHRSTlMAAwcbJdMPLkc7VGDC/nWBoudpj5m4ytmosf/p177M/tf/9uX//8Hy///9///n////////////////////////kvDnLAAABvdJREFUWIWNV4ly4joQDMdyJ9wQDMER2A8dXsvW5QvD///VGxlybSC7U5VKIXlaM62ekfTw8GHNXrP28FertXuN2zP13mLY+CtCrT0adL9/VWvVa/X+ej3tNls/YNQa7c7zetmp1VqtrzPd4aTTnuyC/WI+7HyEUavsPcRGbzpfHIJNv9sbTr4C9Jf77fN8F4a+v9tOe436Q63eanZ7/cmk34Oo6rWHerM/2uw8zIP1/OV1Pf8K0NlwGTHsW/N2m1Gv2X2arbave7DX7Wo66bYnq/XOg2mMSSjFYfQVoDE7qLzIEyWigPjIXc63e8pjIcFEFB7228HY9TDjsdRZUWThS+dPbqevgcqPZVke80Qw5JJYp0l6sUSFnou5yqr5IokOq94fJAK/vdn2wLhMi/J0KlSIKSBczMgAU5GVp/KY6Tig+9VTu/59i+qN7nCJPGBJ5eX5qAM/UBf/iBBRnE7HJGZAgTvoN/9c/j2K4RohjBGOYbk8viCYCAcpIKoAE+wSupnccbcI3YUvVYCQT+L8VEoMCCbyw/wEAXmuJ7MQrYd3hFxl0X+VikLyOiJMHkvhh1rgIC8zTgIRU6pSvGj/oNTmM9c0zIDownASpkXkR4xlhaBMALlZSFS06dwHgABUyLKjZCTUucS+SIA1aQLCRWhDyoNA7oY3NuBqjelvhWUp0OPjo6dL6aKQOV5EqFae8/iI4hKm2eo+B+1VHJM89x+tsSLDsCGO63rmGFZDXpazWGy69wFeJKdH416/LkC4LhgprpiuPoZc73t3SbAApEgvAH5eMMaQhxDJC3IBMMeAmx8AmishcFZQ+7HDj5nvYplyx0vL2LFjEAoVZte/C9B4jhIclwlxHRc2X7iuPJ1z7MRlEbqOQwxIy0h3epfF1oyknKZlroQuTinxvPR8PoYOTkCJQmZlBiIJnGX/3kY2526cMmagHE+lYUyxGGoAKpHqox1KGE2lT9HgjhihqaKLbKQCNhmkTotzgkUa4OuQSUHO0W56u5yaKz9m8LkICAbp56dzSuSR0+JUSDvERJbCfGLC23KuT9ZRIpnPkyxLs6I8Q/4BE0SczudTAUNZKiiOTZqqw+wWj80VhRakOcZRCimD/7mUCNG0sJbDjO8xYWybi197N3jsbCLb/owIMDTPKAaLAuT4zBolBGMa6UuX1IcbLNQnO3npoEZyBj0UfAgNo8oYghYtzXuTDW5UVGtK3ppomujIC0Sa58Wx2tI88uM358qibfs7wIxVKyTVlzr0PFnxYLnkfnAFv8LcKsnWc5BcMrggxF50PJ0tRpn6TF09E1P9k6+dbwCNVXiZ45dmrpkfSIAoDYhDXv1NHFURyn3vLgCsfFlLBr4fq1QRn8Zv9GlyyfMnAAlKuuYiGRwz0OH1O4HKv350A+CNA4UDA0wmwFeipYiF+sS/uIZ3i4PWiJlqXUYUEAleWkp7wCqpAKOKKgk9ed2FGwBvOuC+kFyAK5wG0JEMZyw0iRBGKc3wJZ3oxjbWnw7qjcXY93wBbLgeHG0hdHcDccVQoZjpixLnzW8Atd5eVOkRh0rmIFG5qjSBpghxBAh7PHJRxYGhoxsdobutJgVyiBKeD8kqarMSmAOr3EVcc+SwpCqm4Q2A5qraBulB59Wx3TvgD1yNsnlLAmpWHPFqkf2tcm4ND7raxrDawz8s0bpC57Ye+I1asiS8xjY80ME39w8dVJ/Q2c2m2HymxhJE1NuqaaWoDzPcEzB6uyHZrrwHfMMQN1eAJL1IyhipLZ70rZA0Gd05Wpqzg4QUHu0OJImEnmYE9DajOSeRxQkdODhMuL0dgL0ivVBtmIMtAITrMx0hxIz0EOjKDrlIJNH+6e4tq97bhEZ4QVUUMXLgB3K4UZ4LYoag7JTYTX94E7Se9pGmXiVJzVAMhEPWmhEbE8jRE/Kw+umWBbecfRRDwJZ7JUBGEk6CRFUlDUIMJH3p3L8jWRqa0z0PXS/+LgXF4P5MX+4R+IEw24fosar792PA/qnAcRi9uwGfENqzPRovD1y+d7LEaMnxcunuBn/3tzEMl4un57VPA3gwgEUhhSfEeDgaz3/O/x2h0e83uwsaeutXa9vFmMZ01e5Muv/k/1C9tRqzMAvnnba1ziDO2bD16fn1DwbFnYXXa0BzFSX7yb+uXkXQ6k5eDiYY9OARCRktuN6t+t2fXpRfrN4e/vc7VoU4bJ+a8GODZaHi3/89/cPLuAbPxVZ3tCb6WKQRccez/miMaJwdjxKvZ+1Wq17/6WXbaveehrP5+NGD5wWy19PxcmzvrYgJuMSP57PpU7/buEtHvTOd/xpXHpcL82dzq+vu+NdgNLl7VbURTIbT2Wg+GAwWi8Wvd4Mfg8F8NJoNbQSfk/gfgmmYBiwmlAwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 10000,
            ap: 3000,
            dps: 775.86,
            speed: 14,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 24000,
            actualDps: 6206.88,
            magnification: "800%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "022",
          enemyName: "ガガガガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUHBwcICAgJCQkKCgoKCgoODg4PDw8VFRUWFhYcHBweHh4eHh4jIyMjIyMoKCgsLCwuLi4vLy8yMjIyMjIzMzM1NTU6OjpCQkJISEhLS0tMTExXV1dYWFhcXFxiYmJlZWVtbW1tbW1ycnJzc3N7e3uBgYGHh4eLi4uNjY2VlZWampqjo6Oqqqqrq6u1tbW/v7/Dw8PQ0NDX19fg4ODq6urz8/P7+/v///8F0x8XAAAAQHRSTlMACBCL/z5KVh0nZS53/xQ3Qf+GqUph/1R3aZe9pv7jj//xo9ux//L/xObT/uD/8P/h/u7/8v//9f7/////////YcASAgAAA+pJREFUWIXtl29vqkoQxoWDrYqotJVqLbpFKB6XdV2BdWH/8P2/1R28Nyc5SdNCc192YuKLZn4+s/PM7HYw+Cjs4WIxtj/8U7ewH7PzMV4tRtZ3Ceur0UpcjtF6/i0hthvLxjSNltdztOgvw1q9TjPdEprG1Of17Aadr9ejroD4mm0JELTWptHF2hpYi+gsTovOAKUFk5olKMlVo7O5tT7XRh06K4gUaDe55ziOl6qmjpZn3TTXdcf8gbWroXoZOijHvpcbc9nnpNbHcVfAYFkAgHuQq4mT6KZOAo/IqHs7JhgUC88hGgBINxqHCFerzvn2BkMNCjk+TnwHGyNynLLrc3dALKF9TYXgEJ1ANIrwEPEeAGtX3TwkSRggbhqRcFTmPQCDp8KYxvBcSqmMMSQsmaB9AKNDawTioRK+G50EJSNYdD/EwWB1hUThO34qW0P4JUNpL0ArwegUzjDVAPJzEqTdjQhhvbZeZADwuQFHMQyAHmfwn5lzz0+IAIBDsIeKpx6AwdMF2pD7eesHAGDmhZdegBmsJI2QklWtYCoT4QeXHiXY7vNLbmQY1okfhIHjoCrwOwOs8TrOCiFl4vn85mbHCSvks44Ae7q/gv20JB7kYVgpbS8E9k/dzsBencACMk9CmGBhSkhHyPFKEnTbiNbqots59DxcKZiEKvAcJAIAhNkcNrP71VJZwPLTIDxgqsIgAoGCoCIASI7j2e58/ELGrXuwB0OhGfy2c/t4XAR5SiJ7Vcjz/dOniOfCNDIISGW4365kTEJgMIkIwsun8yVexUX2Sb4dwfBpymEH0CQJfWiDpLDUKMbJ+zTO1uPdtT5+AnAzrWoJ6XAfabhdSQhrFVycaybk6X1nP19O0WcljKNjvKHa3AIQuialhn0oFVUqZ/vJ4bj8/La2R/b4Zf/7BJEdD78vSmKS50RLpgn4InhbdbgbrPHw7v7+zh2Nho+4pFhLqkFBQjnCOJp9DfgT82hPVc2MItrkNUlLRMuiz2aNa86bKgeAbATlKcI573O/LQvDRQMKNG3dRWkpaKUPnWtwN3UDAEWhkcIYzjijpe4OmMUYhPOm/fmawoCUhLJKic4lPBesbvWbksPdKGBDKsnT/YvbMd/ayTaTqkZSZWrCajBn9jLufIRWXAt4lLCyrV4ZSZOyLnY93ozWMo4fdofD5sTLJC1LglK26frG+pdgW5Zlz9w9IzlTjAnC+tyNf2J+5rnC5ds73b51fSX+FW7GMd9uHzf7133XBvwV1nIbbjePDw+vk4fvPd2t5ebX43DoutZ3n/62Oxp++9+Gn/iJn/g/YnQ3mUynv24xnU7uP57JfwBG47Z/ChBmWwAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 5000,
            ap: 350,
            dps: 119.32,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1800,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 8400,
            actualDps: 2863.68,
            magnification: "2400%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "069",
          enemyName: "ホワイトサイクロン",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 999999,
            ap: 89000,
            dps: 534000.0,
            speed: 7,
            range: 70,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 89000,
            actualDps: 534000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "069",
          enemyName: "ホワイトサイクロン",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 999999,
            ap: 89000,
            dps: 534000.0,
            speed: 7,
            range: 70,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 89000,
            actualDps: 534000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "069",
          enemyName: "ホワイトサイクロン",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 999999,
            ap: 89000,
            dps: 534000.0,
            speed: 7,
            range: 70,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 89000,
            actualDps: 534000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1112Data;

