<template>
    <div class="intro-video-container" :class="{'removed': removeIntro}" v-if="visible">
        <div class="video-container">
            <video
                class="bg-video"
                autoplay
                muted
                loop
                playsinline
                ref="introVideo"
            >
                <source src="../../public/images/videos/hellyes.mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="intro-text">
            <div class="display-flex">
                <div class="letter">g</div>
                <div class="letter">l</div>
                <div class="o-container">
                    <div :class="{ 'active-up': isActive }" class="letter-o"></div>
                </div>
                <div class="letter">b</div>
                <div class="letter">a</div>
                <div class="letter">l</div>
            </div>
            <div class="display-flex">
                <div class="letter"></div>
                <div class="letter">c</div>
                <div class="o-container">
                    <div :class="{ 'active-down': isActive }" class="letter-o"></div>
                </div>
                <div class="letter">n</div>
                <div class="letter">n</div>
                <div class="letter">e</div>
                <div class="letter">c</div>
                <div class="letter">t</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(true)
const isActive = ref(false)
const removeIntro = ref(false)
const introVideo = ref(null)

onMounted(() => {
    const video = introVideo.value

    if (video) {
        // Wait until the video can play (is fully loaded enough)
        const handleCanPlay = () => {
            // Start the intro animation sequence
            isActive.value = true

            setTimeout(() => {
                removeIntro.value = true
                setTimeout(() => {
                    visible.value = false
                }, 3000)
            }, 2500)

            // Remove event listener after it fires once
            video.removeEventListener('canplaythrough', handleCanPlay)
        }

        // Add listener for when video is ready
        video.addEventListener('canplaythrough', handleCanPlay)
    }
})
</script>

<style scoped lang="scss">
.intro-text {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    .display-flex {
        display: flex;
        align-items: center;
        position: relative;
    }

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 50px;
    font-weight: bold;
    z-index: 10000;
    pointer-events: none;

    .o-container {
        position: relative;
    }

    .letter,
    .o-container {
        width: 35px;
        height: 50px;
    }

    .letter-o {
        position: absolute;
        top: 32px;
        left: -10px;
        display: inline-block;
        background-color: white;
        border-radius: 50%;
        margin: 0 5px;
        box-sizing: border-box;
        width: 30px;
        height: 30px;
        transition: 1s ease;
    }

    .letter-o.active-up {
        top: 52px;
    }

    .letter-o.active-down {
        top: -1px;
    }
}

@include desktop {
    .intro-text {
        font-size: 75px;

        .letter,
        .o-container {
            width: 50px;
            height: 60px;
        }

        .letter-o {
            top: 40px;
            left: -10px;
            width: 45px;
            height: 45px;
        }

        .letter-o.active-up {
            top: 77px;
        }

        .letter-o.active-down {
            top: 13px;
        }
    }
}

.video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 9999;
}

.bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.intro-video-container {
    opacity: 1;
}

.removed {
    opacity: 0;
    transition: opacity 0.7s;
}
</style>
