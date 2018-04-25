import contentSection from '@/components/contentSection/contentSection.vue';
import columnBlock from '@/components/columnBlock/columnBlock.vue';

export default {
    name: 'Patterns',
    data: function() {
        return {
            navigation: [
                {
                    name: 'Grid System',
                    template: 'grid-system'
                },
                {
                    name: 'Layout Components',
                    template: 'layout-components'
                },
                {
                    name: 'Typography',
                    template: 'typography'
                }
            ]
        }
    },
    components: {
        contentSection,
        columnBlock
    }
}