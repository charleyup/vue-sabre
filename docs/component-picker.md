---
title: Picker (选择器)
---
# Picker (选择器)
滚动选择器

## 示例
自定义单列选项
```html
<template>
    <mt-picker :visible.sync="visible" :data="data"></mt-picker>
</template>
<script>
    export default {
        data () {
            return {
                visible: false,
                data: [
                    [
                        {
                            label: "一",
                            value: 1
                        },
                        {
                            label: "二",
                            value: 2
                        },
                        {
                            label: "三",
                            value: 3
                        }
                    ]
                ]
            }
        }
    }
</script>
```
自定义多列选项
```html
<template>
    <mt-picker :visible.sync="visible" :data="data"></mt-picker>
</template>
<script>
    export default {
        data () {
            return {
                visible: false,
                data: [
                    [
                        {
                            label: "一",
                            value: 1
                        },
                        {
                            label: "二",
                            value: 2
                        },
                        {
                            label: "三",
                            value: 3
                        }
                    ],
                    [
                        {
                            label: "四",
                            value: 4
                        },
                        {
                            label: "五",
                            value: 5
                        },
                        {
                            label: "六",
                            value: 6
                        }
                    ]
                ]
            }
        }
    }
</script>
```
时间选择器
```html
<mt-picker :visible.sync="visible" type="time"></mt-picker>
```

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| visible | 控制picker显隐 | Boolean | true/false | false |
| title | 可配置文本标题 | String | — | 日期 |
| data | picker的数据, 结构是二维数组 | Array | — | [] |
| index | picker的初始所在选项的index, 结构是一维数组 | Array | — | [] |
| type | picker的类型, 默认default时需自行传data, 其余暂不用传 | String | default/time/year/month | default |


## Events
| 事件名称 | 说明 | 回调参数
|-|-|-|
| confirm | 点击确认按钮时触发 | 当前被选中的值 |