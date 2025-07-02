// Stage 24059 Data
import type { StageData } from '../../app/stage/types';

export const e24059Data: StageData = {
  eventId: 24059,
  eventName: "ことよろにゃ強襲！(ΦωΦ)",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 59,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "卯年 Lv.1",
      baseHp: 2023,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "卯年 Lv.2",
      baseHp: 22023,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 40,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAD/AAD/UgD+ZgH/awL/bAL/bAH+cQP/cQP/cgL/dAH/dgL/dgP/dwP/dwP/eAP/eQL/egP/fwL/fwH/gQP/gwP+hQD/igL+iwL/jgL/jgL/kwH+lQH/mAL/mgL/mgH/ngL/oAH/mjP/pAL/pQL+pwL/qQD/qgL/rAH/rgL/rgL/rgL/rgH/rgH/rwL/tAH/uAL/vgT/wAL/yAT/uVP/1gv/0Gr/5Sv+5kH/3Xr+7D///wL/8V3/7In/+ZT///9qiRoKAAAAQHRSTlMAAQQHHTgRZYFIWSV1rr+hkc4DOdiFFWdGcd4jX+VWCTpN/ikS6wZFDiozPB0iFQrwiQX1//j+/KH+tQH9/v4A5GHOOgAABJJJREFUWIXtltt2skgQhQU8G6NpFfDYGEgLysGg4jBI5v3fanY14iF/MslauZuVuojEsL+urtrVnco/P4zKL+AX8Av4BfyPAN8O5fuvfihX2I8Iiqox9QcEhWkI9o0XER99L3jk8kh8Q6+q6gd7zYTrulEUf6lXmaYyzv5AiMh1QjfmXxQBhVI1EQkuxP2bioA+DB3xJUDVuBu52G2c3f6BidD3/dD5MgPGI8cNndBxxR2BOX4QgBB9AWActaJcwzCK+JWgCCdAlICP+0SRcan3KV1XXAkZ9wPP84ICgEJ9uoVYuCQ/LxeXKwnH9wggiygE+xwgYgIEcjnfEaVv4tBbIwCghkb/4ScWRSHp7YLAz9blBcBzeCWL0IvsU4DCXUdul163kQO9qijcX282GwCYEod+eJfAu4oKNDyQeoTt6BqcqWq6ba1WK8vmgmOH7gWgMCbY/YAxVDEgPVa01vZUr1NMLXO5XAKgoZ1+aYYMjoVn7+dDEZEEbDZY0rQGnU61Wu3UzNlstljaum7bdsjKxck0juveVwFj59vrDVJeLhYLc1BDtNqN8XhsLAadqYU0KAEWwzLScc47AFUhWG9Wy+ViZhhGo91uNxoPzX5/NDJaA9O0phhVFsdR4TcakD8b4dsWycej0agpo9/rdnv9h0bDmJkdnEvclc325HyElRjeuukF4w6KNoO83yui231EdPvN/mjc6lTruuPDKGvvTKhgLzgqLgxF06fWwoBc6iiehsPh02MXaTTbtVpnattFn8ltBPDpw4nOvlPUemfQfiA9CYeTyZxiMnwCo99ot0zTXK3IWGuZAgDS+x6ND0yKU6neaTWaPZJP5i/b7Y5i+wLE8LHXbz4Y6CgRKIWAiugEpfc82FTT6tUaEug+Qr7dHY7HE8XxAMYEOfRQCKMkAODyCif7S++R36d6tVYkMHmBPH8r43TcgUCI0ZhyoJehhxMz6opdmI8sb5K+S/obuUQctvPhmQAA9KFbFD9jODKAWJH/ZuPxCAUclvp8X2CS/ELoA4BJoWOrPKeVjDshIZYzKX8aXtdP9ynpk0sOSMEwLZr2u5M3o7PbsxYAQD+/6PO3nJ5y+fN0oEr2moY5ddz720NRQBB8OmgDMJxvD6dCv39OywciHHdzNLPZHlQZy27WjmNO0+k6OjxEgN3x7UMAUpCAWlW7LI+77HyaB4FtmcYIFbwkQFs4fxYPx+2kAFz/WRBnMbnJWs6oBNcEzto82e+TJEEyp938CY5udeo8womEScShTXppxs0KNexSC5BAniRlHfP0Oc2T5wT9yOUeqA2XcRYXwGazXIz7BDgggzwFoNwAMoA6RS8PW+rDaFa62bvLoABMXmQJ0hSpX/dB3ySyCAQYF/MABNXACcsaLAyMUQHIKYF9elsL+o0AZKXF6gKg2yosCjk1ZRdfLk1I97eRyDZQHxuwoicjKH3AcaNzHUcB9nDbhSTNCz/uZU1RRHThodXR6SqHddyrE7OMaXQW9B4n2xtAfvdwkgBqo1po7i9Kta5bJgby9fUvir/fBX33+jrG4WxNy5u38i/J/U4nC5oZSwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "卯年 Lv.3",
      baseHp: 52023,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "卯年 Lv.4",
      baseHp: 92023,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "250000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "卯年 Lv.5",
      baseHp: 162023,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "卯年 Lv.6",
      baseHp: 272023,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "卯年 Lv.7",
      baseHp: 402023,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "卯年 Lv.8",
      baseHp: 552023,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "卯年 Lv.9",
      baseHp: 752023,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 9,
      stageName: "卯年 Lv.MAX",
      baseHp: 1002023,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "631",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMFAgIHAwMFBAUGBgYIBQQICAgKCAgJCQkKCgkLCwsODQwQDxAUDxERERESEhIXFRUYGBgaGhojFhobGxshGRwdHR0fHx8gICAhISEkIyMkIyQmJSUoKCgrKys1JiwsLCwtLC0uLi4vLy8yMjI9LzQ1NTU5OTk8PDxJNz4/Pz9DQ0NFRUVRQEdHR0dKSkpTSU1NTU1OT09hSlNTUlJdUVZYWFhbW1ttUl1eXl52V2NiYmJlZWVnZ2d7XWlraWmBYG5sbGxubm5xcXGKaHV2dnaOa3l5eXmSbnx9fX1/f3+CgoKFhYWhe4mJiYmLi4uNjY2Pj4+SkpKXl5eziZmam5udnZ26jp+fn5+ioaHAk6SlpaXCl6jFmaqqqqrLnK+urq7OoLGxsbG0s7PVpbi2trbXp7q4uLi6urq8vLzdq76/v7/CwsLkscTExMToscbGxsbptMjrtsrJycnMzMzwus/xu9DOzs7yu9HPz8/0vdL1vtTS0tL3wNTU1NT5wdbV1dX6wtj8w9rX19fZ2dn/xdz/yN7c3Nz/yuDe3t7g4ODk5OTm5ubo6Ojr6+vv7+/x8fHz8/P09PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Hc4p/AAABAHRSTlMAAQIFBhASGBocISQnKCouMTY6PD5ARklMT1FVWl1iZGdqa29xdXd5e31/gYOJi42OkpWZm52go6anqayttLq+wMLEycvU19rc3+Pm7f8ECAkPFTNUpQwNry2xuNDT1fP5+93x7+P/9+Xh/8LZ///57P/P///5///y//3////7//////z/6///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOxQAwAABn1JREFUWIWNV3dcE2cYDqAttTgqddVRxQUirooLEdSKAp5WsVoFHLW/KKlEU2K1AmIosgTZpIGIWgMiK4aNIkoRGoZBSg0nAWRaZAoIyJCvl/1Bxvn8kVyeu+e5932/93vvQiCowGzTjdOV0Afnm1qYTlQlgjDfJeVhkLHWWFp3R0BOecKZT3D1NufbAACxRmPo6cdSMBqwl+MamCUD0JuTeX7KKHbKyWxM/q6/54xCaGMw2akbdAbdve9uCrPalg8B6Gb9EZJ6dT+OwWIGAHH3WlufnoXrtT4au33wPfSfwJOf4hhsTANDIc+q0TeR+nJy6qUeMBIR/0bQnGE9Xr1e49sS0B5Sg6KNj7fJ2S1ZWPkimwWC+sf2muoNtH58DYojm1G0+t+LsmwnXeoHDX5oNYo2ZRzByWCvQzvIvoMZoI1+06SkYQwAERlNGNl8R1+dWmTQATLjRdfeXiTh9tiVg6LwJgGKvqz3nopjoHm0AaQJDQRN99dJuImXB4boT2oxrrbQ4TscA4JpvtgArZdVcV4EyAsXZoU2x6/G0xNWcEDmPaFBbaG06dakg4gH9UKDWm9dXIM5dJB9W3i76ufn9okp26rewBcCYV0f2+3BNZhwfrAsXBiB4MVFbRGj8UsfL7JJlEG4Hq6eQNhe3hOIvsAM0MviZv7kKkgVlbW28DT+ZiYQlicA+tNaAfqyxv2wiDhMB6wMYQmaI/H3MgYbf8COx4ogqPf+QkTMiAOMpzVYAM/OaX+MAeHn9rbAmpfYOnqLR8LsLBDyXCAMAK8LJdBjA8ajekF9q/eyrw2MVhgcia0IaWyubXxyGmcjSjHpd5Af2dr0VzjJ2Z9x8yYzyI1M9IsvfOO34OP0WDOWfAh7EOjEKH4HRBhsy4tyJrlb4naxFDPDhpkIswHAGCiJOLtV2bBXAl07oiutCCigPdFxJX4jEggLT6WlRXQr6jHwPUzwZjJB8xvq6JsPt+Ryom9FxyZn8brAO88VOPo9G71aYHnFTRrNPyomLjaaGerlHFzaRcUZKKucOyB5bxQlokCWzUgli5ycukqt/gCJD+m7fbxejS5Cncd1tUN1v3UKnL3vtf6xZcxGNqszWOs7Al0cQ+0RL588q/5cZK4a/eQTPEhfipSKDzgUroRi0fOt1LXjBjocrRdDcjAQg8T1Yd99TCKvYNc41frPj1dAei7SJjvOvSI8U0WrBAXqNoShPxyAT5T4u4VTCcAHYW1GQFlMstVBlXpNuzRI/5okbqhhH+RCj4TrpSIkh0MqDXRO1EEGSV5A0cAV8Tq9T6XBHOf3kMG1RAClIEE7t8BatYFRKKTvdYJXVIK3LX08a9VFNGFB19ZRumDpQAefVxTiSCK7HTc3nqzCYCsbUhS48rO4FdhIGxHWv53NDA4g/vrg70fujiyf3TpK9Ro7MiGDdN8sT1fnXNCTNSxcQOFHIvnG3RuUGNDnoXxDau18CBmkCheh4z3gJMi5HLpvWNYHAG6ZKI/g6CgDn3ZOALUEBCcr1jLMWHkNtqfDBr4cKj2zG0QFKK4FRcUj2gSKFuQ694q6oo7sGRXNYsXExiUkJiUlsZM5bF8HxXdV7UUbNhtuiYAM+NJlrKR7IlSam6vzbxcwUBDEYvNhBf0s6wB2CpN8BZomnY6y2dYv6qmR4aGhwcF85Ie9irHrnBKVj0+E9sKIq2y4tZHkfDpioyR5I6b4rH8UlEO0j/SogiwfaQkWyh5NJqnis1xip9ygHJHet5wip2NNlegJa+MkYXtCIYx4SedbFfmtjE00V2Yw11NaemKZ3KEMkezHLnI2r7S8oqrhv7bOtN3K/m4c2iltN3+3PqgK4tA/xCAyEImIhZ6GooPuyTjRqhedtWTIDYaD3YTVG0zlVrx+Vckv4xXl5+ZkhyJfKonBxpzKZCeGHps3weqWvBkG6NQCMBbdjspfdKYZrl+3GHuvnGJJh56uyS6M0l7Zr6Gh9z1v84hfKTWQ4TMzalJ+MY9XXMQtKuWnuyIudAbd3/96aBDNheZ2gYRswXtTGmeLUBwRhERBLHZZ2NsftbffiVBdSCTEwwsxM149H/9NawatL3abceiftjLGLLbXbaVFHtdKzWNNCq3xE3R/SnZatwwhHlm8VN/AQH/pkkWbnJjHDmxy81i7D8dBc6G51XFEDU5Yb1uizkNDZ+YCwzXf21rYW+0eA6sdW03Xr1muN2sS9Lfxf76pLplZvDEoAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e24059Data;

