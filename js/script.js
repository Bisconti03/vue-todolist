const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: [
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Suonare la tromba',
                done: false,
            },
            {
                text: 'Leggere 10 pagine',
                done: false,
            },
        ],
        newTodo: {
            text: '',
            done: false,
        },
      }
    },


    methods: {



        addTodo() {

            if(this.newTodo != '') {

                this.todos.push(this.newTodo);
                this.newTodo = '';
            }
        },
        
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        todoDone(i){
            this.todos[i].done = !this.todos[i].done ;
            
            
        }
    }
  }).mount('#app')