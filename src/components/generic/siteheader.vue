<template>
    <section class="absolute top-0 z-max">
        <nav class="w-100 center cf f6 f5-ns inline-flex items-center fw5 h3 mb7" :class="bgMenu" >
            <nav class="dt w-100 border-box ph3-l fixed">
                <div class="dtc v-mid w-80 w-20-l tl pa3">
                    <router-link to="/" class="dtc v-mid mid-gray link dim pointer" title="Home">
                        <img src="@/assets/img/logo.png" class="dib" style="height:4em" alt="Billable">
                    </router-link>
                </div>
                <div class="dtc v-mid w-20 w-80-l tr pa3">
                    <span class="dn dib-l pointer">
                        <router-link to="/"  class="link dim black b f6 f5-l dib mr3 mr4-l " >Home</router-link>
                    </span>
                    <span class="dn-l dib" @click="toggleMenu" >
                        <i class="fa fa-bars f3 tr red"></i>
                    </span>
                </div>
            </nav>
        </nav>
        <div class="top-0 right-0 vh-100 bg-black-60 fixed w-100 z-max" :class="{'slideInRight':lShow, 'slideOutRight':!lShow}" @click="toggleMenu">
            <nav class="vh-100 bg-near-white fr">
                <ul class="list pt0 ph2 pr4 mt0 overflow-y-scroll w4" style="height:100vh">
                    <li class="dim pointer tl" >
                        <p class="h3 f7 inline-flex items-center mv0 red">
                            <i class="fa fa-sign-out-alt f2"></i>
                        </p>
                    </li>
                      <router-link to="/"  class="link dim black b f6 f5-l dib mr3 mr4-l " >Home</router-link>
                </ul>
            </nav>
        </div>
    </section>
</template>
<script type="text/javascript">

export default {
  data() {
    return {
      lShow: false,
      hideMenu: "",
      bgMenu: "bg-white-90"
    };
  },
  methods: {
    toggleMenu() {
      this.lShow = !this.lShow;
    },
    hideMenuOnScroll() {
      var hideMenu;
      var shrinkOn = 100;
      var distanceY = window.pageYOffset || document.documentElement.scrollTop;
      if (distanceY < shrinkOn) {
        hideMenu = "dn";
      } else {
        hideMenu = "";
      }
      if (hideMenu !== this.hideMenu) {
        this.hideMenu = hideMenu;
      }
    }
  },
  beforeMount() {
    if (this.$route.fullPath == "/") {
      this.hideMenu = "dn";
      window.addEventListener("scroll", this.hideMenuOnScroll, false);
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.hideMenuOnScroll, false);
  }
};
</script>
