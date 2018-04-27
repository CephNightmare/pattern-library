<template>
    <div>
        <textBlock :isIntro="true">
            <p>
                Atoms are the basic building blocks for our website. Atoms can be described as the most simple html
                elements, such as a button, an input or a label. Furthermore, atoms can be more abstract, by defining a
                variety of variables such as colors, vertical spacing and transitions.
            </p>
        </textBlock>

        <content-section>
            <h2>Color palette</h2>

            <textBlock>
                <p>
                    When the design is created, it is often important to define the different color structures
                    accurately, and to omit any color usages that could be replaced with an already integrated color. In
                    order to get a quick overview of all the colors, it is a best practice to group them. Grouping these
                    colors are done like this.
                </p>
            </textBlock>

            <h3>Form Elements</h3>

            <input-group></input-group>

            <codeBlock lang="html">
                &lt;div class="inputGroup"&gt;
                &#9;&lt;div class="inputGroup__row"&gt;
                &#9;&#9;&lt;label class="inputGroup__label" for="firstName"&gt;Label&lt;/label&gt;
                &#9;&#9;&lt;input type="text" id="firstName" placeholder="John Doe" /&gt;
                &#9;&lt;/div&gt;
                &#9;&lt;div class="inputGroup__row"&gt;
                &#9;&#9;&lt;label class="inputGroup__label" for="description"&gt;Label&lt;/label&gt;
                &#9;&#9;&lt;textarea id="description" placeholder="A description of some kind">&lt;/textarea&gt;
                &#9;&lt;/div&gt;
                &lt;/div&gt;
            </codeBlock>

            <codeBlock lang="scss">
                .inputGroup {
                &#9;margin-bottom: rem-calc(32);
                &#9;$inputGroup: &;

                &#9;&__row {
                &#9;&#9;margin-top: rem-calc(16);
                &#9;&#9;display: flex;
                &#9;&#9;width: 100%;

                &#9;&#9;&--vertical {
                &#9;&#9;&#9;display: block;

                &#9;&#9;&#9;#{$inputGroup}__label {
                &#9;&#9;&#9;&#9;margin-bottom: rem-calc(8);
                &#9;&#9;&#9;}
                &#9;&#9;}
                &#9;}

                &#9;&__label {
                &#9;&#9;margin-right: rem-calc(16);
                &#9;&#9;float: left;
                &#9;&#9;margin-top: rem-calc(8);
                &#9;}
                }
            </codeBlock>
        </content-section>
    </div>

</template>

<script src="./molecules.js"></script>
