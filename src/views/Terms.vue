<template>
	<div page>
		<banner bg="https://seati.oss-cn-qingdao.aliyuncs.com/assets/images/9.jpg">
			<template #title>周目信息与资源中心</template>
			<template #subtitle>记录 & 下载</template>
			<template #text>在此查看自 ST7 开始的每个周目的相关介绍和详细信息<br/>当资源可用时，此页面也会提供相应的下载链接
			</template>
		</banner>
		<div class="terms-outer">
			<div class="term-box">
				<div class="term" v-view.once="flowLeft"
					 v-for="i in Object.keys(termList).reverse().map(x => Number(x))">
					<div class="number-block" :class="`st${i}`">
						{{ i }}
					</div>
					<div class="information" :class="`st${i}`">
						<div class="primary">
							{{ termList[i].information.name }}
						</div>
						<div class="secondary">
                            <span class="dates">{{ termList[i].information.from }}-{{
									termList[i].information.to ?? 'Now'
								}}</span>
							·
							<span class="duration">{{
									getDuration(termList[i].information.from, termList[i].information.to)
								}}d</span>
						</div>
						<div class="meta" :class="`st${i}`">
                            <span>
                                <mdicon name="minecraft"/>{{ !isMobile() ? '游戏版本' : '' }} {{
									termList[i].information.version
								}}
                            </span>
							·
							<span>
                                <mdicon name="wrench"/>{{
									!isMobile() ? '模组数量' : ''
								}} {{ termList[i].information.modcount }}
                            </span>
							·
							<span>
                                <mdicon name="account-group"/>{{ !isMobile() ? '有效玩家' : '' }} {{
									termList[i].information.playercount ?
										termList[i].information.playercount
										: '-'
								}}
                            </span>
						</div>
						<div class="description-and-downloads">
							<div class="downloads" :class="`st${i}`" v-if="termList[i].files.length > 0">
								<a v-for="y in termList[i].files" target="_blank"
								   :href="`https://d.seati.cc/uploads/ST${i}/${y.filename}`">
									<mdicon :name="getIcon(y.filename)"/>
									下载{{ getFileNameCN(y.filename) }} .{{
										getFormat(y.filename)
									}} <span v-if="!isMobile()" style="opacity: .6;">- {{ y.size }}{{
										getUnit(y.unit)
									}}</span>
								</a>
							</div>
							<div class="downloads" v-else>
								<a class="disabled">暂无可用下载</a>
							</div>
							<div class="description" v-html="termList[i].description"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import tl from '@/terms.json';
import Banner from '@/components/Banner.vue';
import {flowLeft, isMobile} from '@/fn';

interface TermList {
	[prop: number]: TermItem
}

interface TermItem {
	recordDate?: string,
	description?: string,
	information: {
		name: string,
		version: string,
		from: string,
		to?: string,
		modcount: number,
		playercount?: number
	},
	files: TermFile[]
}

interface TermFile {
	filename: string,
	size: number,
	unit: 'g' | 'm' | 'k'
}

const termList = tl as TermList;

function getDuration(from: string, to?: string) {
	return (((to ? new Date(to).getTime() : new Date().getTime()) - new Date(from).getTime()) / 1000 / 3600 / 24).toFixed(0);
}

function getFileNameCN(filename: string) {
	if (filename.includes('mod')) return '模组包'
	if (filename.includes('world')) return '存档'
	if (filename.includes('pack')) return '整合包'
	return ''
}

function getUnit(u: 'g' | 'm' | 'k') {
	return {
		'g': 'GiB',
		'm': 'MiB',
		'k': 'KiB'
	}[u];
}

function getFormat(name: string) {
	const splitted = name.split('.');
	return splitted[splitted.length - 1];
}

function getIcon(name: string) {
	if (name.includes('mod')) return 'cog';
	if (name.includes('world')) return 'earth';
	if (name.includes('pack')) return 'package-variant';
	return 'question-outline'
}
</script>

<style lang="less" scoped>
@theme-st7: #F08B00;
@theme-st8: #B20CBC;
@theme-st9: #381E11;
@theme-st10: #FF7A7A;
@theme-st11: #939393;
@theme-st12: #00BF8C;
@theme-st13: #fdd835;

