<template>
    <div class="company-intro">
        <!-- 메인 콘텐츠 -->
        <v-container fluid class="pa-0">
            <v-row no-gutters>
                <v-col cols="12">
                    <div class="hero-section">
                        <v-img
                            :src="companyIntro_img"
                            alt="회사소개 이미지"
                            class="company-image"
                            height="500"
                            cover
                        >
                            <div class="hero-overlay">
                                <v-container class="fill-height">
                                    <v-row justify="center" align="center" class="fill-height">
                                        <v-col cols="12" md="8" lg="6" class="text-center">
                                            <div class="hero-content">
                                                <div class="ceo-message">
                                                    <h2 class="ceo-title">CEO 인사말</h2>
                                                    <p class="greeting-text">안녕하십니까</p>
                                                    <p class="intro-text">지오세라믹에 방문해주셔서 감사드립니다.</p>
                                                    
                                                    <p class="main-text">
                                                        저희 당사는 다년간 황토만을 연구하고 개발해온<br>
                                                        전문기업으로 국내산 원재료만 고집하며 황토볼의<br>
                                                        품질 개선과 용도 확장에 앞장서고 있습니다.
                                                    </p>
                                                    
                                                    <p class="detail-text">
                                                        정밀한 입도 조절, 균일한 소성기술, 수분 및 유해가스<br>
                                                        흡착 기능을 극대화한 제품으로 건강, 미용, 환경분야<br>
                                                        등 다양한 산업에서 그 효율성을 입증 받고 있습니다.
                                                    </p>
                                                    
                                                    <p class="service-text">
                                                        소량생산부터 대량 납품까지 맞춤형 제작이 가능합니<br>
                                                        다.
                                                    </p>
                                                    
                                                    <p class="closing-text">
                                                        믿을 수 있는 품질로 귀사의 가치에 더해지는 파트너<br>
                                                        가 되겠습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </div>
                        </v-img>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <!-- 지도 섹션 -->
        <v-container class="py-12 center-layout">
            <v-row justify="center">
                <v-col cols="12" class="text-center mb-6">
                    <h2 class="text-h3 font-weight-bold mb-6">찾아오시는 길</h2>
                </v-col>
            </v-row>
            
            <!-- 주소와 연락처 카드 -->
            <v-row justify="center" class="mb-6">
                <v-col cols="12" md="10" lg="8"
                    class="pa-0"
                >
                    <v-row>
                        <v-col cols="12" md="6">
                            <!-- 주소 카드 -->
                            <v-card class="address-card" elevation="2" height="100%">
                                <v-card-text class="pa-6">
                                    <v-row align="center">
                                        <v-col cols="auto">
                                            <v-icon size="24" color="#333">mdi-map-marker</v-icon>
                                        </v-col>
                                        <v-col>
                                            <div class="address-content">
                                                <p class="address-detail">지오세라믹</p>
                                                <p class="address-text" id="companyAddress">부산시 사상구 모라로 110번길 73</p>
                                            </div>
                                        </v-col>
                                        <v-col cols="auto">
                                            <div class="copy-btn-container">
                                                <v-btn
                                                    icon
                                                    variant="text"
                                                    @click="copyAddress"
                                                    class="copy-btn"
                                                >
                                                    <v-icon>mdi-content-copy</v-icon>
                                                </v-btn>
                                                <div v-if="showAddressCopied" class="copy-message">복사됐습니다</div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        
                        <v-col cols="12" md="6">
                            <!-- 연락처 카드 -->
                            <v-card class="contact-card" elevation="2" height="100%">
                                <v-card-text class="pa-6">
                                    <v-row align="center">
                                        <v-col cols="auto">
                                            <v-icon size="24" color="#333">mdi-phone</v-icon>
                                        </v-col>
                                        <v-col>
                                            <div class="contact-content">
                                                <p class="contact-detail">대표전화</p>
                                                <p class="contact-text" id="companyPhone">010-5204-3471</p>
                                            </div>
                                        </v-col>
                                        <v-col cols="auto">
                                            <div class="copy-btn-container">
                                                <v-btn
                                                    icon
                                                    variant="text"
                                                    @click="copyPhone"
                                                    class="copy-btn"
                                                >
                                                    <v-icon>mdi-content-copy</v-icon>
                                                </v-btn>
                                                <div v-if="showPhoneCopied" class="copy-message">복사됐습니다</div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                    <v-card elevation="4" class="rounded-lg overflow-hidden">
                        <iframe
                            src="https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EC%8B%9C%20%EC%82%AC%EC%83%81%EA%B5%AC%20%EB%AA%A8%EB%9D%BC%EB%A1%9C%20110%EB%B2%88%EA%B8%B8%2073/place/1220933707?c=15.00,0,0,0,dh&placePath=%2Fhome"
                            width="100%"
                            height="400"
                            frameborder="0"
                            style="border:0;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import companyIntro_img from '../images/company-intor.png'

