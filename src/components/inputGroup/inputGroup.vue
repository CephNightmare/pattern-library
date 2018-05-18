<template>
    <div class="inputGroup">
        <div class="inputGroup__row">
            <label class="inputGroup__label" for="firstName">Text input</label>
            <input type="text" id="firstName" placeholder="John Doe"/>
        </div>

        <div class="inputGroup__row">
            <label class="inputGroup__label" for="description">Textarea</label>
            <textarea id="description" placeholder="A description of some kind"></textarea>
        </div>

        <div class="inputGroup__row">
            <label class="inputGroup__label" for="email">E-mail</label>
            <input id="email" type="email" placeholder="johndoe@outlook.com"/>
        </div>

        <div class="inputGroup__row">
            <label class="inputGroup__label" for="email">Radio buttons</label>

            <div class="inputGroup__valueWrapper">

                <div class="radioWrapper">
                    <label for="radio1" class="radioWrapper__inputWrapper">
                        <input class="radioWrapper__input" id="radio1" name="radioGroup" type="radio"/>
                        <span class="radioWrapper__inputDot"></span>
                    </label>
                    <label class="radioWrapper__label" for="radio1">Radio Button 1</label>
                </div>

                <div class="radioWrapper">
                    <label for="radio2" class="radioWrapper__inputWrapper">
                        <input class="radioWrapper__input" id="radio2" name="radioGroup" type="radio"/>
                        <span class="radioWrapper__inputDot"></span>
                    </label>
                    <label class="radioWrapper__label" for="radio2">Radio Button 2</label>
                </div>

            </div>
        </div>

        <div class="inputGroup__row">
            <label class="inputGroup__label" for="email">Checkbox buttons</label>

            <div class="inputGroup__valueWrapper">

                <div class="checkboxWrapper">
                    <label for="checkbox1" class="checkboxWrapper__inputWrapper">
                        <input class="checkboxWrapper__input" id="checkbox1" name="checkboxGroup" type="checkbox"/>
                        <span class="checkboxWrapper__inputDot">
                            <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"/></svg>
                        </span>
                    </label>
                    <label class="checkboxWrapper__label" for="checkbox1">Checkbox Button 1</label>
                </div>

                <div class="checkboxWrapper">
                    <label for="checkbox2" class="checkboxWrapper__inputWrapper">
                        <input class="checkboxWrapper__input" id="checkbox2" name="checkboxGroup" type="checkbox"/>
                        <span class="checkboxWrapper__inputDot">
                            <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"/></svg>
                        </span>
                    </label>
                    <label class="checkboxWrapper__label" for="checkbox2">Checkbox Button 2</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./inputGroup.js"></script>

<style lang="scss">
    // Import Main styles for this application
    @import 'inputGroup';
</style>

