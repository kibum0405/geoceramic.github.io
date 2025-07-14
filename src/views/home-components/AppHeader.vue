<template>
    <div>
        <!-- Navigation Drawer -->
        <v-navigation-drawer
            v-model="drawer"
            temporary
            location="left"
            width="280"
        >
            <v-list>
                <v-list-item
                    v-for="item in menuItems"
                    :key="item.title"
                    :title="item.title"
                    class="py-2"
                    @click="navigateToPage(item.route)"
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- App Bar -->
        <v-app-bar app color="white" elevation="1" height="70">
            <v-app-bar-title class="ml-0">
                <router-link to="/" class="logo-link">
                    <v-img 
                        :src="logoRow_img"
                        alt="회사로고" 
                        class="logo-image"
                        width="200"
                        contain
                    />
                </router-link>
            </v-app-bar-title>
            
            <v-spacer></v-spacer>
            
            <!-- Desktop Menu -->
            <v-toolbar-items class="d-none d-md-flex">
                <v-btn
                    v-for="item in menuItems"
                    :key="item.title"
                    variant="text"
                    class="text-black font-weight-medium mx-2"
                    size="large"
                    @click="navigateToPage(item.route)"
                >
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>

            <!-- Mobile Menu Button -->
            <v-app-bar-nav-icon
                @click="drawer = !drawer"
                class="d-md-none"
            ></v-app-bar-nav-icon>
        </v-app-bar>
    </div>
</template>

<script>
import logoRow_img from '../images/logo-row.png'

export default {
    name: 'AppHeader',
    data() {
        return {
            drawer: false,
            logoRow_img: logoRow_img,
            menuItems: [
                { title: '회사소개', route: '/company' },
                { title: '제품소개', route: '/products' },
                // { title: '공지사항', route: '/notice' },
                { title: '고객센터', route: '/contact' }
            ]
        }
    },
    methods: {
        navigateToPage(route) {
            this.drawer = false;
            this.$router.push(route);
        }
    }
}
</script>

<style scoped>
.logo-image {
    max-height: 160px;
    width: auto;
    cursor: pointer;
    transition: opacity 0.3s ease;
    display: block !important;
}

.logo-image:hover {
    opacity: 0.8;
}

.logo-link {
    text-decoration: none;
    display: inline-block;
}
</style> 