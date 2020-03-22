<template>
    <div class="text-white mx-3 auth_view">
        <h1 class="mt-0 mb-4">Login</h1>
        <form @submit.prevent="submit" novalidate>
            <div class="form-group">
                <input 
                    type="email" 
                    name="email"
                    class="mb-2 base_input"
                    id="email"
                    v-model="credentials.email"
                    required
                    />
                <label for="email">Email</label>
                <error-label v-if="errors.email">{{ errors.email }}</error-label>
            </div>
            <div class="form-group">
                <input 
                    type="password" 
                    name="password"
                    class="mb-2 base_input"
                    id="password"
                    v-model="credentials.password"
                    required
                    autocomplete
                    />
                <label for="password">Password</label>
                <error-label v-if="errors.password">{{ errors.password }}</error-label>
            </div>
            <div class="form-group text-right">
                <button class="btn btn-light py-2 px-3">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import validator from '@/services/validator.js';

export default {
    data(){
        return {
            credentials: {
                email: '',
                password: ''
            },

            errors: {
                email: null,
                password: null
            }
        }
    },

    methods: {
        submit(){
            if(this.validEmail() && this.validPassword()){
                alert("loggin user in");
                this.$router.push({ name: 'user-home' });
            }
        },

        validEmail(){
            let emailValidationRes = new validator().validateEmail(this.credentials.email);
            this.errors.email = emailValidationRes.error ? emailValidationRes.error : null;
            return emailValidationRes.valid;
        },

        validPassword(){
            let passwordValidationRes = new validator().validatePassword(this.credentials.password);
            this.errors.password = passwordValidationRes.error ? passwordValidationRes.error : null;
            return passwordValidationRes.ok;
        }
    },  
};
</script>