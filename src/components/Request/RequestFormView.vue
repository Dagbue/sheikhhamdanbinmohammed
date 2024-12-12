<template>
  <div class="back">
    <form class="signUp" @submit.prevent="sendMessage"  >
      <div class="wrapper">
        <div class="headline">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="logo" class="company-logo">
          </router-link>
          <h2>
            Royal Membership Card <br/> Application.
          </h2>
                    <p>
                      NB: The royal membership is issued only under the recommendation of a member of the royal family
                    </p>
        </div>
        <div class="form">
          <div class="signUp">

            <div class="separator">
              <div class="line"></div>
              <h2>&</h2>
              <div class="line"></div>
            </div>

            <div class="group">
              <div class="form-group">
                <input type="text" v-model="firstName" placeholder="First Name"  required name="firstName" />
              </div>
              <div class="form-group">
                <input type="text" v-model="lastName" placeholder="Last Name"  required name="LastName"  />
              </div>
            </div>

            <div class="group">
              <div class="form-group">
                <input type="email" v-model="email" placeholder="Email"  required name="email" />
              </div>
              <div class="form-group">
                <input type="text" v-model="phoneNumber" placeholder="PhoneNumber"  required name="phoneNumber" />
              </div>
            </div>

<!--            <div class="has-addons">-->
<!--              <input v-if="showPassword2"   required="required" type="text"  class="input-form-1 password"   placeholder="Password"   />-->
<!--              <input v-else type="password"    required="required"  class="input-form-1 password"   placeholder="Password"   >-->
<!--              <div class="space" @click="toggleShow2">-->
<!--                <i class="fas" :class="{ 'fa-eye-slash': showPassword2, 'fa-eye': !showPassword2 }" ></i>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="has-addons">-->
<!--              <input v-if="showPassword2"   required="required" type="text"  class="input-form-1 password"   placeholder="Confirm Password"   />-->
<!--              <input v-else type="password"  required="required"  class="input-form-1 password"   placeholder="Confirm Password"   >-->
<!--              <div class="space" @click="toggleShow2">-->
<!--                <i class="fas" :class="{ 'fa-eye-slash': showPassword2, 'fa-eye': !showPassword2 }" ></i>-->
<!--              </div>-->
<!--            </div>-->

<!--                        <div class="form-group">-->
<!--                          <input type="text" placeholder="Referral's Email (Optional)"  name="Referral" v-model="referral"/>-->
<!--                        </div>-->


                        <div class="form-group">
                          <label class="id">Passport (Upload front of your Passport for verification)</label>
                          <input
                              type="file"
                              id="files"
                              name="files"
                              @change="uploadFile"
                              accept="image/*"
                              ref="file"
                              placeholder="Passport (Upload front of your Passport for verification)"
                              required
                          />
                        </div>

                        <div class="form-group">
                          <label class="id">Passport (Upload back of your Passport for verification)</label>
                          <input
                              type="file"
                              id="files2"
                              name="files"
                              @change="uploadFile2"
                              accept="image/*"
                              ref="file2"
                              placeholder="Passport (Upload back of your Passport for verification)"
                              required
                          />
                        </div>




            <div class="form-group">
              <input type="text" v-model="passportNumber" placeholder="Passport number" required name="Passport number" />
            </div>

            <div class="form-group-2">
              <input
                  type="checkbox"
                  placeholder="terms"
                  id="remember-me"
                  class="checkbox"
                  name="RememberMe"
                  required
              />
              <label for="remember-me" class="checkbox-text"
              >I Agree to the
                <a  class="terms" @click="showDialog">Terms And Conditions</a>
                The Office of Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum
              </label
              >
            </div>
            <base-button
                :loading="loading"
                style="
  background: #1F1F2A;
  border: 1px solid #1F1F2A;
  color: white;
"
             >Submit</base-button>
            <!--            <div v-if="error">{{ error }}</div>-->
            <div class="separator">
              <div class="line"></div>
              <h2>&</h2>
              <div class="line"></div>
            </div>

<!--            <div class="create-acc">-->
<!--              <p class="create-text">-->
<!--                Already have an account?<a @click.prevent="onPostClick"-->
<!--                                           class="create-link"-->
<!--              >Login in here</a-->
<!--              >-->
<!--              </p>-->
<!--            </div>-->

          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import {doc, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import Swal from "sweetalert2";

export default {
  name: "RequestFormView",
  components: {BaseButton},
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      front: "",
      back: "",
      passportNumber: "",
      loading: false,  // This will track whether the form is sending or not
    };
  },
  methods: {

    // Handle the front passport file upload and convert it to Base64
    uploadFile(event) {
      const file = event.target.files[0]; // Get the uploaded file
      if (file) {
        this.convertToBase64(file, 'front'); // Convert to Base64 and store in 'front'
      }
    },

    // Handle the back passport file upload and convert it to Base64
    uploadFile2(event) {
      const file = event.target.files[0]; // Get the uploaded file
      if (file) {
        this.convertToBase64(file, 'back'); // Convert to Base64 and store in 'back'
      }
    },

    // Helper method to convert file to Base64 and assign it to the appropriate data property
    convertToBase64(file, field) {
      const reader = new FileReader(); // Create a new FileReader instance
      reader.onload = () => {
        // Once file is read, assign the Base64 result to the appropriate property
        if (field === 'front') {
          this.front = reader.result; // Base64 string for front passport
        } else if (field === 'back') {
          this.back = reader.result; // Base64 string for back passport
        }
      };
      reader.readAsDataURL(file); // Convert file to Base64
    },

    async sendMessage() {
      this.loading = true;  // Start loading
      try {
        await setDoc(doc(db, "MembershipCard", this.email), {
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
          email: this.email,
          front: this.front,
          back: this.back,
          passportNumber: this.passportNumber,
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
        this.$router.push("/");
        window.scrollTo(0, 0);
      }
    },

    resetForm() {
      this.front = '';
      this.firstName = '';
      this.lastName = '';
      this.back = '';
      this.passportNumber = '';
      this.phoneNumber = '';
      this.email = '';
    },

  }
}
</script>


<style scoped>
form {
  margin: 0 auto;
  max-width: 50rem;
}



.company-logo{
  width: 15%;
  margin-top: 3%;
  margin-bottom: 2%;
}

:root {
  --primary-color: #3525d3;
  --white-color: #fff;
  --black-color: #3c4a57;
  --light-gray: #e4e8ee;
}

.wrapper {
  position: relative;
  align-items: center;
  justify-content: center;
}



.wrapper {
  max-width: 800px;
  width: 100%;
  margin: auto;
}

.wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: -1;
}

