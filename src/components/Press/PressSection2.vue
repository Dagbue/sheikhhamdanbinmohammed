<template>
  <div>
    <div class="alpha">

      <div class="section-alpha">

<!--        <div class="section-1">-->
<!--          &lt;!&ndash;          <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_form_01%201.jpg" alt=""  class="image"/>&ndash;&gt;-->
<!--          <p class="text-1">Share Your Thoughts</p>-->
<!--          <p class="text-1">Scheduling Request</p>-->
<!--          <p class="text-1">Request a Greeting</p>-->
<!--        </div>-->
        <div class="section-2">

          <div id="contact-form" class="contact-form">
            <h1 class="contact-form_title">Share Your Thoughts</h1>
            <p class="contact-form_paragraph">
              Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, the Crown Prince of Dubai, is deeply committed to
              engaging with the people of Dubai and the UAE. His leadership and vision for the future are reflected
              in his active role in shaping the city's growth and innovation. Due to the many initiatives and global
              projects he oversees, updates about his work and engagements are typically shared through official
              channels to keep the public informed.
            </p>

            <form @submit.prevent="sendMessage"  class="form" >

              <div class="split">
                <label class="label-input">Press Inquiry for:</label>
                <select  required v-model="gender" >
                  <option selected disabled value="">Select</option>
                  <option value="Sheikh Hamdan">Sheikh Hamdan</option>
<!--                  <option value="Female">Melaina Trump</option>-->
                </select>
              </div>



              <div class="split">
                <label class="label-input">First name</label>
                <input
                    required
                    name="name"
                    type="text"
                    autocomplete="off"
                    placeholder="Enter First Name"
                    v-model="firstName"
                />
              </div>
              <div class="split">
                <label class="label-input">Middle name</label>
                <input
                    required
                    name="name"
                    type="text"
                    autocomplete="off"
                    placeholder="Enter Middle Name"
                    v-model="middleName"
                />
              </div>
              <div class="split">
                <label class="label-input">Last name</label>
                <input
                    required
                    name="name"
                    type="text"
                    autocomplete="off"
                    placeholder="Enter Last Name"
                    v-model="lastName"
                />
              </div>

              <div class="split">
                <label class="label-input">Organization</label>
                <input
                    required
                    name="name"
                    type="text"
                    autocomplete="off"
                    placeholder="Enter Organization"
                    v-model="organization"
                />
              </div>

              <div class="split">
                <label class="label-input">Address 1</label>
                <input
                    required
                    name="name"
                    type="text"
                    autocomplete="off"
                    placeholder="Enter Address 1"
                    v-model="address1"
                />
              </div>

              <div class="split">
                <label class="label-input">Address 2</label>
                <input
                    required
                    name="name"
                    type="text"
                    autocomplete="off"
                    placeholder="Enter Address 2"
                    v-model="address2"
                />
              </div>





              <div class="split">
                <p class="label-input">Enter State</p>
                <input type="text" v-model="state"  required placeholder="State"  />
              </div>


              <div class="split">
                <p class="label-input">Enter City</p>
                <input type="text" v-model="city"  required placeholder="City"  />
              </div>

              <div class="split">
                <p class="label-input">Zip Code</p>
                <input type="text" v-model="zipCode"  required placeholder="Zip Code"  />
              </div>




              <div class="split">
                <p class="label-input">Phone number</p>
                <input type="number" v-model="phoneNumber"  required placeholder="Phone number"  />
              </div>

              <div class="split">
                <label class="label-input">Email address</label>
                <input
                    required
                    name="email"
                    type="email"
                    autocomplete="off"
                    placeholder="Enter Email"
                    v-model="email"
                />
              </div>

              <div class="split">
                <label class="label-input">Type of Request:</label>
                <select  required v-model="requestType" >
                  <option selected disabled value="">Select</option>
                  <option value="TV">TV</option>
                  <option value="Print">Print</option>
                  <option value="Radio">Radio</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div class="split">
                <p class="label-input">Description</p>
                <textarea rows="4"  v-model="description"  required placeholder="Description"  />
              </div>

              <button class="btn">Submit</button>


            </form>
          </div>

        </div>

      </div>

    </div>



  </div>
