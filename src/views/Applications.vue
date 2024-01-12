<template>
    <div page>
        <banner bg="https://seati.oss-cn-qingdao.aliyuncs.com/assets/images/8.jpg">
            <template #title>审核结果及玩家列表</template>
            <template #subtitle>获取白名单</template>
            <template #text>此处列出了自 ST11 起各个周目的审核结果，以及参与周目游戏的玩家列表</template>
        </banner>
        <div class="container">
            <div class="content typo">
                <div class="term" v-for="x in data">
                    <h1 class="primary-text" v-view.once="flowUp">ST{{ x.number }}</h1>
                    <div class="appl-cards">
                        <div class="appl-card" v-view.once="applCardHook" v-for="(y, k) in x.applications">
                            <div class="appl-no"><span class="serif italic">Ticket</span> #{{
                                x.applications.length - k - 1 }}</div>
                            <div class="appl-id">
                                {{ y.id }}
                            </div>
                            <div class="appl-ticket-detail" v-if="y.passed">
                                <span class="serif"><span class="italic">Certified</span> ticket for Seati </span> ST{{
                                    x.number
                                }}
                            </div>
                            <div class="appl-status" :class="y.passed ? 'passed' : 'not-passed'">
                                <mdicon :name="y.passed ? 'check' : 'close'" />
                                <span class="text">{{ y.passed ? '审核通过' : '审核未通过' }}</span>
                            </div>
                            <div class="appl-date">
                                <span class="serif italic">@ </span>{{ y.date }}
                            </div>
                            <div class="appl-sharables" v-if="Object.values(y.sharables).length > 0">
                                <div class="sharable" v-for="z in Object.keys(y.sharables)">
                                    <div class="start">
                                        <div class="q">“</div>{{ z }}
                                    </div>
                                    <div class="sharable-content" v-html="y.sharables[z]" />
                                    <div class="end">
                                        <div class="q">”</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Banner from '@/components/Banner.vue';
import { flowUp } from '@/fn';

interface Term {
    applications: Application[],
    number: number
}

interface Application {
    id: string,
    passed: boolean,
    sharables: { [prop: string]: string },
    date: string
}

const data: Term[] = [
    {
        number: 11,
        applications: [
            {
                id: 'Subilan',
                date: '2024/01/12 00:27',
                sharables: {
                    '今日起，全新的审核结果页面就正式投入使用啦': '你在问卷里的一些想法，可以按照你的意愿选择，是否公开在此处。一些审核记录也会被保存在这里。将来可能会有更多不同形式的记录信息，甚至可以与游戏的内容交互哦~一切只为助你更好地记录在 Seati 的点点滴滴 \\(^o^)/~'
                },
                passed: false
            },
            {
                id: 'JesseM1024',
                date: '2024/01/12 02:06',
                sharables: {
                    '简要介绍一下自己对模组的看法或者经验': '各类整合包的锁阶段最好不要是生硬的锁，反例即为玄理2。较好的锁阶段是格雷的各个电压等级的材料，这些在到了阶段后是要大量投入实际生产当中去的<br/>模组添加模型不要用三角面建模多面体，材质需要是具有美术水平的16x，最多是仿16x的32x，反例为恐怖生物<br/>个人经验会于毕业后更新于st wiki的自动化笔记上'
                },
                passed: true
            },
            {
                id: 'Gao_Shi_Ya',
                date: '2024/01/12 02:08',
                sharables: {},
                passed: true
            },
            {
                id: 'Qing_Ming',
                date: '2024/01/12 11:46',
                sharables: {
                    '简要介绍一下自己最喜欢的模组或整合包类型': '下次还填龙之冒险（每周目都写，仍未如愿）。龙之冒险是一个高强度的冒险向整合包，其有着非常详细的游戏任务流程和介绍，因为有着大量模组的支撑，不同玩家也能有不同的游玩方向并且都有了一定的用处（例如：可以通过农夫乐事制作不同种类的食物来解锁不同的奖励和为冒险提供保障；通过星辉魔法，观测不同的星座，来为自身提供不同种的增益）。并且，整合包内有着庞大的任务系统和商店，玩家可以通过完成任务或是系统收购以获得货币，并且因为有ftb模组的加成，使得玩家可以通过组队共同完成任务，增进了玩家间的合作。'
                },
                passed: true
            },
            {
                id: 'GoldStorm_XX',
                date: '2024/01/12 12:37',
                sharables: {
                    '简要介绍一下自己对模组的看法或者经验': '希望来点新鲜有创意，能够改变游戏玩法的mod，很火的那些mod翻来覆去的已经玩遍了，无非就是改个数据魔改一下之类的',
                    '简要介绍一下自己最喜欢的模组或整合包类型': '休闲养老，玩起来会很惬意，比较轻松；末日生存，难度较大，挑战起来有趣，同时本身比较喜欢这个题材'
                },
                passed: true
            }
        ].reverse() as Application[]
    }
]

