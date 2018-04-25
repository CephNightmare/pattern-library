import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/layout/layout.vue'

import patterns from '@/pages/patterns/patterns.vue'
import gridSystem from '@/pages/patterns/Grid System/gridSystem.vue'
import layoutcomponents from '@/pages/patterns/Layout components/layoutComponents.vue'
import typography from '@/pages/patterns/Typography/typography.vue'

Vue.use(Router);

const router =  new Router({
    mode: 'history',
    linkActiveClass: 'open active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: layout,
            redirect: 'patterns',
            children: [
                {
                    path: 'patterns',
                    name: 'Patterns',
                    component: patterns,
                    children: [
                        {
                            path: 'grid-system',
                            name: 'Grid system',
                            component: gridSystem,
                        },
                        {
                            path: 'layout-components',
                            name: 'Layout components',
                            component: layoutcomponents,
                        },
                        {
                            path: 'typography',
                            name: 'Typography',
                            component: typography,
                        }
                    ]
                }
            ]
        }
    ]
});

export default router;