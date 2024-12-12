<template>
  <div>
    <h2>Automatic Slideshow</h2>
    <p>Change image every 2 seconds:</p>

    <div class="slideshow-container">
      <div
          v-for="(slide, index) in slides"
          :key="index"
          class="mySlides fade"
          :style="{ display: currentSlideIndex === index ? 'block' : 'none' }"
      >
        <div class="numbertext">{{ index + 1 }} / {{ slides.length }}</div>
        <img :src="slide.image" style="width:100%" />
        <div class="text">{{ slide.caption }}</div>
      </div>
    </div>

    <br />

    <div style="text-align:center">
      <span
          v-for="(dot, index) in slides"
          :key="index"
          class="dot"
          :class="{ active: currentSlideIndex === index }"
          @click="setSlide(index)"
      ></span>
    </div>
  </div>
</template>


<script>
export default {
  name: "SliderView2",
  data() {
    return {
      currentSlideIndex: 0,
      slides: [
        {image: "@/assets/IMG_0332.JPG", caption: "Caption Text"},
        {image: "img_snow_wide.jpg", caption: "Caption Two"},
        {image: "img_mountains_wide.jpg", caption: "Caption Three"}
      ]
    }
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.nextSlide();
      }, 2000);
    },
    nextSlide() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    },
    setSlide(index) {
      this.currentSlideIndex = index;
    }
  }
}
</script>



<style scoped>

* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
}
.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {
    font-size: 11px;
  }
}


</style>