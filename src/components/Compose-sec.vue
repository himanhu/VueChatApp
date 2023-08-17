<template>
    <div class="parent-section">
      <textarea
        v-model="reply"
        @keydown.enter.prevent="sendMessage"
        rows="1"
        ref="textarea"
        class="b-text-area"
      ></textarea>
      <button class="btn-class" @click="sendMessage">Send</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reply: '',
      };
    },
    methods: {
      sendMessage() {
        if (this.validateMessage(this.reply)) {
          this.$emit('send', this.reply);
          this.reply = '';
          const element = document.getElementById("mydiv");
          setTimeout(()=>{
            console.log(element,element.scrollHeight)
          element.scrollTop = element.scrollHeight;

          },500)
        }
        
      },
      validateMessage(mess){
        return mess.trim() !== '';
      }
    },
  };
  </script>
  
  <style scoped>
  /* Styles for compose section component */
  .b-text-area{
    width: 80%;
    height: 20px;
    margin-left: 10%;
    margin-right:10px;

  }
  .parent-section{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right:10%;

  }
  .btn-class{
   background-color: green;
   height: 30px;
   color: white;
  }
  </style>
  
