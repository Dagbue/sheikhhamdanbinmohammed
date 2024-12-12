<template>
  <div class="alpha">
    <div class="content-alpha">

      <p class="text-1">Contact the Office of Sheikh Hamdan </p>

      <p class="text-2"> Help fulfill our promise to put UAE First! </p>

      <p class="text-3" @click="onPostClick"> Contact Us </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection2",
  methods: {
    onPostClick() {
      this.$router.push("/contact");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.alpha{
  background-color: #1F1F2A !important;
  padding-top: 6%;
  padding-bottom: 5%;
}

.content-alpha{
  text-align: center;
}

.text-1{
  color: #FFFFFF;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 35px;
  line-height: 1.2;
  margin: 0;
}

.text-2{
  color: #FFFFFF;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 20px;
  line-height: 1.2;
  margin: 0;
  padding-top: 20px;
}

.text-3{
  background-color: #ffffff;
  display: inline-block;
  padding: 15px 80px;
  border-radius: 8px;
  margin-top: 3%;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .text-1{
    font-size: 28px;
  }
}

@media (max-width: 500px) {

}


</style>