function applCardHook(e: ViewObject) {
    flowUp(e);
    const passedStatus = e.target.element.querySelector('.appl-status.passed');
    if (passedStatus !== null) {
        passedStatus.classList.add('scale-emphasis-animation');
    }
    const notPassedStatus = e.target.element.querySelector('.appl-status.not-passed');
    if (notPassedStatus !== null) {
        notPassedStatus.classList.add('shake-animation');
    }
}
</script>

<style lang="less">
@keyframes scale-emphasis {
    0% {
        transform: scale(1) rotate(0);
    }

    25% {
        transform: scale(2) rotate(-7deg);
    }

    45% {
        transform: scale(1) rotate(0);
    }

    90% {
        transform: scale(2) rotate(-7deg);
    }

    100% {
        transform: scale(1) rotate(0);
    }
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    10% {
        transform: translateX(-2px);
    }

    20% {
        transform: translateX(2px);
    }

    25% {
        transform: translateX(-4px);
    }

    30% {
        transform: translateX(4px);
    }

    35% {
        transform: translateX(-4px);
    }

    40% {
        transform: translateX(4px);
    }

    42% {
        transform: translateX(-6px);
    }

    44% {
        transform: translateX(6px);
    }

    46% {
        transform: translateX(-6px);
    }

    48% {
        transform: translateX(6px);
    }

    50% {
        transform: translateX(-6px);
    }

    52% {
        transform: translateX(6px);
    }

    54% {
        transform: translateX(-6px);
    }

    56% {
        transform: translateX(6px);
    }

    58% {
        transform: translateX(-6px);
    }

    60% {
        transform: translateX(6px);
    }

    65% {
        transform: translateX(-4px);
    }

    70% {
        transform: translateX(4px);
    }

    75% {
        transform: translateX(-4px);
    }

    80% {
        transform: translateX(2px);
    }

    90% {
        transform: translateX(-2px);
    }

    100% {
        transform: translateX(0);
    }
}

.scale-emphasis-animation {
    animation: scale-emphasis;
    animation-duration: 1s;
    animation-delay: .5s;
}

.shake-animation {
    animation: shake;
    animation-duration: 1s;
    animation-delay: .5s;
}
</style>

<style lang="less" scoped>
.appl-card {
    border-radius: 20px;
    border: 2px dashed rgba(0, 0, 0, .2);
    padding: 2rem;
    position: relative;

    @media (max-width: 1000px) {
        padding: 1rem;
    }

    .appl-no {
        font-weight: bold;
        font-size: 7rem;
        line-height: 1;
        opacity: .1;
        position: absolute;
        left: .5rem;
        bottom: .5rem;
        pointer-events: none;

        @media (max-width: 1000px) {
            font-size: 4rem;
        }
    }

    .appl-status {
        position: absolute;
        top: 2rem;
        right: 2rem;
        display: flex;
        align-items: center;
        gap: .5rem;
        line-height: 1;
        border-radius: 50px;
        padding: .3rem 1rem;

        @media (max-width: 1000px) {
            width: 32px;
            height: 32px;
            padding: 0;
            justify-content: center;
            top: 1rem;
            right: 1rem;

            .text {
                display: none;
            }
        }

        &.passed {
            color: #4caf50;
            background: #e8f5e9;

        }

        &.not-passed {
            color: #f44336;
            background: #ffebee;
        }
    }

    .appl-id {
        font-size: 2.8rem;
        line-height: 1;
        font-weight: bold;

        @media (max-width: 1000px) {
            font-size: 2rem;
        }
    }

    .appl-ticket-detail {
        font-size: 1.3rem;

        @media (max-width: 1000px) {
            font-size: 1.1rem;
        }
    }

    .appl-date {
        font-size: 1.5rem;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        line-height: 1;
        opacity: .3;
        pointer-events: none;
        .serif;
        .italic;

        @media (max-width: 1000px) {
            font-size: 1.1rem;
        }
    }

    .appl-sharables {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 1rem 0;

        .sharable {
            transition: all .2s ease;
            z-index: 200;
            border-radius: 20px;
            position: relative;

            @media (min-width: 1000px) {
                &:hover {
                    background: @primaryg;
                    padding: 1rem 2rem;
                    color: rgba(255, 255, 255, .7);

                    .start,
                    .end {
                        color: white;

                        .q {
                            color: rgba(255, 255, 255, .7);
                        }
                    }
                }
            }

            .start,
            .end {
                display: flex;
                flex-direction: row;
                gap: .5rem;
                align-items: center;
                font-weight: bold;
                font-size: 1.2rem;

                @media (max-width: 1000px) {
                    font-size: 1rem;
                }

                .q {
                    color: @primary;
                    font-size: 2rem;

                    @media (max-width: 1000px) {
                        font-size: 1.5rem;
                    }

                    pointer-events: none;
                }

                color: black;
            }

            .end {
                justify-content: flex-end;
            }

            .end .q {
                position: absolute;
                bottom: -.5rem;
                right: 2rem;
            }

            .sharable-content {
                font-size: 1.5rem;

                @media (max-width: 1000px) {
                    font-size: 1.2rem;
                }
            }
        }
    }
}

.serif {
    font-family: 'Times New Roman', Times, serif;
}

.italic {
    font-style: italic;
}

.appl-cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>