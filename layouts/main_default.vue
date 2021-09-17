<template>

    <body>

        <!-- <Preloader/> -->

        <!--**********************************
            Main wrapper start
        ***********************************-->
        <div id="main-wrapper" class="show">

            <BrandHeader/>

            <MainHeader page = "Dashboard" :dashboard_content = "dashboard_content" />

            <SideBar/>

            <nuxt/>

            <Footer/>

        </div>
        <!--**********************************
            Main wrapper end
        ***********************************-->
        
    </body>
    
</template>

<script>

import Preloader from '~/components/Preloader.vue';
import BrandHeader from '~/components/BrandHeader.vue';
import MainHeader from '~/components/MainHeader.vue';
import SideBar from '~/components/SideBar.vue';
import Footer from '~/components/Footer.vue';

export default {

    components : {
        Preloader,
        BrandHeader,
        MainHeader,
        SideBar,
        Footer,
    },

    head() {
        return {
            title: 'home',

        }
    }
}
</script>