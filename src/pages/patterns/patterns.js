import sideNav from '@/components/sideNav/sideNav.vue';

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
        sideNav
    }
}