<template>
  <div class="search-component">
    <el-input
      clearable
      placeholder="Pozisyon, firma adı"
      v-model="mutableValue.query"
    >
      <template slot="prepend">
        <el-select
          clearable
          placeholder="Şehir"
          v-model="mutableValue.city"
        >
          <el-option
            v-for="(item, index) in cities"
            :key="index"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </template>
      <template slot="append">
        <el-button @click="handleFindJobClick">İŞ BUL</el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    props: {
      cities: {
        default: [],
      },
      value: {},
    },
    data () {
      return {
        mutableValue: JSON.parse(JSON.stringify(this.value)),
      }
    },
    methods: {
      handleFindJobClick () {
        this.$emit('input', this.mutableValue)
      },
    },
    watch: {
      value: {
        immediate: true,
        handler (val) {
          this.mutableValue = JSON.parse(JSON.stringify(val))
        },
      },
    },
  }
</script>

<style lang="scss" src="./Search.scss"></style>
