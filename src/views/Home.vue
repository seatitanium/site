<template>
  <div page>
    <banner bg="https://seati.oss-cn-qingdao.aliyuncs.com/assets/nyberg_moon.jpg" fullscreen>
      <template #subtitle>
        高自由度 / 民主决议 / 周目制
      </template>
      <template #title>
        从头到脚都是不一样的感觉。
      </template>
      <template #text>
        在 Seati，你能够参与到游戏的整个流程。<br/>
        从周目的建立，到持续的耕耘，再到最终的「周目评定」······
        <br/>
        在这里探索的你所留下的痕迹，亦将永存于宇宙千垣之间。
        <br/>
        <div class="simple-info">
          <div class="item">
            <mdicon name="alpha-n-box-outline"/>
            <span><span class="no-mobile">当前周目</span> ST12</span>
          </div>
          <div class="item">
            <mdicon name="minecraft"/>
            <span><span class="no-mobile">游戏版本</span> 1.16.5</span>
          </div>
          <div class="item">
            <mdicon name="information-outline"/>
            <span>正版验证<span class="no-mobile">关闭</span></span>
          </div>
        </div>
      </template>
      <template #buttons>
        <btn class="join-btn" type="primary-a shadow arrow" size="large" icon="arrow-right" to="/join">立即加入</btn>
        <btn @click.native="$open('https://wiki.seati.cc')" class="learnmore-btn" type="outlined shadow hover-light"
             size="large">阅读文档
        </btn>
      </template>
    </banner>
    <div class="sections">
      <section v-lazy:background-image="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/rocket-launch.png'"
               class="common-background darken-background darken-3">
        <div class="container">
          <div class="title-text" v-view.once="flowLeft">
            <div>
              <div>带你一步步领略模组的</div>
              <img class="title-img-1"
                   :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/handwriting/大千世界.svg'"
                   draggable="false"/>
            </div>
          </div>
          <div class="typo light section-1-text-1">
            <p v-view.once="flowUp">
              <strong>模组是对原版游戏无与伦比的扩充。</strong>从我们最初接触模组开始，我们就已经清楚模组这一无可比拟的优势。它不受任何限制地向游戏中添加极为多样的内容，并跟随着作者的思绪形成一整套完美的新游戏体系。
            </p>
            <p v-view.once="flowUp">模组如此多样，独乐不如众乐。</p>
            <p v-view.once="flowUp">
              <strong>钛海为你提供了这样一个平台：</strong>我们共同决定这个周目玩什么——按照少数服从多数的原则；我们共同确定什么模组适合、什么模组不适合这一周目；我们共同观察并改进每个周目；我们共同记录并永久保存每个周目的记忆······
            </p>
            <p v-view.once="flowUp">我们——玩家和管理员——将会携你漫步模组的大千世界，在每一个地方都留下痕迹。</p>
          </div>
        </div>
      </section>
      <section class="with-video-background" v-lazy:background-image="require('@/assets/moon-on-the-sea.png')">
        <video ref="moonvideo" id="moon-video" muted>
          <source :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/moon.mp4'" type="video/mp4"/>
        </video>
        <div class="container" v-view.once="autoplayBackgroundVideo()">
          <div class="title-text" style="justify-content: center" v-view.once="flowUp">
            <div style="align-items: center">不太一样的<img class="title-img-2"
                                                            :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/handwriting/周目制.svg'"
                                                            draggable="false"/></div>
          </div>
          <section class="term-feats">
            <div class="feat" v-view.once="flowLeft">
              <div class="top" v-view.once="flowLeft">
                <div class="icon">
                  <img style="transform: scale(1.1)"
                       :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/votes.png'"/>
                </div>
                <div class="title">
                  <img style="transform: translateY(10px)"
                       :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/handwriting/投票.svg'"/>
                </div>
              </div>
              <div class="down">
                <div class="typo light section-2-text">
                  <p v-view.once="flowUp">
                    每个周目的主题或整合包候选项由管理员确定，玩家则进行决定性的一步——投票。<strong>最终所得票数最多的会成为本周目的主要游玩对象。</strong>遵从少数服从多数的原则。
                  </p>
                  <p v-view.once="flowUp">你知道吗？<strong>投票</strong>是 Seati
                    长期以来（包含其前身「SEATiDE」）所盛行的制度，旨在从玩家处选取本周目最适合的模组搭配——模组实在是太多了！
                  </p>
                </div>
              </div>
            </div>

            <div class="feat" v-view.once="flowLeft">
              <div class="top" v-view.once="flowLeft">
                <div class="icon">
                  <img style="transform: scale(0.9)"
                       :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/write.png'"/>
                </div>
                <div class="title">
                  <img style="transform: translateY(10px)"
                       :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/handwriting/记录.svg'"/>
                </div>
              </div>
              <div class="down">
                <div class="typo light section-2-text">
                  <p v-view.once="flowUp">
                    <strong>担心周目匆匆逝去，没有耐心进行建筑？</strong>我们为玩家提供了专用的平台，玩家在上面可以记录和展示自己在每个周目中的经历和创作。
                  </p>
                  <p v-view.once="flowUp">
                    我们相信，正是记录才使得每个周目都有它自身的独特性和意义，而非匆匆飘过的...呃...不知道是什么东西。<strong>我们鼓励所有玩家在平台上记录自己的游戏体验。</strong>不久后，我们亦会将平台的部分功能与服务器建立联系。
                  </p>
                </div>
              </div>
            </div>

            <div class="feat" v-view.once="flowLeft">
              <div class="top" v-view.once="flowLeft">
                <div class="icon">
                  <img style="transform: scale(1.1)"
                       :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/review.png'"/>
                </div>
                <div class="title">
                  <img style="transform: translateY(25px)"
                       :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/handwriting/评价.svg'"/>
                </div>
              </div>
              <div class="down">
                <div class="typo light section-2-text">
                  <p v-view.once="flowUp">
                    <strong>模组之众多，带来模组搭配之复杂。</strong>每个周目之后，我们都会提供专用的渠道来获取本周目游玩体验的信息。
                  </p>
                  <p v-view.once="flowUp">
                    这些模组的搭配合理吗？模组是否真正符合了周目主题？稳定吗？<strong>或者...最为简单的——玩得开心吗？</strong>还是肝到爆了？！这些评价维度会成为每个周目的独特象征，同时大大帮助我们后续做得更好。更重要的是，这亦是你在
                    Seati 留下的宝贵痕迹。</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section v-lazy:background-image="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/comet.jpg'"
               class="common-background darken-background darken-2">
        <div class="container">
          <div class="title-text" v-view.once="flowLeft">
            <div><img class="title-img-3"
                      :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/handwriting/强劲性能.svg'"
                      draggable="false"/>轻轻松松完成「星际穿越」
            </div>
          </div>
          <div class="performance-information">
            <div class="item" v-view.once="scaleIn">
              <img class="performance-img"
                   :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/core-i9.svg'" draggable="false"/>
              <div>Gen 13</div>
              <div class="name">处理器</div>
            </div>
            <div class="item" v-view.once="scaleIn">
              <img class="performance-img" :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/ddr4.svg'"
                   draggable="false"/>
              <div>16 GB</div>
              <div class="name">分配内存</div>
            </div>
            <div class="item" v-view.once="scaleIn">
              <img class="performance-img"
                   :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/rotating-earth.gif'"
                   draggable="false"/>
              <div>50M</div>
              <div class="name">峰值带宽</div>
            </div>
            <div class="item" v-view.once="scaleIn">
              <img class="performance-img"
                   :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/ti-cube.png'" draggable="false"/>
              <div>1 TB</div>
              <div class="name">存储空间</div>
            </div>
          </div>
        </div>
      </section>

      <section v-lazy:background-image="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/images/1.jpg'"
               class="common-background darken-background darken-2">
        <div class="container">
          <div v-view.once="flowLeft" class="title-text">
            <div><img v-if="!isMobile()" class="title-img-4"
                      :src="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/handwriting/欢迎，新船员.svg'"
                      draggable="false"/>
              <img v-else class="title-img-4-mobile" :src="require('@/assets/handwriting/欢迎，新船员.m.svg')"
                   draggable="false"/></div>
          </div>
          <div class="welcome">
            <div class="welcome-text typo light">
              <p v-view.once="flowUp"><strong>我们期待并欢迎每一位新船员的加入。</strong>...等等，为什么是「船员」？</p>
              <p v-view.once="flowUp">Seati 是 Oasis 旗下独立运营的模组服务器，若要加入 Seati，需要首先成为 Oasis
                的船员。<strong>好消息是，目前
                  Oasis 的加入并没有任何限制。</strong>而要获取 Seati 白名单需要完成相应的问卷。</p>
              <p v-view.once="flowUp"><strong>单击按钮可加入相应的交流群，在那里你可以获取最新、最准确的消息。</strong></p>
            </div>
            <div class="welcome-btns" v-view.once="flowUp">
              <btn class="primary-a shadow arrow" href="https://qm.qq.com/cgi-bin/qm/qr?k=tcoJ_CF6AjAWGQS62TxGRIidea_4tqw7&jump_from=webapi" size="large" icon="arrow-right">立即加入 Seati 讨论群</btn>
              <btn class="primary-o shadow arrow" href="https://qm.qq.com/cgi-bin/qm/qr?k=SCJedgwusNyNbwfz-ySVBu8am63VFSHF&jump_from=webapi" size="large" icon="arrow-right">立即加入 Oasis 讨论群</btn>
            </div>
          </div>
        </div>
      </section>
      <section v-lazy:background-image="'https://seati.oss-cn-qingdao.aliyuncs.com/assets/images/3.jpg'"
               class="mod-information darken-3 blur" :class="{
        'common-background': !isMobile(),
        'darken-background': isMobile()
               }">
        <div class="container">
          <div class="mod-card" v-view.once="scaleIn">
            <div class="title" v-view.once="flowLeft">当前周目信息 - 2024/01/16 更新</div>
            <ul v-view.once="flowLeft">
              <li>周目代号：ST12</li>
              <li>周目整合包：龙之冒险</li>
              <li>版本：Java 1.16.5</li>
              <li>服务端：Forge 1.16.5-36.2.35</li>
              <li>建议分配 RAM：>= 4GB</li>
              <li>正式开放日期：2024/01/16</li>
              <li>周目持续时间：{{ duration }}</li>
              <li>模组个数：145</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Banner from '@/components/Banner.vue';
