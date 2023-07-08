<template>
  <v-container id="familiarity" class="container pa-0">
    <h1 v-if="$vuetify.breakpoint.mdAndUp" class="video-title" v-html="$t('main.videoTitle')" />
    <h1 v-else class="video-title" v-html="$t('main.videoTitle2')" />

    <div class="video-container pa-0">
      <div class="video-wrapper">
        <video-player
          ref="sectionVideo"
          :poster="require('~/assets/img/img-poster.png')"
          src="video/video.mp4"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
import VideoPlayer from '~/components/VideoPlayer'

export default {
  components: {VideoPlayer},
  data() {
    return {
      video: {
        isPlaying: false,
        ended: false
      }
    }
  },
  methods: {
    play() {
      this.video.isPlaying = true
      this.video.ended = false
      this.$refs.sectionVideo.play()
    },

    pause(ended = false) {
      this.$refs.sectionVideo.pause()
      this.video.isPlaying = false
      this.video.ended = ended
    },

    ended() {
      this.pause(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .video-title {
    color: $text1;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    margin: 15px;

    ::v-deep span {
      color: $primary;
      font-weight: 500;
    }
  }

  .video-container {
    width: 100%;
    max-width: 428px;

    .video-wrapper {
      border-radius: 20px;
      overflow: hidden;
      height: 230px;
    }
  }

  @media #{map-get($display-breakpoints, 'md-and-down')} {
    padding: 0 24px !important;

    .video-container {
      max-width: 50%;
    }
  }

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    flex-direction: column !important;
    justify-content: flex-start;
    align-items: center;
    max-width: 428px;

    .video-container {
      max-width: 428px;
      margin-bottom: 32px;
    }

  }
}
</style>
