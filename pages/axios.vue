<template>
  <div style="text-align: center;">
    <p>{{ ip }}</p>
    <button @click="getIp">IPアドレスを取得</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      ip: '0.0.0.0'
    }
  },
  methods: {
    //async:非同期で通信
    async getIp() {
          //await:通信終わりまで待つ
      this.ip = await this.$axios.$get('http://icanhazip.com')
    }
  }
}
</script>