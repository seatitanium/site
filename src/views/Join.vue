<template>
	<div page>
		<banner
			bg="https://fnmdp.oss-cn-beijing.aliyuncs.com/images/2021-08-24_21.23.12.png"
		>
			<template #title> 加入 SEATiDE </template>
			<template #subtitle> 开始体验 </template>
			<template #text>
				SEATiDE 是 Java 正版高版本模组服务器，加入唯一的门槛<br />
				是价值 ￥165 的正版以及一台可以带动模组的电脑。
			</template>
		</banner>
		<div class="container">
			<div class="server-status">
				<h1 class="primary-text">服务器概况</h1>
				<meta-bar>
					<meta-item icon="minecraft">
						<template #name> 版本 </template>
						<template #text>
							<span style="font-family: Consolas, monospace"
								>Java {{ server.version ? server.version : '获取中...' }}</span
							>
						</template>
					</meta-item>
					<meta-item icon="package">
						<template #name> 模组数 </template>
						<template #text> {{server.mods ? server.mods.length : '获取中...'}} </template>
					</meta-item>
					<meta-item icon="map-clock">
						<template #name> 开服时间 </template>
						<template #text> {{ server.since ? server.since : '获取中...'}} </template>
					</meta-item>
				</meta-bar>
				<p class="typo">
					SEATiDE
					当前处于<strong>第一周目</strong>，本周目的主题是<strong>「环境学」</strong>，偏向于休闲生存，配备了许多家具模组。
					<br />作为 SEATiDE
					项目建立以后的第一个周目，本周目的时间<strong>将会较长</strong>。
				</p>
				<div class="mods">
					<div
						v-for="(x, i) in server.mods.filter(x => x.type !== 'dep')"
						:key="i"
						class="mod"
						style="
							background-image: url('https://z3.ax1x.com/2021/08/25/hepl9g.jpg');
						"
					>
						<span>#{{ i + 1 }}</span>
						<h1>{{ x.zh ? x.zh : x.name }}</h1>
						<h2 v-if="x.zh">{{ x.name }}</h2>
						<p v-if="x.desc">{{ x.desc }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/components/Banner.vue";
import MetaBar from "@/components/MetaBar.vue";
import MetaItem from "@/components/MetaItem.vue";
import { get } from "@/fn";

export default Vue.extend({
	components: {
		Banner,
		MetaBar,
		MetaItem,
	},
	data() {
		return {
			server: {} as ServerInformation,
		};
	},
	mounted() {
		get("/api/server/v1/get/server").then((r) => {
			if (!isNaN(Number(r.data.data.bestram))) {
				this.server = r.data.data;
			}
		});
	},
});
</script>

<style lang="less" scoped>
.server-status {
	padding: 32px 0;
	.primary-text {
		font-size: 49.5px;
		margin: 8px 0;
	}

	p {
		font-size: 22px;
	}

	.mods {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
	}

	.mod {
		margin: 8px;
		position: relative;
		h2,
		p {
			font-weight: normal;
		}
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 4px;
		color: white;
		padding: 16px;
		cursor: pointer;
		transition: all 0.2s ease;

		&:hover {
			box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
			transform: scale(1.1);
		}

		h1 {
			font-size: 24px;
			margin: 0;
		}

		h2 {
			font-size: 14px;
			margin: 0;
			color: rgba(255, 255, 255, 0.5);
		}

		p {
			font-size: 14px;
			margin-top: 10px;
			margin-bottom: 0;
			max-width: 250px;
		}

		span {
			position: absolute;
			right: 16px;
			top: 16px;
			font-family: Consolas, monospace;
			opacity: 0.4;
		}
	}
}
</style>