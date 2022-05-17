---
title: Modal (模态框)
---
# Modal (模态框)
模态框（Modal）是覆盖在父窗体上的子窗体。通常，目的是显示来自一个单独的源的内容，可以在不离开父窗体的情况下有一些互动。子窗体可提供信息、交互等。

## 示例
普通modal
```html
<mt-modal 
    :visible="visible"
    title="标题"
    desc="信息必须准确和真实，提示用户如何操作">
</mt-modal>
```
普通双按钮modal
```html
<mt-modal 
    :visible="visible"
    title="标题"
    cancel="次要操作"
    desc="信息必须准确和真实，提示用户如何操作">
</mt-modal>
```
自定义列按钮modal
```html
<template>
    <mt-modal
        :visible.sync="visible2"
        title="标题"
        :btnRow="false"
        :options="options"
        desc="信息必须准确和真实，提示用户如何操作">
        <!-- 写相关逻辑 -->
    </mt-modal>
</template>
<script>
export default {
    data () {
        return {
            options: [
                {
                    label: "选项一",
                    value: 1
                },
                {
                    label: "选项二",
                    value: 2
                }
            ]
        }
    }
}
</script>
```
自定义模板modal
<mt-modal :visible="visible>
</mt-modal>
## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| visible | 控制picker显隐 | Boolean | true/false | false |
| icon  | 是否显隐icon | String | — | — |
| title | 可配置文本标题 | String | — | — |
| desc | modal详情文本 | String | — | — |
| confirm | 主要操作文案 | String | — | "主要操作" |
| cancel | 次要操作文案 | String | — | — |
| btnRow | 按钮是否行显示 | Boolean | — | true |
| options | 自定义按钮数组, 与btnRow共同使用 | Array | — | — |


## Slots
| name | 说明
|-|-
| default | 配置自定义模板


## Events
| 事件名称 | 说明 | 回调参数
|-|-|-|
| confirm | 主要操作被点击时触发 | -- |
| cancel | 次要操作被点击时触发 | -- |
| click | 自定义按钮被点击时触发 | 当前被选中的选项 |
