var data = { a: 1 };
var vm = new Vue({
  el: '#example',
  data: data
});

console.log(vm.$data);

// $watch はインスタンスメソッドです
vm.$watch('a', function (newVal, oldVal) {
  // このコールバックは `vm.a` の値が変わる時に呼ばれます
  console.log('new:' + newVal);
  console.log('old:' + oldVal);
});