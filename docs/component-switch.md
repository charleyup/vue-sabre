---
title: Switch (开关)
---
# Switch (开关)
开关

## 示例
```html
<!-- 一般情况 -->
<mt-switch v-model="isOpen"></mt-switch>
<!-- 禁用 -->
<mt-switch v-model="isOpen" disabled></mt-switch>
<!-- 选中不选中分别绑定值 -->
<mt-switch v-model="value" trueValue="开" falseValue="关"></mt-switch>

```
## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| value | 绑定选中的值 | String/Number/Boolean | — | — |
| disabled | 是否禁用 | Boolean | — | false |
| trueValue | 开启时绑定的值 | String/Number/Boolean | — | true |
| falseValue | 关闭时绑定的值 | String/Number/Boolean | — | false |
