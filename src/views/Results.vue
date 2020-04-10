<template>
<div>
<ul>
  <li v-for="item in filteredResults" :key="item.Name"><a  :href="baseURL + item.Name"  target="_blank" >{{ item.Name }}</a></li>
</ul>
</div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Results',
    data() {
      return {
        allResults: [],
        baseURL: ""
      };
    },
    computed: {
      filteredResults() {
      return this.allResults.filter(item =>
        item.IsDir == false && item.Name.includes('.html')
      );
      }
    },
    created: function() {
      this.baseURL = location.protocol + '//' + location.hostname + '/caddy/'
      axios.defaults.baseURL = location.protocol + '//' + location.hostname;
      axios
        .get('/caddy/', {headers: {Accept: "application/json"}})
        .then(res => {
          this.allResults = res.data;
        })
        .catch(error => console.log(error));
    },
  }
  
</script>

<style>
#tests {
  text-align: left;
}
</style>