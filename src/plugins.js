import '@/assets/scss/styles/main.scss';
import GlobalComponents from '@/components/global.js';

export default {
    install(Vue){
        
        //Registering global components
        for(let component in GlobalComponents){
            Vue.component(component, GlobalComponents[component]);
        }
    }
};