export const state = () => ({
  list: []
})
//mutations＝変化させる
export const mutations = {
  //stateは決まり文句。
  //textはpages.vueで指定したe.target.valueの引数。
  add(state, text) {
    //push＝配列に追加
    state.list.push({
      text: text,
      //チェックボックスのフラグ
      done: false
    })
  },
  toggle(state, todo) {
    //チェックがついていたらチェックを外す
    todo.done = !todo.done
  }
}