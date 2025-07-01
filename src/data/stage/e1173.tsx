// Stage 1173 Data
import type { StageData } from '../../app/stage/types';

export const e1173Data: StageData = {
  eventId: 1173,
  eventName: "大逆襲のメタックマ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 173,
  stages: [
    {
      stageId: 0,
      stageName: "本気メタル降臨 極ムズ",
      baseHp: 80000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 500,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "100",
          amount: "5",
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
          enemyId: "057",
          enemyName: "メタックマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMEBAQHBwQICQYJCgcJCwgHDQEJDAgODwkODwwPDw0TExAZGRYcHBklJiIoKSUqKycsLCsvMC0xMi4yMzAzMzFAPz5DQ0BJSkdOTktUVFJUVlNYWFZhYWBkZGMnlSdoaGdxcW90c3F4enZ6enl7e3oGzgWCgoCDgoIC6gKLioqSlJCamZmgoJ+mpqasrKu0tLS5ubm/v7/ExMTJycnV1dXe3t7l5eXs7Ozz8/P7+/v////3kGlkAAAAQHRSTlMAAwmWqL8YaILfDx//KzZATGOc/Hhur8mHoZjustz+nMLezf///+j/iPP/4f7////+8f/+/v//////////////jUsktAAABFtJREFUWIWVl4tyojAUhoXt2q6uiq3WG2WtoqxrNkBIyAVI3v+tNqB2p5VrOtMZZpLPc/5zyUmvV7oGo3HfuH2M5r9/zwflGyvWaH0+25MroW/jJAnnRv2Rz7+/woJH9vBKO2ZKpdt+FwPeGWP0aA3H44llTd8SDdgNOwEoo9Rd7M7HzTEMgVD8PDc7APp2pC2AiHMCIqWyNEOrLh70DOstYhShmLEgkFmwD8Ru1AXQG24J8/d7j8Y+lGz/d0+jTlHoWSfGvD9/94QhT/L9nz0XdpdEMJZIG19YEBySNPZxlp27+NC3iRYx8n3gOi+OFxAhZWh1AEyOOozI0yfdnz9fIhIAlMSz9iIYM0gJACyVKomcIFNSIBDb7RPBfD74XsBjqZTiDspUGiQR7JDLozd4cFPhMcEigCBEAUg5OE5aezCPZAKwFh/6kZAZw4RhgMG3toHsb3XxJL7PkjTL0lSbAQESEi3alpMVaudlFkMA9QLAj3I5FdlM28XBXHNVLJkKzpNUyssnc1bt4jA+Z6psce+9VTIaM1J6Xgnv1MqHQsKylTjOcxsfJmdZDki9YNsiDsYszvUrBcSnFgU1sAsP0ns/Ug/DZbMP1xhE90qmrus055Ixx/nmDPJ7wCGIjo0+DGxRbAZlLhAerZt8GF9ikMDsTkctIo3fGnLp6oHi/n0c0oPnek31YF48UCwoAbgg4sGqvqaHu4vpZYDEIzThDfVwlUARdHdeAyjjvKEerPCymUT3AOFh/3CorwdjiqsB3HEPPke19WDMaDUgdlAcC1HbW41bMyoDEK0B44lfJ4JpJ9UADBnFPnTrROhv06u5JVGIIPJcgOFrzQVzS4OyPJCB46EoFrWZMLp1o3uAlBBGhQh1XWX8AfDlV0LmYXZVsRrw0Q8FvGvtiacnJoJ8332qBhR3Ur5K+gH3YgR0KmG4qgZMr5ksMyi+AoijqznS9cS2zQAlffoVELxAQihlCd+1AKgIfW7tUp42OJ9/MUZvbQDx4YuK2W6BWaxTyYOtAGzDPhmgku0r8vVpzPmxGvARBSU2uQiCEoxJTHVIhP3qeL5uqzw5VwN0Jl4JiSu038D1DvrP1S2Wr58BjanOBFFjga4F9T8RdDARJTGJ84k9ni2RjgE7vR431YBrNWaZSkCaB1NPvEwPWNqF0JoFAFCyHU2/VwN0V6dEZqdQcpDbwnT+MwKo9uY8mXmL1yBYGoOaYjLX5P09Yyubx0Eh5WL569c6fzLpWXu2eRzZb2Pdt6oBxvR9ZvPQso4wypMnnBqm2d+lxZvLeuob48eGWXH0NLTOu5FpLfIx4/LQKqa2xDZN3cqMpiHJMHvmdKr/rZhOnniZ7y/uS954LX8RQwO03+PiI+8SdNnpxXOxAM8uv5qLgGvaUCngmSlxu4PMNev2XukV02Z2tm5WW2G3F1Ou5TTEq2H/usZbnYD9wcBsqYM5fnx62Gy+/18/Xn58f3j49vQ4vkf8Ayotbiv3wISsAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 50,
            ap: 999999,
            dps: 1578945.79,
            speed: 3,
            range: 600,
            rangeType: "単体",
            kbLevel: 1,
            money: 550,
            freq: 19,
            foreswing: 8,
            backswing: 8,
            tba: 6
          },
          stageStats: {
            actualHp: 50,
            actualAp: 999999,
            actualDps: 1578945.79,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1173Data;