export default {
    name: 'CompanyIntro',
    data() {
        return {
            companyIntro_img: companyIntro_img,
            showAddressCopied: false,
            showPhoneCopied: false
        }
    },
    methods: {
        copyAddress() {
            const address = document.getElementById('companyAddress').textContent;
            navigator.clipboard.writeText(address).then(() => {
                this.showAddressCopied = true;
                setTimeout(() => {
                    this.showAddressCopied = false;
                }, 2000);
            }).catch(() => {
                alert('복사에 실패했습니다.');
            });
        },
        copyPhone() {
            const phone = document.getElementById('companyPhone').textContent;
            navigator.clipboard.writeText(phone).then(() => {
                this.showPhoneCopied = true;
                setTimeout(() => {
                    this.showPhoneCopied = false;
                }, 2000);
            }).catch(() => {
                alert('복사에 실패했습니다.');
            });
        }
    }
}
</script>

<style scoped>
.company-intro {
    min-height: 100vh;
}

.page-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
}

.min-height-section {
    min-height: 600px;
}

.image-overlay-container {
    position: relative;
    height: 100%;
}

.company-image {
    filter: none;
}

.overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.ceo-title-box {
    text-align: center;
    margin-bottom: 2rem;
}

.ceo-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
}

.ceo-content-box {
    background: rgba(255, 255, 255, 0.3);
    padding: 2rem;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(46, 91, 186, 0.2);
    max-width: 600px;
}

.ceo-message {
    line-height: 1.8;
    text-align: center;
}

.greeting-text {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.3rem;
}

.intro-text {
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 1rem;
}

.main-text {
    font-size: 0.85rem;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.detail-text {
    font-size: 0.85rem;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.service-text {
    font-size: 0.85rem;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.closing-text {
    font-size: 0.85rem;
    color: #333;
    margin-bottom: 0;
    line-height: 1.6;
}

.map-container {
    height: 400px;
    width: 100%;
}

.address-card, .contact-card {
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 1px solid #e0e0e0;
    overflow: visible;
}

.address-card:hover, .contact-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.1) !important;
}

.address-content, .contact-content {
    text-align: center;
}

.address-text, .contact-text {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin: 0 0 4px 0;
    line-height: 1.4;
}

.address-detail, .contact-detail {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
}

.copy-btn {
    transition: all 0.3s ease;
}

.copy-btn:hover {
    background-color: rgba(51, 51, 51, 0.1);
    transform: scale(1.1);
}

.copy-btn-container {
    position: relative;
    display: inline-block;
}

.copy-message {
    position: absolute;
    top: -45px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 13px;
    white-space: nowrap;
    z-index: 9999;
    animation: fadeInOut 2s ease-in-out;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

@keyframes fadeInOut {
    0% { opacity: 0; transform: translateX(-50%) translateY(-5px); }
    20% { opacity: 1; transform: translateX(-50%) translateY(0); }
    80% { opacity: 1; transform: translateX(-50%) translateY(0); }
    100% { opacity: 0; transform: translateX(-50%) translateY(-5px); }
}

@media (max-width: 959px) {
    .page-title {
        font-size: 2rem;
    }
    
    .hero-content {
        padding: 2rem 1.5rem;
        margin: 1rem;
    }
    
    .ceo-title {
        font-size: 1.5rem;
    }
    
    .greeting-text {
        font-size: 1rem;
    }
    
    .intro-text {
        font-size: 0.9rem;
    }
    
    .main-text, 
    .detail-text, 
    .service-text, 
    .closing-text {
        font-size: 0.9rem;
    }
    
    .map-container {
        height: 300px;
    }
    
    .address-text, .contact-text {
        font-size: 1rem;
    }
    
    .address-detail, .contact-detail {
        font-size: 0.8rem;
    }
}

.hero-section {
    position: relative;
    overflow: hidden;
}

.hero-background {
    position: relative;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content {
    background: rgba(255, 255, 255, 0.9);
    padding: 1.5rem 1.5rem;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    margin: 0 auto;
}

.hero-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #333;
    line-height: 1.3;
}

.hero-description {
    margin-top: 2rem;
}

.hero-text {
    font-size: 1.2rem;
    color: #555;
    font-weight: 500;
    line-height: 1.5;
}
</style> 