<template>
  <div class="job-detail-view">
    <div class="header">
      <div class="left-side">
        <div>{{getJobDetail.positionName}}</div>
        <div>{{getJobDetail.companyName}}</div>
        <div>{{getJobDetail.cityName}}({{getJobDetail.townName}})</div>
      </div>

      <el-button>BAŞVUR</el-button>
    </div>

    <div class="main-view-container">
      <div class="title">GENEL NİTELİKLER VE İŞ TANIMI</div>

      <div class="subtitle">İş Tanımı</div>
      <div>{{getJobDetail.description}}</div>

      <div class="subtitle">İletişim Numarası</div>
      <div>{{getContactPhone}}</div>

      <div class="subtitle">Adres</div>
      <div>{{getJobDetail.address}}</div>

      <el-button
        class="navigation-button"
        @click="handleBackClick"
      >
        Geri
      </el-button>
    </div>
  </div>
</template>

<script>
  import jobList from '@/data/job_list'
  import jobDetail from '@/data/job_detail'

  export default {
    name: 'JobDetail',
    props: {
      id: {
        required: true,
      },
    },
    data () {
      return {
        jobListData: [],
        jobDetailData: [],
      }
    },
    created () {
      this.jobListData = jobList.result.items
      this.jobDetailData = jobDetail.result
    },
    methods: {
      handleBackClick () {
        this.$router.push({
          name: 'job-list',
        })
      },
    },
    computed: {
      getJobDetail () {
        return this.jobDetailData.find(item => item.jobId === this.id)
      },
      getContactPhone () {
        const { contactPhone } = this.getJobDetail
        return `${contactPhone.countryCallingCode} ${contactPhone.areaCode} ${contactPhone.number}`
      },
    },
  }
</script>

<style lang="scss" src="./JobDetail.scss"></style>
