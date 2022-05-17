---
title: Cell（列表项）
---
# Cell（列表项）
各种类型的列表项，支持图标、链接、左右插槽、图片等

## 示例
普通列表
```html
<mt-cell-group title="列表(Cell)">
    <mt-cell-item
        title="单行列表"
        label="列表内容"
        arrow
        >
    </mt-cell-item>
</mt-cell-group>
```

列表内容为图片
```html
<mt-cell-group title="列表(Cell)">
    <mt-cell-item
        title="单行列表"
        :img-right="imgUrl"
        arrow
        >
    </mt-cell-item>
</mt-cell-group>
```

双行列表
```html
<mt-cell-group title="列表(Cell)">
    <mt-cell-item
        title="双行列表"
        subtitle="描述信息"
        label="内容详情"
        arrow
        >
    </mt-cell-item>
</mt-cell-group>
```

双行列表带图片
```html
<mt-cell-group title="列表(Cell)">
    <mt-cell-item
        :img-left="imgUrl"
        title="双行列表"
        subtitle="描述信息"
        label="内容详情"
        arrow
        >
    </mt-cell-item>
</mt-cell-group>
```

单行列表带图标
```html
<mt-cell-group title="列表(Cell)">
    <mt-cell-item
        title="单行列表"
        icon="icon-car"
        label="内容详情"
        arrow
        >
    </mt-cell-item>
</mt-cell-group>
```

列表链接
```html
<mt-cell-group title="列表(Cell)">
    <mt-cell-item
        title="单行列表"
        link="/"
        arrow
        >
    </mt-cell-item>
</mt-cell-group>
```

自定义内容（不推荐使用）
```html
<mt-cell-group title="列表(Cell)">
    <div slot="left">单行列表</div>
    <div slot="right">内容详情</div>
</mt-cell-group>
```

## Props
| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| title | 列表标题 | String/Number | — | — |
| subtitle | 列表副标题/描述 | String/Number | — | — |
| label | 列表内容 | String/Number | — | — |
| icon | 标题图标 | String | — | — |
| img-left | 标题图片 | String | — | — |
| img-right | 内容图片 | String | — | — |
| link | 列表链接 | String | — | — |
| arrow | 是否显示箭头 | Boolean | true/false | false |

## Slots
| name | 说明
|-|-
| left | 左插槽，优先级高于title
| right | 右插槽，优先级高于label
