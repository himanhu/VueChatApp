<template>
    <div class="message-entry"  :class="{ 'message-sent-by-me': getUserDetails }">
      <div v-if="showName">{{ message.from.firstName}}</div>
        <img v-if="!getUserDetails"  @mouseover="showHover" @mouseleave="hideHover" class="user" :src="message.from.thumbnail" alt="Logo" />
      <div class="message-bubble" :class="{'message-bubble-right':getUserDetails == 'Jack'}">
        {{ message.message }}
      </div>
        <img  v-if="getUserDetails == 'Jack'" class="user" :src="message.from.thumbnail " alt="Logo" />
    </div>
  </template>
  
  <script>
  export default {
    props: ['message', 'currentUser'],
    data(){
      return{
        showName:false
      }
    },
    computed:{
        getUserDetails(){
            return this.message.from.fistName
        }
        
    },
    methods:{
      showHover(){
        this.showName =true
      },
      hideHover(){
        this.showName =false
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles for message entry component */
  .message-entry{
    display: flex;
    width:500px;
    margin-top: 20px;
    width: 100%;
    align-items: end;
  }
  .message-bubble{
    background-color:#FFC0CB;
    border-radius: 10px;
    width: 400px; 
    margin:0px 10px;
    text-align: left;
    padding: 10px;
  }
  .message-sent-by-me{
    display: flex;
    justify-content: end;

  }
  .user {
    background: black;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.message-bubble-right{
  background-color: lightblue;
}
  </style>
  
