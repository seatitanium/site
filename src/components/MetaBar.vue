<template>
    <div class="meta-bar">
        <slot/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="less" scoped>
    .meta-bar {
        display: flex;
        align-items: center;
    }
</style>