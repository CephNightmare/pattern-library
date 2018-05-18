import contentSection from '@/components/contentSection/contentSection.vue';
import note from '@/components/note/note.vue';
import textBlock from '@/components/text/text.vue';
import codeBlock from '@/components/code/code.vue';
import titleBlock from '@/components/titleBlock/titleBlock.vue';
import copyToClipboard from '@/components/copyToClipboard/copyToClipboard.vue';
import message from '@/components/message/message.vue';
import hero from '@/components/hero/hero.vue';
import card from '@/components/card/card.vue';

import Blazy from 'blazy';

export default {
    name: 'Molecules',
    data: function () {
        return {
            showMessage: false,
            messageText: ""
        }
    },
    mounted: function () {
        this.blazy();
    },
    methods: {
        toggleMessage: function (value) {
            let that = this;
            that.showMessage = true;
            that.messageText = value;

            setTimeout(function () {
                that.showMessage = false;
                that.messageText = "";
            }, 1500);
        },
        blazy: function () {
            new Blazy({
                breakpoints: [{
                    width: 0,
                    src: 'data-src-small'
                }, {
                    width: 640,
                    src: 'data-src-medium'
                }, {
                    width: 1024,
                    src: 'data-src-large'
                }, {
                    width: 1200,
                    src: 'data-src-xlarge'
                }, {
                    width: 1440,
                    src: 'data-src-xxlarge'
                }],
                success: function (ele) {
                    // Image has loaded
                    // Do your business here
                }
                , error: function (ele, msg) {
                    if (msg === 'missing') {
                        console.log(msg);
                    }
                    else if (msg === 'invalid') {
                        console.log(msg);
                    }
                }

            });
        }
    },
    components: {
        contentSection,
        note,
        textBlock,
        codeBlock,
        titleBlock,
        copyToClipboard,
        message,
        hero,
        card,
    }
}