<template >
  <div id="app">
    <landing />
  </div>
</template>

<!-- App specific objects  -->
<script type="text/javascript">

import landing from "@/components/landing";

export default {
  name: "app",
  components : {
    landing
  }
};
</script>

<!-- App specific stylings  -->

<style lang="scss">
@import "assets/tachyons/tachyons.scss";
</style>


<style media="screen">
/* @import "assets/css/open-iconic.min.css"; */
@import "assets/css/fontawesomepro.css";
@import "assets/css/custom.min.css";

@import url("https://fonts.googleapis.com/css?family=Quicksand");
body {
  font-family: "Quicksand", sans-serif;
}
/* body {font-family: 'Titillium Web', sans-serif;} */
</style>
