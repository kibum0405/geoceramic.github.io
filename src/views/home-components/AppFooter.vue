<template>
    <v-footer class="footer-bg-color mt-0 py-3 px-4">
        <div class="text-center w-100">
            <div class="mb-2">
                <v-img 
                    :src="logoCol_img"
                    alt="회사로고" 
                    class="footer-logo"
                    max-height="120"
                    contain
                />
            </div>
            <div class="text-body-2 mb-1">
                상호명:지오세라믹
            </div>
            <div class="text-body-2 mb-1">
                대표자명:김소라
            </div>
            <div class="text-body-2 mb-1">
                사업장 주소: 부산시 사상구 모라로 110번길 73
            </div>
            <div class="text-body-2 mb-1">
                대표전화:010-5204-3471
            </div>
            <div class="text-body-2">
                사업자등록번호: 309-05-55649
            </div>
        </div>
    </v-footer>
</template>

<script>
import logoCol_img from '../images/logo-col.png'

export default {
    name: 'AppFooter',
    data() {
        return {
            logoCol_img: logoCol_img
        }
    }
}
</script>

<style scoped>
.footer-bg-color {
    background-color: #f5f5f5;
}

.footer-logo {
    max-height: 200px;
    width: auto;
}
</style> 