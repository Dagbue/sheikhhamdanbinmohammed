<template>
  <div class="alpha">
    <press-section1/>
    <press-section2/>
    <footer-home2/>
  </div>
</template>

<script>
import PressSection1 from "@/components/Press/PressSection1.vue";
import PressSection2 from "@/components/Press/PressSection2.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";

export default {
  name: "PressView",
  components: {FooterHome2, PressSection2, PressSection1}
}
</script>


<style scoped>

</style>