import Btn from '@/components/Btn.vue';
import MetaBar from '@/components/MetaBar.vue';
import MetaItem from '@/components/MetaItem.vue';
import Status from '@/components/Status.vue';
import Vue from 'vue';
import anime from 'animejs';
import Logo from '@/components/Logo.vue';
import {flowUp, isPCSize, isMobile, isPhoneSize, get, scaleIn, flowLeft} from '@/fn';
import ServerStatus from '@/components/ServerStatus.vue';

export default Vue.extend({
  components: {
    Banner,
    Btn,
    Logo,
    MetaBar,
    MetaItem,
    Status,
    ServerStatus
  },
  data() {
    return {
      server: {} as ServerInformation,
      loadingStatus: 'loading',
      serverExists: false,
      duration: ''
    };
  },
  methods: {
    scaleIn,
    flowLeft,
    autoplayBackgroundVideo() {
      // @ts-ignore
      if (!isMobile() && this.$refs.moonvideo) this.$refs.moonvideo.play();
    },
    animateFeature() {
      anime({
        targets: '#features-title',
        opacity: [0, 1],
        translateY: [30, 0],
        easing: 'easeInOutExpo'
      });
      anime({
        targets: '.feature-item',
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        delay: (e, i) => {
          return i * 50;
        }
      });
    },
    flowUp,
    animateSFTypo(a: ViewObject) {
      let parent = a.target.element.parentElement?.parentElement;
      //@ts-ignore
      let typo = parent.querySelector('.typo') as HTMLDivElement;
      anime({
        targets: parent,
        opacity: [0, 1],
        translateX: [30, 0],
        easing: 'easeInOutExpo'
      });
      anime({
        targets: typo,
        opacity: [0, 1],
        translateY: [30, 0],
        easing: 'easeInOutExpo',
        delay: 200
      });
    },
    isPCSize,
    isMobile,
    isIOS() {
      let nav = window.navigator;
      if (/iPad|iPhone|iPod/.test(nav.platform)) {
        return true;
      } else {
        return nav.maxTouchPoints && nav.maxTouchPoints > 2 && /MacIntel/.test(nav.platform);
      }
    },
    isPhoneSize,
    getDepNames(mod: ServerMod[]) {
      let names: string[] = [];
      if (!!!mod) {
        return [];
      }
      mod.forEach(e => {
        if (e.type === 'dep') {
          names.push(e.name.toLowerCase());
        }
      });
      return names;
    },
    getModCount(mod: ServerMod[]) {
      let count = mod.length;
      mod.forEach(e => {
        if (e.type === 'set' && e.count) {
          count += e.count - 1;
        }
      });
      return count;
    },
    getDuration() {
      let d = new Date().getTime() - new Date('2024-01-17 00:20').getTime();
      let x = d / 1000 / 60 / 60;
      let H = Math.floor(x);
      x = (x - H) * 60;
      let M = Math.floor(x);
      x = (x - M) * 60;
      let S = Math.floor(x);
      let {_H, _M, _S} = {_H: H.toString(), _M: M.toString(), _S: S.toString()};
      if (_S.length === 1) _S = `0${_S}`;
      if (_H.length === 1) _H = `0${_H}`;
      if (_M.length === 1) _M = `0${_M}`
      return `${_H}:${_M}:${_S}`;
    }
  },
  mounted() {
    get('/api/server/v1/get/server')
        .then(r => {
          let data: ServerInformation | null = r.data.data as any;
          this.serverExists = data?.created ? true : false;
          if (data !== null) {
            this.server = data;
            this.loadingStatus = '';
          } else {
            this.loadingStatus = 'error';
          }
        })
        .catch(e => {
          console.warn(e);
          this.loadingStatus = 'error';
        });

    setInterval(() => {
      this.duration = this.getDuration();
    }, 1000);
  }
});
</script>

