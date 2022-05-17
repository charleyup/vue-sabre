---
title: Tab (选项卡)
---
# Tab (选项卡)
选项卡组件，包含TabsPanel

## 示例
```html
<mt-tabs v-model="active" @tab-click="handleTabClick">
    <mt-tabs-panel label="选项一" value="first">
        往《一起来捉妖》游戏里已经充了好几百人民币的优奈酱告诉我，其实一开始玩这个游戏她是想来赚钱的。
    </mt-tabs-panel>
    <mt-tabs-panel label="选项二" value="second">
        以前一直有听说过这样的观点，有不少中国玩家的具有三种共性：游戏选择的功利性、游戏习惯的倔脾气以及消费行为的先难后易，掌握了这三点就能打造一款成功的商业游戏。
        最初我是不认同这种观点的，毕竟不同玩家的审美情趣和风格偏好千奇百怪，怎么可能会被所谓的共性安排得乖乖掏钱？
    </mt-tabs-panel>
    <mt-tabs-panel label="选项三" value="third">
        但直到《一起来捉妖》推出的近半个月，从身边玩家和网络社区最集中的热门话题可以看到，多数人确实在意的莫过于这几点。特别是“消费行为的先难后易”，但凡在游戏中尝到妖灵交易、猫交易的甜头后，玩家会接着充更多的钱。
        这就好像一种比较信得过的小额理财投资--有花有赚，再花不难。
    </mt-tabs-panel>
    <mt-tabs-panel label="选项四" value="forth">
        最近两年，不管是推荐单机还是端游亦或者手游，身边的朋友往往会先反问我一个问题：“你说得这么天花乱坠如何好玩，但这值得吗？”
    </mt-tabs-panel>
</mt-tabs>
```


## Tabs Props
| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| value | 绑定当前选项卡的值 | String/Number | — | — |
| horizontalScroll | 是否能横向滑动(暂未开发) | Boolean | — | — |

## Tabs Events
| 事件名称 | 说明 | 回调参数
|-|-|-|
| tab-click | tab 被选中时触发 | 被选中的标签 tab 实例 |

## TabsPanel Props
| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| value | 选项卡值 | String/Number | — | — |
| label | 选项卡名称 | String/Number | — | — |
