<template>
    <nav class="sideNav">
        <ul class="sideNav__list">
            <li v-for="nav in this.navigation" class="sideNav__listItem">
                <router-link :to="{path: nav.template}" active-class="sideNav__listLink--active" class="sideNav__listLink">{{ nav.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script src="./sideNav.js"></script>

<style lang="scss">
    // Import Main styles for this application
    @import 'sideNav';
</style>

