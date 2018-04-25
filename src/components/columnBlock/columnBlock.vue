<template>
    <div class="columnBlock">
        <h3>{{ this.blockTitle }}</h3>
        <slot></slot>
    </div>
</template>

<script src="./columnBlock.js"></script>

<style lang="scss">
    // Import Main styles for this application
    @import 'columnBlock';
</style>

