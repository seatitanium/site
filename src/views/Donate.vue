<template>
	<div page>
		<banner bg="https://fnmdp.oss-cn-beijing.aliyuncs.com/images/7.jpg">
			<template #title> 捐助 SEATiDE </template>
			<template #subtitle> 帮助我们持续运行 </template>
			<template #text>
				SEATiDE 是公益服，但仍然接受无偿捐助，这能够维持 SEATiDE
				的运行。<br />所有无偿捐助者的名字均会在本页面显示。
			</template>
		</banner>
		<div class="container">
			<div class="content typo">
				<h1 v-view.once="flowUp" class="primary-text">
					SEATiDE 的资金使用原理
				</h1>
				<p v-view.once="flowUp">
					SEATiDE 的开销主要来自两个方面：Minecraft
					服务器和网页服务器。其中网页服务器使用的是阿里云轻量应用服务器（香港），每个月固定缴纳
					<span class="money">￥34</span>。Minecraft
					服务器运行在阿里云 ECS
					的<strong>抢占式实例</strong>上，根据阿里云官方的描述，其根据市场供需结构和库存来决定扣款时机和扣款数额。通常情况下扣款数额不会过于偏离<strong>第一个小时的价格</strong>。当前我们使用的服务器类型是
					<strong>ecs.g6.xlarge</strong>，第一个小时的价格为
					<span class="money">￥0.205</span>。
				</p>
				<p v-view.once="flowUp">
					我们通过统计 2021 年 2 月、3 月初以及 6
					月三个时间段运营的账单情况，得出了如下结论
				</p>
				<ul v-view.once="flowUp">
					<li>
						平均扣款量（扣款时间不均匀）：<span class="money"
							>￥0.19</span
						>
					</li>
					<li>最高收费：<span class="money">￥0.5</span></li>
					<li>最低收费：<span class="money">￥0.01</span></li>
					<li>收费数额众数：<span class="money">￥0.17</span></li>
				</ul>
				<p v-view.once="flowUp">
					我们会不定期向阿里云账户内充入余额以支付 Minecraft
					服务器的扣款开销。你的任何捐助都将会在必要的时候充入余额，<strong
						>我们保证将所有的无偿捐助用于维持 SEATiDE
						本身的网页服务器或者 Minecraft 服务器的运行</strong
					>。
				</p>
				<h1 v-view.once="flowUp" class="primary-text">如何捐助</h1>
				<p v-view.once="flowUp">
					免责声明：<strong
						>未满 18 岁的未成年人请在家长同意后进行捐助，SEATiDE
						不接受未成年人未经允许的捐助。</strong
					>
				</p>
				<p v-view.once="flowUp">
					此处提供支付宝和微信支付的二维码，如需其它支付方式（不支持 QQ 支付）可联系服主。若要捐助，扫描二维码即可，付款时<strong
						>请备注你的 Minecraft 用户名</strong
					>，以便我们写入鸣谢名单（低于
					<span class="money">￥0.5</span>
					的款项恕不写入）。无偿捐助支持
					<strong>5 天无理由全额退款</strong>，超过 5
					天若仍想退款可联系服主。
				</p>
				<div v-view.once="flowUp" class="pay">
					<img
						v-lazy="
							'https://fnmdp.oss-cn-beijing.aliyuncs.com/images/alipay-qr.jpg'
						"
					/>
					<img
						v-lazy="
							'https://fnmdp.oss-cn-beijing.aliyuncs.com/images/wechat-qr.JPG'
						"
					/>
				</div>
				<h1 v-view.once="flowUp" class="primary-text">感谢捐助</h1>
				<p v-view.once="flowUp">
					感谢这些人的无偿捐助，帮助了 SEATiDE
					发展和维持运行。排名使用洗牌算法随机排列，刷新可重排。
				</p>
				<ul v-view.once="flowUp">
					<li v-for="(x, i) in shuffle(donators)" :key="i">
						{{ x.name }} —
						<span class="money">￥{{ x.amount }}</span>
					</li>
				</ul>
				<p v-view.once="flowUp">
					同时感谢
					<a href="//leviatan.cn" target="_blank">WindSpirit</a> 为
					SEATiDE 提供的高速 API 托管服务，感谢 123__jk 为本站提供的
					Minecraft 摄影作品。
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/components/Banner.vue";
import { flowUp } from "@/fn";

export default Vue.extend({
	components: {
		Banner,
	},
	data() {
		return {
			donators: [
				{
					name: "123__jk",
					amount: 66,
				},
				{
					name: "Litter_white",
					amount: 50,
				},
				{
					name: "Majesty_W",
					amount: 100,
				},
				{
					name: "WindSpirit",
					amount: 51,
				},
				{
					name: "Constant137",
					amount: 100,
				},
			],
		};
	},
	methods: {
		flowUp,
		shuffle(array: Array<any>) {
			var m = array.length,
				t,
				i;
			while (m) {
				i = Math.floor(Math.random() * m--);
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}
			return array;
		},
	},
});
</script>

<style lang="less" scoped>
.pay {
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		margin: 0 8px;
		height: 300px;

		@media (max-width: 800px) {
			height: 200px;
		}
	}
}
</style>
