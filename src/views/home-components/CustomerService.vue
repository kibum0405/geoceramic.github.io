<template>
    <div class="customer-service">
        <!-- 페이지 제목 -->
        <v-container class="py-8">
            <v-row justify="center">
                <v-col cols="12" class="text-center">
                    <h1 class="page-title">발주 안내</h1>
                </v-col>
            </v-row>
        </v-container>

        <!-- 메인 카드 -->
        <v-container class="py-8 center-layout">
            <v-row justify="center">
                <v-col cols="12">
                    <div>
                        <v-card-text class="pa-8">
                            <!-- 프로세스 플로우 -->
                            <v-row justify="center" class="mb-12">
                                <v-col cols="12">
                                    <div class="process-flow">
                                        <div 
                                            v-for="(step, index) in processSteps"
                                            :key="index"
                                            class="process-step-container"
                                        >
                                            <v-card class="process-step" elevation="4">
                                                <v-card-text class="pa-6 text-center">
                                                    <h3 class="step-title primary-color">{{ step.title }}</h3>
                                                    <p v-if="step.subtitle" class="step-subtitle">{{ step.subtitle }}</p>
                                                </v-card-text>
                                            </v-card>
                                            
                                            <!-- 화살표 (마지막 단계 제외) -->
                                            <div 
                                                v-if="index < processSteps.length - 1" 
                                                class="arrow-container"
                                            >
                                                <v-icon class="process-arrow" color="#2E5BBA" size="24">
                                                    mdi-arrow-right
                                                </v-icon>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 모바일용 세로 플로우 -->
                                    <div class="mobile-process-flow d-flex d-md-none">
                                        <div 
                                            v-for="(step, index) in processSteps"
                                            :key="index"
                                            class="mobile-step-container"
                                        >
                                            <v-card class="mobile-process-step" elevation="4">
                                                <v-card-text class="pa-4 text-center">
                                                    <h3 class="mobile-step-title primary-color">{{ step.title }}</h3>
                                                    <p v-if="step.subtitle" class="mobile-step-subtitle">{{ step.subtitle }}</p>
                                                </v-card-text>
                                            </v-card>
                                            
                                            <!-- 하향 화살표 (마지막 단계 제외) -->
                                            <div 
                                                v-if="index < processSteps.length - 1" 
                                                class="mobile-arrow-container"
                                            >
                                                <v-icon class="mobile-process-arrow" color="#2E5BBA" size="20">
                                                    mdi-arrow-down
                                                </v-icon>
                                            </div>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>

                            <!-- 연락처 정보 -->
                            <v-row justify="center">
                                <v-col cols="12" md="8" lg="6">
                                    <div class="contact-info-section">
                                        <p class="contact-description text-center">
                                            자세한 제품 컨택 발주 안내는<br>
                                            아래 연락처로 연락주시면<br>
                                            친절한 상담 도와드리겠습니다.
                                        </p>
                                        
                                        <div class="contact-phone-section text-center">
                                            <h3 class="contact-label">연락처</h3>
                                            <div class="phone-container">
                                                <p class="phone-number" id="customerServicePhone">010-5204-3471</p>
                                                <v-btn
                                                    icon
                                                    variant="text"
                                                    @click="copyPhone"
                                                    class="copy-phone-btn"
                                                >
                                                    <v-icon>mdi-content-copy</v-icon>
                                                </v-btn>
                                                <div v-if="showPhoneCopied" class="copy-message">복사됐습니다</div>
                                            </div>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'CustomerService',
    data() {
        return {
            showPhoneCopied: false,
            processSteps: [
                {
                    title: '제품컨택 안내'
                },
                {
                    title: '발주서 진행'
                },
                {
                    title: '주문제작',
                    subtitle: '(주문양에 따라 제작기간 변동)'
                },
                {
                    title: '화물배송 진행'
                }
            ]
        }
    },
    methods: {
        copyPhone() {
            const phone = document.getElementById('customerServicePhone').textContent;
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
.customer-service {
    min-height: 100%;
}

.page-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    display: inline-block;
}

.main-card {
    border-radius: 20px;
    transition: all 0.3s ease;
    border: 2px solid #e0e0e0;
}

.main-card:hover {
    box-shadow: 0 12px 32px rgba(46, 91, 186, 0.15);
    border-color: #2E5BBA;
}

.process-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.process-step-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.process-step {
    min-width: 200px;
    max-width: 220px;
    border-radius: 50px;
    transition: all 0.3s ease;
    border: 2px solid #e0e0e0;
}

.process-step:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(46, 91, 186, 0.2);
    border-color: #2E5BBA;
}

.step-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.step-subtitle {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
    line-height: 1.3;
}

.arrow-container {
    display: flex;
    align-items: center;
}

.process-arrow {
    font-weight: bold;
}

.mobile-process-flow {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.mobile-step-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
}

.mobile-process-step {
    width: 100%;
    max-width: 280px;
    border-radius: 20px;
    transition: all 0.3s ease;
    border: 2px solid #e0e0e0;
}

.mobile-process-step:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(46, 91, 186, 0.2);
    border-color: #2E5BBA;
}

.mobile-step-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.mobile-step-subtitle {
    font-size: 0.85rem;
    color: #666;
    margin: 0;
    line-height: 1.3;
}

.mobile-arrow-container {
    display: flex;
    justify-content: center;
}

.contact-info-section {
    border-top: 2px solid #e0e0e0;
    padding-top: 2rem;
    margin-top: 2rem;
}

.contact-description {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.contact-phone-section {
    padding-top: 1rem;
}

.contact-label {
    font-size: 1.2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
}

.phone-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
}

.phone-number {
    font-size: 1.4rem;
    font-weight: 700;
    color: #2E5BBA;
    margin: 0;
}

.copy-phone-btn {
    transition: all 0.3s ease;
}

.copy-phone-btn:hover {
    background-color: rgba(46, 91, 186, 0.1);
    transform: scale(1.1);
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
        padding: 0.8rem 1.5rem;
    }
    
    .main-card {
        border-radius: 16px;
    }
    
    .process-flow {
        display: none;
    }
    
    .contact-description {
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .phone-number {
        font-size: 1.2rem;
    }
    
    .contact-label {
        font-size: 1.1rem;
    }
}
</style> 