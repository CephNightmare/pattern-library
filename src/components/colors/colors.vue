<template>
    <div class="colors">
        <div class="row">
            <div v-for="(color, index) in this.colors" class="small-12 medium-8 large-6 column" :class="{'end': index === colors.length - 1}">
                <div class="colorBlock">
                    <div class="colorBlock__bg" v-bind:style="{ 'background-color': color.hex }"></div>
                    <div class="colorBlock__content">
                        <span class="colorBlock__row">Group: {{ color.group }}</span>
                        <span class="colorBlock__row">Variant: {{ color.variant }}</span>
                        <span class="colorBlock__row">Color: {{ color.hex }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./colors.js"></script>

<style lang="scss">
    // Import Main styles for this application
    @import 'colors';
</style>

