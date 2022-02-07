<template>
	<div page>
		<banner :bg="require('@/assets/images/6.jpg')">
			<template #title>关于 SEATiDE</template>
			<template #subtitle>了解更多</template>
			<template #text
				>在这里了解有关 SEATiDE 本身以及此网站的内容<br
			/></template>
		</banner>
		<div class="container content">
			<img class="bad-design" src="@/assets/bad-design.svg" />
			<h1 v-view.once="flowUp" class="primary-text">SEATiDE 的过去</h1>
			<p v-view.once="flowUp" class="typo">
				<strong>SEATiDE</strong> 最初是在 2018
				年作为服主探索开服的一个简单项目出现的，其名称来自于一个<strong>搁置的域名</strong>。
				由于服主并没有开展宣传工作，加之内容单一，<strong>并没有招来很多玩家</strong>。后来由于服主的现实原因，一直处于搁置状态。
			</p>
			<p v-view.once="flowUp" class="typo">
				在 2020 年，SEATiDE 成为
				<strong
					><a href="https://sotap.org" target="_blank"
						>SoTap 服务器</a
					></strong
				>的一个下属项目，由 SoTap
				提供资金并<strong>转型为商业服</strong>以补贴 SoTap
				服务器的费用。最后依然由于玩家数量、亏损以及人手原因停止。
			</p>
			<p v-view.once="flowUp" class="typo">
				SEATiDE 的 Logo 设计参考了 SoTap 当时的上游服务器
				<strong>SunRise</strong> 的 Logo。
			</p>
			<figure>
				<img v-view.once="flowLeft" src="@/assets/sunrise.svg" />
				<figcaption>SunRise 的 Logo 是个太阳</figcaption>
			</figure>
			<h1 v-view.once="flowUp" class="primary-text">新的开始</h1>
			<p v-view.once="flowUp" class="typo">
				2021 年 8 月，SEATiDE 又一次<strong>「复活」</strong>。
			</p>
			<p v-view.once="flowUp" class="typo">
				这次复活完全是因为服主的个人兴趣。服主认为，<strong>开服是为了开心</strong>，因而才想到利用一些简单的程序来实现自动化。
				这样即使或开或停，服务器也<strong>一直存在着</strong>，不必担心过度的消耗，也不必担心来玩的人太少。
			</p>
			<div class="saying">
				
				<p v-view.once="flowUp">
					<span class="quote">「</span> 就是想弄个<strong>不管怎么运行</strong>都能正常的服，<strong>关了但没完全关，开了但没完全开</strong>，总之<strong>一直存在着</strong>，不挺好
				 <span class="quote">」</span></p>
				
			</div>
			<p v-view.once="flowUp" class="typo">
				相比于早期 SEATiDE 的单页面介绍式网站，SEATiDE
				在这一次拥有了更为正式的官网（可以到<a
					href="https://github.com/Subilan/seatide.net-archive"
					target="_blank"
					>这里</a
				>查看旧官网的源码）。
			</p>
			<figure>
				<img
					v-view.once="flowLeft"
					v-lazy="
						require('@/assets/images/seatide-archive.png')
					"
				/>
				<figcaption>SEATiDE 的旧官网</figcaption>
			</figure>
			<p v-view.once="flowUp" class="typo">
				SEATiDE 不只是一个普普通通的 Mod 服务器，更是一个用来探索
				<strong
					><abbr
						title="指认为在 Minecraft 这款游戏上，尤其是开服上，花钱越少越好的思想"
						>165 主义</abbr
					></strong
				>可行性的实验性项目。打造一个「<strong>低成本，高效率</strong>」且受欢迎的服务器是最终的目标。
			</p>
			<h1 v-view.once="flowUp" class="primary-text">新的模式</h1>
			<p v-view.once="flowUp" class="typo">
				在我们看来，稳定的服务器的费用高昂（<del
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
			<figure>
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
				地址和稳定的服务器在线情况，使得无法在服务器榜上出现）等，但显然这些问题都是可以解决的。
			</p>
			<p v-view.once="flowUp" class="typo">
				<strong>诚邀你加入我们</strong
				>——在游玩的同时，和我们一同探索更好的 Minecraft
				服务器运作模式吧！
			</p>
			<h1 v-view.once="flowUp" class="primary-text">欢迎加入</h1>
			<p v-view.once="flowUp" class="typo">
				目前，SEATiDE
				并没有运营团队，全部工作（后端程序的开发、网站的编写和维护、服务器的编写和维护等）由服主一人承担。如果你有任何加入项目的意向，或者希望在
				SEATiDE 游玩，欢迎加入我们的讨论群！
			</p>
			<a
				v-view.once="flowLeft"
				class="link-card qq"
				href="https://qm.qq.com/cgi-bin/qm/qr?k=tcoJ_CF6AjAWGQS62TxGRIidea_4tqw7&jump_from=webapi"
				target="_blank"
			>
				<mdicon name="arrow-right" />
				<img src="@/assets/tencent-qq.svg" />
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
				href="https://github.com/seatidemc"
				target="_blank"
			>
				<img src="@/assets/github.svg" />
				<div class="text">
					<mdicon name="arrow-right" />
					<h1>查看 GitHub</h1>
					<h2>
						我们会将大部分 SEATiDE
						技术实现方面的内容和程序放在这里，你可以随时查看。如果你有兴趣，也可以提
						Issue 和 PR。
					</h2>
				</div>
			</a>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/components/Banner.vue";
import { scaleIn, flowUp, flowLeft } from "@/fn";
export default Vue.extend({
	components: {
		Banner,
	},
	methods: {
		scaleIn,
		flowUp,
		flowLeft,
	},
});
</script>

<style lang="less" scoped>
.bad-design {
	width: 400px;
	display: block;
	margin-bottom: 16px;
	pointer-events: none;
	@media (max-width: 800px) {
		width: 200px;
	}
}

.container {
	margin-bottom: 64px;
}

.saying {
	p {
		font-style: italic;
		text-align: center;
		.quote {
			font-style: normal;
		}
	}

	&,
	p {
		font-size: 44px !important;
		@media (max-width: 1000px) {
			font-size: 20px !important;
		}
	}

	@media (max-width: 1000px) {
		margin: 16px 0 !important;
		padding: 16px;
	}
	margin: 32px 0 !important;
	color: rgba(255, 255, 255, 0.5);
	padding: 32px;
	background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
		url('~@/assets/images/say-bg.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	strong {
		color: white;
		font-weight: normal;
	}
}
</style>