<template>
    <div class="product-intro">
        <!-- 제품 네비게이션 버튼 (고정) -->
        <div class="sticky-nav-container" :class="{ 'scrolled': isScrolled }">
            <v-container class="py-3">
                <v-row justify="center">
                    <v-col cols="12" class="text-center">
                        <div class="product-nav-buttons">
                            <v-btn
                                v-for="(product, index) in products"
                                :key="index"
                                @click="scrollToProduct(index)"
                                variant="text"
                                class="text-black font-weight-medium mx-2 nav-button"
                                size="large"
                            >
                                {{ product.name }}
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <!-- 제품 섹션들 -->
        <v-container class="py-8 center-layout">
            <div
                v-for="(product, index) in products"
                :key="index"
                :id="`product-${index}`"
                class="product-section"
            >
                <v-row justify="center" class="min-height-section">
                    <v-col cols="12" md="12" lg="12">
                        <!-- PC 레이아웃 -->
                        <v-row align="center" :class="{ 'reverse-order': index % 2 === 1 }" class="d-none d-md-flex">
                            <!-- 제품 이미지 -->
                            <v-col cols="12" md="6" :order="index % 2 === 1 ? 2 : 1">
                                <v-card class="image-card" elevation="4">
                                    <v-carousel
                                        v-model="currentSlides[index]"
                                        :continuous="true"
                                        :cycle="true"
                                        interval="4000"
                                        height="500"
                                        hide-delimiter-background
                                        show-arrows="hover"
                                        class="rounded-lg"
                                    >
                                        <v-carousel-item
                                            v-for="(image, imgIndex) in product.images"
                                            :key="imgIndex"
                                        >
                                            <v-img
                                                :src="image"
                                                :alt="`${product.name} ${imgIndex + 1}`"
                                                height="500"
                                                cover
                                                class="product-image"
                                            />
                                        </v-carousel-item>
                                    </v-carousel>
                                </v-card>
                            </v-col>
                            
                            <!-- 제품 설명 -->
                            <v-col cols="12" md="6" :order="index % 2 === 1 ? 1 : 2">
                                <v-card class="description-card" elevation="4">
                                    <v-card-text class="pa-8 text-center">
                                        <h2 class="product-title primary-color">{{ product.name }}</h2>
                                        <h3 class="product-subtitle">{{ product.subtitle }}</h3>
                                        
                                        <div class="description-content">
                                            <div 
                                                v-for="(description, descIndex) in product.descriptions"
                                                :key="descIndex"
                                                class="description-item text-center"
                                            >
                                                <h4 v-if="description.title" class="description-title">
                                                    {{ description.title }}
                                                </h4>
                                                <p class="description-text">
                                                    {{ description.content }}
                                                </p>
                                            </div>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>

                        <!-- 모바일 레이아웃 -->
                        <v-row class="d-flex d-md-none">
                            <v-col cols="12">
                                <v-card class="mobile-product-card" elevation="4">
                                    <!-- 이미지 슬라이드 -->
                                    <v-carousel
                                        v-model="currentSlides[index]"
                                        :continuous="true"
                                        :cycle="true"
                                        interval="4000"
                                        height="300"
                                        hide-delimiter-background
                                        show-arrows="hover"
                                        class="rounded-t-lg"
                                    >
                                        <v-carousel-item
                                            v-for="(image, imgIndex) in product.images"
                                            :key="imgIndex"
                                        >
                                            <v-img
                                                :src="image"
                                                :alt="`${product.name} ${imgIndex + 1}`"
                                                height="300"
                                                cover
                                                class="product-image"
                                            />
                                        </v-carousel-item>
                                    </v-carousel>
                                    
                                    <!-- 텍스트 영역 -->
                                    <v-card-text class="pa-6 text-center">
                                        <h2 class="product-title primary-color">{{ product.name }}</h2>
                                        <h3 class="product-subtitle">{{ product.subtitle }}</h3>
                                        
                                        <div class="description-content">
                                            <div 
                                                v-for="(description, descIndex) in product.descriptions"
                                                :key="descIndex"
                                                class="description-item text-center"
                                            >
                                                <h4 v-if="description.title" class="description-title primary-color">
                                                    {{ description.title }}
                                                </h4>
                                                <p class="description-text">
                                                    {{ description.content }}
                                                </p>
                                            </div>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
