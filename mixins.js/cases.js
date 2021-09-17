import {mapMutations} from 'vuex';

export default{

    data() {

        return {
            client_case_table_columns:["id","client_id", "case_number", "stage_of_case", "act", "registration_number", "filing_number", "registration_date"],
            client_case_table_options: {
                perPage: 10,
                skin: "table table-striped table-bordered table-hover",
                pagination: {
                    show: true,
                },
                perPageValues: [10, 25, 50, 100],
                preserveState: true,
                headings: {}
            },
            case_type_table_columns:["id","name", "created_at", "updated_at", "action"],
            case_type_table_options: {
                perPage: 10,
                skin: "table table-striped table-bordered table-hover",
                pagination: {
                    show: true,
                },
                perPageValues: [10, 25, 50, 100],
                preserveState: true,
                headings: {}
            },
            case_table_columns:["id","client_id", "case_number", "stage_of_case", "act", "registration_number","action"],
            case_table_options: {
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

        ...mapMutations(['SET_ALL_CASE_TYPE']),


        async deleteCaseType(id){

            try{

                let res = await this.$store.dispatch("cases/deleteCaseType", id);

                this.$notify({
                    type: "success",
                    group: "notification",
                    title: "success",
                    text: "Case Type deleted successfully"
                });
                this.$fetch();

            }catch(e){

                this.$notify({
                    type: "success",
                    group: "notification",
                    title: "success",
                    text: e
                });
                this.$fetch();

            }


        },

        async editCaseType(id){

            var type_name = document.getElementById('type_name_' + id).value;

            var payload = {
                "name": type_name,
            }

            var data = {
                "id": id,
                "payload": payload,
            };

            try{

                let res = await this.$store.dispatch("cases/editCaseType", data);
                this.$notify({
                    type: "success",
                    group: "notification",
                    title: "success",
                    text: "Case Type Edited successfully"
                });
                this.$fetch();
                $("#edit_case_type_"+ String(id) + " .close").click()

            }catch(e){

                this.$notify({
                    type: "error",
                    group: "notification",
                    title: "error",
                    text: e
                })

            }

        },

        async addCaseType(){

            var data = {
                "name": this.type_name,
            }

            console.log(data);

            try{

                let res = await this.$store.dispatch("cases/addCaseType", data);
                this.$notify({
                    type: "success",
                    group: "notification",
                    title: "success",
                    text: "Case Type Added successfully"
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

        async addNewCase(){

            var data = {
                "first_name": this.first_name,
                "last_name": this.last_name,
                "email": this.email,
                "date_of_birth": this.date_of_birth,
                "case_type_id": parseInt(this.case_type),
                "stage_of_case": this.stage_of_case,
                "act": this.act,
                "filing_number": this.filling_number,
                "registration_date": this.registration_date,
                "first_hearing_date": this.first_hearing_date,
                "priority": parseInt(this.priority),
            }

            console.log(data);

            try{

                let res = await this.$store.dispatch("cases/addCaseDetail", data);
                this.$notify({
                    type: "success",
                    group: "notification",
                    title: "success",
                    text: "Case Added successfully"
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

        async editCase(id){

            var first_name = document.getElementById('first_name_' + id).value;
            var last_name = document.getElementById('last_name_' + id).value;
            var email = document.getElementById('email_' + id).value;
            var date_of_birth = document.getElementById('date_of_birth_' + id).value;
            var case_type_id = document.getElementById('case_type_id_' + id).value;
            var stage_of_case = document.getElementById('stage_of_case_' + id).value;
            var act = document.getElementById('act_' + id).value;
            var filing_number = document.getElementById('filing_number_' + id).value;
            var registration_date = document.getElementById('registration_date_' + id).value;
            var first_hearing_date = document.getElementById('first_hearing_date_' + id).value;
            var priority = document.getElementById('priority_' + id).value;

            var payload = {
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "date_of_birth": date_of_birth,
                "case_type_id": parseInt(case_type_id),
                "stage_of_case": stage_of_case,
                "act": act,
                "filing_number": filing_number,
                "registration_date": registration_date,
                "first_hearing_date": first_hearing_date,
                "priority": parseInt(priority),
            }

            var data = {
                "id": id,
                "payload": payload,
            };

            console.log(data);

            try{

                let res = await this.$store.dispatch("cases/editCaseDetail", data);
                this.$notify({
                    type: "success",
                    group: "notification",
                    title: "success",
                    text: "Case Added successfully"
                });
                this.$fetch();
                $("#edit_case_"+ String(id) + " .close").click()

            }catch(e){

                this.$notify({
                    type: "error",
                    group: "notification",
                    title: "error",
                    text: e
                })

            }

        },

        async editStageCase(id){

            var payload = {
                "stage_of_case": this.edit_stage_of_case,
            };

            var data = {
                "id": id,
                "payload": payload,
            };

            console.log(data);

            try{

                let res = await this.$store.dispatch("cases/updateStageofCase", data);
                this.$notify({
                    type: "success",
                    group: "notification",
                    title: "success",
                    text: "Case Stage successfully edited"
                });
                this.$fetch();
                $("#update_stage_"+ String(id) + " .close").click()

            }catch(e){

                this.$notify({
                    type: "error",
                    group: "notification",
                    title: "error",
                    text: e
                })

            }

        },

        async deleteCase(id){

            try{

                await this.$store.dispatch("cases/deleteCaseDetail", id);
                this.$notify({
                    type: "success",
                    group: "notification",
                    title: "success",
                    text: "Case Deleted successfully"
                });
                this.$fetch();

            }catch(e){

                this.$notify({
                    type: "error",
                    group: "notification",
                    title: "error",
                    text: e
                })

            }

        },

        
    },

    mounted() {

        this.SET_PAGE_TITLE("Cases")

    },
    
    head() {

        return {

            title: "Case",

            script : [
                
                {src: "js/dashboard/analytics.js", body: true, async: true, defer: true, defer: true },
            ]
        }

    },

}