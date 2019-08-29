<template id="">
  <section>
    <div class="bb b--gold cf">
      <p class="fw7 f3 black">Company : {{companyName}}</p>
    </div>
    <div class="mt2">
    <div class="overflow-auto">
      <table class="f6 w-100 mw8 center" cellspacing="0">
        <thead class="tl f5">
          <slot name="tableHead" ></slot>
        </thead>
        <tbody class="lh-copy">
          <slot name="tableBody" ></slot>
        </tbody>
      </table>
    </div>
    </div>
  </section>
</template>
<script type="text/javascript">
  export default {
    props: ['companyName'],
  }
</script>
<style media="screen">

</style>
