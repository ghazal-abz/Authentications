<template>
  <div class="video-player">
    <v-fade-transition>
      <div v-if="showPoster" @click="play" class="poster">
        <v-img :src="poster" width="100%" height="100%" />
      </div>
    </v-fade-transition>

    <vime ref="video" @vmPlayingChange="PlayingChange" @vmPlaybackEnded="PlaybackEnded" theme="dark" :style="{'--vm-player-theme': 'transparent'}">
      <video-player :src="src">
        <source :data-src="src" :src="src" type="video/mp4">
      </video-player>

      <default-ui />
    </vime>
    <div>
      <i class="icon icon-24 icon-play-button" />
    </div>
  </div>
</template>

<script>
import {
  Player, Video, DefaultUi
} from '@vime/vue'

export default {
  name: 'VideoPlayer',
  components: {
    vime: Player,
    'video-player': Video,
    DefaultUi
  },
  props: {
    src: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isPlaying: false,
      showPoster: true
    }
  },
  methods: {
    async play() {
      await this.$refs.video.play()
      this.$emit('played')
    },

    pause() {
      this.$refs.video.pause()
      this.$emit('paused')
      this.showPoster = true
    },

    PlayingChange(status) {
      this.isPlaying = status
      this.showPoster = false

      this.$emit(status ? 'played' : 'paused')
    },

    PlaybackEnded() {
      this.showPoster = true

      this.$emit('ended')
    }
  }
}
</script>

<style lang="scss">
@import '@vime/core/themes/default.css';

.video-player {
  position: relative;

  .poster {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 75;
    overflow: hidden;
    cursor: pointer;

    .v-image {
      border-radius: 0;
    }

    &:after {
      position: absolute;
      display: block;
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 55px;
      height: 55px;
      background-image: url('~assets/icons/ic-play-button.svg');
      background-size: contain;
      background-color: transparent;
      cursor: pointer;
      content: "";
    }
  }
}
</style>
