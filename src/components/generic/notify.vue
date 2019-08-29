<template>
  <div>
      <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 relative"  v-for="(alert, index) in notifications" :key="index" >
        <span class="pointer f1 w-auto black absolute top-0 left-1 fw8 z-max" @click="close(index)">&times;</span>
        <div class="tc">
          <h2 class="green" v-if="alert.Code==200">Success!</h2>
          <h2 class="red" v-else>Error!</h2>
          <hr class="mw3 bb bw1 b--red-10">
        </div>
        <p class="lh-copy measure center f6 black-70">
          {{ alert.Message }}
        </p>
      </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['notifications'],
    methods: {
      close(index) {
        console.log("came here")
        this.$delete(this.notifications, index)
      }
    },
  }
</script>