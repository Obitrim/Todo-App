class validator {
    #email = {
        error: null,
        valid: false
    };

    #password = {
        error: null,
        ok: false
    };

    #emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    /**
     * checks email string for validity
     * 
     * @param {String} email
     * @returns {Object} 
     */
    validateEmail(email){

        if(this.empty(email)){
            this.#email.error = "Email required";
            return this.#email;
        }

        let validEmail = this.#emailRegExp.test(email);
        if(!validEmail){
            this.#email.error = "Email must match the format example@test.com";
            return this.#email;
        }

        this.#email.valid = true;

        return this.#email;
    }

    /**
     * Checks for a good password
     * 
     * @param {String} password
     * @returns {Object} 
     */
    validatePassword(password){
       if(this.empty(password)){
           this.#password.error = "Password field required";
           return this.#password;
        }

       if(password.trim().length < 8){
           this.#password.error = "Weak password. Password should contain at least 8 characters";
           return this.#password;
       }

       this.#password.ok = true;
       return this.#password;
    }

    /**
     * checks for empty strings
     * 
     * @param {String} value
     * @returns {Boolean} 
     */
    empty(value){
        return value.trim().length === 0;
    }
}

export default validator;

