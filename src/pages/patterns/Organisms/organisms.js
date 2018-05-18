import contentSection from '@/components/contentSection/contentSection.vue';
import note from '@/components/note/note.vue';
import textBlock from '@/components/text/text.vue';
import codeBlock from '@/components/code/code.vue';
import titleBlock from '@/components/titleBlock/titleBlock.vue';
import copyToClipboard from '@/components/copyToClipboard/copyToClipboard.vue';
import message from '@/components/message/message.vue';
import headerOne from '@/components/headers/headerOne/headerOne.vue';

export default {
    name: 'Organisms',
    data: function () {
        return {
            showMessage: false,
            messageText: ""
        }
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
    },
    components: {
        contentSection,
        note,
        textBlock,
        codeBlock,
        titleBlock,
        copyToClipboard,
        message,
        headerOne
    }
}