<style lang="less" scoped>

.background-darkener::before {
  content: " ";
  display: block;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .2);
}

.learnmore-btn {
  margin-left: 32px;
}

.sections {
  display: flex;
  flex-direction: column;
}

.buyiyang {
  height: 120px;
  display: inline-block;
  margin: 0 -0.5ex;
  transform: translateY(45px);
}

.more-information {
  padding: 96px 0;
  text-shadow: @shadowlight;

  .hero {
    margin-bottom: 64px;
  }

  p,
  button,
  .hero,
  h1 {
    opacity: 0;
  }

  h1,
  p {
    display: block;
    margin: auto;
  }

  h1 {
    font-size: 56px;
    text-align: center;
    margin-bottom: 32px;
    color: white;

    @media screen and (max-width: 1000px) {
      font-size: 32px;
    }
  }

  p {
    @media screen and (max-width: 1000px) {
      font-size: 18px;
    }

    font-size: 26px;
    line-height: 1.8;
    color: @textmidwhite;
    max-width: 700px;
    margin: 16px auto;

    &::before {
      content: '';
      margin-left: 2em;
    }

    strong {
      color: white;
    }
  }

  .join-btn {
    display: block;
    margin: 32px auto;
  }
}

.with-video-background {
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.features-container {
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  flex-direction: row;
  gap: 32px;

  img {
    height: 300px;
  }
}

.container {
  > h1 {
    color: @textgray;
  }

  max-width: 1000px;
  margin: 4rem auto;

  @media (max-width: 1000px) {
    margin: 3rem 2rem;
  }

  #features-title {
    opacity: 0;
    text-align: center;
    font-size: 48px;
    margin-bottom: 32px;
    margin-top: 0;

    &::after {
      content: '';
      display: block;
      background: @primary;
      height: 20px;
      position: absolute;
      width: 45%;
      left: 50%;
      transform: translateX(-50%);
      bottom: 4px;
      z-index: -2;
    }
  }
}

