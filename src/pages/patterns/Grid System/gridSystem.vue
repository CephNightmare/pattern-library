<template>
    <div>
        <div class="text text--intro">
            <p>
                The current grid we utilize is Foundation 6 by ZURB. It contains many different components. We only use
                the very basic functionalities Foundation provides.
            </p>
        </div>

        <content-section>
            <h2>Setup</h2>

            <div class="text">
                <p>
                    When setting up Foundation, we wanted to make sure that we did not include any unnecessary
                    dependencies
                    or code. Therefore we decided to implement the grid the following way.
                </p>
            </div>

            <div class="code">
                <highlight-code lang="scss">
                    // Sass utilities
                    @import '~foundation-sites/scss/util/util';
                    @import '~foundation-sites/scss/global';
                    @import '~foundation-sites/scss/foundation';

                    @include foundation-grid(false);

                    @include foundation-visibility-classes;
                    @include foundation-float-classes;
                </highlight-code>
                <span class="code__lang">SCSS</span>
            </div>

            <div class="text">
                <p>
                    This code is included in our Front-End solution. This can be done in a myriad of different ways. The
                    individual projects will require different include methods, therefore we do not write out any
                    requirements
                    here.
                </p>
            </div>
        </content-section>

        <content-section>
            <h2>Settings</h2>

            <div class="text">
                <p>
                    Foundation provides several settings regarding the number of columns, width and gutters. We've
                    chosen for a 24 column layout structure. In order to position elements correctly, we usually need
                    more than 12 columns to accurately set up our layout. The settings look something like this:
                </p>
            </div>

            <div class="code">
                <highlight-code lang="scss">
                    // 1. Global
                    // ---------

                    $global-width: rem-calc(1440);
                    $body-antialiased: true;


                    // 2. Breakpoints
                    // --------------

                    $breakpoints: (
                    small: 0,
                    medium: 640px,
                    large: 1024px,
                    xlarge: 1200px,
                    xxlarge: 1440px,
                    );

                    $print-breakpoint: large;


                    // 3. The Grid
                    // -----------

                    $grid-row-width: $global-width;
                    $grid-column-count: 24;

                    $grid-column-gutter: (
                    small: 20px,
                    medium: 30px,
                    );

                    $grid-column-align-edge: true;
                    $grid-column-alias: 'columns';
                    $block-grid-max: 8;
                </highlight-code>
                <span class="code__lang">SCSS</span>
            </div>

            <div class="text">
                <p>
                    This code is imported in our Front-End solution. This can be done in a myriad of different ways. The
                    individual projects will require different import methods, therefore we do not write out any
                    requirements
                    here.
                </p>
            </div>
        </content-section>

        <content-section>
            <h2>Common layout options</h2>

            <div class="text">
                <p>
                    Whenever we build our website, we usually start with the general layout of the page. More often than
                    not, these are the common patterns we see repeated in design.
                </p>
            </div>
            <column-block blockTitle="24/24">
                <div class="row columnBlock__row">
                    <div class="small-24 column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                </div>
            </column-block>

            <column-block blockTitle="12/24 - 12/24">
                <div class="row columnBlock__row">
                    <div class="small-12 column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                    <div class="small-12 column">
                        <div class="columnBlock__innerColumn">2</div>
                    </div>
                </div>
            </column-block>

            <column-block blockTitle="8/24 - 8/24 - 8/24">
                <div class="row columnBlock__row">
                    <div class="small-8 column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                    <div class="small-8 column">
                        <div class="columnBlock__innerColumn">2</div>
                    </div>
                    <div class="small-8 column">
                        <div class="columnBlock__innerColumn">3</div>
                    </div>
                </div>
            </column-block>

            <column-block blockTitle="6/24 - 6/24 - 6/24 - 6/24">
                <div class="row columnBlock__row">
                    <div class="small-6 column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                    <div class="small-6 column">
                        <div class="columnBlock__innerColumn">2</div>
                    </div>
                    <div class="small-6 column">
                        <div class="columnBlock__innerColumn">3</div>
                    </div>
                    <div class="small-6 column">
                        <div class="columnBlock__innerColumn">4</div>
                    </div>
                </div>
            </column-block>

            <column-block blockTitle="18/24 - 6/24">
                <div class="row columnBlock__row">
                    <div class="small-18 column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                    <div class="small-6 column">
                        <div class="columnBlock__innerColumn">2</div>
                    </div>
                </div>
            </column-block>

            <!--<note>-->
            <!--<div class="row">-->
            <!--<div class="small-12 float-left">-->
            <!--<highlight-code lang="html">-->
            <!--&lt;div class="row"&gt;-->
            <!--&#9;&lt;div class="small-12 column"&gt;-->
            <!--&#9;&lt;/div&gt;-->
            <!--&#9;&lt;div class="small-10 column end"&gt;-->
            <!--&#9;&lt;/div&gt;-->
            <!--&lt;/div&gt;-->
            <!--</highlight-code>-->
            <!--</div>-->
            <!--<div class="small-12 column">-->
            <!--<h3>Notes</h3>-->

            <!--<div class="text">-->
            <!--<p>-->
            <!---->
            <!--</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</note>-->
        </content-section>

        <content-section>
            <h2>Grid alignment</h2>

            <column-block>
                <div class="row columnBlock__row">
                    <div class="small-16 small-centered column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                </div>
            </column-block>

            <div class="text">
                <p>
                    This code is imported in our Front-End solution. This can be done in a myriad of different ways. The
                    individual projects will require different import methods, therefore we do not write out any
                    requirements
                    here.
                </p>
            </div>

        </content-section>
    </div>

</template>

<script src="./gridSystem.js"></script>
