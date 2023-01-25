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
        newTodo: '',
      }
    },


    methods: {



        addTodo() {

            if(this.newTodo != '') {
                 const newElement = 
                 {
                    text: this.newTodo,
                    done: false,
                };
                this.todos.push(newElement);
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