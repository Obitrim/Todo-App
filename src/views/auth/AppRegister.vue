<template>
    <div class="text-white mx-3 auth_view">
        <h1 class="mt-0 mb-4">Register</h1>
        <form>
            <div class="form-group">
                <input 
                    type="name" 
                    name="username"
                    class="base_input"
                    id="username"
                    v-model="credentials.username"
                    required
                    />
                <label for="text">Username</label>
            </div>
            <div class="form-group">
                <input 
                    type="email" 
                    name="email"
                    class="base_input"
                    id="email"
                    v-model="credentials.email"
                    required
                    />
                <label for="email">Email</label>
            </div>
            <div class="form-group">
                <input 
                    type="password" 
                    name="password"
                    class="base_input"
                    id="password"
                    v-model="credentials.password"
                    required
                    autocomplete
                    />
                <label for="password">Password</label>
            </div>
            <div class="form-group text-right">
                <button class="btn btn-light py-2 px-3">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
             credentials: {
                email: '',
                password: '',
                username: '',
            },

            errors: {
                email: null,
                password: null,
                username: null,
            }
        }
            
    },

    methods: {
        // submit(){
        //     if(this.validEmail() && this.validPassword()){
        //         console.log("Login user");
        //     }
        // },

        // validEmail(){
        //     let emailValidationRes = new validator().validateEmail(this.credentials.email);
        //     this.errors.email = !!emailValidationRes.error ? emailValidationRes.error : null;
        //     return emailValidationRes.valid;
        // },

        // validPassword(){
        //     let passwordValidationRes = new validator().validatePassword(this.credentials.password);
        //     this.errors.password = !!passwordValidationRes.error ? passwordValidationRes.error : null;
        //     return passwordValidationRes.ok;
        // }
    },  
};
</script>