.wrapper .headline {
  text-align: center;
  padding-bottom: 20px;
}


.wrapper .headline h2 {
  font-weight: 400;
  font-size: 23px;
  padding-top: 1%;
  padding-bottom: 1%;
  font-family: 'BR-Firma-Bold', sans-serif;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*margin-top: 10%;*/
}
.wrapper .headline p{
  font-size: 15px;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #818a91;
}
.wrapper .form {
  max-width: 450px;
  width: 100%;
  margin: auto;
}

.wrapper .form-group {
  margin-bottom: 15px;
  margin-right: 5px;
  margin-left: 5px;
  width: 100%;
}

.wrapper .form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;

  padding: 12px 16px;
  height: 48px;
  border-radius: 8px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group input:focus {
  outline: none;
  border: 1px solid #24405A;
}

.wrapper .form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.wrapper .form-group select {
  display: block;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 5px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group select:focus {
  outline: none;
  border: 1px solid #24405A;
}

.wrapper .form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}




.form-group-2 {
  display: flex;
  align-items: center;
  align-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.checkbox-text {
  padding-left: 8px;
  font-size: 14px;
  color: #0a1538;
}

.forgot-password {
  padding-left: 26%;
  text-decoration: none;
  color: #0f171c;
  font-size: 15px;
}

.separator {
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

.separator .line {
  height: 1px;
  flex: 0.5;
  background-color: #676767;
}

.separator h2 {
  padding: 0 1rem;
  font-size: 12px;
  color: #676767;
}

.create-acc {
  padding-top: 20px;
  font-size: 17px;
  padding-bottom: 40px;
}
.create-text {
  font-size: 15px;
  color: #0a1538;
}

.create-link {
  padding-left: 5px;
  color: #0a1538;
  /*text-decoration: underline;*/
  font-family: 'BR-Firma-Bold', sans-serif;
}

.group{
  display: flex;
}

.has-addons{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-right: unset;
  margin-left: 5px;
  margin-bottom: 5px;
}
button{
  background-color: transparent;
}
.fas{
  font-size: 13px;
  margin-top: 10%;
}
.space{
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 9px;
  border: 1px solid #d0d5dd;
  border-left-style: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
}
.input-form-1{
  order: 1;
  width: 100%;
  padding: 13px 20px;
  margin: 6px 0;
  display: inline-block;
  box-sizing: border-box;
}
input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  /*padding-top: 12px;*/
  /*padding-bottom: 12px;*/
  transition: 0.3s;
  outline: none;
  color: var(--black-color);
}
input:focus {
  border: 1px solid #24405A;
}
input::placeholder {
  color: var(--black-color);
}
.input-form-1.password {
  border-right-style: none;
  border-radius: 8px 0 0 8px;
  padding-top: 13.5px;
  padding-bottom: 13.5px;
}


.id{
  font-size: 13px;
  color: #0f171c;
  opacity: 0.5;
}

.terms{
  color: #0a1538;
  text-decoration: underline;
  font-family: 'BR-Firma-Bold', sans-serif;
}

@media (max-width: 1030px) {
  .wrapper::before {
    left: -25%;
    min-height: 60vh;
    height: 500px;
  }
}
@media (max-width: 767px) {
  .wrapper {
    max-width: 600px;
  }
  .wrapper .headline h1 {
    font-size: 22px;
    line-height: 25px;
  }
}
@media (max-width: 990px) {
  .wrapper .headline h1  {
    font-size: 32px;
  }
  .wrapper .headline h2  {
    font-size: 28px;
    width: 90%;
  }
}
@media (max-width: 500px) {
  .wrapper {
    padding: 10px 25px 0;
  }
  form {
    margin: 1rem;
    max-width: 80rem;
    border-radius: 12px;
    padding: unset;
    background-color: #ffffff;
  }
  .wrapper .headline h1  {
    font-size: 25px;
  }
  .wrapper .headline h2  {
    font-size: 22px;
  }
  .checkbox-text {
    padding-left: 10px;
  }

  .company-logo{
    width: 60%;
    margin-top: unset;
  }
}

</style>