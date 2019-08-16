<template>
  <div id="app" class="container">
    <!-- header start -->
    <header>
      <span id="title">{{ title }}</span>
      <i class="fas" :class="{'fa-plus-circle': !showForm, 'fa-minus-circle': showForm}" @click="openForm"></i>

      <div id="tracker-container">
        <div class="tracker tracker-todo">
          <span class="activity-tile">{{ activityCount }}</span><br> Activities
        </div>

        <div class="tracker tracker-completed">
          <span class="activity-tile">{{ completedActivityCount }}</span><br> Completed
        </div>

      </div>
    </header>
    <!-- header end -->

    <!-- form start -->
    <div id="activity-add-section" class="animated" ref="addTodoForm" v-show="showForm">
      <form id="addForm" @keypress.enter.prevent="addTodo">
        <input type="text" placeholder="Enter todo item title" ref="dateTitleInputField"/>
        <input type="date" id="todoDate" ref="dateInputField"/>
      </form>
    </div>
    <!-- form end -->

    <!-- to-do list start -->
    <section>
      <h4 id="title-activities">Activities</h4>

      <div v-if="!listIsEmpty">
        <ul>
          <li class="item" v-for="(todo, index) in todos" :key="index" @mouseenter="activateItemControl(todo, $event)" @mouseleave="deactivateItemControl(todo, $event)">
            <div style="display: inline; margin-right: 10px;">
              <span id="listStyle">{{ index + 1 }}</span>
              <p id="listText">
                {{ todo.title }}
              </p>
            </div>
            
            <i class="fas fa-trash-alt" v-show="todo.showTrash" @click="remove(todo)"></i>
          </li>
        </ul>
      </div>
      
      <div id="emptyTodoScreen" v-else>

      </div>

    </section>
    <!-- to-do list end -->

    <!-- footer -->
    <footer>
      <p>&copy; Copyrighted by SoftTech</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: '#app',
  data(){
    return {
      title: "To Do",
      completedActivityCount: 0,
      showForm: false,
      todos:[]
    }
  },
  computed: {
    activityCount(){
      return this.todos.length;
    },
    listIsEmpty(){
      return this.activityCount === 0;
    }
  },
  methods: {
    openForm(){
      var todoForm = this.$refs.addTodoForm;
      var dateInput = this.$refs.dateInputField;
      dateInput.valueAsDate = new Date();

      if(todoForm.classList.contains("slideInDown")){
        todoForm.classList.remove("slideInDown");
        todoForm.classList.add("slideOutUp");
        setTimeout(() => {
          this.showForm = false;
        }, 340);
      }else{
        this.$refs.dateTitleInputField.value = "";
        todoForm.classList.remove("slideOutUp");
        todoForm.classList.add("slideInDown");
        this.showForm = true;
      }
      
    },
    addTodo(){
      var todoTitle = this.$refs.dateTitleInputField.value;
      var dateInputField = this.$refs.dateInputField;

      if(todoTitle.trim().length < 4){
        alert("Item must be four or more letters");
      }else{
        if(this.todos.length === 6){
          alert("Slots filled. Remove an item to free slot(s)")
        }else{
          this.todos.push({
            showTrash: false,
            title: todoTitle,
            dateDue: dateInputField.valueAsDate
            }
          );
          this.$refs.dateTitleInputField.value = "";
        }
        
      }
    },
    activateItemControl(item, event){
      item.showTrash = true;
      event.target.classList.add("active");
    },
    deactivateItemControl(item, event){
      item.showTrash = false;
      event.target.classList.remove("active");
    },
    remove(todo){
      var todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  }
}
</script>


<style scoped>
  .container{
    width: 380px;
    margin-top: 10px;
    box-shadow: 2px 0 40px rgba(0, 0, 0, 0.5);
    border-radius: 15px 15px 10px 10px;
    padding: 0;
    background-color: white;
    overflow: hidden;
    z-index: 5;
  }

  header{
    position: relative;
    width: 100%;
    height: 150px; 
    background: url("./assets/images/todo-header-bg.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    color: #fff;
    z-index: 2;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
  }

  header::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(47, 230, 47, 0.336);

  }

  #title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 2rem;
    text-transform: uppercase;
  }


  #tracker-container{
    position: absolute;
    right: 10px;
    bottom: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 90px;
    height: 100%;
  }

  .tracker{
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 1.087px;
    font-size: 0.66rem;
  }

  .tracker-todo{
    margin-top: 15px;
  }

  .activity-tile{
    padding: 5px;
    font-size: 1.6rem;
    font-weight: 300;
    box-sizing: border-box;
  }

 
  .fa-plus-circle,
  .fa-minus-circle{
    font-size: 2.3rem;
    color: #fff;
    position: absolute;
    left: 15px;
    bottom: 10px;
    transition: 0.155s;
  }

  .fa-plus-circle:hover,
  .fa-minus-circle:hover{
    cursor: pointer;
    opacity: .8;
  }

  #activity-add-section{
    width: 100%;
    z-index: 1;
    border-bottom: 1px solid black;
  }

  div.animated{
    animation-duration: 0.35s;
  }

  #addForm{
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    background-color: grey;
  }

  input{
    border: none;
    color: rgba(44, 43, 43, 0.767);
  }

  input[type="date"]{
    flex-basis: 18%;
    text-align: right;
  }

  input[type="date"]::-webkit-inner-spin-button{
    display: none;
  }

  input[type="text"]{
    flex-basis: 80%;
    padding: 5px 15px;
    box-sizing: border-box;
  }

  input[type="text"]:focus,
   input[type="date"]:focus{
     outline: none;
  }

  section{
    margin-top: 20px;
    width: 100%;
    min-height: 50vh;
  } 

  #title-activities{
    padding-left: 10px;
    margin: 20px 0 10px;
    text-align: center;
    text-transform: uppercase;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 400px;
  }

  section ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  #emptyTodoScreen{
    width: 100%;
    height: 47vh;
    background: url("./assets/images/emptyList.png") no-repeat;
    background-position: center;
    background-size: 400px 400px;
  }

  .fa-trash-alt{
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }

  #listStyle{
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    font-weight: 200;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    background: limegreen;
    box-sizing: border-box;
  }

  #listText{
    display: inline-block;
    padding-left: 10px;
    width: 80%;
    text-emphasis: wrap;
    font-size: 96%;
    font-weight: 400;
    box-sizing: border-box;
  }

  .item{
    position: relative;
    padding: 5px 15px;
    margin: 1.5px 0;
    transition: transform 0.286s;
  }

  .active{
    transform: scaleX(1.054);
    box-shadow: 0 1px 4px rgba(0, 0, 0, .27), 0 -1px 4px rgba(0, 0, 0, .27);
    box-sizing: border-box;
  }

  .expired{
    color: rgb(212, 29, 29);
  }


  footer{
    width: 100%;
    text-align: center;
    line-height: 30px;
    color: rgb(172, 166, 166);
    padding: 10px 10px;
  }

</style>
