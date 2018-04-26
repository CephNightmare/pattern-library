import contentSection from '@/components/contentSection/contentSection.vue';
import note from '@/components/note/note.vue';
import textBlock from '@/components/text/text.vue';
import codeBlock from '@/components/code/code.vue';
import colors from '@/components/colors/colors.vue';

export default {
    name: 'Atoms',
    data: function() {
        return {
            colors: [
                {
                    group: 'black',
                    variant: 'default',
                    hex: '#1E1E24'
                },
                {
                    group: 'blue',
                    variant: 'dark',
                    hex: '#36446C'
                },
                {
                    group: 'blue',
                    variant: 'default',
                    hex: '#7282B4'
                },
                {
                    group: 'blue',
                    variant: 'light',
                    hex: '#BBC8F0'
                },
                {
                    group: 'grey',
                    variant: 'dark',
                    hex: '#BBBBBB'
                },
                {
                    group: 'grey',
                    variant: 'default',
                    hex: '#F5F5F5'
                },
                {
                    group: 'white',
                    variant: 'default',
                    hex: '#FFFDFD'
                },
                {
                    group: 'green',
                    variant: 'default',
                    hex: '#41B883'
                },
                {
                    group: 'social',
                    variant: 'facebook',
                    hex: '#3B5998'
                },
                {
                    group: 'social',
                    variant: 'twitter',
                    hex: '#1DA1F2'
                },
                {
                    group: 'social',
                    variant: 'linkedin',
                    hex: '#0077B5'
                }
            ]
        }
    },
    components: {
        contentSection,
        note,
        textBlock,
        codeBlock,
        colors
    }
}