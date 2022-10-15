/**
 * var (scope) : block의 영향을 받지 않음
 */
if (true) {
  var test = 'var !';
  console.log(test);
}
console.log(test)


/**
 * let (scope)
 */
if (true) {
  let test2 = 'let !';
  console.log(test2);
}
// console.log(test2); // let은 scope 밖에서 사용할 수 없음