import {mapMutations} from 'vuex';

export default{

    data() {

        return {
            subscriber_type: this.$route.params.type,
        }
    },

    methods: {

        ...mapMutations(['SET_PAGE_TITLE']),
        
    },

}