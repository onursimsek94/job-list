<template>
  <li
    class="job-list-item"
    @click="handleJobItemClick(jobItem.jobId)"
  >
    <div class="left-side">
      <div>{{jobItem.positionName}}</div>
      <div>{{jobItem.companyName}}</div>
      <div>{{jobItem.cityName}}</div>
    </div>

    <i class="el-icon-arrow-right right-side"></i>
  </li>
</template>

<script>
  export default {
    name: 'JobListItem',
    props: {
      jobItem: {},
    },
    methods: {
      handleJobItemClick (jobId) {
        this.$emit('handleJobItemClick', jobId)
      },
    },
  }
</script>

<style lang="scss" src="./JobListItem.scss"></style>
