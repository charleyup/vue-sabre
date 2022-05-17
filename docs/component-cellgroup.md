---
title: CellGroup（列表组）
---
# CellGroup（列表组）
各种类型的列表组，支持自定义内容、单选、多选等

## 示例
普通列表组
```html
<mt-cell-group title="列表组">
    <mt-cell-item></mt-cell-item>
</mt-cell-group>
```

单选列表组
```html
<template>
    <mt-cell-group
        title="性别"
        type="radio"
        :value.sync="gender"
        :options="options1"
        >
    </mt-cell-group>
</template>
<script>
    export default {
        data () {
            return {
                gender: "0",
                options1: [
                    {
                        title: "男性",
                        value: "1"
                    },
                    {
                        title: "女性",
                        value: "2"
                    },
                    {
                        title: "未知",
                        value: "0"
                    }
                ]
            }
        }
    }
</script>
```

多选列表组
```html
<template>
    <mt-cell-group
        title="支付方式"
        type="checkbox"
        :value.sync="payWay"
        :options="options2"
        >
    </mt-cell-group>
</template>
<script>
    export default {
        data () {
            return {
                payWay: ["0", "1"],
                options2: [
                    {
                        title: "微信",
                        subtitle: "马化腾家的",
                        value: "1"
                    },
                    {
                        title: "支付宝",
                        subtitle: "马云家的",
                        value: "2"
                    },
                    {
                        title: "银联",
                        subtitle: "国家的",
                        value: "3"
                    },
                    {
                        title: "PayPal",
                        value: "4"
                    }
                ]
            }
        }
    }
</script>
```

## Props
| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| title | 列表组标题 | String/Number | — | — |
| type | 列表组类型 | String/Number | radio/checkbox | — |
| value | 绑定值，仅当单选多选类型生效 | String/Number/Array | — | — |
| options | radio、checkbox选项 | Array | — | — |

### options
```js
[
    {
        title: "男性",
        subtitle: "",
        value: 1
    },
    {
        title: "女性",
        subtitle: "",
        value: 2
    }
]
```

## Slots
| name | 说明
|-|-
| default | 一般只用于CellItem的插入
