<template>
    <div class="text-white mx-3 auth_view">
        <h1 class="mt-0 mb-4">Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <input 
                    type="email" 
                    name="email"
                    class="base_input"
                    id="email"
                    />
                <label for="email">Email</label>
            </div>
            <div class="form-group">
                <input 
                    type="password" 
                    name="password"
                    class="base_input"
                    id="password"
                    autocomplete
                    />
                <label for="password">Password</label>
            </div>
            <div class="form-group text-right">
                <button class="btn btn-light py-2 px-3">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  methods: {
      login(){
          console.log("AppLogin: submitting form");
          this.$router.push({ name: 'user-home' });
      }
  }  
};
</script>