<template>
    <main class="main">
        <div class="row">
            <aside class="small-24 large-6 column">
                <sideNav :navigation="this.navigation"></sideNav>
            </aside>
            <div class="small-24 large-16 xlarge-push-1 xlarge-12 column end">
                <h1>{{ this.$route.name}} </h1>
                <router-view></router-view>
            </div>
        </div>
    </main>
</template>

<script src="./patterns.js"></script>