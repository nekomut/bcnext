// Stage 1120 Data
import type { StageData } from '../../app/stage/types';

export const e1120Data: StageData = {
  eventId: 1120,
  eventName: "極ムズカーニバル2！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 120,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "暴風カーニバル2 極ムズ",
      baseHp: 900000,
      width: 6000,
      enemyLimit: 10,
      requiredCost: 100,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "100",
          amount: "2",
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
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgICAgIDAwMDAwMDAwIEBAQEBAQFBQUGBgYGBgYHBwcICAgKCgoMDAsSEhIXFhYaGhogHR0jISIjIyMsLCw5NDQ+Pj0rTioVZRRERERQUFB8Pz4IjAdYWFhkZGQCvQFxcXF7e3u2Y2KCgoIC5QKOjo7OfX2ZmZmfn5+pqam1s7O+vr7ExMTIyMjNzc3S0tLc3Nzn5+fz8/P7+/v///////8mrWquAAAAQHRSTlMABhAZISs1PktWXoCs7MBq3Z+K0XeVtebIvf7T9N7//u3////+/f///v////7//////////////////////wD/0beseQAABgFJREFUWIXtV2l3okoQDVtEJbJEQJQtoTN0mmEY9n38///qVRsX4ph5znlf3w1yhGPfvlV9u7ry8Os/4uF/gl8Pd4BhH2WRPX7n55o2Y+4ZdgYryIaiCofhnKg7/k5m/2q8qO58byMydHrZ8rPUX/8NATc3fJJGzpp7eODXO1z0hb/k/mL8wvKTPEt8nX/g5B2uhrHwtfsJ2IWFsrou8lASGNHC5TCOJSW7E4xooLypqzzD1ozX/XwY92OFPjJ6D3jNz9qmqZKYOIu5Fff7/X6s7ycA0aRpyrKkSVBVEEBRIunxTiPwmh3G5ADsmk8eSSiIqyyFexgYbrHZuidsAa7rAeDr8z0M7Gy5sgMcxREAJMCFkeuROI4j7Oj/ZmeGm0smSor2A01V1lVZZDiI277vG/DFn/PACGvLj4qu604MDVxlnuIwH2AlutT5sx259Q5lbdfWn1AVZY5JM4IZusj6UxDsYoOKvmvqazRNEqZUwlA4i6+3FCNKftbdGA8MeUgOdmr89ZcxMIL6hIuyqm4QFEmImxEY2gkBw/H8VA4rP29xXpY3xtdZFIYlJGFCwPALXVIXPDMR4Ich7IEb46syJyinBJcQIOG+Z6/m7EXAjkCya7oE5yia5sjXJCgbpjlgZhb++f3N1s87jFftrE9Q2rbVJYwScnIiSIax74ozwXz3vfj53bMeTxHMrLAZawxBlGl+HJ9HGMfFgSBFcV8nBDtHAnaxe6MKjBMBvIi6/VDiMCny4mPaAr+8vr5EZfNBUBN4NI9WZMSN/fbmmWdn8ksHrAJOwUFUHCPPXr79eH+lxamukiDOEX08FTZhuTLNJ+lszEfVL0bqtRIHOK/opHX68v7jxzeUQXUroiDK6OOryp+WUVwvjQvBzPAr6pRxqKMAJSC7LEHB+/trSBWUCaIK3t9t7VxaGZZfrNanR6ijzf6AocvCgORlmhXkmIOmbrMwaeOX1xdzamVG0CWROa7KJmw/CPZjX5IAJ0kODiZQSbIKjJGGcZlijP2lwF38y86N5YcEZm2eCSCMNgmCKKc+yBJM0jSJsRegAGAb2lrkmLMEzfg4gBlZORGMY1dVFVShMI6hntELPqG7RXESoa3t+xv5nAdWNLRDoYQQcHcUMORhEMK0OEAkLWlNgsJUE4+UVUFcXOTIks9B8MvjdoCz4EQwNuA4XHRVnNT9ONJKBLLKMAAdQVgMferolzzOJP0gYUKwH3rYUf3QRrQQnvNS0oDiatgPhS9dVoJbrxbcNUGTp1nX58Ghkh7/gBaKLSiCEH31YSpBpaV6StAlJMm7PvPSQwTX6BNn+TCRIK9k7jNBX1VdT0/DMKuaK0CtL5AxnxAwjyo19JRgT2sP8KRBgD4jpDd/s/jUKbDU0MwngpMjiwS7bkgugMNWUrU59+lsOBgaehp8TXAwNUJ5dwHkfybw1ycDO1+pmmHeINiPLcLNJLLyZqfFzAzTR+5Nggbh9vI05M6tXo8RdySLPNKN06EfUzbBNDVAcKvb5NZ+lgQuri+x9sN4VEAJLl7Kbx6NvI4ztN0GhyYipoiipKB6Dgrai4W+UCCoOA+3Ww/2CqFNCawbRihuD1N6QZydkRJbv9HlQFeXJCHs0zQuoDdL47wsYC+nPURAXC+Ywt1pvzMwc8sn2MNwEIBzoT+Fe5sjWJWxTuL0ExLi3Djfublq7UxUQGty8HtNu9SQVqihH67Q3Ow3WX620J0IiucRZRYhVF0Ppqi+aJkZdib5ODoBsuh5UfobII2br3oc2FPm1qUNpQsf21EU5wDbpnmkbwPPtR1L/qpnh3+LVDMg2H6yUWBKa/kIbWXjmHhP0P4iRZVF/usujRU3OCc7aYeQJbLMEVC4cUZ2uoUzDLXrT30mIxgo8vW5atvqRCe0Lp6zFGQH3dxJ59Ewl6A59kaeaaaiPQoXzI0nY07vK6gkX0hghdl8IS8l5elZklaK+bya4llZSaq6UlaavBAfb/WJjAAtG/zwWTEVRTGfrmCa9LWiPD+vDHV5s9elCuT1eqnpukohfQJ9o+uatlyfFfwD1VLLUg0TH44AAAAASUVORK5CYII=",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBwcICAkICQoICQoJCwoJDAwLDA4RFxYRGBgZJSUeLCsfLCwlNzUpOjk0QUAuRUMzS0g4VVE6WFZAXltFaWReXl9Sd3NXhoBdjYdimJGLi4tuqqJ0sqt8vLasrKyBxr+3traI0MiN2dCV4tyZ6OKb7+XX19eg9euj+u+h/u719fX///9OZ5qiAAAAQHRSTlMABQoQGSMsNkJOXGh0/IWPfqCXvN2vp+fD88391uLz/+f///L+//b/////////////////////////////////aKaeZQAABZBJREFUWIWVV4l2okAQXAFFUfGKyI0gVwYJkAnXzpj9/7/aRo0XmpiK79kQu5ieqT748+dbMD2ePdndgdD9/ue36DD8dNLrHGyWn8qLQedX/l1hpssDZm9zgrT2DYH5hT/Di+raNUSu8e9N5U0cG0P2R7ezf39uhEniL3qNv6j7aZmuf0HA9GcGykmJ9H6n053qISYkW4+459c/W0cF3dWxIbDsUA0yQgleT589hk5vYkQF2e1ICk68tEnApvlm3nuSgBvpKKc7AN5I/ZG+rRq7eJqgwy83SVk1wL48ko4XDRn7jBI63PDFRvG2QeSuZLjY28hUxUHvZykwXWGhaJZ9hGWa1sk09Hn/p6Nk+xPZdFGcHJECTmaC1tLgW4YON5BWbpQVhFK6a/2RMoaN+CaKTne4MMO0IrsHoGV8UPcj/5Fqorx+5N4gD5f8w6NgBdlExcPH71Fv9Ycp0eFnSngQ0GOQxJg+ioGb6gH+/vmwC9n60SYwg4Wb1D8soCGYPCDgIIPKH9yBIH20AmYgu+lPz98TPNgDTlyh4mf/xwS9pZmQ2xWA+q5vUZLeOQWux3WYvurj9vMqnJUXFCRPozYBMxAFhhX0qB1BlQReXJ75cuTaLy0CTlQnLDc14qpFUASa5uGvJVCS2ONxi6DTXypStzdX7oigCDUtOBGADG1NaxEwQ12T+/zMTFsqpHUaeEn5dR9CiMKgtQfcZO3qw75kZq0IYNFFUdG9b1Mf6jLP4xZBT/KjtdhfmudDoBeH11jQFQB1nsRxEhkTvstdZnR/GWZoKdwQXG0HKXOc4ySwHcexFHUpjS6L62CBykSfLDYnghpnWQ6R08Pzd3WRxts4cpzo/f3tVdM2pi7yZwZBjercl1U//yIoked5CFOIea9NWuUY48R23v7+/UBWAE1XHZ3bHCiIVFtD9790BIUPhQHKaJXh88nSKnIChF7dICUkMSX+kqAmqbk6EexIVRYYl3Bo6YU0SBGHIRCnFaV4s+hfhbArfOVMABmQJllVJ95VetGqKPL93tBsszwTDOSw3FWR5p1CIBiFKC6q2EluKvTxdEhszs4h8JKPKYkt7xwC3iZFRerEQfjQZG9QIP1iVuDEdUx2mROck5FUTew0D20PRS1sI7SeX/QnKKZ+TrAX3GYzrTPIXstq5HOCbSmGoc+uOiRkMsrvEDSZkCWu/fZ+gTdTHg0F/qq3dPi54Ud3CJpgyjD4+Pz8/Pf1eV/Pu+ztnAEjqWxadwl2Zfj68e8C73cbE3T1+cq7S1B4r38v/D/fH7RGpi/79wjoLcHbo97aW35L8Hn8/JqgCaHZxBN+S0Cw67x9XAAZX68ATxHQIrwVkgYqvscABHnbn+Qo3MZXiHz1bhDd+Toju9uxDGpRcZNOZbKZdVnmdhEw0xtxSZ8B9hfD4ZC/HvaY3mj54sbZE0gjU5V1Vbwe/WG+U1aK7QVQs6CgNt8NwN5/uft/BEFzw7UUM4wuK9J+C2eK67leGEWeBdseHMZruHAaC7kwOztwO4pQ4AUoKQq0uCboigbCuKjqIoTZPC1q6EOkxoG1LcGs0sAGfiuEH1RlWRFa+DcrYPdFpRFeiIpDJaa7cmtpcVMUaY3jOIvtY75SeJO5ffloDmELL0kwEECFPVTiOtm8GP5hcKR1XcY2KvdVFfqF3xI0DAlmlNe0Qm7atGMYzBNHUVUF3tcOhThzIR4Y4qHHxq4utvTMDmXTi/Nia3sxLss8QTCMKOOxFiSgpbLMYNSwUZrjdOuZK0loyZkZzF7Glus5mma5Qeja2viI5jIMnMbU7KaqjserxbTfkiIvTBbqy6qBcsQXxVgDNmV1xIu6WIpCOyUZluMHwmg0morz2UySlssFQAY034ulNJtPJhNxOhIGfI9jD0r+D1j96EEM7X0mAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3000,
            actualDps: 2195.2,
            magnification: "2000%",
            count: "20",
            spawnTime: "220.0s",
            spawnTimeFrames: "6,600f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "179",
          enemyName: "スペースサイクロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAEAAAADAQQEAQYEBAYDBAoHBAoHBQkHBQgIBAoHBgwNAhQJBwwSAhwGDiIPDxcBAWwjAEUiAzspA0EGFkEbEygxBEwmETs5AVobHSkhGDIYIScbIClEAWtEAHIsF0VJAHMMJWMAAP4NMI8rN0MzND4wPU4yRk8TQrFESF04VFs4WFk/XWlSXXQfcedecX5Qenxjf5JeipNijp5tmqp0rbhqwMGGv8d2ytCF0NGL2duW5OPNzc2h9PDn5+f8/PxWuD4IAAAAQHRSTlMAAOb1G/+eEWlThdcvwf9CAwogTf+0d5dhd/FW/zMIzh3/Af+p/+GF//61md7+///G/+39/v///v//////////eEEFtQAABz5JREFUWIWdlwt3qroSgGkF0RZBLWpRBLkaNJY0hSSER6n//1+dCeq2rbb7nDtdyyqQL/OeoN39TTTz99u3L+uXVWZP/z8A1oNzvqN1Z78RfgBoXvKyAC2GQTBcJJtxELRXbzx9GzAMxhuW7Rf6KAgCK6GzZUvQnX8JGAar5XPIC773nsar5QQjIAzBMO/68ZuAYPXUHQxiXog09pbPj4Yxn61AB31i/QWgHWW0nHWMziBOERHZHr4bdvy8CoZ6sr3a8MsFs+9tX15ettsZbGo8hsjHeS0JAHwcPwWmvn8b/66BvthnIs+loL5hz+eY8rysJfURoWwzdpy9uFLh+29z8aIQIiWpYITC16ou05SLKlv0uvv8bTwCb5rWj4C7oelsEiaEKOqmroo8h/8VV5y9F8dCbMEXd1bvR4BmOQtvFhPermyaUgrG67IsqkZOslSI8GkVaNuZdhugmVZvMyeyrEDxnFdlw7HvU0JpyqXMRMlJZ7ZcWW8vtwCj8WL7lklJOGxdNyVmKca2cRLbT6UsGfHD5+WW3wDoi5e3TFQ12F2UVcklxNA24A8EPhQCC0mJbQymSf4NoOnO9o0LipTpSgqG/eO+Z3HVByIYGcZ9SD9Fs/1i9meb/T6cG504JiwvyhKf9LbXu8h1bRdEaWEjAM9JymejbyZomrmCnO8kWV6ACcI+rXdfX9drTFHUio24ZIikhHjBlQ+G4+dBB3Ifti8lPXvOjnYASNMoWu92r5FNKvBxanemqjhN7UsUrOfBnEoV+5qg03rDdqN1hDD3FWDnKhW44AQKYwiGfwWMvYTLSq0vffuPA9115CKEkbsGicARtAAfJeMAmpb3xQRrL0A9VhSQxfZx99Z3ru0jJaDCeq1+sLIpNtZI68WLz07sJ2UDlZuKnNPUsGEvtwWcliMiyW6nAEw2DZs8jHvJsbSPAG2RQO4WuRB5wRE23Neo3T06r0cofactAVVNRfDES8QxmY4fi6yC1GdMFFXJQH83OgHa9VAKkEGYk9fXnWukjaB4joVYXMLoJDxLIJEomFHxYwK4CgHrMXtvhSMV42JtIJlzKDCZWMEZYE0m3pPVD6GI6rqRKold8H6k1tP3j4OA7cXHO0YQ5Z1t84oYBqGT1RmgOZapjXpxCvtDDDmy2wTa+T4h6fvh8I4wxuj9IDEm6dr2KScIE3uwDP53icKoD1lUqRxo01jFH/nwGKw/QG92MWKHA0O+SmfBKUZoPvsKWE6xqCEQklBfJSAAkO+nsB7WQZkqgPSjXQtQpfY4XQaXMN4Fy5BwqQqZgwuUC3evYAT5OLQmEGXCQYBdkY2lesSAzjS2PmngIQMxAU28pieAqPK1nyqCcqIEEI7avC5bgDGZdT8BrCT1ESV5UxXQC1QUd/mheY0gCkD4gFAcPgh4wLUJK/lcRZokvUsxaZ7IaRyyGipFElVD7prXxStkEeZKicOHxOATBagFCn2IENuYFx/ob0W26SUwBcAGYrRV+Aq9BKNLJkIwqQ+AUjCWUiIS51NDWWTJYuylTNRqEqhuYKv6JWrbYykoP2KGXAzlDK6W4mjAuSdu9s5oHMa4bJoiL1P7mM1YEB/yGRbTlOI2MW0mZS5hXiae+amlWeDPwBncw0RRVtAjwEaobafRSdaqMwtIVZqmce/PEaoF6OpQMe0QTLiAhCbnlt6W5PrMAACqwYeGMXj63pXbU0nCINuFGojUN47ZcGrpp/19zJvWwNnyRlcOnrLUt30A1GC7AkRuu2s7Vtq5QETJUBh2zmn8BQChYKC6DxVRFPKkwpq49rlBwz1ZCjwPw8Fs+uQ4ff07oMfI/f0cprCAwwBHvto6ugxXw+dwXBApMjCeJ/Gkr30HbGk4m4aUgCPrCiIlqG/8Ecg9rlq+pAwOCTTxzqfXC0Cbxb2H5wn1fUarsmwkBZeqEQNKQCYg5d2mUnMl23vj6yjAmfhhvFptRJqyWBYllBX0J/jFU8xLWFdArYIPoJM4phpsVwCza8G51hOQ612ei6bKK2hQatK2narIOQ43IRwf+392/wrQW684WZVnvUSksDuHg4YaZGpeNlCoIpk9T7pPq+FtwPHFwtwXeWJtGK5rDj1USMhtmqmRCQ4oWDhdroIfACfxWL43F3gOxxnojRiOLIJtNgkvWzXyZDb+YsE1wErE3jQnA8LbGU9g1rJ4Ophs9m+txF39d4DmpRtt6HTDYxbAZOepP+9MlmNTiW71He1XwJ0VA2BkPcdKg0742KGM0fl0dSv7bwI0b2KqV44pnKc6k+nzdBJmnMzGwdWTPwDu9AcVj2C1zUj4tFytVktnu49vvKz8BLjT24vBeJvFTtDK0Fx0r19WfgScZGhuk96fmOv/HaDmdu/X+38F/PX2v3rivwE0lSu6ZVlOv9/7JP2+Axd13TS/v71+/mn1HrqTwePj4z1IB+TUjdTXDlyCO4PBpPvQ138FDC6Az3LfEq4B/wCm9krB6+xMwwAAAABJRU5ErkJggg==",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 1499999,
            ap: 9999,
            dps: 59994.0,
            speed: 4,
            range: 240,
            rangeType: "範囲",
            kbLevel: 3,
            money: 999,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1499999,
            actualAp: 9999,
            actualDps: 59994.0,
            magnification: "100%",
            count: "1",
            spawnTime: "220.0s",
            spawnTimeFrames: "6,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 10,
                power: 300,
                duration_f: 10,
                duration_s: 0.33
            },
            "strengthen": {
                trigger_hp: 30,
                power: 200
            }
          }
        },
        {
          enemyId: "236",
          enemyName: "ハリケーンサイクロン",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 750000,
            ap: 3666,
            dps: 18330.0,
            speed: 4,
            range: 650,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3000,
            freq: 6,
            foreswing: 1,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 3666,
            actualDps: 18330.0,
            magnification: "100%",
            count: "1",
            spawnTime: "140.0s",
            spawnTimeFrames: "4,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            }
          }
        },
        {
          enemyId: "071",
          enemyName: "メタルサイクロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgICAgICAwIDAwMDBAMEBQQFBQQECAMFCQQHCwUICgcICwcGDwQJDQcIFgUOHQsTKRAiIiEbMBgfMBwXPBImNCQMTAMzNTIzODESUgk2ODQdTRYLXAA6QTgQZAUcZBNGR0VJSUkTfgZRVFBTU1MybytVVVUQjgAVjQdeXl4TmQNkZWMWoAVIgkEXrwRxcXF0dHQYvQQYzwKBgYEa5gOTk5Mc9wKlpaWysrK+vr7IyMjk5OT9/f3///9HJK66AAAAQHRSTlMACBHw/CcbM5G5XETU5G1/pVDCFmOX7tuqOv7Iuv6Q5eX+/mD8/9n/jNT/q/P//////9////////////////8AFK1oMAAACCZJREFUWIXFV2t3m7oSDbRADDav2MbGoUZEslLFEiggZMDJ+f//6o6cJmnTx+0698PVipdZjmdrHnv2jK/++R/P1f8f4C+Obf3Ntz4c135/Dvx/geBF3puVl/4LBCvKvgTfvLA35RvC3yO5G3bc+K51c3N1FeIyebG0g7/3wUkFW6fhcnlz42R0sdpacL0b2f/d8vV4u5qy4y70boJZlZPHxPa8JP17FywrOdC274+bJJjnFZGHVRCt9ps/uuAkSbJcJn6YBI7jR/sCi7btjuk6zyXneWhDPr0/Abj+pjyK4xGhdZbGWZ4jIUR/akhFuCL5IfI24sufC2Enm5JhhikncCkpGBPt6dQUCJ6LLL1eia+Bc/nib3HsYFUCAgMAkhcM0brpO4FJhds0zFLWfrkEkfw2FMt2k3iNGSuIzFkvJC9E2zUYIUgGKhDLjKkd/64cjn+d7r4ewXPBao76poBM9qeuEW3f5hyOvLegQmXyq8vdYLnZlbg7mQOOMwZ3I0khiFY0fUMkRZU6ePcPO/wTgOUmX74ea9S2tD29IDDKRNNUk2ZdJwqAoZRRMu6DlaqPyc/W4CPlFWooa+C0LVNTLQSS00hFU+hJnMAPLjVJvP2PAFYQ7cojo0dUEaicMPaiEViOGlE+TJOqCzIAQN+KSg08jFF7/D6JlhMkSZhlKw6lR03Xta0BAbhKjdPlDLyS7NQxhEiNUyTqnxhp3fPDNZFVjs31WNUYUy21HMdhGCRXiisqUK7qpmMFo3XpfARYZtlsDcxpm67v0Hge9XTWhHBCSJUrngOUlOOT6npoENHuLk3lfcdH24tuC9x2fQ/5x3KaztOoqgq6oKr4MOZET+YzqCiDBHcbYxqE3wG40UFyBv/q2qZh+XCJu+J6HBWXwxNgQT7Oum1NgXoWQjM46fLdPtgc66rC1PSfEIyM0wA9aG6FdzlOY17B21kz+G/T92vQmfv0PZOWn4H3QByKhaA1RcObvaqgAOM4kjyvIDBSINScRDYLkj1+UxcrLCnnVIgagsB60lyZummlwf9h4kRKSQZdVXpQ4E3d0zxP51gs3+yPDQhGhbDhPiOmbHD/OGkl5fk8KjhaT08aMiqB2U1HpZLVO5mSEpd7TtZFCx3U9yKXULZKGf8JmEsNbIKrh7OEKHjdQpvlFa+73TcuBLM49LzVmvUnqGHfNiYDxoFp5Bqo9PT8NI3npzN4UUEg7AQiVxUEH+P77SUAzwHJD1LcgbVpfEGnSVccLjWePz0/P0mE6PD8pDSRw0i7U1sUTNKd/7B9r+J1ioFBpw5KSNUZcq8gAVwZ+2cFtWXo/HyGlChgF8JQq5w82Dff83DH6r6HNkBA4WmSFVecE27snyjrcIf08/MAnwzTqEnT4SJbfq+r1urYNMZ9SIBpQACQ0FnqBQB3rDUAZ5gP0/k81V1XVCGwyH1rqeAr9Dpm0EiiMMSTlR41+HAGgGeNGAg9PI5VNZwH1XSnJt8vl0EUv1LR3rSNJAXue/CCFQPkQJoqyhcXFEV0NO9Qm3MNktnussW+Kkv/1YGkpJJk685oJ1AauPhSRsnlxYensymGkjmBKvQ9TuN0DZld2W8OMLKPVg10GhCpoRciQSOMUDiijTGYT0pLkAUJ8w7D2ACh3b1noMSpv9wL1gIVmhqSDbwnoCCmp/SFDvA6KzUBlQeYNGZK9GX0WkZrVYZO9MjXDLTENJMiCpqRQwYGCZQ2qmbYzPmkcnmezNTvWhTdvfLIjX3LudWrrO5PbcMQKfKLHFSDNly49AKY5zmIbE7rGuZGL/jjcvvqgRdYV8njw0op0BthNAkDGSGKKgdFGrjpRtOeXMu86AxhW6r04907i+B1c7eFeQMD0XyhFRTYqI2EDOMAtBgu9iBzBBm+Hze3+sF3r3489g4GGCqMpjYMPHgRRSPKEAc8qBE4qGFGl2loB4+P2w/2V+6ub9CamzwIai6FKlzsyUXZOXwEELxIwyDZBoeD5zo/LhlO2SGSq1z0QEbNC0RhmEAKNJxBS2ABSJ6GgbPOHh+zKktn4Y8Ll1fiNc95xWBsdAzDTgHOG7cvo43kpDBq0xo1Apmp1unqw8KWlOmtMoOICQZlPjVMQwzyoswcZsuAXqa+AJKoIYu3yw9rkr8IZ+AnqRguGiZAXRWIOMP6POSY0XFEl8WjowQiIvHh7uOaFcb+PH3YEyxg/IIegREtQGHqs0Igo5RijPDxCIHBDL5dHu6uPgIEnu/ZcdOKMpUQJTXqAHMOK9oYisNIQvMojFZZdnvr3WxvPthbgeU69vZAG1EQbQQRpgR4bDal5m1nyq7d7SrZPny0NgCuDX/3miBWmJFMuNnsTma9EusS1p+64RJaKPY99+buFwBBHEFW7g5rxNb5hT6oyhFUDjSqDMNNWVAEGtCxLPzlvm1fL8xvgRsnKdliAX0H+knXaSn6niG8S6Lb7Ha12m2+fNl8JNDLcX3fCUx72DFefMoP8bxiTRbernFHc4z30FTq3vZu4GeA631oI9tzLSuMIYm2gQ7Wi0+zwJ+t275MH+9vs3UuKIwJrW4/9t9r+hzXssPI8zwHhMEL4xl4YwfhVxizD/fqAZbAPVGa7+9/v+nbjm05YOhCLuIgdOMZaH74tVsHW5h/sIZG8WK+/FXur4zXruN4fuBEoWfZ5iEIF59n1/PrGcZxdB2ZE4bx3A88x3Gh2j844roGxLJ933b963g2n88Xi0+fP382r8/F59fzyZzFYjGfz2bXUfBzMAALYQPCC8Ti08/nm/ksjvz3/fA/qkHAvTVjh5IAAAAASUVORK5CYII=",
          traits: ["メ"],
          baseStats: {
            hp: 77777,
            ap: 77000,
            dps: 462000.0,
            speed: 2,
            range: 65,
            rangeType: "範囲",
            kbLevel: 10,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 77777,
            actualAp: 77000,
            actualDps: 462000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "開眼カーニバル2 極ムズ",
      baseHp: 900000,
      width: 4500,
      enemyLimit: 6,
      requiredCost: 100,
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
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "100",
          amount: "1",
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
          enemyId: "137",
          enemyName: "ネコパティシエ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1400000,
            ap: 7200,
            dps: 9000.0,
            speed: 6,
            range: 235,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1900,
            freq: 24,
            foreswing: 18,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 1400000,
            actualAp: 7200,
            actualDps: 9000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "134",
          enemyName: "イチリンリン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQACAQECAgIDAwMDAwMDAwIEAwMEBAQEBAMFBQUFBQQHBQYGBgUHBgYHBgcJCQkKCQoLCQkMCwwVFRQcGhseGxshISAiISEjIiMmJCQqKCgtKyw0MTM1NDU4NjY5Nzg6OTlDQUFGQ0NIRkdLSUpQUE9UUlJZV1dhX19hYWBxcXB9e3yDg4KTk5Oenp2rqqqysbC3t7fDw8PPz87Y2Njm5uby8vL6+vr///////9EX7PwAAAAQHRSTlMABgsPz+MTGySP7XksYVnYorM0bT/ASVKE/pdneeTxuMv/lTyv7v7/0Lv/5/y+1//+5////f2///7+/v///wD/KXpBqwAABC9JREFUWIXNlm1zqjgUxwVswIpPiGC11mItVEQIIbk8hCzf/1vtAWrbnb0zN8y+2fPCkZnkl/PwPycZ/fUfbfS/A4x+Y7qr/fiSBOjm1w51utKHA9yVdf/rxB/GcIBzPYMPKtKRcc5jazjATtnZ2Z8ut9tHRK/2cICVFsk1KyrOq4ImO1MZCjA/MOWi6UxwenEUWQAydViruNei3979ijJ2FTmAsYsvrqZYl35/3Xshmiq25QDWMWXx6flI+vPzhMP2nNZNcdalAIq+j4uC0aIPv2K1aATFvBHpXjKJqnvL6+ZuomZlzsGNpjyjkaIj5Y+AkWKfcVHfC1BnIeGVEKKObX1/Obt/BrQyJFUP4KSkPqEEeIK8XlJ23coA3LT+lECdRQmLkq4kLCvZxUUygFkqvlJAMo77jLKMni1FSonz9DuLJSak80fQ47MhKWUz5t9lYFn/IVJLke0F9VQ0/zJ+0+WbyfkRw5cnz4o8AJ1y8c/tTXUzh7SzdSt/NGMbQLpXhgAU+9b7ILp2FFX6fJ/McoDWh06MVVYDhMV7NHAijfQja88ucMFIeNh/3wyyAHMRVZABnnie5/tLXXqk3c0+eLgbJn4Q+IelobaDbggArTcHiL+psee/rHWkAWEQAIaHc4ZR1hQBxmtFQ9ogQB+xeYZE1gSTHWoByhBAt1bthnuVkFdzKEBtczZSrK4UNLk66jAAhNwttsablDccR88qJHEQQFe7Wi7Wu6wWLNmhgQCkt9JT5gvnLa6aklxaHQwGKOp6vP9V1U1FY0sZAlAAoLaYyQGUICrKunHWxyAFUDuAah0hAZxmJY+NzoMhAA2KeGY1Zzfo6/KE2hwOA6jOJa/L9GT9qgV1UVsGdQjAgFuas+sevf0S/GbCa0tV5QEasrZpWWJ/YWtvhShOCOngkzRARfYZLsIQGvl1eyrq1NVagCYPgPTn2IdR5EXhO60+TE3XdYRUSR0o+iTJgwAnMMvCMIrwCQHAGACYH5ISM858n7AoiN6nGjIMQ+/kLQPQj1FIaSYyP2AVScJoZeimaYIPkoD5e5QkOKmIH9C8zJPofW5YlmnIAtRdFJA8CZPA93FecxKGO2sIoI0grwuoAuSg5DUNo6NtAqF7w0oAjNcwyFiGQz8MkiwvSBC+AsC2LUMeQHNKIz/0EkhCC3BMZ+ZahioZQhjC27LAgR/gEjopCI+ONZ/ObFMOoO3CgJRFRkhCM8Y5hqvRtmdTcEEOoMzeQYYkK3JSVHlOo+Bl4s7W6/nc1uR0YG6gDRICAFZVOAi8xXI6BQfWcySpxMmL9/QUYrjTCNTCf9xMttvtdDZdSwKMyeIJDGQQeF4Qvqwmk+VqOZlOppIAczl+eLqb97KZrDbj8Xiz2Sx1OYC1WSweHj8Bjw/j8eLTVpJPXXMJJwKis4feFgvwYfkbwN+rOKsrO4sQXgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 288000,
            ap: 5800,
            dps: 3702.13,
            speed: 10,
            range: 370,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1200,
            freq: 47,
            foreswing: 16,
            backswing: 31,
            tba: 4
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 5800,
            actualDps: 3702.13,
            magnification: "100%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "127",
          enemyName: "ネコマッチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMDAwMEBAQFBAQHBwcMDAwNDQ0UFBQcHBwcHBwjIyMqKik3Njc7Ojs7Ozs/Pj1ERERERENWVVVeXl5gYGBnZ2dpaWlzc3N2dnZ+fn6EhISIiIiMjIyRkZGZmZmenp6lpaWurq60tLS7u7vDw8PLy8vU1NTd3d3m5ubw8PD29vb+/v6sXmXMAAAAQHRSTlMACBcrQ0pmlZ3AJTJRqLcQXG6JHtLjeTqv//IgKlX/RWN8lKzawoKp/cfr/7j+0v/w///w///+/vz/////////XWbyhQAABCxJREFUWIWdl1t7ojAQhuVoCyhgWqj1bNdzEYkhIQmE//+vdqi7++zVLunciD5+L5OZyUwyGPzH0vB///i3hR+rgeGY39evz6f9Zjf7rn52qOqmpuf5N/XGXrSdyYPxPYB5VW1dt3V7/6YLs2vTNoJzRdfa2hCZxmx/lm2Nc6HuK035fP95PW2vsiiUImUjzoleNayuolY1lTK7YCElu5S37Uqjouaw9LZtWIlzXmTZ5XIkhNLbYdU3F3vZ5a6mpCopxSQvM8xVq+q+kQg/FegVl62SFOOSECZF3f30iXoBZpD9VgnWYYCTVV+87gvt5wKCENacVF9F2Na5an8bW/cCrK6MEE7pl0YJ2jweoKb6BQHKT5W5EvhL17BfAFlIfu1V0WvwHdR19ktIHu6LY1HsegVxDTuQkbY+PoIgH57UuLhwtukDWFFVl0zxy4XVSkmS8aapBcZ10bTXPoDwQKtaiLzAWZ7lpGIYk+JyrBWBbd0HMNhkBZT/9kdVswtVtGxoSdilVpg3PQFlIeV9s7hxiZtW8FYQyo5YMs5OvQCrM5OtvM63pCFVRYigmJOPbUEJ7QcwDpJB0Sy2VFaS5pQWFT3N13eO2bYXAHajaBqyOYmKtW3VtLy8LWCDqLJnKQ/md8lrsrtJlnNRVJLgnbmqIBq8J8DYV6XAR9pUFBcFJLHcQoMXsn9rXGSEZEfWENFUTED4D+G2LFW16duS5leGs2XBJTTlUnIhduZHXlX73l3ROIiqWC6P5dd+khI/z08lP2lMl3Ul8fvrdJlXUvLiuByublxrNsyugt924/fpdLmcTt9HiwNlB53RYGyIUvdF/DoFe03QAUbEWkM/MNKzEGxtJO/L6Utkok8YC7YWAB2gHxyM2ej9LTXNxfnIK63xaEDe8+PWGCDbC0PT25H7p86EN4xwcTp9zDtSaJhmuPiRaB2TDFAhD3V19wCYvt4RBQChif4ChJpHnA6AUu8BAJSpC4A3hp5jhQYEA4GZpj7A9B0LfIdYIM/TB5ih5/sWuN454HmPcGiYaaLU93yvW4mHLMvTBiDL9n0n7fJnIcu3vO8AHNexEPLBAzv1NI/spodSK4gDHyFgWFFgaQNMy0ojB4Ernme5ugADAcBPnRSSkPqWFUW+JsCzvNRxbMsMkQ3RdCPNa4th+XYUBbbfpdP2bTey9a4shmUHbuQ4PniQBvAc6N55rMCNXSfwoZU4sQusoN8J84/5bjJJosiGMnAnSRw5kaUHSJPJ0zBJYiiGCXy6gasJsCfD0XCSJFEaDSdxHEe6AGc4ehtO3MS1gyTpVhNrAqLR23g0jJPYcdzJ02iYTHwtveG+jZ+BMBy6Ufw0Hr+NnlI9QDJ+fgZCt44hsJ7Hb1pjCQDPnY3h3ePx4zHQA0xeXl7/tpcXPcAg6Bx/+W2wgn/E4Cd2PbDRNAsESQAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 1200000,
            ap: 5500,
            dps: 10312.5,
            speed: 24,
            range: 275,
            rangeType: "範囲",
            kbLevel: 8,
            money: 8888,
            freq: 16,
            foreswing: 7,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 5500,
            actualDps: 10312.5,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "132",
          enemyName: "重機C・A・T",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 16000,
            dps: 2874.25,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1950,
            freq: 167,
            foreswing: 8,
            backswing: 93,
            tba: 80
          },
          stageStats: {
            actualHp: 1500000,
            actualAp: 16000,
            actualDps: 2874.25,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 9643,
            actualDps: 4317.76,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 9643,
            actualDps: 4317.76,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "134",
          enemyName: "イチリンリン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQACAQECAgIDAwMDAwMDAwIEAwMEBAQEBAMFBQUFBQQHBQYGBgUHBgYHBgcJCQkKCQoLCQkMCwwVFRQcGhseGxshISAiISEjIiMmJCQqKCgtKyw0MTM1NDU4NjY5Nzg6OTlDQUFGQ0NIRkdLSUpQUE9UUlJZV1dhX19hYWBxcXB9e3yDg4KTk5Oenp2rqqqysbC3t7fDw8PPz87Y2Njm5uby8vL6+vr///////9EX7PwAAAAQHRSTlMABgsPz+MTGySP7XksYVnYorM0bT/ASVKE/pdneeTxuMv/lTyv7v7/0Lv/5/y+1//+5////f2///7+/v///wD/KXpBqwAABC9JREFUWIXNlm1zqjgUxwVswIpPiGC11mItVEQIIbk8hCzf/1vtAWrbnb0zN8y+2fPCkZnkl/PwPycZ/fUfbfS/A4x+Y7qr/fiSBOjm1w51utKHA9yVdf/rxB/GcIBzPYMPKtKRcc5jazjATtnZ2Z8ut9tHRK/2cICVFsk1KyrOq4ImO1MZCjA/MOWi6UxwenEUWQAydViruNei3979ijJ2FTmAsYsvrqZYl35/3Xshmiq25QDWMWXx6flI+vPzhMP2nNZNcdalAIq+j4uC0aIPv2K1aATFvBHpXjKJqnvL6+ZuomZlzsGNpjyjkaIj5Y+AkWKfcVHfC1BnIeGVEKKObX1/Obt/BrQyJFUP4KSkPqEEeIK8XlJ23coA3LT+lECdRQmLkq4kLCvZxUUygFkqvlJAMo77jLKMni1FSonz9DuLJSak80fQ47MhKWUz5t9lYFn/IVJLke0F9VQ0/zJ+0+WbyfkRw5cnz4o8AJ1y8c/tTXUzh7SzdSt/NGMbQLpXhgAU+9b7ILp2FFX6fJ/McoDWh06MVVYDhMV7NHAijfQja88ucMFIeNh/3wyyAHMRVZABnnie5/tLXXqk3c0+eLgbJn4Q+IelobaDbggArTcHiL+psee/rHWkAWEQAIaHc4ZR1hQBxmtFQ9ogQB+xeYZE1gSTHWoByhBAt1bthnuVkFdzKEBtczZSrK4UNLk66jAAhNwttsablDccR88qJHEQQFe7Wi7Wu6wWLNmhgQCkt9JT5gvnLa6aklxaHQwGKOp6vP9V1U1FY0sZAlAAoLaYyQGUICrKunHWxyAFUDuAah0hAZxmJY+NzoMhAA2KeGY1Zzfo6/KE2hwOA6jOJa/L9GT9qgV1UVsGdQjAgFuas+sevf0S/GbCa0tV5QEasrZpWWJ/YWtvhShOCOngkzRARfYZLsIQGvl1eyrq1NVagCYPgPTn2IdR5EXhO60+TE3XdYRUSR0o+iTJgwAnMMvCMIrwCQHAGACYH5ISM858n7AoiN6nGjIMQ+/kLQPQj1FIaSYyP2AVScJoZeimaYIPkoD5e5QkOKmIH9C8zJPofW5YlmnIAtRdFJA8CZPA93FecxKGO2sIoI0grwuoAuSg5DUNo6NtAqF7w0oAjNcwyFiGQz8MkiwvSBC+AsC2LUMeQHNKIz/0EkhCC3BMZ+ZahioZQhjC27LAgR/gEjopCI+ONZ/ObFMOoO3CgJRFRkhCM8Y5hqvRtmdTcEEOoMzeQYYkK3JSVHlOo+Bl4s7W6/nc1uR0YG6gDRICAFZVOAi8xXI6BQfWcySpxMmL9/QUYrjTCNTCf9xMttvtdDZdSwKMyeIJDGQQeF4Qvqwmk+VqOZlOppIAczl+eLqb97KZrDbj8Xiz2Sx1OYC1WSweHj8Bjw/j8eLTVpJPXXMJJwKis4feFgvwYfkbwN+rOKsrO4sQXgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 288000,
            ap: 5800,
            dps: 3702.13,
            speed: 10,
            range: 370,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1200,
            freq: 47,
            foreswing: 16,
            backswing: 31,
            tba: 4
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 5800,
            actualDps: 3702.13,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "128",
          enemyName: "ネコダンサー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 21400,
            dps: 6420.0,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2220,
            freq: 100,
            foreswing: 35,
            backswing: 26,
            tba: 33
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 17120,
            actualDps: 5136.0,
            magnification: "80%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "134",
          enemyName: "イチリンリン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQACAQECAgIDAwMDAwMDAwIEAwMEBAQEBAMFBQUFBQQHBQYGBgUHBgYHBgcJCQkKCQoLCQkMCwwVFRQcGhseGxshISAiISEjIiMmJCQqKCgtKyw0MTM1NDU4NjY5Nzg6OTlDQUFGQ0NIRkdLSUpQUE9UUlJZV1dhX19hYWBxcXB9e3yDg4KTk5Oenp2rqqqysbC3t7fDw8PPz87Y2Njm5uby8vL6+vr///////9EX7PwAAAAQHRSTlMABgsPz+MTGySP7XksYVnYorM0bT/ASVKE/pdneeTxuMv/lTyv7v7/0Lv/5/y+1//+5////f2///7+/v///wD/KXpBqwAABC9JREFUWIXNlm1zqjgUxwVswIpPiGC11mItVEQIIbk8hCzf/1vtAWrbnb0zN8y+2fPCkZnkl/PwPycZ/fUfbfS/A4x+Y7qr/fiSBOjm1w51utKHA9yVdf/rxB/GcIBzPYMPKtKRcc5jazjATtnZ2Z8ut9tHRK/2cICVFsk1KyrOq4ImO1MZCjA/MOWi6UxwenEUWQAydViruNei3979ijJ2FTmAsYsvrqZYl35/3Xshmiq25QDWMWXx6flI+vPzhMP2nNZNcdalAIq+j4uC0aIPv2K1aATFvBHpXjKJqnvL6+ZuomZlzsGNpjyjkaIj5Y+AkWKfcVHfC1BnIeGVEKKObX1/Obt/BrQyJFUP4KSkPqEEeIK8XlJ23coA3LT+lECdRQmLkq4kLCvZxUUygFkqvlJAMo77jLKMni1FSonz9DuLJSak80fQ47MhKWUz5t9lYFn/IVJLke0F9VQ0/zJ+0+WbyfkRw5cnz4o8AJ1y8c/tTXUzh7SzdSt/NGMbQLpXhgAU+9b7ILp2FFX6fJ/McoDWh06MVVYDhMV7NHAijfQja88ucMFIeNh/3wyyAHMRVZABnnie5/tLXXqk3c0+eLgbJn4Q+IelobaDbggArTcHiL+psee/rHWkAWEQAIaHc4ZR1hQBxmtFQ9ogQB+xeYZE1gSTHWoByhBAt1bthnuVkFdzKEBtczZSrK4UNLk66jAAhNwttsablDccR88qJHEQQFe7Wi7Wu6wWLNmhgQCkt9JT5gvnLa6aklxaHQwGKOp6vP9V1U1FY0sZAlAAoLaYyQGUICrKunHWxyAFUDuAah0hAZxmJY+NzoMhAA2KeGY1Zzfo6/KE2hwOA6jOJa/L9GT9qgV1UVsGdQjAgFuas+sevf0S/GbCa0tV5QEasrZpWWJ/YWtvhShOCOngkzRARfYZLsIQGvl1eyrq1NVagCYPgPTn2IdR5EXhO60+TE3XdYRUSR0o+iTJgwAnMMvCMIrwCQHAGACYH5ISM858n7AoiN6nGjIMQ+/kLQPQj1FIaSYyP2AVScJoZeimaYIPkoD5e5QkOKmIH9C8zJPofW5YlmnIAtRdFJA8CZPA93FecxKGO2sIoI0grwuoAuSg5DUNo6NtAqF7w0oAjNcwyFiGQz8MkiwvSBC+AsC2LUMeQHNKIz/0EkhCC3BMZ+ZahioZQhjC27LAgR/gEjopCI+ONZ/ObFMOoO3CgJRFRkhCM8Y5hqvRtmdTcEEOoMzeQYYkK3JSVHlOo+Bl4s7W6/nc1uR0YG6gDRICAFZVOAi8xXI6BQfWcySpxMmL9/QUYrjTCNTCf9xMttvtdDZdSwKMyeIJDGQQeF4Qvqwmk+VqOZlOppIAczl+eLqb97KZrDbj8Xiz2Sx1OYC1WSweHj8Bjw/j8eLTVpJPXXMJJwKis4feFgvwYfkbwN+rOKsrO4sQXgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 288000,
            ap: 5800,
            dps: 3702.13,
            speed: 10,
            range: 370,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1200,
            freq: 47,
            foreswing: 16,
            backswing: 31,
            tba: 4
          },
          stageStats: {
            actualHp: 28800,
            actualAp: 580,
            actualDps: 370.21,
            magnification: "10%",
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

export default e1120Data;