.feature-section,
.more-information-section {
  background-position: center;
  background-size: cover;
}

.more-information-section {
  background-blend-mode: darken;
}

.feature-section {
  .single-features {
    display: flex;
    flex-direction: column;
    align-items: center;

    .single-feature {
      width: 90%;
      opacity: 0;

      @media screen and (min-width: 1000px) {
        margin: 72px 0;
        padding: 32px;
      }

      &:not(.light) {
        background: rgba(0, 0, 0, 0.4);
      }

      &.light {
        background: rgba(255, 255, 255, 0.3);

        .typo p {
          color: @textlightwhite;
        }
      }

      display: flex;

      @media (max-width: 1000px) {
        flex-direction: column;
        padding: 56px 16px;
        margin: 32px 0;
        width: 100%;
      }

      @media (max-width: 1200px) {

        > svg:first-child,
        > svg:last-child {
          display: none;
        }
      }

      align-items: center;

      svg {
        transform: scale(0.7);
      }

      .typo {
        @media screen and (min-width: 1000px) {
          width: 75%;
        }

        @media screen and (max-width: 1000px) {
          text-align: center;

          button {
            margin: auto;
          }
        }

        color: white;
        text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);

        @media screen and (min-width: 1310px) {

          h1,
          h2 {
            white-space: nowrap;
          }
        }

        h2 {
          font-weight: normal;
          margin-top: 0;
          margin-bottom: 8px;
          font-size: 32px;

          @media screen and (max-width: 1000px) {
            font-size: 22.4px;

            svg {
              transform: scale(1.4) !important;
            }
          }

          svg {
            transform: scale(1.2);
            margin-right: 0.5em;
          }
        }

        h1 {
          font-size: 48px;

          @media screen and (max-width: 1000px) {
            font-size: 30px;
          }

          margin: 0;
        }

        p {
          font-size: 18px;
          color: @textmidwhite;

          @media screen and (max-width: 1000px) {
            font-size: 14px;
          }
        }
      }
    }
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

.stroke {
  position: relative;
  display: inline-block;

  &::after {
    @media screen and (max-width: 1000px) {
      height: 0;
    }

    content: '';
    height: 100%;
    width: 100%;
    left: 0;
    bottom: -100%;
    position: absolute;
    filter: drop-shadow(0px 2px 4px #00000050);
  }

  &.stroke-1::after {
    background: url(../assets/stroke.svg) no-repeat;
  }

  &.stroke-2::after {
    background: url(../assets/stroke2.svg) no-repeat;
  }

  &.stroke-3::after {
    background: url(../assets/stroke3.svg) no-repeat;
  }
}

.simple-info {
  font-size: 1.2rem;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
    margin-top: 8px;
    padding: 4px 8px;
  }

  background: rgba(255, 255, 255, 0.3);
  padding: 8px 16px;
  margin-top: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .mdi {
    margin-right: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
      width: 16px;
    }
  }

  .item {
    display: inline-flex;
    align-items: center;

    &::after {
      content: '·';
      margin: 0 12px;

      @media screen and (max-width: 800px) {
        margin: 0 8px;
      }
    }

    &:last-child::after {
      content: none;
    }
  }
}

