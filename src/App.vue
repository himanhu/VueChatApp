<template>
  <div id="app">
    <div class="heading">Talk the Talk</div>
    <Conversation :conversation="conversation" currentuser="b2ob"></Conversation>
  </div>
</template>
<script>
import {store} from '@/store.js'
import Conversation from './components/Conversation-m.vue';
export default {
  name: 'App',
  data() {
    return {
      }
    },

  components: {
    Conversation
  },
  created() {
    this.$store.dispatch('fetchConversation');
    this.$store.dispatch('fetchMe');
  },
  computed: {
    conversation() {
      return this.$store.state.conversation;
    },
    currentuser() {
      return this.$store.state.currentuser;
    },
  },
  store
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.heading{
    display: flex;
    color: blue;
    font-weight: bold;
    height: 50px;
    align-items: center;
    justify-content: center;
}
</style>



