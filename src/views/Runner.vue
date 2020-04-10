<template>
<div>
    <button v-on:click="runTests">Run All</button>
    <div id="tests"><test-list :children="tests" :indentation="0"></test-list></div>
    
</div> 
</template>

<script>
  import TestList from '@/components/TestList.vue'
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
    created: function() {
      axios.defaults.baseURL = location.protocol + '//' + location.hostname ;
      axios
        .get('/api/tests')
        .then(res => {
          this.tests = res.data;
        })
        .catch(error => console.log(error));
    },
    methods: {
    runTests() {
      axios
        .post('/api/run')
        .then((error) => {
          console.log(error)
        }
        )
    }
    }
  }
  
</script>

<style>
#tests {
  text-align: left;
}
</style>