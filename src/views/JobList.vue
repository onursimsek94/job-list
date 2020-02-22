<template>
  <div class="main-view-container job-list-view">
    <search
      :cities="getCities"
      v-model="searchParams"
    >
    </search>

    <ul class="job-list">
      <template v-if="getFilteredJobList.length">
        <job-list-item
          v-for="item in getFilteredJobList"
          :key="item.jobId"
          :job-item="item"
          @handleJobItemClick="handleJobItemClick"
        >
        </job-list-item>
      </template>

      <div
        v-else
        class="no-data"
      >
        Aranılan kriterde iş ilanı bulunamadı.
      </div>
    </ul>
  </div>
</template>

<script>
  import jobList from '@/data/job_list'
  import Search from '@/components/Search'
  import JobListItem from '@/components/JobListItem'

  export default {
    name: 'JobList',
    components: {
      Search,
      JobListItem,
    },
    data () {
      return {
        jobListData: [],
        searchParams: {
          city: null,
          query: '',
        },
      }
    },
    created () {
      this.jobListData = jobList.result.items
    },
    methods: {
      handleJobItemClick (jobId) {
        this.$router.push({
          name: 'job-detail',
          params: {
            id: jobId,
          },
        })
      },
    },
    computed: {
      getCities () {
        const cities = this.jobListData.map(item => item.cityName)
        return [...new Set(cities)]
      },
      getFilteredJobList () {
        const { city, query } = this.searchParams
        let data = this.jobListData

        if (city) {
          data = data.filter(item => item.cityName === city)
        }

        if (query.trim().length) {
          data = data.filter(item => {
            return item.positionName.toLowerCase().includes(query.toLowerCase()) ||
              item.companyName.toLowerCase().includes(query.toLowerCase())
          })
        }

        return data
      },
    },
  }
</script>

<style lang="scss" src="./JobList.scss"></style>