// 황토볼 이미지들
import carbonActivatedBall1_img from '../images/carbon-activated-ball/1.jpg'
import carbonActivatedBall2_img from '../images/carbon-activated-ball/2.jpg'
import carbonActivatedBall3_img from '../images/carbon-activated-ball/3.jpg'
import carbonActivatedBall4_img from '../images/carbon-activated-ball/4.jpg'

// 특수세라믹볼 이미지들
import zeoliteBall1_img from '../images/zeolite-ball/1.jpg'
import zeoliteBall2_img from '../images/zeolite-ball/2.jpg'
import zeoliteBall3_img from '../images/zeolite-ball/3.jpg'
import zeoliteBall4_img from '../images/zeolite-ball/4.jpg'

// 정수세라믹볼 이미지들
import diatomaceousEarthBall1_img from '../images/diatomaceous-earth-ball/1.jpg'
import diatomaceousEarthBall2_img from '../images/diatomaceous-earth-ball/2.jpg'
import diatomaceousEarthBall3_img from '../images/diatomaceous-earth-ball/3.jpg'
import diatomaceousEarthBall4_img from '../images/diatomaceous-earth-ball/4.jpg'

// 탈취세라믹볼 이미지들
import tourmalineBall1_img from '../images/tourmaline-ball/1.jpg'
import tourmalineBall2_img from '../images/tourmaline-ball/2.jpg'
import tourmalineBall3_img from '../images/tourmaline-ball/3.jpg'
import tourmalineBall4_img from '../images/tourmaline-ball/4.jpg'

