<template>
	<footer>
		<div class="footer-container">
			<div class="col first">
				<logo class="footer light" />
				<p class="copyright">
					&copy; 2021 SEATiDE Minecraft Server with Mod<br />
					<small
						>网站基于 Vue 2 · 代码开源，请前往官方 GitHub
						查看</small
					>
				</p>
				<p>
					SEATiDE 致力于以较低成本的方式来换取高质量的 Minecraft
					游戏体验和社区气氛，在此基础上继续修饰、完善服务器的内容。
				</p>
				<p>
					作为 Minecraft
					玩家的你可以随时参与进我们的建设中，我们也欢迎你来单纯地旅个游
					:)
				</p>
			</div>
			<div class="button-list">
				<icon-btn
					@click.native="$open('https://github.com/seatidemc')"
					icon="github"
					class="dark"
				/>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "./Logo.vue";
import IconBtn from "@/components/IconBtn.vue";

export default Vue.extend({
	components: { Logo, IconBtn },
});
</script>

<style lang="less" scoped>
footer {
	box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.6);
	background: #212121;
	color: white;

	.footer-container {
		display: block;
		margin: auto;
		padding: 32px 56px;
		width: 70%;
		position: relative;

		.col {
			&.first {
				p {
					color: @textmidwhite;
					font-size: 14px;
					max-width: 400px;
				}

				.copyright {
					color: white;
				}

				.light {
					margin-bottom: 32px;
				}
			}
		}
	}
}

.button-list {
	@media screen and (min-width: 1000px) {
		position: absolute;
		top: 32px;
		right: 0;
	}
}
</style>