.server-status {
  small {
    color: @textlightgray;
    padding: 0 8px;
  }

  .mods {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .mod {
    opacity: 0;
    margin: 8px;
    position: relative;

    &::after {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      content: ' ';
      left: 0;
      top: 0;
      border-radius: inherit;
      z-index: -2;
    }

    h2,
    p {
      font-weight: normal;
    }

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 4px;
    color: white;

    @media (max-width: 800px) {
      padding: 8px 16px;

      p {
        margin: 0 !important;
        max-width: 100px !important;
      }
    }

    padding: 16px;
    cursor: pointer;
    transition: box-shadow 0.2s ease;

    @media (min-width: 1000px) {
      &:hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
        transform: scale(1.1);
      }
    }

    h1 {
      font-size: 26px;

      @media (max-width: 1000px) {
        font-size: 18px;
      }

      margin: 0;
    }

    h2 {
      font-size: 14px;

      @media (max-width: 1000px) {
        font-size: 10.5px;
      }

      margin: 0;
      color: rgba(255, 255, 255, 0.5);
    }

    p {
      font-size: 14px;

      @media (max-width: 1000px) {
        font-size: 10.5px;
      }

      margin-top: 10px;
      margin-bottom: 0;
      max-width: 200px;
    }

    span {
      position: absolute;
      right: 16px;
      top: 16px;
      .monospace;
      opacity: 0.4;

      @media (max-width: 800px) {
        display: none;
      }
    }
  }
}

