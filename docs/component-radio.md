---
title: Radio (单选)
---
# Radio (单选)
单选框，可禁用

## 示例
普通单选
```html
<mt-radio-group v-model="value">
    <mt-radio value="西瓜"></mt-radio>
    <mt-radio value="苹果"></mt-radio>
    <mt-radio value="冬瓜"></mt-radio>
</mt-radio-group>
```

禁用情况
```html
<mt-radio-group v-model="disabledValue" disabled>
    <mt-radio label="西瓜" value="watermelon"></mt-radio>
    <mt-radio label="苹果" value="apple"></mt-radio>
    <mt-radio label="橘子" value="orange"></mt-radio>
</mt-radio-group>
```
## Radio Group Props
| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| value | 绑定选中的值 | String/Number/Boolean | — | — |
| disabled | 是否禁用 | Boolean | — | false |
## Radio Props
| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| label | 选项显示内容 | String/Number/Boolean | — | — |
| value | 选项绑定的值 | String/Number/Boolean | — | — |
| disabled | 是否禁用 | Boolean | — | false |

