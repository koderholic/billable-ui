<template>
    <footer class="fl w-100" :class="{'fixed bottom-0' : $route.name != 'searchResult' || $route.name != 'info'}">
        <div class="w-100 ph1 pv3 pv4-l flex items-center mw9 cf center">
            <div class="fl w-100 w-40-ns flex items-center">
                <span class="pl2">Developed with love by <strong class="yellow">Koderholic</strong></span>
            </div>
            <div class="fl w-100 w-60-ns f7 tr black">
                <div class="flex items-center float fr tracked">
                    <span class="ttu">Binance</span> <span class="yellow ph1 f2 fw1">|</span>
                    <span class="pointer">
                        <i @click="scrollTop" class="fal fa-arrow-circle-up f1-l f2 yellow hover-silver"></i>
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script type="text/javascript">
    export default {
        data(){return{ date: new Date().getFullYear()}},
        methods:{
            scrollTop(){
                const   scrollHeight = window.scrollY,
                scrollStep = Math.PI / ( 300 / 15 ),
                cosParameter = scrollHeight / 2;
                var scrollCount = 0, scrollMargin,
                scrollInterval = setInterval( function() {
                    if ( window.scrollY != 0 ) {
                        scrollCount = scrollCount + 1;  
                        scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                        window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
                    } 
                    else clearInterval(scrollInterval); 
                }, 15 );
            }
        }
    }
</script>