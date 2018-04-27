<template>
    <div class="inputGroup">
        <div class="inputGroup__row">
            <label class="inputGroup__label" for="firstName">Label</label>
            <input type="text" id="firstName" placeholder="John Doe" />
        </div>

        <div class="inputGroup__row">
            <label class="inputGroup__label" for="description">Label</label>
            <textarea id="description" placeholder="A description of some kind"></textarea>
        </div>
    </div>
</template>

<script src="./inputGroup.js"></script>

<style lang="scss">
    // Import Main styles for this application
    @import 'inputGroup';
</style>

