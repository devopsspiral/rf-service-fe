<template>
<div>
    <!-- <button v-on:click="discover">Discover</button> -->
      <div></div>
      <!-- <input type="checkbox" :name="name" :value="name" :style="indent">
      <label :for="name" :style="indent" @click="toggleChildren">{{ name }}</label> -->
      <div :style="indent" @click="toggleChildren">{{ name }}</div>
      <div v-if="showChildren">
      <test-list
        v-for="child in children"
        :children="child.children"
        :name="child.name"
        :key="child.name"
        :indentation="indentation + 1"
        >
      </test-list>
    </div>
</div> 
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'test-list',
    props: ['name', 'children', 'indentation'],
    data() {
      return {
        tests: {},
        showChildren: true
      };
    },
    computed: {
      indent() {
        return { transform: `translate(${this.indentation * 50}px)`}
      }
    },
    methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
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

