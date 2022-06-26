<template>
  <div class="test"></div>
</template>

<script>
export default {
  name: 'Test',
  watch: {
    // 监听salary
    salary: {
      handler(newVal, oldVal) {
        // 如果
        // if (this.checkSalary(newVal)) {
        // }
      }
    }
  },
  methods: {
    checkSalary(salary) {
      return Number(salary)
    }
  }
}
</script>

<style>

</style>
