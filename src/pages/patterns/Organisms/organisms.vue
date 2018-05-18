<template>
    <div>
        <textBlock :isIntro="true">
            <p>
                Organisms are described as the continued combining of molecules and atoms, forming a unit. Complexity
                often exponentially increases when creating organisms. These organisms will be key to bootstrapping your
                website.
            </p>
        </textBlock>

        <content-section>

            <title-block>
                <h2 class="titleBlock__title">Header</h2>
                <copyToClipboard class="titleBlock__copyToClipboard" align="right" @toggleMessage="toggleMessage" buttonTitle="Copy HTML">
                    <textarea class="copyToClipboard__toCopy">
                        &lt;header class="header"&gt;
                        &#9;&lt;div class="header__row"&gt;
                        &#9;&#9;&lt;div class="header__column small-24 column"&gt;
                        &#9;&#9;&#9;&lt;div class="header__leftSection"&gt;
                        &#9;&#9;&#9;&lt;a class="logo header__logo" href="#"&gt;
                        &#9;&#9;&#9;&#9;&lt;svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 101 101" style="enable-background:new 0 0 101 101;" xml:space="preserve"&gt;
                        &#9;&#9;&lt;g&gt;
                        &#9;&#9;&lt;g transform="translate(-70 -46)"&gt;
                        &#9;&#9;&#9;&lt;g&gt;
                        &#9;&#9;&#9;&#9;&lt;g&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;path id="jsjpb" class="st0" d="M112.2,94.3c-0.4-0.3-0.9-0.4-1.4-0.3c-0.6,0.1-1.1,0.3-1.3,0.7c-0.3,0.4-0.4,0.8-0.5,1.3l4-0.6&#9;  C112.9,94.9,112.7,94.6,112.2,94.3"/&gt;
                        &#9;&#9;&#9;&#9;&lt;/g&gt;
                        &#9;&#9;&#9;&lt;/g&gt;
                        &#9;&#9;&#9;&lt;g&gt;
                        &#9;&#9;&#9;&#9;&lt;g&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;g&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&lt;g&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&#9;&lt;path id="jsjpd" class="st0" d="M128.5,94.1c-0.9,0-1.6,0.3-2.2,1c-0.6,0.6-0.9,1.5-0.9,2.7c0,1.1,0.3,2,0.8,2.8&#9;&#9;c0.5,0.7,1.3,1.1,2.2,1.1c0.9,0,1.6-0.3,2.2-1c0.6-0.8,0.9-1.7,0.9-2.7c0-1.1-0.3-2.1-0.8-2.8C130.2,94.4,129.4,94,128.5,94.1&#9;&#9;"/&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&lt;/g&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;/g&gt;
                        &#9;&#9;&#9;&#9;&lt;/g&gt;
                        &#9;&#9;&#9;&#9;&lt;g&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;g&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&lt;g&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&#9;&lt;path id="jsjpe" class="st0" d="M159.8,105.7c-0.4,0-0.7,0-1.1-0.1c-0.4-0.1-0.7-0.2-1.1-0.3c-0.8-0.4-1.5-1.1-1.7-2&#9;&#9;c-0.2-0.6-0.3-1.3-0.3-1.9V85.2c0-0.7,0.3-1,1-1h0.9c0.7,0,1,0.3,1,1v15.9c0,0.8,0.1,1.3,0.4,1.6c0.3,0.3,0.6,0.4,1,0.5&#9;&#9;c0.5,0.1,0.8,0.4,0.8,0.9v0.7C160.8,105.4,160.4,105.7,159.8,105.7L159.8,105.7z M152.9,104.6c0,0.7-0.3,1-1,1h-0.9&#9;&#9;c-0.7,0-1-0.3-1-1v-8.2c0-0.6,0-1.1-0.1-1.5c-0.1-0.4-0.2-0.8-0.4-1.2c-0.2-0.4-0.5-0.7-0.9-0.8c-1.8-0.7-3.9-0.1-5.1,1.3&#9;&#9;c-1,1.1-1.5,2.6-1.4,4.1v6.3c0,0.7-0.3,1-1,1H140c-0.7,0-1-0.3-1-1V91.2c0-0.7,0.3-1,1-1h0.9c0.7,0,1,0.3,1,1v1.4l-0.1,0.9&#9;&#9;h0.1c0.2-0.4,0.4-0.8,0.7-1.1s0.7-0.8,1.2-1.2c0.5-0.4,1.1-0.7,1.7-0.9c0.7-0.2,1.4-0.4,2.2-0.4c1.8,0,3.1,0.5,3.9,1.5&#9;&#9;c0.9,1,1.3,2.4,1.3,4.4L152.9,104.6z M134.8,103.7c-1.3,1.5-3.2,2.3-5.1,2.3c-0.6,0-1.2-0.1-1.7-0.2c-0.5-0.1-0.9-0.3-1.3-0.6&#9;&#9;c-0.3-0.2-0.6-0.4-0.8-0.7c-0.2-0.2-0.4-0.4-0.5-0.6l-0.2-0.2h-0.1c0,0.1,0,0.2,0,0.3v0.1c0,0.4-0.1,0.8-0.4,1&#9;&#9;c-0.3,0.2-0.7,0.4-1.2,0.4H122c-1.1,0-1.7-0.6-1.7-1.7V86.2c0-1.1,0.5-1.8,1.7-2.2l1.9-0.7c1.4-0.4,1.8,0.5,1.7,1.3v5.6&#9;&#9;l-0.1,1.3h0.1l0.2-0.2c0.4-0.4,0.9-0.8,1.4-1.1c0.8-0.5,1.8-0.7,2.8-0.7c2,0,3.7,0.8,5,2.2c1.3,1.6,2,3.7,1.9,5.8&#9;&#9;C136.8,100.2,136.1,102.2,134.8,103.7L134.8,103.7z M118.6,103.7c-2.4,2-5.6,2.9-8.8,2.3c-1.1-0.2-2.1-0.7-3-1.3&#9;&#9;c-1.7-1.3-2.8-3.1-3.1-5.2c-0.3-1.4-0.2-2.9,0.2-4.2c0.4-1.3,1.2-2.5,2.3-3.4c1.2-1,2.6-1.6,4.1-1.8c1.3-0.3,2.7-0.2,4,0.3&#9;&#9;c1.2,0.4,2.2,1.2,2.9,2.2c0.7,1,1.2,2.2,1.5,3.6c0.1,0.4,0,0.8-0.3,1.2s-0.7,0.7-1.1,0.7l-8.1,1.4c0.3,0.9,0.9,1.5,1.6,1.8&#9;&#9;c0.8,0.3,1.6,0.4,2.4,0.3c1-0.2,1.9-0.6,2.7-1.2c0.3-0.2,0.6-0.4,0.9-0.4c0.1,0,0.2,0,0.3,0c0.4,0,0.7,0.3,1.1,0.7l0.6,0.7&#9;&#9;c0.2,0.3,0.4,0.6,0.4,0.9C119.3,102.8,119.1,103.2,118.6,103.7L118.6,103.7z M103.1,92l-3.4,12.3c-0.2,0.9-0.9,1.4-1.8,1.4&#9;&#9;h-2.9c-1,0-1.6-0.5-1.8-1.4l-1.4-5.8c-0.1-0.5-0.2-1-0.3-1.4l0-0.2h-0.1c-0.1,0.6-0.2,1.1-0.3,1.7l-1.4,5.8&#9;&#9;c-0.2,1-0.8,1.4-1.8,1.4h-3c-1,0-1.6-0.5-1.8-1.4L79.5,92c-0.1-0.2-0.1-0.4-0.1-0.6c0-0.3,0.1-0.6,0.3-0.8&#9;&#9;c0.3-0.3,0.7-0.5,1.3-0.5H83c1,0,1.6,0.5,1.8,1.5l1.6,7.7c0.1,0.5,0.2,0.9,0.2,1.4v0.2h0.1c0-0.5,0.1-1.1,0.3-1.6l1.8-7.7&#9;&#9;c0.2-1,0.8-1.5,1.8-1.5h1.5c1,0,1.6,0.5,1.8,1.5l1.8,7.7c0.1,0.5,0.2,0.9,0.2,1.4l0,0.2H96c0-0.5,0.1-1.1,0.2-1.6l1.6-7.7&#9;&#9;c0.2-1,0.8-1.5,1.8-1.5h2c0.6,0,1,0.2,1.3,0.5c0.2,0.2,0.2,0.5,0.2,0.8C103.2,91.6,103.1,91.8,103.1,92L103.1,92z M70,96.5&#9;&#9;c0,27.9,22.6,50.5,50.5,50.5s50.5-22.6,50.5-50.5c0,0,0,0,0,0c0-27.9-22.6-50.5-50.5-50.5C92.6,46.1,70,68.6,70,96.5z"/&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&lt;/g&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;/g&gt;
                        &#9;&#9;&#9;&#9;&lt;/g&gt;
                        &#9;&#9;&#9;&lt;/g&gt;
                        &#9;&#9;&lt;/g&gt;
                        &#9;&lt;/g&gt;
                        &#9;&lt;/svg&gt;
                        &#9;&#9;&#9;&lt;/a&gt;

                        &#9;&#9;&#9;&lt;nav class="header__nav"&gt;
                        &#9;&#9;&#9;&#9;&lt;ul class="header__list"&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;li class="header__listItem"&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&lt;a href="#" class="header__listLink header__listLink--active"&gt;Home&lt;/a&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;/li&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;li class="header__listItem"&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&lt;a href="#" class="header__listLink"&gt;Producten&lt;/a&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;/li&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;li class="header__listItem"&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&lt;a href="#" class="header__listLink"&gt;Over ons&lt;/a&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;/li&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;li class="header__listItem"&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&lt;a href="#" class="header__listLink"&gt;Contact&lt;/a&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;/li&gt;
                        &#9;&#9;&#9;&#9;&lt;/ul&gt;
                        &#9;&#9;&#9;&lt;/nav&gt;
                        &#9;&#9;&#9;&lt;/div&gt;

                        &#9;&#9;&#9;&lt;div class="searchBlock"&gt;
                        &#9;&#9;&#9;&#9;&lt;div class="searchBlock__searchInputWrapper"&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;input class="searchBlock__searchInput" type="search" id="searchBlockInput" placeholder="Zoek" /&gt;
                        &#9;&#9;&#9;&#9;&lt;/div&gt;
                        &#9;&#9;&#9;&#9;&lt;label class="searchBlock__searchIcon" for="searchBlockInput"&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"&gt;
                        &#9;&#9;&#9;&#9;&#9;&#9;&lt;path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/&gt;
                        &#9;&#9;&#9;&#9;&#9;&lt;/svg&gt;
                        &#9;&#9;&#9;&#9;&lt;/label&gt;
                        &#9;&#9;&#9;&lt;/div&gt;
                        &#9;&#9;&lt;/div&gt;
                        &#9;&lt;/div&gt;
                        &lt;/header&gt;
                    </textarea>
                </copyToClipboard>
                <copyToClipboard class="titleBlock__copyToClipboard" align="right" @toggleMessage="toggleMessage" buttonTitle="Copy SCSS">
                    <textarea class="copyToClipboard__toCopy">
                        // SCSS location
                        // File name: mixins.scss
                        // Folder location: scss/abstracts/
                        //

                        @mixin flex-align-center($spaceBetween: false) {
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap;

                            @if ($spaceBetween) {
                                justify-content: space-between;
                            }
                        }

                        // SCSS location
                        // File name: variables.scss
                        // Folder location: scss/abstracts/
                        //

                        $transition-cubic-smoothing: cubic-bezier(.2, 0, 0, 1);
                        $transition-cubic-time: .2s;
                        $transition-cubic: all $transition-cubic-time $transition-cubic-smoothing;

                        // SCSS location
                        // File name: header.scss
                        // Folder location: scss/layout/
                        //

                        $header-height: rem-calc(80);

                        .header {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            z-index: 10;
                            background-color: map-deep-get($colors, "white", "default");
                            height: $header-height;
                            box-shadow: $box-shadow-default;

                            &__logo {
                                display: inline-block;
                                color: map-deep-get($colors, "black", "default");
                                width: rem-calc(60);
                                height: rem-calc(60);

                                svg {
                                    width: 100%;
                                }
                            }

                            &__column {
                                @include flex-align-center();
                                justify-content: space-between;
                                height: $header-height;
                            }

                            &__leftSection {
                                @include flex-align-center();
                            }

                            &__list {
                                list-style-type: none;
                                margin-left: rem-calc(32);
                            }

                            &__listItem {
                                display: inline-block;
                                margin-right: rem-calc(16);

                                &:last-of-type {
                                    margin-right: 0;
                                }
                            }

                            &__listLink {
                                color: map-deep-get($colors, "black", "default");
                                font-weight: 700;
                                display: inline-block;
                                height: $header-height;
                                line-height: $header-height;
                                position: relative;

                                &::before {
                                    content: "";
                                    width: 0;
                                    height: rem-calc(5);
                                    background-color: map-deep-get($colors, "black", "default");
                                    display: block;
                                    top: 0;
                                    transition: $transition-cubic;
                                    position: absolute;
                                }

                                &:hover, &:focus, &--active {
                                    &::before {
                                        width: 100%;
                                    }
                                }
                            }
                        }

                        // SCSS location
                        // File name: searchBlock.scss
                        // Folder location: scss/components/
                        //

                        .searchBlock {
                            position: relative;
                            justify-self: right;

                            &__searchIcon {
                                width: rem-calc(14);
                                display: inline-block;
                                position: absolute;
                                right: rem-calc(10);
                                top: rem-calc(10);
                            }

                            &__searchInput {
                                width: rem-calc(100);
                                transition: $transition-default;

                                &:focus {
                                    width: rem-calc(200);
                                }
                            }
                        }
                    </textarea>
                </copyToClipboard>
            </title-block>

            <headerOne></headerOne>

            <textBlock>
                <h3>Notes</h3>
                <p>
                    If you want to left align the hero text, simply remove text-align: center; line. Also note that the
                    typography is not defined on the Hero molecule. This is by design, because the typography should be
                    centralized in the typography.scss file.
                </p>
            </textBlock>
        </content-section>

        <transition enterClass="message--enter" leaveToClass="message--leaveTo">
            <message :messageText="this.messageText" v-if="showMessage"></message>
        </transition>
    </div>
</template>

<script src="./organisms.js"></script>
