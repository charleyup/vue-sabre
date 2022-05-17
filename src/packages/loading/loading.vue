<template>
    <transition name="mtFade">
        <div class="mt-loading" v-show="visible">
            <transition name="mtFade">
                <div class="main" v-if="visible">正在加载...</div>
            </transition>
        </div>
    </transition>
</template>
<script>
export default {
    name: "mt-loading",
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    methods: {}
};
</script>
