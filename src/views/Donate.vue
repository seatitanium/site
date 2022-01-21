<template>
	<div page>
		<banner bg="https://fnmdp.oss-cn-beijing.aliyuncs.com/images/7.jpg">
			<template #title> 捐助 SEATiDE </template>
			<template #subtitle> 帮助我们持续运行 </template>
			<template #text>
				SEATiDE 是公益服，没有任何盈利项目，但接受无偿捐助，这能够维持
				SEATiDE 的运行，也是 SEATiDE 的唯一收入。<br />你可以在本页面查看
				SEATiDE 的资金运转情况和捐赠者信息。
			</template>
		</banner>
		<div class="container">
			<div class="content typo">
				<h1 v-view.once="flowUp" class="primary-text">
					SEATiDE 的资金使用原理
				</h1>
				<p v-view.once="flowUp">
					SEATiDE
					的开销主要来自实例运行（计算类）和服务器备份和数据存储（存储类）。SEATiDE
					服务器运行在阿里云 ECS
					的<strong>抢占式实例</strong>上，根据阿里云官方的描述，其根据市场供需结构和库存来决定扣款时机和扣款数额。通常情况下扣款数额不会过于偏离<strong>第一个小时的价格</strong>。当前我们使用的服务器类型是
					<strong>ecs.g6.xlarge</strong>，第一个小时的价格为
					<span class="money">￥0.159</span>。
				</p>
				<p v-view.once="flowUp">
					我们通过统计 2021 年 2 月至 2022 年 1
					月的账单（月份不连续），得出了如下结论。括号后注明的是与上次统计相比的变化。
				</p>
				<ul v-view.once="flowUp">
					<li>
						计算类平均扣款量（时间不均匀）：<span class="money"
							>￥0.17</span
						>（-0.02）
					</li>
					<li>
						计算类最高收费：<span class="money"
							>￥1.29</span
						>（+0.79）
					</li>
					<li>计算类最低收费：<span class="money">￥0.01</span></li>
					<li>
						计算类收费数额众数：<span class="money"
							>￥0.18</span
						>（+0.01）
					</li>
					<li>
						存储类平均扣款量（时间不均匀）<span class="money"
							>￥0.06</span
						>
					</li>
					<li>计算类月均收费次数：243</li>
					<li>存储类月均收费次数：201</li>
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
						从未教唆未成年人「为游戏充值」。捐助即代表你已经阅读并知晓该声明。</strong
					>
				</p>
				<p v-view.once="flowUp">
					此处提供支付宝和微信支付的二维码，如需其它支付方式（不支持
					QQ 支付）可联系服主。若要捐助，扫描二维码即可，付款时<strong
						>请备注你的 Minecraft 用户名</strong
					>，以便我们写入鸣谢名单（低于
					<span class="money">￥5</span>
					的款项恕不写入）。支持
					<strong>5 天无理由全额退款</strong>，超过 5
					天若仍因某些原因仍需退款可联系服主。
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
					发展和维持运行。排名使用洗牌算法随机排列，刷新页面可重排。
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
					amount: 150,
				},
				{
					name: "WindSpirit",
					amount: 51,
				},
				{
					name: "Constant137",
					amount: 100,
				},
				{
					name: "usua233",
					amount: 30,
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
