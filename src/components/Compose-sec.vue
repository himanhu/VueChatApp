<template>
    <div class="parent-section">
      <textarea
        v-model="reply"
        @keydown.enter.prevent="sendMessage"
        rows="1"
        ref="textarea"
        class="b-text-area"
      ></textarea>
      <button @click="sendMessage">Send</button>
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
          this.$scollToView;
          this.$nextTick(() => {
            this.$refs.textarea.style.height = 'auto';
            this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
          });
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
    width: 500px;
    height: 20px;
  }
  </style>
  