</template>

<script>
import Swal from "sweetalert2";
import {db} from "@/firebase/config";
import {doc, setDoc,} from "firebase/firestore";
export default {
  name: "PressSection2",
  data() {
    return {
      gender: "",
      firstName: "",
      middleName: "",
      lastName: "",
      organization: "",
      address1: "",
      address2: "",
      state: "",
      city: "",
      zipCode: "",
      phoneNumber: "",
      email: "",
      requestType: "",
      description: "",
      loading: false,  // This will track whether the form is sending or not
    };
  },
  methods: {
    // async sendMessage() {
    //
    //   await setDoc(doc(db,"Requests", this.email), {
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     email: this.email,
    //     gender: this.gender,
    //     age: this.age,
    //     country: this.country,
    //     state: this.state,
    //     message: this.message,
    //     lookingFor: this.lookingFor,
    //   }, {merge: true})
    //       .then(() => {
    //         console.log('saved')
    //       })
    //   await Swal.fire({
    //     icon: 'success',
    //     title: 'Success',
    //     text: 'Request sent Successfully!',
    //   });
    //   this.resetForm()
    //
    // },


    async sendMessage() {
      this.loading = true;  // Start loading
      try {
        await setDoc(doc(db, "PressMessage", this.email), {
          gender: this.gender,
          firstName: this.firstName,
          middleName: this.middleName,
          lastName: this.lastName,
          organization: this.organization,
          address1: this.address1,
          address2: this.address2,
          state: this.state,
          city: this.city,
          zipCode: this.zipCode,
          phoneNumber: this.phoneNumber,
          email: this.email,
          requestType: this.requestType,
          description: this.description,
          // createdAt: serverTimestamp(),
        }, { merge: true });


        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Request sent Successfully!',
        });
      } catch (error) {
        console.error("Error sending message:", error);
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      } finally {
        this.resetForm();
        this.loading = false;  // Stop loading
      }
    },

    resetForm() {
      this.gender = '';
      this.firstName = '';
      this.middleName = '';
      this.lastName = '';
      this.organization = '';
      this.address1 = '';
      this.address2 = '';
      this.state = '';
      this.city = '';
      this.zipCode = '';
      this.phoneNumber = '';
      this.email = '';
      this.requestType = '';
      this.description = '';
    },

  }
}
</script>


<style scoped>

.alpha{
  /*background-image: url("@/assets/background.png");*/
  /*background-color: #000;*/
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-bottom: 5%;
  padding-top: 5%;
}
.section-alpha{
  display: flex;
  width: 100%;
}

.text-1{
  text-align: center;
  margin-top: 5%;
  font-size: 20px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.image{
  width: 85%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
}

.contact-form {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*margin-right: 10%;*/
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);*/
  /*padding: 20px 30px;*/
  /*border-radius: 8px;*/
  /*padding-bottom: 40px;*/
}

