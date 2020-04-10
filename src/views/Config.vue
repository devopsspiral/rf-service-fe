<template>
<div>

     <select v-model="selectedPublisher">
      <option v-for="(obj, name) in publishers" v-bind:key="name" v-bind:value="name">{{name}}</option>
    </select>
    <form @submit.prevent="handlePublisherSubmit">
    <div v-for="(type, field) in publishers[selectedPublisher]" v-bind:key="field" >
      <label>{{ field }}:
      <input type="text" v-model="publisherConfig[field]">
      </label>
    </div>
    <button type="submit">Save</button>
    </form>

     <select v-model="selectedFetcher">
      <option v-for="(obj, name) in fetchers" v-bind:key="name" v-bind:value="name">{{name}}</option>
    </select>
    <form @submit.prevent="handleFetcherSubmit">
    <div v-for="(type, field) in fetchers[selectedFetcher]" v-bind:key="field" >
      <label>{{ field }}:
      <input type="text" v-model="fetcherConfig[field]">
      </label>
    </div>
    <button type="submit">Save</button>
    </form>

</div> 
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Config',
    data() {
      return {
        publishers: {},
        publisherConfig: {},
        selectedPublisher: "",
        fetchers: {},
        fetcherConfig: {},
        selectedFetcher: "",
      };
    },
    created: function() {
      axios.defaults.baseURL = location.protocol + '//' + location.hostname;
      axios
        .get('/api/publishers_conf')
        .then(res => {
          this.publisherConfig = res.data;
          this.selectedPublisher = this.publisherConfig.type
        })
        .catch(error => console.log(error));
      axios
        .get('/api/publishers')
        .then(res => {
          this.publishers = res.data;
        })
        .catch(error => console.log(error))
      axios
        .get('/api/fetchers_conf')
        .then(res => {
          this.fetcherConfig = res.data;
          this.selectedFetcher = this.fetcherConfig.type
        })
        .catch(error => console.log(error));
      axios
        .get('/api/fetchers')
        .then(res => {
          this.fetchers = res.data;
        })
        .catch(error => console.log(error))
    },
    methods: {
    handlePublisherSubmit() {
      axios.defaults.baseURL = location.protocol + '//' + location.hostname;
      this.publisherConfig.type = this.selectedPublisher
      axios
        .post('/api/publishers_conf', this.publisherConfig)
        .then((error) => {
          console.log(error)
        }
        )
    },
    handleFetcherSubmit() {
      axios.defaults.baseURL = location.protocol + '//' + location.hostname;
      this.fetcherConfig.type = this.selectedFetcher
      axios
        .post('/api/fetchers_conf', this.fetcherConfig)
        .then((error) => {
          console.log(error)
        }
        )
    }
  }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>