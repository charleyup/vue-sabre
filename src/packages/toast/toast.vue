<template>
    <transition name="mtFade">
        <div class="mt-toast" v-if="visible && message" @click="close">
            <transition name="mtFade">
                <div class="main" :class="(type === 'normal') && 'normal'">
                    <i class="icon-check-hollow iconfont" v-show="type === 'success'"></i>
                    <i class="icon-warning-hollow iconfont" v-show="type === 'warning'"></i>
                    <i class="icon-cancel iconfont" v-show="type === 'error'"></i>
                    <span slot v-if="visible">{{message}}</span>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    name: "mt-toast",
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        message: {
            type: String
        },
        type: {
            type: String,
            default: "narmal",
            validator: (val) => {
                return ["success", "error", "warning", "narmal"].indexOf(val) !== -1;
            }
        }
    },
    data () {
        return {};
    },
    methods: {
        close () {}
    }
};
</script>