.contact-form  {
  /*border-bottom: solid 1px #ccc;*/
  /*margin-bottom: 15px;*/
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  text-align: left;
  font-size: 36px;
  line-height: 44px;
  padding-bottom: 10px;
  color: #101828;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.contact-form_paragraph {
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  padding-bottom: 6%;
  color: #475467;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form input[type="number"],
.contact-form textarea {
  padding: 11px 16px;
  margin-bottom: 15px;
  margin-top: 5px;
  outline: none;
  width: 100%;
  border-radius: 12px;
  color: #475467;
}


.contact-form select{
  padding: 11px 16px;
  margin-bottom: 15px;
  margin-top: 5px;
  outline: none;
  width: 100%;
  border-radius: 12px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #911e37;
  border: 1px solid #911e37;
  color: white;
  cursor: pointer;
  padding: 15px 16px;
  text-align: center;
  border-radius: 12px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
}

.contact-form .button:hover {
  background: #1F1F2A;
  border: solid 1px #1F1F2A;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form input[type="checkbox"],
.contact-form input[type="number"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border: solid 1px #EEF0F1;
}

.contact-form select{
  font-size: 15px;
  border: solid 1px #EEF0F1;
  color: #475467;
}



.form-separate{
  display: flex;
  justify-content: space-between;
}

.split{
  display: block;
}

.split-2{
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 30px;
}

.check-box-label{
  padding-left: 8px;
  color: #475467;
  font-size: 16px;
}

.label-input{
  color: #070e20;
  font-size: 14px;
}

.btn-image{
  width: 3.5%;
}




.newsletter {
  background: linear-gradient(179.02deg, #DEE1E6 -15.49%, #F7F7F7 107.09%);
  padding-top: 10px;
  padding-bottom: 55px;
}

.parent-wrapper {
  position: relative;
  width: 400px;
  height: 270px;
  margin: 50px auto 0;
  /*background-image: url('http://www.imgbase.info/images/safe-wallpapers/digital_art/1_miscellaneous_digital_art/41750_1_miscellaneous_digital_art_simple_dark_shapes.jpg');*/
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -600%;
  /*background-color: #070e20;*/
  background: #1F1F2A;
  border: 1px solid #1F1F2A;
  border-radius: 4px;
  color: #FFF;
  box-shadow: 0 0 10px 2.5px rgba(0, 0, 0, 0.25);
}

.close-btn {
  margin: 20px;
  font-size: 18px;
  cursor: pointer;
}

.subscribe-wrapper {
  position: absolute;
  left: -30px;
  right: -30px;
  height: 200px;
  padding: 30px;
  background-position-x: 272%;
  background-position-y: -1px;
  background-repeat: no-repeat;
  background-color: #FFF;
  border-radius: 4px;
  color: #333;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
}

.subscribe-wrapper:after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: 71px;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #1F1F2A;
}

.subscribe-wrapper h4 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 25px;
  line-height: 28px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.subscribe-wrapper input {
  position: absolute;
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 65%;
  background: transparent;
  transition: all .25s ease;
}

.subscribe-wrapper input:focus {
  outline: none;
  background: #1F1F2A;
}

.subscribe-wrapper .submit-btn {
  position: absolute;
  border-radius: 20px 0 0 20px;
  background: #1F1F2A;
  border: 1.5px solid #1F1F2A;
  color: #FFF;
  padding: 12px 25px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  right: -10px;
  bottom: 30px;
  cursor: pointer;
  transition: all .25s ease;
  /*box-shadow: -5px 6px 20px 0 rgba(51, 51, 51, 0.4);*/
}

.subscribe-wrapper .submit-btn:hover {
  background: #1F1F2A;
}

.btn{
  background-color: #1F1F2A;
  color: #fff;
  border: 1px solid #1F1F2A;
  text-align: center;
  padding: 20px;
  border-radius: 7px;
}

@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-form_title{
    font-size: 26px;
  }
}

@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }

  .section-alpha{
    display: block;
  }

  .section-1{
    width: 100%;
  }

  .section-2{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 700px){
  .contact-form{
    margin-left: unset;
    margin-top: 10%;
    max-width: unset;
    width: unset;
    margin-right: 20px;
  }
  .contact-form_paragraph {
    font-size: 18px;
    line-height: 25px;
  }
}


@media (max-width: 500px){
  .parent-wrapper {
    position: relative;
    width: 300px;
    height: 270px;
    margin: 50px auto 0;
  }
  .subscribe-wrapper h4 {
    font-size: 17px;
    padding-top: 20px;
  }
}

@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-text{
    text-align: center;
  }
  .contact-text-para-2{
    padding-bottom: unset;
  }
  .contact-text-para-3{
    padding-bottom: unset;
  }
  .contact-form_title{
    font-size: 26px;
  }
}


@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }
}

@media (max-width: 700px){
  .contact-text-header {
    font-size: 30px;
  }
  .contact-text-para {
    font-size: 18px;
  }
  .contact-form{
    margin-left: unset;
    margin-top: 10%;
    max-width: unset;
    width: unset;
    margin-right: 20px;
  }
}

</style>