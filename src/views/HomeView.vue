<template>
    <div>
        <!-- 히어로 섹션 - 웹 배너 형태 -->
        <v-container fluid class="hero-banner pa-0">
            <div class="banner-background">
                <v-container class="fill-height py-8">
                    <v-row align="center" justify="center" class="fill-height">
                        <!-- 좌측 콘텐츠 -->
                        <v-col cols="12" md="5" class="text-section">
                            <div class="content-wrapper">
                                <h1 class="main-title mb-4">
                                    100% 국내산<br>
                                    <span class="primary-color">황토 세라믹볼</span>
                                </h1>
                                
                                <div class="features-list mb-6">
                                    <div class="feature-item mb-2">
                                        <v-icon color="#2E5BBA" class="mr-3">mdi-check-circle</v-icon>
                                        <span>25년간 축적된 전문 기술력</span>
                                    </div>
                                    <div class="feature-item mb-2">
                                        <v-icon color="#2E5BBA" class="mr-3">mdi-check-circle</v-icon>
                                        <span>100% 국내산 원재료 사용</span>
                                    </div>
                                    <div class="feature-item mb-2">
                                        <v-icon color="#2E5BBA" class="mr-3">mdi-check-circle</v-icon>
                                        <span>소량부터 대량 주문까지</span>
                                    </div>
                                    <div class="feature-item">
                                        <v-icon color="#2E5BBA" class="mr-3">mdi-check-circle</v-icon>
                                        <span>맞춤형 제작 서비스</span>
                                    </div>
                                </div>

                                <div class="cta-buttons">
                                    <v-btn
                                        color="#2E5BBA"
                                        size="large"
                                        variant="elevated"
                                        class="mr-4 mb-2"
                                        to="/products"
                                    >
                                        제품 보러가기
                                        <v-icon right>mdi-arrow-right</v-icon>
                                    </v-btn>
                                    <v-btn
                                        variant="outlined"
                                        color="#2E5BBA"
                                        size="large"
                                        class="mb-2"
                                        to="/company"
                                    >
                                        회사소개
                                    </v-btn>
                                </div>
                            </div>
                        </v-col>

                        <!-- 우측 이미지 캐러셀 -->
                        <!-- <v-col cols="12" md="5" class="image-section">
                            <v-card elevation="12" class="product-showcase rounded-xl">
                                <v-carousel
                                    v-model="selectedProduct"
                                    :continuous="true"
                                    :cycle="true"
                                    interval="4000"
                                    height="450"
                                    hide-delimiter-background
                                    show-arrows="hover"
                                    class="rounded-xl"
                                >
                                    <v-carousel-item
                                        v-for="(product, index) in products"
                                        :key="index"
                                    >
                                        <v-img
                                            :src="product.image"
                                            :alt="product.name"
                                            height="450"
                                            cover
                                        >
                                            <div class="product-overlay">
                                                <div class="product-info">
                                                    <h3 class="product-title">{{ product.name }}</h3>
                                                    <p class="product-description">{{ product.description }}</p>
                                                </div>
                                            </div>
                                        </v-img>
                                    </v-carousel-item>
                                </v-carousel>
                            </v-card>
                        </v-col> -->

                        <!-- 우측 단일 이미지 -->
                        <v-col cols="12" md="5" class="image-section">
                            <v-card elevation="12" class="product-showcase rounded-xl">
                                <v-img
                                    :src="products[0].image"
                                    :alt="products[0].name"
                                    height="450"
                                    cover
                                >
                                    <div class="product-overlay">
                                        <div class="product-info">
                                            <h3 class="product-title">{{ products[0].name }}</h3>
                                            <p class="product-description">{{ products[0].description }}</p>
                                        </div>
                                    </div>
                                </v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-container>
    </div>
</template>

<script>
import mainBall_img from './images/main-ball.jpeg'
import carbonActivatedBall1_img from './images/carbon-activated-ball/1.jpg'
import zeoliteBall1_img from './images/zeolite-ball/1.jpg'
import diatomaceousEarthBall1_img from './images/diatomaceous-earth-ball/1.jpg'
import tourmalineBall1_img from './images/tourmaline-ball/1.jpg'

export default {
    name: 'HomeView',
    data() {
        return {
            selectedProduct: 0,
            products: [
                {
                    name: '황토볼',
                    image: mainBall_img,
                    description: '100% 국내산 황토로 만든 천연 세라믹 볼'
                },
                // {
                //     name: '황토볼',
                //     image: carbonActivatedBall1_img,
                //     description: '100% 국내산 황토로 만든 천연 세라믹 볼'
                // },
                // {
                //     name: '특수세라믹볼',
                //     image: zeoliteBall1_img,
                //     description: '특수 기능성 광물질로 제작된 고품질 세라믹 볼'
                // },
                // {
                //     name: '정수세라믹볼',
                //     image: diatomaceousEarthBall1_img,
                //     description: '물의 불순물을 제거하는 정수 전용 세라믹 볼'
                // },
                // {
                //     name: '탈취 세라믹볼',
                //     image: tourmalineBall1_img,
                //     description: '냄새 제거와 공기 정화 기능을 가진 세라믹 볼'
                // }
            ]
        }
    }
}
</script>

<style scoped>
/* 웹 배너 스타일 */
.hero-banner {
    min-height: calc(100vh - 70px);
    position: relative;
}

.banner-background {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: center;
}

.text-section {
    padding: 2rem;
    display: flex;
    justify-content: center;
}

.content-wrapper {
    max-width: 500px;
    text-align: left;
}

.main-title {
    font-size: 3rem;
    font-weight: 700;
    color: #333;
    line-height: 1.2;
    text-align: left;
}

.primary-color {
    color: #2E5BBA;
}

.features-list {
    margin: 2rem 0;
    text-align: left;
}

.feature-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.1rem;
    color: #555;
    font-weight: 500;
}

.cta-buttons {
    margin-top: 2rem;
    text-align: left;
}

.image-section {
    padding: 2rem;
}

.product-showcase {
    position: relative;
    overflow: hidden;
}

.product-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    padding: 2rem;
    color: white;
}

.product-title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.product-description {
    font-size: 1rem;
    opacity: 0.9;
}

/* 반응형 디자인 */
@media (max-width: 959px) {
    .hero-banner {
        min-height: auto;
    }
    
    .banner-background {
        min-height: auto;
        padding: 2rem 0;
    }
    
    .text-section {
        order: 2;
        padding: 1rem;
    }
    
    .image-section {
        order: 1;
        padding: 1rem;
    }
    
    .main-title {
        font-size: 2.2rem;
    }
    
    .product-showcase {
        margin-bottom: 2rem;
    }
}

/* 회사 소개 섹션 */
.company-section {
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.company-title {
    color: white;
}

.company-text {
    color: rgba(255, 255, 255, 0.9);
}
</style> 