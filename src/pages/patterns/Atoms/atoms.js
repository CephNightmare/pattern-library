import contentSection from '@/components/contentSection/contentSection.vue';
import columnBlock from '@/components/columnBlock/columnBlock.vue';
import note from '@/components/note/note.vue';
import textBlock from '@/components/text/text.vue';
import codeBlock from '@/components/code/code.vue';


export default {
    name: 'Atoms',
    data: function() {
        return {
        }
    },
    components: {
        contentSection,
        columnBlock,
        note,
        textBlock,
        codeBlock
    }
}