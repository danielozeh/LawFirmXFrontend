<template>

<div class="h-100">
    <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
                                    <h4 class="text-center mb-4">Account Login</h4>
                                    <form novalidate @submit.prevent="login" method="post">
                                        <div class="form-group">
                                            <label class="mb-1"><strong>Username</strong></label>
                                            <input type="email" class="form-control" v-model="username">
                                        </div>
                                        <div class="form-group">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" v-model="password">
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <notifications group="notification" />
</div>
    
</template>

<script>
export default {

    layout: "login_default",
    middleware: 'guest',

    components:{

    },

    head() {

        return {
            title: "Login",
        }

    },

    data() {

        return {
            username: '',
            password: ''
        }

    },

    methods: {

        async login(){

            try{

                await this.$auth.loginWith('local', {
                    data : {
                        username: this.username,
                        password: this.password
                    }
                })

                // this.$router.push('/');
                if (this.$auth.loggedIn) {
                    this.$router.go('/');
                }else{
                    this.$swal("",'Wrong Login Credentials !!!', "error");
                }
                
            }
            catch(error){
                console.log(error.response);
                this.$swal("",'Wrong Login Credentials !!!', "error");
            }

        }

    }
};
</script>