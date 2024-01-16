<template>
    <div page>
        <div ref="quicksearchOverlay" class="quicksearch-cool-overlay">
            <div ref="quicksearchTextbox" class="text-box">
                <div class="primary">需要通过 ID 快速查询审核结果？</div>
                <div class="secondary"><span class="subtle">仅需输入 ID
                        即可得知与之关联的所有信息。</span><br /><br />注意：此功能不会透露任何内部信息。<br />能够显示在这里的信息，在页面中亦可找到，为公开内容。</div>
                <div class="indicator">鼠标左键单击按钮开始查询</div>
            </div>
            <div ref="quicksearchDialog" class="quicksearch-cool-dialog">
                <input v-model="quicksearchContent" placeholder="在此键入要搜索的 ID" class="quicksearch-input" />
                <div class="quicksearch-results">
                    <div class="result-box" v-if="quicksearchResult.length > 0">
                        <div class="quicksearch-result" v-for="(x, i) in quicksearchResult">
                            <div class="result-date">
                                <span class="serif"><span class="italic">GMT+8 @</span> {{ x.submissionDate }}</span>
                            </div>
                            <div class="result-id">
                                {{ x.id }}
                            </div>
                            <div class="appl-status" :class="x.passed ? 'passed' : 'not-passed'">
                                <mdicon :name="x.passed ? 'check' : 'close'" />
                                <span class="text">{{ x.passed ? '审核通过' : '审核未通过' }}</span>
                            </div>
                            <div class="result-term-badge">
                                ST{{ x.term }}
                            </div>
                        </div>
                    </div>
                    <div class="empty-text" v-else>
                        {{ quicksearchContent.length > 0 ? `暂无包含 「${quicksearchContent}」 的结果` : '键入任意关键字以继续' }}
                    </div>
                </div>
            </div>
        </div>

        <banner bg="https://seati.oss-cn-qingdao.aliyuncs.com/assets/images/8.jpg">
            <template #title>审核结果及玩家列表</template>
            <template #subtitle>获取白名单</template>
            <template #text>此处列出了自 ST11 起各个周目的审核结果，以及参与周目游戏的玩家列表</template>
        </banner>
        <div class="container">
            <div class="content typo">
                <div class="quicksearch-button" @click="quicksearchOpened = !quicksearchOpened"
                    @mouseenter="mouseEnterQuickSearchBtn()" @mouseleave="mouseLeaveQuickSearchBtn()">
                    {{ quicksearchOpened ? '关闭' : '通过 ID 快速查询' }}
                </div>
                <h1 class="primary-text" v-view.once="flowUp">页面简介</h1>
                <p v-view.once="flowUp">
                    此页面列出了尝试取得白名单的玩家的所有审核记录，以及他们在问卷中填写的一些信息（由本人选择是否公开）。每个玩家在每次参与问卷时的相关信息，会被归类在填写时正运行或预计运行的周目的标题之下。</p>
                <p v-view.once="flowUp">此页面上的信息不是实时更新的，会有一定的延迟。本人的信息根据本人意愿可随时修改，具体事宜请联系交流群内的管理员。</p>
                <p v-view.once="flowUp">玩家个人的观点和提供的信息，不代表 Seati 的观点和信息。</p>
                <div class="term" v-for="x in terms">
                    <h1 class="primary-text" v-view.once="flowUp">ST{{ x.number }}</h1>
                    <div class="appl-cards">
                        <div class="appl-card" v-view.once="applCardHook" v-for="(y, k) in x.applications">
                            <div class="appl-no"><span class="serif italic">Ticket</span> #{{
                                x.applications.length - k }}</div>
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
                                <span class="serif italic">GMT+8 @ </span>
                                <span class="serif">{{ y.submissionDate }}</span>
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
import applications11 from '@/applications-st11.json';
import applications12 from '@/applications-st12.json'
import { ref, watch } from 'vue';

interface Term {
    applications: Application[],
    number: number
}

interface Application {
    id: string,
    passed: boolean,
    sharables: { [prop: string]: string },
    submissionDate: string
}

interface QuicksearchResult {
    id: string,
    passed: boolean,
    submissionDate: string,
    term: number
}

const terms: Term[] = [
    {
        number: 11,
        applications: (applications11 as Application[]).reverse()
    },
    {
        number: 12,
        applications: (applications12 as Application[]).reverse()
    }
].reverse()

const quicksearchOverlay = ref<HTMLDivElement | null>(null);
const quicksearchTextbox = ref<HTMLDivElement | null>(null);
const quicksearchDialog = ref<HTMLDivElement | null>(null);
const quicksearchContent = ref('');
const quicksearchOpened = ref(false);
const quicksearchLocked = ref(false);
const quicksearchResult = ref<QuicksearchResult[]>([]);

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

