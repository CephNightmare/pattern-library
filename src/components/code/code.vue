<template>
    <div class="code">
        <highlight-code :lang="this.lang">
            <slot></slot>
        </highlight-code>
        <span class="code__lang">{{ this.lang }}</span>
    </div>
</template>

<script src="./code.js"></script>

<style lang="scss">
    @import 'code';
</style>

