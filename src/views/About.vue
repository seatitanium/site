<template>
    <div page>
        <banner bg="https://fnmdp.oss-cn-beijing.aliyuncs.com/images/6.jpg">
            <template #title>关于 SEATiDE</template>
            <template #subtitle>了解更多</template>
            <template #text>在这里了解有关 SEATiDE 本身以及此网站的内容<br/></template>
        </banner>
        <div class="container content">
            <img class="bad-design" src="@/assets/bad-design.svg"/>
            <h1 class="primary-text">SEATiDE 的由来</h1>
            <p class="typo">SEATiDE 成立于 2018 年，最初是一个没有什么目的的模组小服。后来由于经费问题加之玩家热度单调递减，SEATiDE 第一次停服，那时 SEATiDE 开了没到一年时间。</p>
            <p class="typo">接下来的一段时间里，由于服主的工作原因，一直处于搁置状态。直到后来 SEATiDE 成为 SoTap 服务器的一个下属项目，承接资金并转型为商业服以补贴服务器费用，再次开启。最后依然由于玩家数量、亏损以及内部原因停止。</p>
            <p class="typo">「SEATiDE」这一名称最初来源于 SoTap 服务器所拥有的一个空闲域名 seatide.net，后一直作为本服的名称。SEATiDE 的 Logo 也参考了 SoTap 当时的上游服务器 SunRise 的 Logo。</p>
            <p class="typo">如今，大概是 SEATiDE 的又一次「复活」，并在这一次做了正式的官网（可以到<a href="https://github.com/Subilan/seatide.net-archive" target="_blank">这里</a>查看之前官网的源码）。这次由于面向公众，所以应当是长久的。SEATiDE 不只是一个服务器，更是一个用来贯彻 <strong><abbr title="指认为在 Minecraft 这款游戏上，尤其是开服上，花钱越少越好的思想">165 主义</abbr></strong>的探索性项目，一个「低成本，高效率」且受欢迎的服务器是我们的最终目标。</p>
            <figure>
                <img src="https://fnmdp.oss-cn-beijing.aliyuncs.com/images/seatide-archive.png"/>
                <figcaption><span>fig. 2</span>SEATiDE 的旧官网（一个页面包含所有信息）</figcaption>
            </figure>
            <h1 class="primary-text">全新的初衷</h1>
            <p class="typo">众所周知，模组服领域是「遍地快餐服，不快不寻常」的局面，玩家的目标主要集中于将所玩的模组「毕业」，然后就再也没有了目标，这对于玩家留存是致命的，所以我们尝试创造一种不以完成模组为目标的游戏模式。</p>
            <p class="typo">同时，由于服务器的费用高昂，玩家在线数目短期内无法显著提升，黏性也有待培养，因此我们认为非常没有必要为此每个月购买高达近千元或者数千元的服务器，所以我们启用了抢占式 ECS 自动化的服务模式。</p>
            <p class="typo">受此模式启发，我们提倡使用现代程序工具来解决我们所遇到的种种问题、满足我们提出的需求。比如我们可以增设在白天睡觉的功能，或者添加一些特殊机制，这无疑是为服务器增光添彩的好方式。如果你有兴趣，我们随时欢迎你加入其中，开发也好，提想法也好，总之一起建设并体验 SEATiDE！</p>
            <h1 class="primary-text">欢迎加入</h1>
            <p class="typo">目前，SEATiDE 并没有运营团队，全部工作（后端程序的开发、网站的编写和维护、服务器的编写和维护等）工作由服主一人承担，但由于服主并没有太多精力，因此如果你有任何意向，欢迎加入我们的讨论群咨询！</p>
            <div class="link-card github" @click="$open('https://github.com/seatidemc')">
                <img src="@/assets/github.svg"/>
                <div class="text">
                    <mdicon name="arrow-right"/>
                    <h1>查看 GitHub</h1>
                    <h2>我们会将大部分 SEATiDE 技术实现方面的内容和程序放在这里，你可以随时查看。如果你有兴趣，也可以提 Issue 和 PR。</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue'
export default Vue.extend({
    components: {
        Banner
    }
})
</script>

<style lang="less" scoped>
.bad-design {
    width: 400px;
    display: block;
    margin-bottom: 16px;
    pointer-events: none;
}

.link-card{
    &.github {
        h2 {
            color: @textlightgray;
        }
    }
}
</style>