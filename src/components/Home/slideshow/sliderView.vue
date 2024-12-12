<template>
  <div>
  <div id="slider">
    <div class="arrowLeft" @click="arrowLeft()"></div>
    <Slides :image="images[chosenImage]" />
    <div class="arrowRight" @click="arrowRight()"></div>

  </div>

  </div>
</template>

<script>
import Slides from "./Slides.vue";
export default {
  name: "sliderView",
  components: {
    Slides,
  },

  data() {
    return {
      images: [
        {
          id: 0,
          url: "https://asset.hamdan.ae/CPDAssets/News/2024/5052/2211202416124797.jpg?RenditionID=21",
          title: "Explore cryptocurrency investment opportunities with seasoned traders.",
          title2: "Experience the power of our mirror trading platform, linking you to proficient cryptocurrency traders. " +
              "Replicate their proven strategies effortlessly and unlock the full potential of your investments.",
          para: "Get started",
          para2: "Login",
        },
        {
          id: 1,
          url: "https://asset.hamdan.ae/CPDAssets/News/2024/5060/28112024202454458.jpg?RenditionID=21",
          title: "Explore cryptocurrency investment opportunities with seasoned traders.",
          title2: "Experience the power of our mirror trading platform, linking you to proficient cryptocurrency traders. " +
              "Replicate their proven strategies effortlessly and unlock the full potential of your investments.",
          para: "Get started",
          para2: "Login",
        },
        {
          id: 2,
          url: "https://asset.hamdan.ae/CPDAssets/News/2024/4917/18920241758024.jpg?RenditionID=21",
          title: "Explore cryptocurrency investment opportunities with seasoned traders.",
          title2: "Experience the power of our mirror trading platform, linking you to proficient cryptocurrency traders. " +
              "Replicate their proven strategies effortlessly and unlock the full potential of your investments.",
          para: "Get started",
          para2: "Login",
        },
      ],
      chosenImage: 0,
      intervalObject: null,
    };
  },
  methods: {
    arrowLeft() {
      clearInterval(this.intervalObject);
      this.moveLeft();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveLeft();
      }, 6000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveRight();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    moveLeft() {
      var flag = this.chosenImage;
      flag--;
      if (flag < 0) {
        flag = this.images.length - 1;
      }
      this.chosenImage = flag;
    },
    moveRight() {
      var flag = this.chosenImage;
      flag++;
      if (flag >= this.images.length) {
        flag = 0;
      }
      this.chosenImage = flag;
    },
  },
  created() {
    var self = this;
    this.intervalObject = setInterval(() => {
      self.moveLeft();
    }, 6000);
  },
};
</script>

<style>
#slider {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  /*margin-top: 0.8%;*/
}
#slider .arrowLeft,
#slider .arrowRight {
  position: absolute;
  top: 50%;
  border: 20px solid transparent;
  display: none;
}
#slider .arrowLeft {
  border-right-color: #676767;
  z-index: 1;
}
#slider .arrowRight {
  right: 0;
  border-left-color: #676767;
}
#slider .squares div {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: inline-block;
  background-color: #676767;
  border-radius: 50%;
  background-image: linear-gradient(
      to top, #000 30%, transparent
  );
}
.bitcoin{
  margin-left: 5%;
  margin-right: 5%;
}
@media (max-width: 700px){
  #slider .arrowLeft{
    display: none;
  }
  #slider .arrowRight{
    display: none;
  }
}
</style>
