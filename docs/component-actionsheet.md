---
title: ActionSheet（行为选择菜单）
---
# CellGroup（行为选择菜单）
各种类型的列表组，支持自定义内容、单选、多选等

## 示例
普通ActionSheet
```html
<template>
    <mt-actionsheet
        :visible.sync="visible"
        title="弹窗顶部标题"
        :data="listData"
        @click="onClick">
    </mt-actionsheet>
</template>
<script>
    export default {
        data () {
            return {
                gender: "0",
                listData: [
                    {
                        type: "danger",
                        label: "选项一（警示项）"
                    },
                    {
                        type: "normal",
                        label: "选项一"
                    },
                    {
                        type: "normal",
                        label: "选项二"
                    }
                ]
            }
        }
    }
</script>
```

自定义模板ActionSheet
```html
<template>
    <mt-actionsheet
        :visible.sync="visible3"
        :extra="true">
        <div class="panel">
            <div class="title">
                云玺停车场 | 闽A·7788F
                <i @click.self="onHide" class="iconfont icon-popup-close"></i>
            </div>
            <div class="amount-wrapper">
                <span>支付总额</span>
                <span class="amount">¥50.00</span>
            </div>
            <div>
                <mt-cell-group
                    type="radio"
                    :value.sync="gender"
                    :options="radioOPtions"
                    >
                </mt-cell-group>
            </div>
            <div class="pay-btn" @click.self="onPay">支&ensp;付</div>
        </div>
    </mt-actionsheet>
</template>
<script>
    export default {
        data () {
            return {
                gender: "0",
                options1: [
                    {
                        title: "微信支付",
                        value: "1"
                    },
                    {
                        title: "工商银行支付",
                        value: "2"
                    },
                    {
                        title: "余额支付",
                        value: "0"
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
| title | 可配置文本标题 | String | — | — |
| data | 选项 | Object | — | — |
| visible | 行为选择菜单显隐 | Boolean | true/false | false |
| extra | 可拓展自定义模板操作, 需结合插槽 | Boolean | true/false | false |


## Slots
| name | 说明
|-|-
| default | 配置自定义模板

## Events
| 事件名称 | 说明 | 回调参数
|-|-|-|
| click | 点击选项时触发 | 当前被选中的值 |
| confirm | 自定义模板时的操作按钮 | -- |