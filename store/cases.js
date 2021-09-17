
const apiEndpoints = {
    'add_case_type': '/api/case/add-type',
    'edit_case_type': '/api/case/edit-type/',
    'delete_case_type': '/api/case/delete-type/',
    'get_all_case_by_type': '/api/case/all-cases/',
    'get_all_case_type': '/api/case/type/all',
    'add_case_details': '/api/case/add-case',
    'edit_case': '/api/case/edit-case/',
    'delete_case':'/api/case/delete-case/',
    'get_all_case':'/api/case/all',
    'update_stage_of_case':'/api/case/update-stage/',
    'update_profile_picture':  '/api/client/update-profile-picture/',
    'all_client_cases': '/api/client/cases/',
}

export const state = () => ({
    page_title: "",
    all_case_type:[],
})

export const mutations = {

    SET_PAGE_TITLE: (state, page_title) => {
        state.page_title = page_title
    },

    SET_ALL_CASE_TYPE:(state, all_case_type) => {
        state.all_case_type = all_case_type;
    },

}

export const actions = {

    async updateProfilePicture({ state, commit}, data){

        console.log(data);

        let res = await this.$axios.$post(apiEndpoints.update_profile_picture + data["id"], data["payload"]);
    },

    async addCaseDetail({ state, commit}, data){

        let res = await this.$axios.$post(apiEndpoints.add_case_details, data);
    },

    async editCaseDetail({ state, commit }, data) {

        let res = await this.$axios.$put(apiEndpoints.edit_case + data["id"], data["payload"]);

    },

    async updateStageofCase({ state, commit }, data) {

        console.log(data);
        console.log(apiEndpoints.update_stage_of_case + String(data["id"]) );

        let res = await this.$axios.$put(apiEndpoints.update_stage_of_case + data["id"], data["payload"]);

    },

    async deleteCaseDetail({ state, commit }, case_id) {
        await this.$axios.$delete(apiEndpoints.delete_case + case_id);
    },

    async getAllCases({ state, commit }) {

        let res = await this.$axios.$get(apiEndpoints.get_all_case);

        return res.message;

    },

    async getAllClientCases({ state, commit }, data) {

        let res = await this.$axios.$get(apiEndpoints.all_client_cases + String(data) );

        return res.message;

    },

    async getAllCaseType({ state, commit }, type){

        if (type == "all"){
            //GET ALL CASE TYPE
            
            let res = [];

            res = await this.$axios.$get(apiEndpoints.get_all_case_type);

            res = res.message;

            commit('SET_ALL_CASE_TYPE', res)

            return res;

        }else{

            let res = [];

            res = await this.$axios.$get(apiEndpoints.get_all_case_by_type + data);

            res = res.message;

            commit('SET_ALL_CASE_TYPE', res)

            return res;

        }
    },

    async addCaseType({ state, commit }, data) {

        let res = await this.$axios.$post(apiEndpoints.add_case_type, data);

    },

    async editCaseType({ state, commit }, data) {

        let res = await this.$axios.$put(apiEndpoints.edit_case_type +  data["id"], data["payload"]);

    },

    async deleteCaseType({ state, commit }, case_id) {

        let res = await this.$axios.$delete(apiEndpoints.delete_case_type + case_id);

    },

}