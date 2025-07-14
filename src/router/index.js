import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyIntro from '../views/home-components/CompanyIntro.vue'
import ProductIntro from '../views/home-components/ProductIntro.vue'
import CustomerService from '../views/home-components/CustomerService.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/company',
            name: 'company',
            component: CompanyIntro
        },
        {
            path: '/products',
            name: 'product',
            component: ProductIntro
        },
        {
            path: '/contact',
            name: 'contact',
            component: CustomerService
        }
    ]
})

export default router 