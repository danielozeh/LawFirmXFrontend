
const apiEndpoints = {
    'get_all_clients': '/api/client/all',
    'get_client_profile': '/api/client/profile/',
    'search_by_lastname': '/api/client/search-by-lastname',
    'update_client_profile': '/api/client/update-profile',
}

export const state = () => ({
    page_title: "",
    all_clients:[],
})

export const mutations = {

    SET_PAGE_TITLE: (state, page_title) => {
        state.page_title = page_title
    },

    SET_ALL_CLIENTS:(state, all_clients) => {
        state.all_clients = all_clients;
    },

}

export const actions = {


    async getAllClients({ state, commit }){

        let res = [];

        res = await this.$axios.$get(apiEndpoints.get_all_clients);

        let all_client = res.message.clients;
        let img_path = res.message.image_path;

        commit('SET_ALL_CLIENTS', all_client)

        return img_path;
    },

    async searchClientByLastname({ state, commit }, data){

        let res = [];

        res = await this.$axios.$post(apiEndpoints.search_by_lastname, data)

        res = res.message.clients;

        commit('SET_ALL_CLIENTS', res)

        return res;
    },

    async getAllAccountNumbers({ state, commit }){

        let res = [];

        res = await this.$axios.$get(apiEndpoints.all_account_numbers )

        return res;
    },

    

    async assignAccountNumber({ state, commit }, data){

        let res = [];

        res = await this.$axios.$post(apiEndpoints.assign_account_number, data )

        return res;
    },

    async registerSubscriber({state, commit}, data){
        let res = await this.$axios.$post(apiEndpoints.register_subscriber, data)
    },

    async setTotalAccountNumbers({state, commit }, data){
        commit('SET_TOTAL_ACCOUNT_NUMBERS', data )
    },

    async setTotalApprovedSubscribers({state, commit}, data){
        commit('SET_TOTAL_APPROVED_SUBSCRIBERS', data )
    },

    async setTotalUnApprovedSubscribers({state, commit}, data){
        commit('SET_TOTAL_UNAPPROVED_SUBSCRIBERS', data )
    },

}