<template>
<div>
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
  }
  }
</script>

