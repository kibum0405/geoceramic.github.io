<template>
    <v-app>
        <app-header />
        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
        <app-footer />
    </v-app>
</template>

<script>
import AppHeader from '@/views/home-components/AppHeader.vue'
import AppFooter from '@/views/home-components/AppFooter.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter
    }
}
</script> 