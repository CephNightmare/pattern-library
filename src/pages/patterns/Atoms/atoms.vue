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

            <copyToClipboard align="right" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        // Colors
                        $colors: (
                        &#9;"black": ("default": #1E1E24),
                        &#9;"blue": ("dark": #36446C, "default": #7282B4, "light": #BBC8F0),
                        &#9;"grey": ("dark": #BBBBBB, "default": #F5F5F5),
                        &#9;"white": ("default": #FFFDFD),
                        &#9;"green": ("default": #41B883),
                        &#9;"social": ("facebook": #41B883, "twitter": #41B883, "linkedin": #41B883)
                        );
                    </textarea>
            </copyToClipboard>

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
            <h2>Typography</h2>

            <textBlock>
                <p>
                    Typography, more often than not, can be tricky due to the wide variety of sizes used in a design.
                    The responsibility lies first with the designer to create a sensible overview of different header
                    styles, which we can derive a header structure from in the code. Therefore it is important to make
                    sure that there is such a thing. Preferably, we would want a styleguide to derive the various sizes
                    from.
                </p>
            </textBlock>

            <typography></typography>

            <copyToClipboard @toggleMessage="toggleMessage" align="right" buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        // SCSS location
                        // File name: typography.scss
                        // Folder location: scss/base/
                        //
                        h1, h2, h3, h4, h5, h6 {
                            margin: 0;
                            display: inline-block;
                            width: 100%;
                            line-height: 1.6;
                        }

                        h1, .h1 {
                            font-size: rem-calc(42);
                        }

                        h2, .h2 {
                            font-size: rem-calc(32);
                        }

                        h3, .h3 {
                            font-size: rem-calc(22);
                        }

                        h4, .h4 {
                            font-size: rem-calc(18);
                        }

                        h5, .h5 {
                            font-size: rem-calc(16);
                            font-weight: 400;
                        }

                        h6, .h6 {
                            font-size: rem-calc(14);
                            font-weight: 300;
                        }

                        p {
                            margin-top: 0;
                        }
                    </textarea>
            </copyToClipboard>

            <codeBlock lang="scss">
                h1, h2, h3, h4, h5, h6 {
                    margin: 0;
                    display: inline-block;
                    width: 100%;
                    line-height: 1.6;
                }

                h1, .h1 {
                    font-size: rem-calc(42);
                }

                h2, .h2 {
                    font-size: rem-calc(32);
                }

                h3, .h3 {
                    font-size: rem-calc(22);
                }

                h4, .h4 {
                    font-size: rem-calc(18);
                }

                h5, .h5 {
                    font-size: rem-calc(16);
                    font-weight: 400;
                }

                h6, .h6 {
                    font-size: rem-calc(14);
                    font-weight: 300;
                }

                p {
                    margin-top: 0;
                }
            </codeBlock>

        </content-section>

        <content-section>

            <h2>Transitions</h2>

            <textBlock>
                <p>
                    When animating, never use Javascript or jQuery. Only utilize it for class toggling to initiate
                    transitions or animations. A good default way to transition elements consistently across the website
                    is using the following code.
                </p>
            </textBlock>

            <copyToClipboard align="right" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        // SCSS location
                        // File name: variables.scss
                        // Folder location: scss/abstracts/
                        //
                        $transition-default-smoothing: ease-in-out;
                        $transition-default-time: .2s;
                        $transition-default: all $transition-default-time $transition-default-smoothing;
                    </textarea>
            </copyToClipboard>

            <codeBlock lang="scss">
                //
                // Transition defaults
                $transition-default-smoothing: ease-in-out;
                $transition-default-time: .2s;
                $transition-default: all $transition-default-time $transition-default-smoothing;
            </codeBlock>

            <codeBlock lang="scss">
                .button {
                &#9;transition: $transition-default;
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
                    vertical spacing based on breakpoints, instead of using specific margins on every individual
                    element. Consider using a
                    vertical spacing group when building your website for refining your layout.
                </p>
            </textBlock>

            <copyToClipboard align="right" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        // SCSS location
                        // File name: variables.scss
                        // Folder location: scss/abstracts/
                        //
                        $verticalSpacing: (
                        &#9;"small": (1: 4px, 2: 8px, 3: 12x, 3: 16px, 4: 20px, 5: 24px, 6: 28px, 7: 32px),
                        &#9;"large": (1: 8px, 2: 16px, 3: 24px, 3: 32px, 4: 40px, 5: 48px, 6: 56px, 7: 64px)
                        );
                    </textarea>
            </copyToClipboard>

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

            <title-block>
                <h3 class="titleBlock__title">Buttons</h3>

                <copyToClipboard class="titleBlock__copyToClipboard" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        // SCSS location
                        // File name: buttons.scss
                        // Folder location: scss/base/
                        //
                        .button {
                            border-radius: rem-calc(4);
                            padding: 0 rem-calc(16);
                            height: rem-calc(40);
                            line-height: rem-calc(40);
                            background-color: map-deep-get($colors, "black", "default");
                            color: map-deep-get($colors, "white", "default");
                            border: 1px solid transparent;
                            transition: $transition-default;
                            font-weight: 700;
                            text-transform: capitalize;
                            text-align: center;
                            margin-right: rem-calc(16);
                            display: inline-flex;
                            white-space: nowrap;

                            &:hover,
                            &:focus {
                                background-color: map-deep-get($colors, "grey", "dark");
                                outline: none;
                            }

                            &--secondary {
                                background-color: map-deep-get($colors, "grey", "dark");

                                &:hover,
                                &:focus {
                                    background-color: map-deep-get($colors, "black", "default");
                                }
                            }

                            &--ghost {
                                background-color: transparent;
                                border: 1px solid map-deep-get($colors, "black", "default");
                                color: map-deep-get($colors, "black", "default");

                                &:hover,
                                &:focus {
                                    color: map-deep-get($colors, "grey", "default");
                                    background-color: map-deep-get($colors, "black", "default");
                                }
                            }

                            &--icon {
                                position: relative;

                                svg {
                                    width: rem-calc(20);
                                    fill: map-deep-get($colors, "white", "default");
                                    margin-left: rem-calc(12);
                                }
                            }
                        }
                    </textarea>
                </copyToClipboard>
            </title-block>


            <buttons>
                <a href="#" class="button" @click.prevent>Primary Button</a>
                <a href="#" class="button button--secondary" @click.prevent>Secondary Button</a>
                <a href="#" class="button button--ghost" @click.prevent>Ghost Button</a>
            </buttons>

            <note>
                <div class="row">
                    <div class="small-24 medium-14 column">
                        <codeBlock lang="html">
                            &lt;a href="#" class="button"&gt;Primary Button&lt;/a&gt;
                            &lt;a href="#" class="button button--secondary"&gt;Secondary Button&lt;/a&gt;
                            &lt;a href="#" class="button button--ghost"&gt;Ghost Button&lt;/a&gt;
                        </codeBlock>
                    </div>
                    <div class="small-24 medium-10 column">
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

            <title-block>
                <h4 class="titleBlock__title">Textual elements</h4>
                <copyToClipboard class="titleBlock__copyToClipboard" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        // SCSS location
                        // File name: form.scss
                        // Folder location: scss/base/
                        //
                        input {
                            border-radius: rem-calc(4);
                            height: rem-calc(40);
                            border: 1px solid map-deep-get($colors, "grey", "dark");
                            padding: 0 rem-calc(16);
                            width: 100%;

                            &:focus {
                                outline: none;
                                border: 1px solid map-deep-get($colors, "black", "default");
                            }
                        }

                        textarea {
                            border-radius: rem-calc(4);
                            border: 1px solid map-deep-get($colors, "grey", "dark");
                            padding: rem-calc(8) rem-calc(16);
                            resize: vertical;
                            min-height: rem-calc(100);
                            width: 100%;

                            &:focus {
                                outline: none;
                                border: 1px solid map-deep-get($colors, "black", "default");
                            }
                        }

                        label {
                            font-weight: 700;
                        }
                    </textarea>
                </copyToClipboard>
            </title-block>

            <codeBlock lang="html">
                &lt;div class="inputGroup__row"&gt;
                &#9;&lt;label class="inputGroup__label" for="firstName"&gt;Text input&lt;/label&gt;
                &#9;&lt;input type="text" id="firstName" placeholder="John Doe"/&gt;
                &lt;/div&gt;

                &lt;div class="inputGroup__row"&gt;
                &#9;&lt;label class="inputGroup__label" for="description"&gt;Textarea&lt;/label&gt;
                &#9;&lt;textarea id="description" placeholder="A description of some kind"&gt;&lt;/textarea&gt;
                &lt;/div&gt;

                &lt;div class="inputGroup__row"&gt;
                &#9;&lt;label class="inputGroup__label" for="email"&gt;E-mail&lt;/label&gt;
                &#9;&lt;input id="email" type="email" placeholder="johndoe@outlook.com"/&gt;
                &lt;/div&gt;
            </codeBlock>

            <title-block>
                <h4 class="titleBlock__title">Radio buttons</h4>

                <copyToClipboard class="titleBlock__copyToClipboard" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        // SCSS location
                        // File name: form.scss
                        // Folder location: scss/base/
                        //
                        .radioWrapper {
                            display: flex;
                            align-items: center;
                            margin-bottom: rem-calc(8);
                            $radioWrapper: &;

                            &:last-of-type {
                                margin-bottom: 0;
                            }

                            &__inputWrapper {
                                position: relative;
                                width: rem-calc(20);
                                height: rem-calc(20);
                                margin-right: rem-calc(8);
                                float: left;
                                cursor: pointer;

                                &::before {
                                    content: "";
                                    position: absolute;
                                    z-index: 1;
                                    border-radius: 50%;
                                    background-color: map-deep-get($colors, "white", "default");
                                    border: 1px solid map-deep-get($colors, "grey", "dark");
                                    display: block;
                                    left: 0;
                                    top: 0;
                                    bottom: 0;
                                    right: 0;
                                }
                            }

                            &__inputDot {
                                position: absolute;
                                left: rem-calc(4);
                                top: rem-calc(4);
                                z-index: 2;
                                border-radius: 50%;
                                background-color: map-deep-get($colors, "black", "default");
                                width: rem-calc(12);
                                height: rem-calc(12);
                                opacity: 0;
                            }

                            &__input {
                                line-height: 1;
                                position: absolute;
                                left: rem-calc(-999);

                                &:checked {
                                    + #{$radioWrapper}__inputDot {
                                        opacity: 1;
                                    }
                                }
                            }

                            &__label {
                                font-size: rem-calc(15);
                                cursor: pointer;
                            }
                        }
                    </textarea>
                </copyToClipboard>
            </title-block>

            <codeBlock lang="html">
                &lt;div class="inputGroup__row"&gt;
                &#9;&lt;label class="inputGroup__label" for="email"&gt;Radio buttons&lt;/label&gt;

                &#9;&lt;div class="inputGroup__valueWrapper"&gt;

                &#9;&#9;&lt;div class="radioWrapper"&gt;
                &#9;&#9;&#9;&lt;label for="radio1" class="radioWrapper__inputWrapper"&gt;
                &#9;&#9;&#9;&#9;&lt;input class="radioWrapper__input" id="radio1" name="radioGroup" type="radio"/&gt;
                &#9;&#9;&#9;&#9;&lt;span class="radioWrapper__inputDot"&gt;&lt;/span&gt;
                &#9;&#9;&#9;&lt;/label&gt;
                &#9;&#9;&#9;&lt;label class="radioWrapper__label" for="radio1"&gt;Radio Button 1&lt;/label&gt;
                &#9;&#9;&lt;/div&gt;

                &#9;&#9;&lt;div class="radioWrapper"&gt;
                &#9;&#9;&#9;&lt;label for="radio2" class="radioWrapper__inputWrapper"&gt;
                &#9;&#9;&#9;&#9;&lt;input class="radioWrapper__input" id="radio2" name="radioGroup" type="radio"/&gt;
                &#9;&#9;&#9;&#9;&lt;span class="radioWrapper__inputDot"&gt;&lt;/span&gt;
                &#9;&#9;&#9;&lt;/label&gt;
                &#9;&#9;&#9;&lt;label class="radioWrapper__label" for="radio2"&gt;Radio Button 2&lt;/label&gt;
                &#9;&#9;&lt;/div&gt;

                &#9;&lt;/div&gt;
                &lt;/div&gt;
            </codeBlock>

            <title-block>
                <h4 class="titleBlock__title">Checkbox buttons</h4>
                <copyToClipboard class="titleBlock__copyToClipboard" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        // SCSS location
                        // File name: form.scss
                        // Folder location: scss/base/
                        //
                        .checkboxWrapper {
                            display: flex;
                            align-items: center;
                            margin-bottom: rem-calc(8);
                            $checkboxWrapper: &;

                            &:last-of-type {
                                margin-bottom: 0;
                            }

                            &__inputWrapper {
                                position: relative;
                                width: rem-calc(20);
                                height: rem-calc(20);
                                margin-right: rem-calc(8);
                                float: left;
                                cursor: pointer;

                                &::before {
                                    content: "";
                                    position: absolute;
                                    z-index: 1;
                                    border-radius: rem-calc(4);
                                    background-color: map-deep-get($colors, "white", "default");
                                    border: 1px solid map-deep-get($colors, "grey", "dark");
                                    display: block;
                                    left: 0;
                                    top: 0;
                                    bottom: 0;
                                    right: 0;
                                }
                            }

                            &__inputDot {
                                position: absolute;
                                z-index: 2;
                                width: rem-calc(22);
                                left: rem-calc(2);
                                opacity: 0;
                                bottom: rem-calc(-6);

                                svg {
                                    fill: map-deep-get($colors, "black", "default");
                                }
                            }

                            &__input {
                                line-height: 1;
                                position: absolute;
                                left: rem-calc(-999);

                                &:checked {
                                    + #{$checkboxWrapper}__inputDot {
                                        opacity: 1;
                                    }
                                }
                            }

                            &__label {
                                font-size: rem-calc(15);
                                cursor: pointer;
                            }
                        }
                    </textarea>
                </copyToClipboard>
            </title-block>

            <codeBlock lang="html">
                &lt;div class="inputGroup__row"&gt;
                &#9;&lt;label class="inputGroup__label" for="email"&gt;Checkbox buttons&lt;/label&gt;

                &#9;&lt;div class="inputGroup__valueWrapper"&gt;

                &#9;&#9;&lt;div class="checkboxWrapper"&gt;
                &#9;&#9;&#9;&lt;label for="checkbox1" class="checkboxWrapper__inputWrapper"&gt;
                &#9;&#9;&#9;&#9;&lt;input class="checkboxWrapper__input" id="checkbox1" name="checkboxGroup" type="checkbox"/&gt;
                &#9;&#9;&#9;&#9;&lt;span class="checkboxWrapper__inputDot"&gt;
                &#9;&#9;&#9;&#9;&#9;&lt;svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"&gt;&lt;path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"/&gt;&lt;/svg&gt;
                &#9;&#9;&#9;&#9;&lt;/span&gt;
                &#9;&#9;&#9;&lt;/label&gt;
                &#9;&#9;&#9;&lt;label class="checkboxWrapper__label" for="checkbox1"&gt;Checkbox Button 1&lt;/label&gt;
                &#9;&#9;&lt;/div&gt;

                &#9;&#9;&lt;div class="checkboxWrapper"&gt;
                &#9;&#9;&#9;&lt;label for="checkbox2" class="checkboxWrapper__inputWrapper"&gt;
                &#9;&#9;&#9;&#9;&lt;input class="checkboxWrapper__input" id="checkbox2" name="checkboxGroup" type="checkbox"/&gt;
                &#9;&#9;&#9;&#9;&lt;span class="checkboxWrapper__inputDot"&gt;
                &#9;&#9;&#9;&#9;&#9;&lt;svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"&gt;&lt;path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"/&gt;&lt;/svg&gt;
                &#9;&#9;&#9;&#9;&lt;/span&gt;
                &#9;&#9;&#9;&lt;/label&gt;
                &#9;&#9;&#9;&lt;label class="checkboxWrapper__label" for="checkbox2"&gt;Checkbox Button 2&lt;/label&gt;
                &#9;&#9;&lt;/div&gt;

                &#9;&lt;/div&gt;
                &lt;/div&gt;
            </codeBlock>
        </content-section>

        <transition enterClass="message--enter" leaveToClass="message--leaveTo">
            <message :messageText="this.messageText" v-if="showMessage"></message>
        </transition>

    </div>
</template>

<script src="./atoms.js"></script>