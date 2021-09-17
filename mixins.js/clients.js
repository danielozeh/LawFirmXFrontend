import {mapMutations} from 'vuex';

export default{

    data() {

        return {
            clients_table_columns:["id", "profile_picture","first_name", "last_name", "email", "created_at", "status"],
            clients_table_options: {
                perPage: 10,
                skin: "table table-striped table-bordered table-hover",
                pagination: {
                    show: true,
                },
                perPageValues: [10, 25, 50, 100],
                preserveState: true,
                headings: {}
            },

        }
    },

    methods: {

        ...mapMutations(['SET_PAGE_TITLE']),

        async updatePhoto(id){

            var fd = new FormData();
            fd.append('profile_picture', document.getElementById('img_url_' + id).files[0]);

            var payload = {
                "fd": fd,
            }

            var data = {
                "id": id,
                "payload": payload,
            };

            try{

                let res = await this.$store.dispatch("cases/updateProfilePicture", data);
                this.$notify({
                    type: "success",
                    group: "notification",
                    title: "success",
                    text: "Photo updates successfully!!"
                });
                this.$fetch();
                $("#basicModal .close").click()

            }catch(e){

                this.$notify({
                    type: "error",
                    group: "notification",
                    title: "error",
                    text: e
                })

            }

        },

        async searchClientByLastname(){


            var data = {
                "last_name": this.last_name,
            }

            try{

                let res = await this.$store.dispatch("searchClientByLastname", data);
                this.$notify({
                    type: "success",
                    group: "notification",
                    title: "success",
                    text: "Search successful"
                });
                $("#basicModal .close").click()

            }catch(e){

                this.$notify({
                    type: "error",
                    group: "notification",
                    title: "error",
                    text: "Failed!!"
                })

            }

        },

        
    },

    mounted() {

        this.SET_PAGE_TITLE("Clients")

    },
    
    head() {

        return {

            title: "Clients",

            script : [
                
                {src: "js/dashboard/analytics.js", body: true, async: true, defer: true, defer: true },
            ]
        }

    },

}