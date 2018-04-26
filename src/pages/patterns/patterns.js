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
                    name: 'Atoms',
                    path: '/patterns/atoms'
                },
                {
                    name: 'Molecules',
                    path: '/patterns/molecules'
                }
            ]
        }
    },
    components: {
        sideNav
    }
}