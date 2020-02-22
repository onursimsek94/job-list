import { shallowMount } from '@vue/test-utils'
import jobList from '@/data/job_list'
import JobList from '@/views/JobList'

describe('JobList.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(JobList)
  })

  it('check default data when component created', () => {
    expect(typeof JobList.data).toBe('function')
    const defaultData = JobList.data()
    expect(defaultData.jobListData).toEqual([])
    expect(defaultData.searchParams.city).toBeNull()
    expect(defaultData.searchParams.query).toEqual('')
  })

  it('correctly sets the jobListData when created', () => {
    expect(wrapper.vm.$data.jobListData).toEqual(jobList.result.items)
  })

  it('check getCities computed property', () => {
    const cities = wrapper.vm.$data.jobListData.map(item => item.cityName)
    expect(wrapper.vm.getCities).toEqual([...new Set(cities)])
  })

  it('check getFilteredJobList when city changed', () => {
    const cities = wrapper.vm.getCities
    const filteredJobList = wrapper.vm.$data.jobListData
      .filter(item => item.cityName === cities[0])
    const searchParams = {
      city: cities[0],
      query: '',
    }

    wrapper.setData({ searchParams })
    expect(wrapper.vm.getFilteredJobList).toEqual(filteredJobList)
  })

  it('check getFilteredJobList when query changed', () => {
    const query = 'Test'
    const filteredJobList = wrapper.vm.$data.jobListData.filter(item => {
      return item.positionName.toLowerCase().includes(query.toLowerCase()) ||
        item.companyName.toLowerCase().includes(query.toLowerCase())
    })
    const searchParams = {
      city: null,
      query,
    }

    wrapper.setData({ searchParams })
    expect(wrapper.vm.getFilteredJobList).toEqual(filteredJobList)
  })
})