.terms-outer {
	display: flex;
	justify-content: center;
	width: 100%;
}

.term-box {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.number-block {
	pointer-events: none;
	width: 250px;
	height: 250px;

	@media (max-width: 900px) {
		width: 160px;
		height: auto;
		font-size: 7rem;
	}

	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 10rem;
	font-family: HighwayGothic, sans-serif;
	color: white;
	font-stretch: normal;

	&.st7 {
		background: @theme-st7;
	}

	&.st8 {
		background: @theme-st8;
	}

	&.st9 {
		background: @theme-st9;
	}

	&.st10 {
		background: @theme-st10;
	}

	&.st11 {
		background: @theme-st11;
	}

	&.st12 {
		background: @theme-st12;
	}

	&.st13 {
		background: @theme-st13;
	}
}

.description-and-downloads {
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	flex-wrap: nowrap;
	flex-direction: row;

	@media (max-width: 900px) {
		flex-direction: column-reverse;
	}
}

.description {
	width: 70%;

	@media (max-width: 900px) {
		width: 100%;
	}
}

.downloads {
	display: flex;
	align-items: stretch;
	width: 30%;
	flex-direction: column;
	gap: .5rem;

	@media (max-width: 900px) {
		width: 100%;
	}

	a {
		color: white;
		display: flex;
		align-items: center;
		gap: .5rem;
		padding: .5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		line-height: 1;
		box-shadow: 0 3px 0 rgba(0, 0, 0, .1);
		transition: all .2s ease;

		&.disabled {
			background: #aaa;
			text-align: center;
			cursor: not-allowed;
		}

		&:hover {
			transform: translateX(4px);
			box-shadow: none;
		}
	}

	&.st7 a {
		background: #F08B00
	}

	&.st8 a {
		background: @theme-st8
	}

	&.st9 a {
		background: @theme-st9
	}

	&.st10 a {
		background: @theme-st10
	}

	&.st11 a {
		background: @theme-st11
	}

	&.st12 a {
		background: @theme-st12;
	}

	&.st13 a {
		background: @theme-st13;
	}
}

.meta {
	&.st7 svg {
		fill: @theme-st7;
	}

	&.st8 svg {
		fill: @theme-st8;
	}

	&.st9 svg {
		fill: @theme-st9;
	}

	&.st10 svg {
		fill: @theme-st10;
	}

	&.st11 svg {
		fill: @theme-st11;
	}

	&.st12 svg {
		fill: @theme-st12;
	}

	&.st13 svg {
		fill: @theme-st13;
	}
}

.information {
	width: calc(100% - 250px - 3rem);

	@media (max-width: 900px) {
		width: calc(100% - 160px - 2rem);
		padding: 1rem;
	}

	padding: 1rem 1rem 1rem 2rem;

	&.st7 {
		background: rgba(@theme-st7, .2);
	}

	&.st8 {
		background: rgba(@theme-st8, .2);
	}

	&.st9 {
		background: rgba(@theme-st9, .2)
	}

	&.st10 {
		background: rgba(@theme-st10, .2);
	}

	&.st11 {
		background: rgba(@theme-st11, .2);
	}

	&.st12 {
		background: rgba(@theme-st12, .2);
	}

	&.st13 {
		background: rgba(@theme-st13, .2);
	}
}

.term {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	max-width: 1200px;

	.primary {
		font-size: 2rem;
		font-weight: bold;

		@media (max-width: 900px) {
			font-size: 1.5rem;
		}
	}

	.secondary {
		font-size: 1.3rem;

		@media (max-width: 900px) {
			font-size: 1rem;
		}

		margin-bottom: .5rem;

		.dates {
			color: rgba(0, 0, 0, .4);
		}

		.duration {
			font-family: HighwayGothic, sans-serif;
		}
	}

	.meta {
		display: flex;
		align-items: center;
		gap: .5rem;
		margin-bottom: 1rem;

		svg {
			transform: scale(.9) translateY(-1.5px);
			margin-right: .25rem;
		}
	}
}</style>