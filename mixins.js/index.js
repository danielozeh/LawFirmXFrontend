import {mapMutations} from 'vuex';

export default{

    methods: {

        ...mapMutations(['SET_PAGE_TITLE']),

        showAlert() {
            this.$notify({
                group: "notification",
                title: "success",
                text: "Updated Role successfully!!"
            })
        },

    },
    
    data() {

        return {
  
          index_page: this.$route.name,

        }
    },

}