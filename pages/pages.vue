<template>
  <div style="margin: 20px"><!--Enterキーを押したときにaddTodoイベントが発動 -->

    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{done: todo.done}">{{ todo.text}}</span>
      </li>
    </ul>

    <input placeholder="タスクを追加" @keyup.enter="addTodo">
  </div>
</template>

<script>
import { mapMutations} from 'vuex'

export default {
  //上記todosはstoreであるtodo.jsのlistに入っているので
  //storeから取ってこないといけない。そこで、変数として
  //扱えるようにcomputedを使い$store.state.todos.listを取ってくる
  computed:{
    todos(){
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo(e){
      this.$store.commit('todos/add', e.target.value)
      //this.$storeはstoreディレクトリのファイル群を見ている
      //commitはstoreのmutationsを起動
      //何を起動？→'todos/add'
      //e.targetは@keyup.enterを押し込んだ時のtextarea
      //入力したものをe.target.valueに渡す。
    },
    //「...」オブジェクトスプレッド演算子。
    //store側で処理を書くことができる
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done{
                  /* 打消し線 */
  text-decoration: line-through;
}
</style>