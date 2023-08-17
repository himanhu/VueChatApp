<template>
    <div class="conversation-area"  id="mydiv" :class="{ 'message-sent': true }">
      <div class="message-list" ref="messageList">
        <MessageList
          v-for="message in conversation"
          :key="message.timestamp"
          :message="message"
          :currentuser="currentuser"
        ></MessageList>
      </div>
      <TextArea @send="sendReply"></TextArea>
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
    props: ['conversation', 'currentuser'],
    methods: {
      sendReply(message) {
        this.$store.dispatch('sendReply', message);
        this.scrollToBottom();
      },
      scrollToBottom() {
        this.$nextTick(() => {
          this.$refs.messageList.scrollTop = this.$refs.messageList.scrollHeight;
        });
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
  .message-list{
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  /* Styles for conversation area component */
  </style>
  
