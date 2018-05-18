<template>
    <section class="hero">
        <div class="b-lazy hero__img" :data-src="require('@/assets/images/hero.png')"></div>
        <div class="hero__content">
            <div class="row">
                <div class="small-24 large-18 xlarge-16 large-centered column">
                    <slot></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./hero.js"></script>

<style lang="scss">
    @import 'hero';
</style>

