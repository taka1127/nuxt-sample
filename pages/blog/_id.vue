<template>
  <div>
  <h2>blogディレクトリのパラメータを受け取ったページ</h2>
  <p>これは、{{ $route.params.id }} のエントリーです</p>
  </div>
</template>

<script>
export default {
  //バリデーションの設定
  validate({ params}){
  //正規表現：^=最初から。d=数値。+=何文字でも。$=最後まで。
  //渡ってきたidが数値かどうか判定
    return /^\d+$/.test(params.id)
  }
}
</script>