export default {
    name: 'ProductIntro',
    data() {
        return {
            currentSlides: [0, 0, 0, 0], // 각 제품별 현재 슬라이드 인덱스
            products: [
                {
                    name: '황토볼',
                    subtitle: '100%국내산 황토로 만든 친환경 황토볼',
                    imageFolder: 'carbon-activated-ball',
                    images: [
                        carbonActivatedBall1_img,
                        carbonActivatedBall2_img,
                        carbonActivatedBall3_img,
                        carbonActivatedBall4_img
                    ],
                    descriptions: [
                        {
                            content: '국내 고품질 황토를 정제하고 1000도 이상의 고온에서 소성하여 제작한 황토볼입니다.'
                        },
                        {
                            content: '유해물질 없이 자연 그대로의 성분을 유지하며 다공성 구조로 탈취,습도,원적외선 방출등 다양한 기능을 지닙니다.'
                        },
                        {
                            content: '생활용품,반려용품,인테리어,화분,족욕기,지압등에 다양하게 활용 가능합니다.'
                        },
                        {
                            content: '사이즈 1.5mm~13mm 주문제작 가능합니다.'
                        }
                    ]
                },
                {
                    name: '특수세라믹볼',
                    subtitle: '특수 기능성 광물질로 제작된 고품질 세라믹 볼',
                    imageFolder: 'zeolite-ball',
                    images: [
                        zeoliteBall1_img,
                        zeoliteBall2_img,
                        zeoliteBall3_img,
                        zeoliteBall4_img
                    ],
                    descriptions: [
                        {
                            title: '자철광볼',
                            content: '자기장이 형성되어 혈액순환을 도와주고, 피로 완화및 활력증진에 효과적입니다.'
                        },
                        {
                            title: '활성탄볼',
                            content: '다공성 구조로 냄새,유해가스,습기를 효과적으로 흡착하여 공기정화에 도움을 줍니다.'
                        },
                        {
                            title: '원적외선볼',
                            content: '제온유치, 혈액순환,신진대사 촉진에 효과적이며 족욕기,찜질,건강매트에 활용됩니다.'
                        }
                    ]
                },
                {
                    name: '정수세라믹볼',
                    subtitle: '물의 불순물을 제거하는 정수 전용 세라믹 볼',
                    imageFolder: 'diatomaceous-earth-ball',
                    images: [
                        diatomaceousEarthBall1_img,
                        diatomaceousEarthBall2_img,
                        diatomaceousEarthBall3_img,
                        diatomaceousEarthBall4_img
                    ],
                    descriptions: [
                        {
                            title: '향균볼',
                            content: '생활공간의 위생을 개선하고 냄새원인을 줄여주는 효과가 있다.'
                        },
                        {
                            title: '알칼리볼',
                            content: '수질개선과 음용수의pH밸런스를 맞춰주어 건강한 물 섭취에 도움을 준다.'
                        },
                        {
                            title: '토르말린볼',
                            content: '원적외선과 음이온을 방출하여 공기정화,혈액순환에 효과가 있다.'
                        }
                    ]
                },
                {
                    name: '탈취 세라믹볼',
                    subtitle: '냄새 제거와 공기 정화 기능을 가진 세라믹 볼',
                    imageFolder: 'tourmaline-ball',
                    images: [
                        tourmalineBall1_img,
                        tourmalineBall2_img,
                        tourmalineBall3_img,
                        tourmalineBall4_img
                    ],
                    descriptions: [
                        {
                            title: '카본활성탄볼',
                            content: '고온처리한 천연 탄소 소재로 탈취 전용입니다.'
                        },
                        {
                            title: '제올라이트볼',
                            content: '이온교환및 흡착기능이 뛰어나 암모니아 제거,탈취,수질정화등에 활용됩니다.'
                        },
                        {
                            title: '은나노볼',
                            content: '은(Ag)의 향균력을 이용한 기능성 세라믹으로 세균 및 바이러스 번식을 억제합니다.'
                        }
                    ]
                }
            ],
            isScrolled: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // 페이지 제목 아래로 스크롤했을 때 배경 표시
            const scrollY = window.scrollY;
            this.isScrolled = scrollY > 200;
        },
        scrollToProduct(index) {
            const element = document.getElementById(`product-${index}`);
            if (element) {
                const stickyNavHeight = 80; // sticky nav 높이
                const viewportHeight = window.innerHeight; // 뷰포트 높이
                const elementHeight = element.offsetHeight; // 요소 높이
                const elementPosition = element.offsetTop - stickyNavHeight - (viewportHeight / 2) + (elementHeight / 2);
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
}
</script>

<style scoped>
.product-intro {
    min-height: 100vh;
}

.page-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    display: inline-block;
}

.sticky-nav-container {
    position: sticky;
    top: 64px; /* header 높이만큼 떨어뜨림 */
    background: transparent;
    backdrop-filter: none;
    z-index: 100;
    box-shadow: none;
    border-bottom: none;
    transition: all 0.3s ease;
}

.sticky-nav-container.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-bottom: 1px solid #e0e0e0;
}

.product-nav-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 0.5rem;
}

.nav-button {
    font-weight: 600;
    font-size: 1rem;
    text-transform: none;
    border-radius: 4px;
}

.product-section {
    margin-bottom: 4rem;
    padding: 2rem 0;
}

.min-height-section {
    min-height: 600px;
}

.reverse-order {
    flex-direction: row-reverse;
}

.image-card {
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.image-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.product-image {
    transition: transform 0.3s ease;
}

.product-image:hover {
    transform: scale(1.05);
}

.description-card {
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    min-height: 500px;
    transition: all 0.3s ease;
}

.description-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.product-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
}

.product-subtitle {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    text-align: center;
    margin-bottom: 2.5rem;
    line-height: 1.4;
}

.description-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.description-item {
    margin-bottom: 1.5rem;
    text-align: center;
}

.description-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-align: center;
}

.description-text {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.8;
    margin: 0;
    text-align: center;
}

.mobile-product-card {
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.mobile-product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

@media (max-width: 959px) {
    .page-title {
        font-size: 2rem;
        padding: 0.8rem 1.5rem;
    }
    
    .sticky-nav-container {
        top: 56px; /* 모바일 header 높이 */
    }
    
    .product-nav-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .nav-button {
        width: 200px;
    }
    
    .mobile-product-card {
        margin-bottom: 2rem;
    }
    
    .product-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    
    .product-subtitle {
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .description-title {
        font-size: 1rem;
    }
    
    .description-text {
        font-size: 0.9rem;
        line-height: 1.6;
    }
    
    .description-item {
        margin-bottom: 1rem;
    }
}
</style> 