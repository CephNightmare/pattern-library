import sideNav from '@/components/sideNav/sideNav.vue';

export default {
    name: 'Patterns',
    data: function() {
        return {
            navigation: [
                {
                    name: 'Grid System',
                    path: '/patterns/grid-system'
                },
                {
                    name: 'Layout Components',
                    path: '/patterns/layout-components'
                },
                {
                    name: 'Typography',
                    path: '/patterns/typography'
                }
            ]
        }
    },
    components: {
        sideNav
    }
}