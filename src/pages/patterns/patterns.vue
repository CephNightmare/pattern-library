<template>
    <main class="main">
        <div class="row">
            <aside class="small-6 column">
                <sideNav :navigation="this.navigation"></sideNav>
            </aside>
            <div class="small-16 small-push-1 column end">
                <h1>{{ this.$route.name}} </h1>
                <router-view></router-view>
            </div>
        </div>
    </main>
</template>

<script src="./patterns.js"></script>