.server-status-section {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.open-in-tidelab-btn {
  position: absolute;
  right: 16px;
  top: 16px;

  @media (max-width: 1200px) {
    display: none;
  }
}

.title-text {
  font-size: 2.5rem;
  display: flex;
  margin-bottom: 2rem;
  color: white;
  text-shadow: @shadowdark;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
    justify-content: center;
    align-items: center;
  }

  img {
    display: block;
    margin-top: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    @media (max-width: 1000px) {
      gap: 1rem;
    }
  }
}

.section-1-text-1 {
  font-size: 1.5rem;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  text-shadow: @shadowlight;
}

.section-2-text {
  margin-top: 1.8rem;
}

[class^='title-img'] {
  display: block;
  height: 180px;

  @media (max-width: 1000px) {
    height: 120px;
  }
}

.title-img-4-mobile {
  height: 250px;
}

.term-feats {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 1000px) {
    gap: 32px;
  }

  .feat {
    background: rgba(0, 0, 0, .4);
    backdrop-filter: blur(5px);
    box-shadow: @shadowdark;
    margin: 0 auto;
    max-width: 800px;
    padding: 2rem 3rem;
    font-size: 1.5rem;
    @media (max-width: 1000px) {
      padding: 1.5rem;
      font-size: 1.2rem;
    }

    .top {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 2rem;

      @media (max-width: 1000px) {
        gap: 1rem;
      }
    }
  }

  img {
    height: 120px;

    @media (max-width: 1000px) {
      height: 90px;
    }
  }
}

.performance-img {
  height: 100px;
}

.performance-information {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-family: 'Encode Sans Semi Expanded', '微软雅黑', sans-serif;
  color: white;
  font-size: 2.5rem;
  gap: 2rem;

  @media (max-width: 1000px) {
    gap: 1rem;
    font-size: 1.5rem;
    overflow: auto;
  }

  .name {
    font-size: 22px;
    color: @textlightwhite;

    @media (max-width: 1000px) {
      font-size: 1rem;
    }
  }

  .item {
    @media (max-width: 1000px) {
      padding: 1rem 2.5rem;
      gap: .5rem;
      font-size: 1.2rem;
    }

    .performance-img {
      @media (max-width: 1000px) {
        height: 64px;
      }
    }

    display: flex;
    align-items: center;
    gap: 16px;
    flex-direction: column;
    width: 25%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 32px;
  }
}

.welcome-text {
  font-size: 1.5rem;
  text-shadow: @shadowdark;
  width: 100%;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
}

.welcome {
  display: flex;
  flex-direction: column;
}

.welcome-btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 1000px) {
    flex-direction: row;
  }

  button {
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
}

.mod-information {
  color: white;
  font-size: 1.5rem;

  @media (max-width: 1000px) {
    font-size: 1.2rem;

    img {
      height: 20px !important;
    }
  }

  ul {
    padding: 0;
  }

  li {
    &::before {
      content: '>';
      font-family: Minecraft, monospace;
      margin-right: 1rem;

      @media (max-width: 1000px) {
        margin-right: 8px;
      }

      background: @primaryg;
      background-clip: text;
      color: transparent;
      display: inline-block;
      text-shadow: none;
    }

    margin: 16px 0;
    list-style: none;
  }

  .title {
    @media (max-width: 1000px) {
      font-size: 1.7rem;
    }

    font-size: 2.4rem;
  }
}

.mod-card {
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);

  text-shadow: @shadowlight;

  @media (max-width: 1000px) {
    padding: 0;
    background: transparent;
    backdrop-filter: none;
  }
}

#moon-video {
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1000px) {
    display: none;
    pointer-events: none;
  }
}
</style>