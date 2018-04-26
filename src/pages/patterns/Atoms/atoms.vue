<template>
    <div>
        <textBlock :isIntro="true">
            <p>
                Atoms are the basic building blocks for our website. Atoms can be described as the most simple html
                elements, such as a button, an input or a label. Furthermore, atoms can be more abstract, by defining a
                variety of variables such as colors, margins and transitions.
            </p>
        </textBlock>

        <content-section>
            <h2>Setup</h2>

            <textBlock>
                <p>
                    When setting up Foundation, we wanted to make sure that we did not include any unnecessary
                    dependencies or code. Therefore we decided to implement the only the basic grid functionalities,
                    along with some floating and visibility classes
                </p>
            </textBlock>

            <codeBlock lang="scss">
                // Sass utilities
                @import '~foundation-sites/scss/util/util';
                @import '~foundation-sites/scss/global';
                @import '~foundation-sites/scss/foundation';

                @include foundation-grid;

                @include foundation-visibility-classes;
                @include foundation-float-classes;
            </codeBlock>

            <textBlock>
                <p>
                    This code is included in our Front-End solution. This can be done in a myriad of different ways. The
                    individual projects will require different include methods, therefore we do not write out any
                    requirements
                    here.
                </p>
            </textBlock>
        </content-section>

        <content-section>
            <h2>Settings</h2>

            <textBlock>
                <p>
                    Foundation provides several settings regarding the number of columns, width and gutters. We've
                    chosen for a 24 column layout structure. In order to position elements correctly, we usually need
                    more than 12 columns to accurately set up our layout. The settings look something like this:
                </p>
            </textBlock>

            <codeBlock lang="scss">
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
            </codeBlock>

            <textBlock>
                <p>
                    This code is imported in our Front-End solution. This can be done in a myriad of different ways. The
                    individual projects will require different import methods, therefore we do not write out any
                    requirements
                    here.
                </p>
            </textBlock>
        </content-section>

        <content-section>
            <h2>Common layout options</h2>

            <textBlock>
                <p>
                    Whenever we build our website, we usually start with the general layout of the page. More often than
                    not, these are the common patterns we see repeated in design.
                </p>
            </textBlock>

            <column-block blockTitle="24/24">
                <div class="columnBlock__row">
                    <div class="small-24 column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                </div>
            </column-block>

            <column-block blockTitle="12/24 - 12/24">
                <div class="columnBlock__row">
                    <div class="small-12 column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                    <div class="small-12 column">
                        <div class="columnBlock__innerColumn">2</div>
                    </div>
                </div>
            </column-block>

            <column-block blockTitle="8/24 - 8/24 - 8/24">
                <div class="columnBlock__row">
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
                <div class="columnBlock__row">
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
                <div class="columnBlock__row">
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

            <textBlock>
                <p>
                    Whenever laying our page out, we come across instances where the page layout requires more spacing
                    than the usual gutters. This is where Grid Alignment options come in.
                </p>
            </textBlock>

            <h3>Centering columns</h3>

            <textBlock>
                <p>
                    Using small-centered (or any breakpoint usage), as expected, centers the column regardless of the
                    width of the component. The common trap is using something like small-offset-4. this should be
                    avoided for centering a column, due to the fact that you cannot center uneven columns this way.
                </p>
            </textBlock>
            <column-block blockTitle="17/24 - centered">
                <div class="columnBlock__row">
                    <div class="small-17 small-centered column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                </div>
            </column-block>

            <codeBlock lang="html">
                &lt;div class="row"&gt;
                &#9;&lt;div class="small-17 small-centered column"&gt;
                &#9;&lt;/div&gt;
                &lt;/div&gt;
            </codeBlock>

            <h3>Layout offset</h3>

            <textBlock>
                <p>
                    There are multiple options when using an offset. If you have a simple layout with a sidebar, you do
                    not need offset classes to create room between the columns. You can just omit the 'end' class
                    instead. however, offset classes are useful in the second example.
                </p>
            </textBlock>
            <column-block blockTitle="16/24 - 6/24 - end class omitted">
                <div class="columnBlock__row">
                    <div class="small-17 column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                    <div class="small-6 column">
                        <div class="columnBlock__innerColumn">2</div>
                    </div>
                </div>
            </column-block>

            <codeBlock lang="html">
                &lt;div class="row"&gt;
                &#9;&lt;div class="small-17 column"&gt;
                &#9;&lt;/div&gt;
                &#9;&lt;div class="small-6 column"&gt;
                &#9;&lt;/div&gt;
                &lt;/div&gt;
            </codeBlock>

            <column-block blockTitle="6/24 - 10/24 - 6/24">
                <div class="columnBlock__row">
                    <div class="small-6 column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                    <div class="small-10 small-offset-1 column">
                        <div class="columnBlock__innerColumn">1</div>
                    </div>
                    <div class="small-6 column">
                        <div class="columnBlock__innerColumn">2</div>
                    </div>
                </div>
            </column-block>

            <codeBlock lang="html">
                &lt;div class="row"&gt;
                &#9;&lt;div class="small-6 column"&gt;
                &#9;&lt;/div&gt;
                &#9;&lt;div class="small-10 small-offset-1 column"&gt;
                &#9;&lt;/div&gt;
                &#9;&lt;div class="small-6 column"&gt;
                &#9;&lt;/div&gt;
                &lt;/div&gt;
            </codeBlock>

        </content-section>

        <content-section>
            <h2>Grid nesting</h2>

            <textBlock>
                <p>
                    Although grid nesting is possible. We do not advice doing this. Gutter spacing and column layouts
                    quickly become confusing and frustrating to use. If the situation requires it however, this is the
                    best way to do it.
                </p>
            </textBlock>

            <column-block blockTitle="Nested Grid layout">
                <div class="columnBlock__row">
                    <div class="small-18 column">
                        <div class="columnBlock__innerColumn">
                            <div class="row">
                                <div class="small-12 column">
                                    <div class="columnBlock__nestedColumn">1</div>
                                </div>
                                <div class="small-12 column">
                                    <div class="columnBlock__nestedColumn">2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small-6 column">
                        <div class="columnBlock__innerColumn">2</div>
                    </div>
                </div>
            </column-block>

            <codeBlock lang="html">
                &lt;div class="row"&gt;
                &#9;&lt;div class="small-18 column"&gt;
                &#9;&#9;&lt;div class="row"&gt;
                &#9;&#9;&#9;&lt;div class="small-12 column"&gt;
                &#9;&#9;&#9;&lt;/div&gt;
                &#9;&#9;&#9;&lt;div class="small-12 column"&gt;
                &#9;&#9;&#9;&lt;/div&gt;
                &#9;&#9;&lt;/div&gt;
                &#9;&lt;/div&gt;
                &#9;&lt;div class="small-6 column"&gt;
                &#9;&lt;/div&gt;
                &lt;/div&gt;
            </codeBlock>
        </content-section>
    </div>

</template>

<script src="./atoms.js"></script>
