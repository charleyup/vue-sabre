---
title: TabBar (底部导航)
---
# TabBar (底部导航)
底部导航组件

## 示例
```html
<mt-tabbar :active="active">
    <mt-tabbar-item title="Tabs" name="Tabs" link="/Tabs">
        <i slot="icon" class="iconfont icon-car"></i>
    </mt-tabbar-item>
    <mt-tabbar-item title="Radio" name="Radio" link="/Radio">
        <i slot="icon" class="iconfont icon-car"></i>
    </mt-tabbar-item>
    <mt-tabbar-item title="Button" name="Button" link="/Button">
        <i slot="icon" class="iconfont icon-car"></i>
    </mt-tabbar-item>
    <mt-tabbar-item title="Cell" name="Cell" link="/Cell">
        <i slot="icon" class="iconfont icon-car"></i>
    </mt-tabbar-item>
    <mt-tabbar-item title="Toast" name="Toast" link="/Toast">
        <i slot="icon" class="iconfont icon-car"></i>
    </mt-tabbar-item>
</mt-tabbar>
```


## TabBar Props
| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| fixed | 是否固定在底部(未完成) | Boolean | — | true |
| active | 当前激活项的name | String | — | — |


## TabBar Item Props
| 参数 | 说明 | 类型 | 可选值 | 默认值
|-|-|-|-|-
| link | 导航链接 | String | — | — |
| title | 导航文字 | String | — | — |
| name | 导航内置名称 | String | — | — |
