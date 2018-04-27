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

            <codeBlock lang="scss">
                // Colors
                $colors: (
                &#9;"black": ("default": #1E1E24),
                &#9;"blue": ("dark": #36446C, "default": #7282B4, "light": #BBC8F0),
                &#9;"grey": ("dark": #BBBBBB, "default": #F5F5F5),
                &#9;"white": ("default": #FFFDFD),
                &#9;"green": ("default": #41B883),
                &#9;"social": ("facebook": #41B883, "twitter": #41B883, "linkedin": #41B883)
                );
            </codeBlock>

            <colors :colors="this.colors"></colors>

            <h3>Usage</h3>

            <textBlock>
                <p>
                    In order to use these grouped colors, you need to traverse through the array. Foundation proves to
                    be useful here, providing a mixing that gives you the option to retrieve the different colors by
                    their respective key by using map-deep-get().
                </p>
            </textBlock>

            <codeBlock lang="scss">
                .block {
                &#9;background-color: map-deep-get($colors, "social", "facebook");
                &#9;color: map-deep-get($colors, "white", "default");
                }
            </codeBlock>
        </content-section>

        <content-section>
            <h2>Vertical spacing</h2>

            <textBlock>
                <p>
                    Consistent use of margins is often difficult, and requires a lot of effort from designers. The
                    upside when
                    taking the time to create a vertical spacing grid however, isn't 'marginal'. >.>
                </p>
                <p>
                    In fact, aside from the unity it creates in the design, it provides the option of scaling the
                    vertical spacing based on breakpoints, instead of on every individual element. Consider using a
                    vertical spacing group when building your website for refining your layout.
                </p>
            </textBlock>

            <codeBlock lang="scss">
                // Vertical Spacing
                $verticalSpacing: (
                &#9;"small": (1: 4px, 2: 8px, 3: 12x, 3: 16px, 4: 20px, 5: 24px, 6: 28px, 7: 32px),
                &#9;"large": (1: 8px, 2: 16px, 3: 24px, 3: 32px, 4: 40px, 5: 48px, 6: 56px, 7: 64px)
                );
            </codeBlock>
        </content-section>

        <content-section>

            <h2>Basic Elements</h2>
            <textBlock>
                <p>
                    Throughout the website, different basic elements return often. This collection is not an exhaustive
                    list, but a good starting point to implement in any website solution.
                </p>
            </textBlock>

            <h3>Buttons</h3>

            <a href="#" class="button" @click.prevent>Primary Button</a>
            <a href="#" class="button button--secondary" @click.prevent>Secondary Button</a>
            <a href="#" class="button button--ghost" @click.prevent>Ghost Button</a>

            <note>
                <div class="row">
                    <div class="small-14 column">
                        <codeBlock lang="html">
                            &lt;a href="#" class="button"&gt;Primary Button&lt;/a&gt;
                            &lt;a href="#" class="button button--secondary"&gt;Secondary Button&lt;/a&gt;
                            &lt;a href="#" class="button button--ghost"&gt;Ghost Button&lt;/a&gt;
                        </codeBlock>
                    </div>
                    <div class="small-10 column">
                        <h3>Note</h3>

                        <div class="text">
                            <p>
                                To style an input field or link, we use the button class. Any variant thereof uses the
                                BEM methodology to define the different button variants. Multiple variants can be used
                                to provide maximum flexibility.
                            </p>
                        </div>
                    </div>
                </div>
            </note>

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

<script src="./atoms.js"></script>
