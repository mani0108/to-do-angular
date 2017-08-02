var app=angular.module('todoApp',[]);

app.controller("todoController",function(){
  var todoList=this;
  todoList.todos=[];

  todoList.completed=[];

  todoList.addToDo=function(){
    todoList.todos.push({text:todoList.todoText,done:false});
    todoList.todoText='';
  };

  todoList.remaining=function(){
    var count=0;
    angular.forEach(todoList.todos,function(todo){
      count+=todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.selectAll=function(){
  angular.forEach(todoList.todos,function(todo){
    todo.done=true;
  });
  };

  todoList.archive=function(){
    var oldToDo=todoList.todos;
    todoList.todos=[];
    angular.forEach(oldToDo,function(todo){
      if(!todo.done){
        todoList.todos.push(todo);
      }
      else{
        todo.done=false;
        todoList.completed.push(todo);
      }
    });
  };

  todoList.archiveCompleted=function(){
    var oldCompleted=todoList.completed;
    todoList.completed=[];
    angular.forEach(oldCompleted,function(completed){
      if(!completed.done){
        todoList.completed.push(todo);
      }
    });
  };


});
