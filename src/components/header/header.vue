<template>
    <header class="header">
        <router-link :to="'/'" class="header__logo">
            <span class="header__logoText">Pattern library</span>
        </router-link>
    </header>
</template>

<script src="./header.js"></script>

<style lang="scss">
    // Import Main styles for this application
    @import 'header';
</style>