function wait(ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

watch(quicksearchContent, v => {
    if (quicksearchContent.value === '') {
        quicksearchResult.value = [];
        return;
    }
    if (quicksearchLocked.value) return;
    quicksearchLocked.value = true;
    setTimeout(() => {
        quicksearchLocked.value = false;
    }, 200);
    quicksearchResult.value = [];
    for (let t of terms) {
        let result = t.applications.filter(x => x.id.toLowerCase().includes(v.toLowerCase()));
        let resultArr = [];
        for (let r of result) {
            resultArr.push({
                term: t.number,
                id: r.id,
                passed: r.passed,
                submissionDate: r.submissionDate
            });
        }
        quicksearchResult.value = quicksearchResult.value.concat(resultArr);
    }
})

watch(quicksearchOpened, async v => {
    const textbox = quicksearchTextbox.value as HTMLDivElement
    const dialog = quicksearchDialog.value as HTMLDivElement
    const overlay = quicksearchOverlay.value as HTMLDivElement
    if (v) {
        if (overlay.style.display !== 'flex') {
            textbox.style.display = 'none';
            await showOverlay();
        } else {
            textbox.style.opacity = '0';
            textbox.style.transform = 'translateX(-20px)'
            await wait(200);
            textbox.style.display = 'none';
        }
        dialog.style.display = 'block';
        await wait(20);
        dialog.style.opacity = '1';
        dialog.style.transform = 'translateX(0)'
    } else {
        mouseLeaveQuickSearchBtn();
        await wait(200);
        quicksearchContent.value = '';
        textbox.style.opacity = '1';
        textbox.style.transform = 'translateX(0)'
        textbox.style.display = 'block';
        dialog.style.display = 'none';
        dialog.style.opacity = '0';
        dialog.style.transform = 'translateX(20px)'
    }
})

async function showOverlay() {
    const el = quicksearchOverlay.value as HTMLDivElement
    el.style.display = 'flex';
    await wait(20);
    el.style.opacity = '1';
    el.style.transform = 'scale(1)';
}

async function closeOverlay() {
    const el = quicksearchOverlay.value as HTMLDivElement
    el.style.opacity = '0';
    el.style.transform = 'scale(1.1)';
    await wait(200);
    el.style.display = 'none';
}

function mouseEnterQuickSearchBtn() {
    if (quicksearchOpened.value) return;
    showOverlay();
}

function mouseLeaveQuickSearchBtn() {
    if (quicksearchOpened.value) return;
    closeOverlay();
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
.quicksearch-cool-overlay {

    .text-box {
        display: block;
        transform: translateX(0);
        opacity: 1;
        transition: all .2s ease;
    }

    .quicksearch-cool-dialog {
        display: none;
        opacity: 0;
        transform: translateX(20px);
        transition: all .2s ease;

        .empty-text {
            font-size: 1.5rem;
            margin: 1rem 0;
        }

        .quicksearch-input {
            background: transparent;
            font-size: 2rem;
            font-family: 'SF Mono', 'Cascadia Mono', Consolas, 'Courier New', Courier, monospace;
            outline: none;
            color: white;
            border: none;
            border-bottom: 2px solid rgba(255, 255, 255, .2);
            transition: all .2s ease;

            &:hover {
                border-bottom-color: rgba(255, 255, 255, 1);
            }

            &:focus {
                border-bottom-color: @primary;
            }

            &::placeholder {
                color: rgba(255, 255, 255, .6);
            }
        }
    }

    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, .7);
    backdrop-filter: blur(5px);
    z-index: 1500;
    display: none;
    opacity: 0;
    transform: scale(1.1);
    transition: all .2s ease;

    align-items: center;
    justify-content: center;
    text-align: center;

    *::selection {
        background: transparent;
    }

    .primary {
        font-size: 4rem;
        font-weight: bold;
        margin: 1rem 0;
    }

    .secondary {
        font-size: 2rem;
    }

    .subtle {
        color: rgba(255, 255, 255, .6);
    }

    .indicator {
        font-size: 2rem;
        padding-top: 4rem;
        font-style: italic;

        &::before,
        &::after {
            color: @primary;
            font-weight: bold;
        }

        &::before {
            content: '> ';
        }

        &::after {
            content: ' <';
        }
    }

    color: white;
}

.quicksearch-results {
    .result-box {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        gap: 1rem;
        align-items: stretch;
        max-height: 500px;
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }


}

.quicksearch-result {
    text-align: left;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, .6);
    border-radius: 20px;
    position: relative;

    .result-id {
        font-size: 2rem;
        font-weight: bold;
    }

    .result-date {
        opacity: .6;
    }

    .appl-status {
        display: inline-flex;
        border: 1px solid;
        margin-top: .5rem;

        &.passed {
            color: #69f0ae;
        }

        &.not-passed {
            color: #ff5252;
        }
    }

    .result-term-badge {
        padding: .2rem .5rem;
        background: white;
        color: @primary;
        border-radius: 20px;
        display: inline-block;
        position: absolute;
        right: 1.5rem;
        bottom: 1.5rem;
        line-height: 1;
    }
}

.quicksearch-button {
    border-radius: 40px;
    padding: 1rem 2rem;
    border: 1px solid rgba(0, 0, 0, .2);
    display: block;
    position: fixed;
    line-height: 1;
    cursor: pointer;
    right: 50%;
    transform: translateX(50%);
    bottom: 2rem;
    z-index: 200;
    transition: all .2s ease;
    background: white;
    font-size: 1.5rem;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .1);
    z-index: 1500;

    @media (max-width: 1000px) {
        display: none;
    }

    &:hover {
        background: @primaryg;
        color: white;
        border-color: transparent;
        transform: translateX(50%) scale(1.1);
    }
}

.appl-status {
    display: flex;
    align-items: center;
    gap: .5rem;
    line-height: 1;
    border-radius: 50px;
    padding: .3rem 1rem;

    &.passed {
        color: #4caf50;

    }

    &.not-passed {
        color: #f44336;
    }
}

.appl-card {
    border-radius: 20px;
    border: 2px dashed rgba(0, 0, 0, .2);
    padding: 2rem;
    position: relative;
    min-height: 80px;

    @media (max-width: 1000px) {
        padding: 1rem;
    }

    .appl-status {
        position: absolute;
        top: 2rem;
        right: 2rem;

        &.passed {
            background: #e8f5e9;
        }

        &.not-passed {
            background: #ffebee;
        }

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
    }

    .appl-no {
        font-weight: bold;
        font-size: 6rem;
        line-height: 1;
        opacity: .1;
        position: absolute;
        left: .5rem;
        bottom: .5rem;
        pointer-events: none;

        @media (max-width: 1000px) {
            font-size: 3rem;
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