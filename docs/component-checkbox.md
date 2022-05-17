---
title: Checkbox (多选项组)
---
# Checkbox (多选项组)
多选项组

## 示例
Checkbox单独使用
```html
<mt-checkbox v-model="isDisabled" label="西瓜"></mt-checkbox>
<mt-checkbox v-model="val" trueValue="西瓜" falseValue="不是西瓜">{{val}}</mt-checkbox>
```

Checkbox组合Checkbox Group使用
```html
<mt-checkbox-group v-model="disabledValue" disabled>
    <mt-checkbox label="西瓜" value="watermelon"></mt-checkbox>
    <mt-checkbox label="苹果" value="apple"></mt-checkbox>
    <mt-checkbox label="橘子" value="orange"></mt-checkbox>
</mt-checkbox-group>
```

## Checkbox Props

| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| value | 绑定选项值 | String/Number/Boolean | — | — |
| disabled | 是否禁用 | Boolean | — | false |
| trueValue | 选中时绑定的值（仅不组合checkbox-group使用时有效） | String/Number/Boolean | — | true |
| falseValue | 取消选中时绑定的值（仅不组合checkbox-group使用时有效） | String/Number/Boolean | — | false |

## Checkbox Group Props

| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| value | 绑定选中值 | String/Number/Boolean | — | — |
| disabled | 是否禁用 | Boolean | — | false |
