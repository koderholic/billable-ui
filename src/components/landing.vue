<template>
  <section class="w-100 relative">
    <siteheader/>

      <router-view></router-view>

    <sitefooter/> 
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/generic/sitefooter";

export default {
  components: {
    siteheader,
    sitefooter
  },
  data() {
    return {
      lLoading: true,
      notifications: [],
      username: "",
      password: "",
      IsCompany: true,
      hoverMember:false,
      searchParam : ''
    };
  },
  beforeUpdate() {
    if (this.notifications.length > 0){
      document.getElementsByTagName("html")[0].classList.add("overflow-hidden")
    } else {
      document.getElementsByTagName("html")[0].classList.remove("overflow-hidden")
    }
  }
};
</script>