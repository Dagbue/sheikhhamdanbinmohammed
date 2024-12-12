<template>
  <div>
    <contact-section1/>
    <contact-section2/>
    <footer-home2/>
  </div>
</template>

<script>
import ContactSection1 from "@/components/contact/ContactSection1.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";
import ContactSection2 from "@/components/contact/ContactSection2.vue";

export default {
  name: "ContactView",
  components: {ContactSection2, FooterHome2, ContactSection1}
}
</script>


<style scoped>

</style>