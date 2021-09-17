<template>

    <div class="content-body">

        <!-- row -->
        <div class="container-fluid">

            <template v-if="$fetchState.pending">
                <PendingPlaceholder/>
            </template>

            <template v-else-if="$fetchState.error">
            <ErrorPlaceholder message="Failed to Load Resource"/>                         
            </template>

            <template v-else>


                <div class="form-head d-flex mb-3 mb-lg-5 align-items-start">
                    <div class="mr-auto d-none d-lg-block">
                        <a class="mb-0 text-secondary fs-18 font-w500" href="#">All Client Cases </a>
                        <a class="mb-0 font-w500 fs-18" href="#"> </a>
                    </div>
                    

                </div>


        <nuxt-link to="/"><button class="btn btn-success btn-xs" title="Edit"><i></i>Back</button></nuxt-link> 
        
        <div class="row" v-if="this.all_cases.length">

        <v-client-table :data="this.all_cases" :columns="client_case_table_columns" :options="this.client_case_table_options" class="table table-striped custom-table">


          </v-client-table>


                </div>

                <div v-else>
                    <center>
                        <img src="~/static/images/empty_box_1.jpg"/>
                    </center>
                </div>

            </template>

        </div>
        <notifications group="notification" />
    </div>
    
</template>

<script>
    
    import PendingPlaceholder from '~/components/pending-placeholder.vue'
    import ErrorPlaceholder from '~/components/error-placeholder.vue'

    import CasesMixins from '~/mixins.js/cases.js'

    export default {

        layout: "main_default",

        mixins: [CasesMixins],

        components: {
            PendingPlaceholder,
            ErrorPlaceholder
        },

        async fetch() {

            let client_id = this.$route.params.id;

            let res = await this.$store.dispatch('cases/getAllClientCases',client_id );

            console.log(res);

            this.all_cases = res;

        },
        
    }
</script>