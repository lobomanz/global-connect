<template>
    <img src="/images/global_connect_zgrada.jpg" alt="">
    <div class="wrapper">

        <div class="contact-page">
          <div class="contact-info">
            <div class="info-content">
              <h1>Kontakt</h1>
              <h2>Call Us:</h2>
              <div class="phone-numbers">
                <a :href="'tel:+385994554118'">+385 994554118</a>
                <a :href="'tel:+385955559548'">+385 955559548</a>
              </div>
              <h2>Contact Us:</h2>
              <div class="emails">
                <a :href="'mailto:d.arhitektura@globalconnect-doo.com'">d.arhitektura@globalconnect-doo.com</a>
                <a :href="'mailto:v.arhitektura@globalconnect-doo.com'">v.arhitektura@globalconnect-doo.com</a>
              </div>
              <h2>Address:</h2>
              <a
                :href="'https://www.google.com/maps/search/?api=1&query=Ul.+Milana+Pavelica+1b,+10000,+Zagreb'"
                target="_blank"
              >
                Ul. Milana Pavelića 1b, 10000, Zagreb
              </a>
            </div>
          </div>
          <div class="contact-form">
            <label for="name">Ime i prezime*</label>
            <input type="text" id="name" v-model="formData.name" />
      
            <label for="email">Vaš email*</label>
            <input type="email" id="email" v-model="formData.email" />
      
            <label for="phone">Mobitel</label>
            <input type="tel" id="phone" v-model="formData.phone" />
      
            <label for="message">Vaša poruka</label>
            <textarea id="message" v-model="formData.message"></textarea>
      
            <button @click="sendEmail">Pošalji</button>
          </div>
        </div>
        <div class="google-map">
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            style="border:0"
            :src="mapSrc"
            allowfullscreen
          ></iframe>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const formData = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Ul.+Milana+Pavelica+1b,+10000,+Zagreb`;
  
  const sendEmail = () => {
    const mailtoLink = `mailto:lovro.monkey@gmail.com?subject=Contact from ${formData.value.name}&body=Email: ${formData.value.email}%0APhone: ${formData.value.phone}%0AMessage: ${formData.value.message}`;
    window.location.href = mailtoLink;
  };
  </script>
  
  <style lang="scss" scoped>
  img{
    max-width: 100%;
  }
  .wrapper{
      text-transform: uppercase;
      max-width: 1200px;
      margin-inline: auto;
      padding-top: 50px;
      .contact-page {
        display: flex;

        justify-content: space-evenly;
      
        .contact-info,
        .contact-form {
          width: 100%;
          align-items: center;
          display: flex;
          flex-direction: column;
          padding: 20px;
          h1{
            font-size: 40px;
          }
          h2{
            font-size: 20px;
            margin-block:15px 10px; 
            padding: 0;
          }
        }
      
        .info-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          a{
            text-decoration: none;
            color: black;
            transition: 0.3s;
            &:hover{
                text-decoration: underline;
            }
          }
        }
      
        .phone-numbers,
        .emails {
      
          a {
            display: block;
            
          }
        }
      
        .contact-form {
      
          label {
            margin-top: 10px;
            max-width: 400px;
            width: 100%;
          }
      
          input,
          textarea {
            max-width: 400px;
            width: 100%;
            margin-top: 5px;
            padding: 15px;
          }
      
          textarea {
            height: 100px;
          }
      
          button {
            max-width: 400px;
            width: 100%;
            margin-top: 20px;
            border: none;
            background-color: black;
            color: white;
            padding-block: 20px;
            transition: 0.3s;
            &:hover{
                background-color: lightgray ;
                color: black;
            }

          }
        }
      
        .google-map {
          margin-top: 40px;
        }
      }
  }
  </style>
  