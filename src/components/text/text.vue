<template>
    <div class="text" :class="{ 'text--intro': this.isIntro }">
        <slot></slot>
    </div>
</template>

<script src="./text.js"></script>

<style lang="scss">
    // Import Main styles for this application
    @import 'text';
</style>

