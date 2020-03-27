<template>
<div>
    <button v-on:click="discover">Discover</button>
    <div id="tests"><test-list :children="tests" :indentation="0"></test-list></div>
    
</div> 
</template>

<script>
  import TestList from './TestList.vue'
  import axios from 'axios';

  export default {
    name: 'Runner',
    components: {
    TestList
    },
    data() {
      return {
        tests: [],
      };
    },
    methods: {
    discover() {
      axios
        .get('http://127.0.0.1:5000/tests')
        .then(res => {
          this.tests = res.data;
        })
        .catch(error => console.log(error));
    }
  }
  }
</script>

<style>
#tests {
  text-align: left;
}
</style>