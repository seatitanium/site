<template>
	<div page>
		<banner bg="https://seati.oss-cn-qingdao.aliyuncs.com/assets/images/6.jpg">
			<template #title>关于 Seati</template>
			<template #subtitle>了解更多</template>
			<template #text
				>在这里了解有关 Seati 本身以及此网站的内容<br
			/></template>
		</banner>
		<div class="container content">
			<img class="bad-design" draggable="false" src="https://seati.oss-cn-qingdao.aliyuncs.com/assets/bad-design2.svg" />
			<h1 v-view.once="flowUp" class="primary-text">Seati 的过去</h1>
			<p v-view.once="flowUp" class="typo">
				<strong>Seati</strong> 最初是在 2018
				年作为服主探索开服的一个简单项目出现的，其名称 <strong>SEATiDE</strong> 来自于一个由 Sapherise（Oasis 服主）持有的搁置域名——seatide.net。
				由于服主并没有开展宣传工作，加之内容单一，并没有招来很多玩家。后来又由于服主的现实原因，一直处于搁置状态。SEATiDE 初期实际上只能算是挂了个名号。
			</p>
			<p v-view.once="flowUp" class="typo">
				在 2020 年，SEATiDE 成为
				<strong
					><a href="https://sotap.org" target="_blank"
						>SoTap 服务器</a
					></strong
				>的一个下属项目，由 SoTap
				提供资金并成为 SoTap 旗下的一个商业服，借此来补贴 SoTap
				服务器的费用。最后依然由于玩家数量、亏损以及人手原因，又遭停止。
			</p>
			<p v-view.once="flowUp" class="typo">
				SEATiDE 本初 Logo 设计参考了 SoTap 当时的上游服务器
				SunRise 的 Logo。SunRise 是个太阳，SEATiDE 作为下游自然而然就成了月亮，同时也符合「潮汐」的命名。
			</p>
			<figure v-view.once="flowUp" >
				<img src="https://seati.oss-cn-qingdao.aliyuncs.com/assets/sunrise.svg" />
				<figcaption>SunRise 的 Logo</figcaption>
			</figure  >
			<figure v-view.once="flowUp">
				<img style="width: 90%" v-view.once="flowLeft" src="https://seati.oss-cn-qingdao.aliyuncs.com/assets/seatide-text.png" />
				<figcaption>SEATiDE 的 Logo</figcaption>
			</figure>
			<p class="typo" v-view.once="flowUp">
				这一 Logo 沿用到了 2023 年，直至 6 月份 SEATiDE 核心定位的改变（你可以在<a href="https://docs.qq.com/doc/DWEhGanJGeGpLcGdu" target="_blank">这篇在线文档</a>中查看更改了些什么），Logo 也随之发生了改变。至于为什么会发生这一改变，大概是因为服主能够投入更多的精力在这一服务器上，将它作为了一个全新起点的标志。
			</p>
			<p class="typo" v-view.once="flowUp">
				我们希望这次能够更加贴近「海洋」的主题，因而采用了富有活力的字体表现以及蓝色的主色调。
			</p>
			<figure v-view.once="flowUp">
				<img style="width: 90%; transform: scale(.8)" v-view.once="flowLeft" src="https://seati.oss-cn-qingdao.aliyuncs.com/assets/seati-gradient.svg" />
				<figcaption>当前使用的 Seati Logo</figcaption>
			</figure>
			<p v-view.once="flowUp" class="typo">
				早期 SEATiDE 的页面为单页面介绍式网站（可以到<a
					href="https://github.com/Subilan/seatide.net-archive"
					target="_blank"
					>这里</a
				>查看旧官网的源码），上面列举了比较实用的各项模块。如今的官网使用 Vue 编写而成，且在定位变更后经历了一次大规模重写。
			</p>
			<figure v-view.once="flowUp">
				<img
					v-view.once="flowLeft"
					v-lazy="
						'https://seati.oss-cn-qingdao.aliyuncs.com/assets/images/seatide-archive.png'
					"
				/>
				<figcaption>SEATiDE 的旧官网</figcaption>
			</figure>
			<h1 v-view.once="flowUp" class="primary-text">早期的探索</h1>
			<p v-view.once="flowUp" class="typo">
				SEATiDE 时期，我们曾经说过这样的话：
			</p>
			<p v-view.once="flowUp" class="typo">
				“SEATiDE 不只是一个普普通通的 Mod 服务器，更是一个用来探索
				<strong
					><abbr
						title="指认为在 Minecraft 这款游戏上，尤其是开服上，花钱越少越好的思想"
						>165 主义</abbr
					></strong
				>可行性的实验性项目。打造一个「<strong>低成本，高效率</strong>」且受欢迎的服务器是最终的目标。”
			</p>
			<p v-view.once="flowUp" class="typo">
				在当时的我们看来，稳定的服务器的费用高昂（<del
					>主要原因还是因为 MOJANG 优化太烂，太吃机器</del
				>），玩家在线数目短期或长期无法显著提升，黏性也需要不断培养，收入更是问题，充满了机遇性。因此我们认为<strong>非常没有必要为此每个月购买高达近千元或者数千元的服务器</strong>。所以我们想到了阿里云抢占式
				ECS 自动化的服务模式。
			</p>
			<p v-view.once="flowUp" class="typo">
				在这个模式下，不再会出现<strong>数天无人在线，服务器空转</strong>的现象。玩家随时想玩，可以随时开；不玩时，服务器也会自动关闭。同时，也有稳定的存档每
				10 分钟保存在阿里云 OSS
				上。就这样，我们免除了包月所带来的最大的困扰——<strong>人少，消耗大。</strong>根据
				2021 年 2 月到 2022 年 1 月的统计，我们每个月的最高消费约为
				<span class="money">￥150</span>，而同类型服务器包月的价格是
				<span class="money">￥500</span>。
			</p>
			<figure v-view.once="flowUp">
				<img
					v-view.once="flowLeft"
					v-lazy="'https://z3.ax1x.com/2021/08/27/hMmttU.png'"
				/>
				<figcaption>阿里云账单预览</figcaption>
			</figure>
			<p v-view.once="flowUp" class="typo">
				不过，这个模式仍然存在着一定的问题。例如<strong>收费不稳定</strong>（2022
				年 1 月由于阿里云上调价格且服主没有设置价格预警，导致
				<strong>10 天花费了 100 元</strong
				>的高价）、<strong>宣传难度大</strong>（没有固定的 IP
				地址和稳定的服务器在线情况，使得无法在服务器榜上出现）和<strong>有些麻烦</strong>（但也不是特别麻烦）等。
			</p>
			<p v-view.once="flowUp" class="typo">
				而现在，我们可以使用自己持有的独立主机，为你提供更好的游戏体验。
			</p>
			<h1 v-view.once="flowUp" class="primary-text">当今的目标</h1>
			<p v-view.once="flowUp" class="typo">模组的世界是多样的、宏大的，具有无限的可能性。我们希望能够提供一个自由的空间给玩家，以周目的形式探索各种主题的模组，感受模组之间<strong>互相搭配、相辅相成</strong>所产生的魅力。</p>
			<ul class="typo" v-view.once="flowUp">
				<li>作为玩家的你能够无限制地参与到周目的<strong>决策、记录和评定</strong>这三个过程中</li>
				<li>游玩过程中的<strong>任何独特问题</strong>都会受到积极的解答回复</li>
				<li>通过民主投票的方式，按照<strong>少数服从多数</strong>的原则决定每个周目玩些什么</li>
				<li>与 Oasis 的各种活动梦幻联动，体验模组之外的原版插件世界</li>
			</ul>
			<p v-view.once="flowUp" class="typo">为了避免这样的探索因周目的更替而失去意义，我们亦推出了 <a href="https://tisea.cc" target="_blank">Tisea</a> 这一平台，玩家可以在上面自由地分享和记录自己的游戏体验，并且参加诸多活动。</p>
			<h1 v-view.once="flowUp" class="primary-text">欢迎加入</h1>
			<p v-view.once="flowUp" class="typo">
				Seati 当前仍然处于开端，我们随时期待你的参与~ 下面是我们的 QQ 讨论群链接和 GitHub 主页链接。
			</p>
			
			<a
				v-view.once="flowLeft"
				class="link-card qq"
				href="https://qm.qq.com/cgi-bin/qm/qr?k=tcoJ_CF6AjAWGQS62TxGRIidea_4tqw7&jump_from=webapi"
				target="_blank"
			>
				<mdicon name="arrow-right" />
				<img src="https://seati.oss-cn-qingdao.aliyuncs.com/assets/tencent-qq.svg" />
				<div class="text">
					<h1>QQ 讨论群</h1>
					<h2>
						点击加入，或搜索群号 820912578<br />验证信息请填写你的正版
						ID
					</h2>
				</div>
			</a>
			<a
				v-view.once="flowLeft"
				class="link-card github"
				href="https://github.com/seatitanium"
				target="_blank"
			>
				<img src="https://seati.oss-cn-qingdao.aliyuncs.com/assets/github.svg" />
				<div class="text">
					<mdicon name="arrow-right" />
					<h1>查看 GitHub</h1>
					<h2>
						我们会将大部分 Seati
						技术实现方面的内容和程序放在这里，你可以随时查看。如果你有兴趣，也可以提
						Issue 和 PR。
					</h2>
				</div>
			</a>
			
			<h1 id="special-thanks" v-view.once="flowUp" class="primary-text">鸣谢</h1>
			<p v-view.once="flowUp" class="typo">
				感谢这些曾经为 Seati 奉献过的人或组织。如果没有他们，Seati 将缺少许多美妙。
				<ul>
					<li><a href="https://leviatan.cn" target="_blank">WindSpiritSR</a> 为 Seati 提供高速 API 托管服务和部分技术支持</li>
					<li>123__jk 为 Seati 提供部分摄影作品</li>
					<li><a href="https://sotap.org" target="_blank">SoTap 服务器</a>为摄影作品提供取景地</li>
					<li>Qing_Ming、JesseM1024 等玩家为 ST7 主动开展模组兼容性/性能测试。</li>
				</ul>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue';
import { scaleIn, flowUp, flowLeft } from '@/fn';
export default Vue.extend({
	components: {
		Banner
	},
	methods: {
		scaleIn,
		flowUp,
		flowLeft
	}
});
</script>

<style lang="less" scoped>
.bad-design {
	width: 300px;
	display: block;
	margin-bottom: 32px;
}

.container {
	margin-bottom: 64px;
}
</style>