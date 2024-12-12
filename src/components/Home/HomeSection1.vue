<template>
  <div class="alpha">
    <div class="content-alpha">

      <p class="text-1">Sheikh Hamdan bin Mohammed <br/> bin Rashid Al Maktoum <br/>
        Crown Prince of Dubai
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection1"
}
</script>

<style scoped>
.alpha{
  background-color: #1F1F2A !important;
  padding-top: 6%;
  padding-bottom: 6%;
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
  font-size: 38px;
  line-height: 1.3;
  margin: 0;
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