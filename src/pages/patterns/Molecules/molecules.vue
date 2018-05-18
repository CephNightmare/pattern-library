<template>
    <div>
        <textBlock :isIntro="true">
            <p>
                Molecules can be described as the combination of atoms, creating a unit of function. Whenever building
                or designing your website, using atoms to build your molecules is an essential part of atomic design.
                This is imperative for creating a scalable, efficient and high quality product.
            </p>
        </textBlock>

        <content-section>

            <title-block>
                <h2 class="titleBlock__title">Hero</h2>
                <copyToClipboard class="titleBlock__copyToClipboard" align="right" @toggleMessage="toggleMessage"
                                 buttonTitle="Copy HTML">
                    <textarea class="copyToClipboard__toCopy">
                        &lt;section class="hero"&gt;
                        &#9;&lt;div class="hero__content"&gt;
                        &#9;&#9;&lt;div class="row"&gt;
                        &#9;&#9;&#9;&lt;div class="small-24 large-18 xlarge-16 large-centered column"&gt;
                        &#9;&#9;&#9;&#9;&lt;h1 class="hero__title"&gt;Dé titel der titels, volledige overtuiging gegarandeerd!&lt;/h1&gt;

                        &#9;&#9;&#9;&#9;&lt;div class="text text--intro hero__text"&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;p>Nog niet overtuigd? Ons werk zal dat zeker wel doen.&lt;/p&gt;
                        &#9;&#9;&#9;&#9;&lt;/div&gt;

                        &#9;&#9;&#9;&#9;&lt;a class="button" href="#">Bekijk ons werk&lt;/a&gt;
                        &#9;&#9;&#9;&lt;/div&gt;
                        &#9;&#9;&lt;/div&gt;
                        &#9;&lt;/div&gt;
                        &lt;/section&gt;
                    </textarea>
                </copyToClipboard>
                <copyToClipboard class="titleBlock__copyToClipboard" align="right" @toggleMessage="toggleMessage"
                                 buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        $hero-height: ("small": rem-calc(350), "medium": rem-calc(550), "large": rem-calc(700));

                        .hero {
                            min-height: map_get($hero-height, small);
                            height: 85vh;
                            text-align: center;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background-image: url("../../assets/images/hero.png");
                            background-size: cover;
                            background-position: center;
                            position: relative;
                            margin-bottom: rem-calc(32);

                            @media only screen and (min-width: map_get($breakpoints, medium)) {
                                min-height: map_get($hero-height, medium);
                            }
                            @media only screen and (min-width: map_get($breakpoints, large)) {
                                min-height: map_get($hero-height, large);
                            }

                            &::before {
                                content: "";
                                position: absolute;
                                left: 0;
                                top: 0;
                                bottom: 0;
                                right: 0;
                                z-index: 2;
                                background-color: rgba(map-deep-get($colors, "black", "default"), .5);
                            }

                            &__img {
                                position: absolute;
                                left: 0;
                                right: 0;
                                top: 0;
                                bottom: 0;
                                width: 100%;
                                background-size: cover;
                                background-position: center;
                                z-index: 1;
                            }

                            &__content {
                                position: relative;
                                z-index: 3;
                                width: 100%;
                            }

                            &__title {
                                color: map-deep-get($colors, "white", "default");
                                margin-bottom: rem-calc(32);
                            }

                            &__text {
                                color: map-deep-get($colors, "white", "default");
                                margin-bottom: rem-calc(32);
                            }
                        }
                    </textarea>
                </copyToClipboard>
            </title-block>

            <hero>
                <h1 class="hero__title">Dé titel der titels, volledige overtuiging gegarandeerd!</h1>
                <textBlock class="hero__text" :isIntro="true">
                    <p>
                        Nog niet overtuigd? Ons werk zal dat zeker wel doen.
                    </p>
                </textBlock>

                <a class="button" href="#">Bekijk ons werk</a>
            </hero>

            <codeBlock lang="html">
                &lt;section class="hero"&gt;
                &#9;&lt;div class="hero__content"&gt;
                &#9;&#9;&lt;div class="row"&gt;
                &#9;&#9;&#9;&lt;div class="small-24 large-18 xlarge-16 large-centered column"&gt;
                &#9;&#9;&#9;&#9;&lt;h1 class="hero__title"&gt;Dé titel der titels, volledige overtuiging gegarandeerd!&lt;/h1&gt;

                &#9;&#9;&#9;&#9;&lt;div class="text text--intro hero__text"&gt;
                &#9;&#9;&#9;&#9;&#9;&lt;p>Nog niet overtuigd? Ons werk zal dat zeker wel doen.&lt;/p&gt;
                &#9;&#9;&#9;&#9;&lt;/div&gt;

                &#9;&#9;&#9;&#9;&lt;a class="button" href="#">Bekijk ons werk&lt;/a&gt;
                &#9;&#9;&#9;&lt;/div&gt;
                &#9;&#9;&lt;/div&gt;
                &#9;&lt;/div&gt;
                &lt;/section&gt;
            </codeBlock>

            <textBlock>
                <h3>Notes</h3>
                <p>
                    If you want to left align the hero text, simply remove text-align: center; line. Also note that the
                    typography is not defined on the Hero molecule. This is by design, because the typography should be
                    centralized in the typography.scss file.
                </p>
            </textBlock>
        </content-section>

        <content-section>

            <h2>Cards</h2>

            <textBlock>
                <p>
                    When creating a website, an overview of any kind usually is based on an image, a title, some text
                    and a link. Whenever this happens, this should be the place where you can find the best examples to
                    work from.
                </p>
            </textBlock>

            <div class="row">
                <div class="small-24 large-12 column">
                    <copyToClipboard class="titleBlock__copyToClipboard" align="right" @toggleMessage="toggleMessage" buttonTitle="Copy HTML">
                        <textarea class="copyToClipboard__toCopy">
                            &lt;a href="#" class="card"&gt;
                            &#9;&lt;div class="card__imageWrapper"&gt;
                            &#9;&#9;&lt;img class="b-lazy card__image" src="/assets/images/card-placeholder.png"
                            &#9;&#9;&#9; data-src="@/assets/images/card.png" alt="card image"/&gt;

                            &#9;&#9;&lt;div class="card__arrow"&gt;
                            &#9;&#9;&#9;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"&gt;
                            &#9;&#9;&#9;&#9;&lt;path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/&gt;
                            &#9;&#9;&#9;&lt;/svg&gt;
                            &#9;&#9;&lt;/div&gt;
                            &#9;&lt;/div&gt;

                            &#9;&lt;div class="card__content"&gt;
                            &#9;&#9;&lt;h3&gt;Vertical card&lt;/h3&gt;

                            &#9;&#9;&lt;p class="card__text"&gt;
                            &#9;&#9;&#9;Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace
                            &#9;&#9;&#9;holystone
                            &#9;&#9;&#9;mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab
                            &#9;&#9;&#9;barque interloper chantey
                            &#9;&#9;&#9;doubloon starboard grog black jack gangway rutters.
                            &#9;&#9;&lt;/p&gt;
                            &#9;&lt;/div&gt;
                            &lt;/a&gt;
                        </textarea>
                    </copyToClipboard>

                    <copyToClipboard class="titleBlock__copyToClipboard" align="right" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        .card {
                            color: map-deep-get($colors, "black", "default");
                            display: block;
                            margin: rem-calc(16) 0;
                            position: relative;
                            width: 100%;
                            float: left;
                            clear: both;
                            $card: &;

                            &__imageWrapper {
                                position: relative;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                &::before {
                                    content: "";
                                    position: absolute;
                                    left: 0;
                                    right: 0;
                                    bottom: 0;
                                    top: 0;
                                    z-index: 2;
                                    background-color: rgba(map-deep-get($colors, "black", "default"), .5);
                                    opacity: 0;
                                    transition: $transition-default;
                                    border-radius: $border-radius-default;
                                }
                            }

                            &__image {
                                width: 100%;
                                display: block;
                                border-radius: $border-radius-default;
                                position: relative;
                                z-index: 1;
                            }

                            &__readMoreText {
                                float: left;
                            }

                            &__content {
                                padding: rem-calc(16) 0;
                                transition: $transition-default;
                                z-index: 3;
                                position: relative;
                            }

                            &__arrow {
                                position: absolute;
                                height: 40px;
                                width: 40px;
                                transform: translateX(-20px);
                                opacity: 0;
                                transition: $transition-default;
                                z-index: 3;

                                svg {
                                    fill: map-deep-get($colors, "white", "default");
                                }
                            }

                            &:hover, &:focus {
                                #{$card}__imageWrapper {
                                    &::before {
                                        opacity: 1;
                                    }
                                }

                                #{$card}__arrow {
                                    opacity: 1;
                                    transform: translateX(0);
                                }
                            }
                        }
                    </textarea>
                    </copyToClipboard>

                    <card>
                        <a href="#" class="card">
                            <div class="card__imageWrapper">
                                <img class="b-lazy card__image" :src="require('@/assets/images/card-placeholder.png')"
                                     :data-src="require('@/assets/images/card.png')" alt="card image"/>

                                <div class="card__arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
                                        <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="card__content">
                                <h3>Vertical card</h3>

                                <p class="card__text">
                                    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace
                                    holystone
                                    mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab
                                    barque interloper chantey
                                    doubloon starboard grog black jack gangway rutters.
                                </p>
                            </div>
                        </a>
                    </card>
                </div>

                <div class="small-24 large-12 column">
                    <copyToClipboard class="titleBlock__copyToClipboard" align="right" @toggleMessage="toggleMessage" buttonTitle="Copy HTML">
                        <textarea class="copyToClipboard__toCopy">
                            &lt;a href="#" class="card"&gt;
                            &#9;&lt;div class="card__imageWrapper"&gt;
                            &#9;&#9;&lt;img class="b-lazy card__image" src="/assets/images/card-placeholder.png"
                            &#9;&#9;&#9; data-src="@/assets/images/card.png" alt="card image"/&gt;

                            &#9;&#9;&lt;div class="card__arrow"&gt;
                            &#9;&#9;&#9;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"&gt;
                            &#9;&#9;&#9;&#9;&lt;path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/&gt;
                            &#9;&#9;&#9;&lt;/svg&gt;
                            &#9;&#9;&lt;/div&gt;
                            &#9;&lt;/div&gt;

                            &#9;&lt;div class="card__content"&gt;
                            &#9;&#9;&lt;h3&gt;Vertical card&lt;/h3&gt;

                            &#9;&#9;&lt;p class="card__text"&gt;
                            &#9;&#9;&#9;Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace
                            &#9;&#9;&#9;holystone
                            &#9;&#9;&#9;mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab
                            &#9;&#9;&#9;barque interloper chantey
                            &#9;&#9;&#9;doubloon starboard grog black jack gangway rutters.
                            &#9;&#9;&lt;/p&gt;
                            &#9;&lt;/div&gt;
                            &lt;/a&gt;
                        </textarea>
                    </copyToClipboard>

                    <copyToClipboard class="titleBlock__copyToClipboard" align="right" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                        <textarea class="copyToClipboard__toCopy">
                            .card {
                                color: map-deep-get($colors, "black", "default");
                                background-color: map-deep-get($colors, "white", "default");
                                display: block;
                                margin: 0 0 rem-calc(16) 0;
                                position: relative;
                                width: 100%;
                                clear: both;
                                $card: &;

                                &__imageWrapper {
                                    position: relative;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    &::before {
                                        content: "";
                                        position: absolute;
                                        left: 0;
                                        right: 0;
                                        bottom: 0;
                                        top: 0;
                                        z-index: 2;
                                        background-color: rgba(map-deep-get($colors, "black", "default"), .5);
                                        opacity: 0;
                                        transition: $transition-default;
                                        border-radius: $border-radius-default;
                                    }
                                }

                                &__image {
                                    width: 100%;
                                    display: block;
                                    border-radius: $border-radius-default $border-radius-default 0 0;
                                    position: relative;
                                    z-index: 1;
                                }

                                &__readMoreText {
                                    float: left;
                                }

                                &__content {
                                    padding: rem-calc(16);
                                    border: 1px solid map-deep-get($colors, "grey", "dark");
                                    border-radius: 0 0 $border-radius-default $border-radius-default;
                                    transition: $transition-default;
                                }

                                &__arrow {
                                    position: absolute;
                                    height: 40px;
                                    width: 40px;
                                    transform: translateX(-20px);
                                    opacity: 0;
                                    transition: $transition-default;
                                    z-index: 3;

                                    svg {
                                        fill: map-deep-get($colors, "white", "default");
                                    }
                                }

                                &:hover, &:focus {
                                    #{$card}__imageWrapper {
                                        &::before {
                                            opacity: 1;
                                        }
                                    }

                                    #{$card}__arrow {
                                        opacity: 1;
                                        transform: translateX(0);
                                    }

                                    #{$card}__content {
                                        box-shadow: $box-shadow-default;
                                    }
                                }
                            }
                        </textarea>
                    </copyToClipboard>

                    <card>
                        <a href="#" class="card card--whiteBG">
                            <div class="card__imageWrapper">
                                <img class="b-lazy card__image" :src="require('@/assets/images/card-placeholder.png')"
                                     :data-src="require('@/assets/images/card.png')" alt="card image"/>

                                <div class="card__arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
                                        <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="card__content">
                                <h3>Vertical card with white background</h3>

                                <p class="card__text">
                                    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace
                                    holystone
                                    mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab
                                    barque interloper chantey
                                    doubloon starboard grog black jack gangway rutters.
                                </p>
                            </div>
                        </a>
                    </card>
                </div>

                <div class="small-24 large-12 column end">
                    <copyToClipboard class="titleBlock__copyToClipboard" align="right" @toggleMessage="toggleMessage" buttonTitle="Copy HTML">
                        <textarea class="copyToClipboard__toCopy">
                            &lt;a href="#" class="b-lazy card" data-src="/assets/images/card.png"&gt;
                            &#9;&lt;div class="card__content"&gt;
                            &#9;&#9;&lt;h3&gt;Card with background image&lt;/h3&gt;

                            &#9;&#9;&lt;p class="card__text"&gt;
                            &#9;&#9;&#9;Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace
                            &#9;&#9;&#9;holystone
                            &#9;&#9;&#9;mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab
                            &#9;&#9;&#9;barque interloper chantey
                            &#9;&#9;&#9;doubloon starboard grog black jack gangway rutters.
                            &#9;&#9;&lt;/p&gt;
                            &#9;&lt;/div&gt;

                            &#9;&lt;div class="card__arrow"&gt;
                            &#9;&#9;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"&gt;
                            &#9;&#9;&#9;&lt;path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/&gt;
                            &#9;&#9;&lt;/svg&gt;
                            &#9;&lt;/div&gt;
                            &lt;/a&gt;
                        </textarea>
                    </copyToClipboard>

                    <copyToClipboard class="titleBlock__copyToClipboard" align="right" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                        <textarea class="copyToClipboard__toCopy">
                            .card {
                                color: map-deep-get($colors, "white", "default");
                                background-color: map-deep-get($colors, "white", "default");
                                display: block;
                                margin: 0 0 rem-calc(16) 0;
                                position: relative;
                                width: 100%;
                                clear: both;
                                background-size: cover;
                                background-position: center;
                                border-radius: $border-radius-default;
                                padding-bottom: rem-calc(64);
                                transition: $transition-default;
                                $card: &;

                                &::before {
                                    content: "";
                                    position: absolute;
                                    left: 0;
                                    right: 0;
                                    bottom: 0;
                                    top: 0;
                                    z-index: 2;
                                    background-color: rgba(map-deep-get($colors, "black", "default"), .5);
                                    transition: $transition-default;
                                    border-radius: $border-radius-default;
                                }

                                &__content {
                                    padding: rem-calc(16);
                                    transition: $transition-default;
                                    z-index: 3;
                                    position: relative;
                                }

                                &__arrow {
                                    height: 40px;
                                    width: 40px;
                                    position: absolute;
                                    right: rem-calc(20);
                                    bottom: rem-calc(20);
                                    border: 1px solid map-deep-get($colors, "white", "default");
                                    border-radius: 50%;
                                    display: flex;
                                    justify-content: center;
                                    transition: $transition-default;
                                    z-index: 3;

                                    svg {
                                        width: rem-calc(30);
                                        fill: map-deep-get($colors, "white", "default");
                                    }
                                }

                                &:hover, &:focus {
                                    box-shadow: $box-shadow-default;

                                    #{$card}__arrow {
                                        background-color: map-deep-get($colors, "gold", "default");
                                    }
                                }
                            }
                        </textarea>
                    </copyToClipboard>

                    <card>
                        <a href="#" class="b-lazy card card--backgroundImage"
                           :data-src="require('@/assets/images/card.png')">
                            <div class="card__content">
                                <h3>Card with background image</h3>

                                <p class="card__text">
                                    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace
                                    holystone
                                    mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab
                                    barque interloper chantey
                                    doubloon starboard grog black jack gangway rutters.
                                </p>
                            </div>

                            <div class="card__arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
                                    <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/>
                                </svg>
                            </div>
                        </a>
                    </card>
                </div>
            </div>

            <textBlock>
                <h3>Notes</h3>
                <p>
                    If you want a link that doesn't wrap the entire element, just replace the a element with a div
                    element and remove the href. Any hover state can then be removed.
                </p>
            </textBlock>
        </content-section>
        <transition enterClass="message--enter" leaveToClass="message--leaveTo">
            <message :messageText="this.messageText" v-if="showMessage"></message>
        </transition>
    </div>
</template>

<script src="./molecules.js"></script>