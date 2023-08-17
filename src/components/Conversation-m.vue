<template>
    <div class="conversation-area"  id="mydiv" :class="{ 'message-sent': true }">
      <div class="message-list" ref="messageList">
        <MessageList
          v-for="message in conversation"
          :key="message.timestamp"
          :message="message"
          :currentuser="currentuser"
        ></MessageList>
        <div class="b-typing" v-if="showTyping">typing...</div>
      </div>
      <TextArea @isTyping="showtyping" @send="sendReply"></TextArea>
    </div>
  </template>
  
  <script>
  import MessageList from './MessageList.vue';
  import TextArea from './Compose-sec.vue';
    
  export default {
    components: {
      MessageList,
      TextArea,
    },
    data(){
      return{
        showTyping:false,

      }
    },
    props: ['conversation', 'currentuser'],
    methods: {
      sendReply(message) {
        this.$store.dispatch('sendReply', message);
      },
      showtyping(mess){
        if(mess.length > 0) return this.showTyping = true;
        return this.showTyping = false

      },
    },
  };
  </script>
  
  <style scoped>
  .conversation-area{
    height: 800px;
    overflow: auto;

  }
  .message-sent{

  }
  .b-typing{
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 40px;

  }
  .message-list{
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
  }
  /* Styles for conversation area component */
  </style>
  
