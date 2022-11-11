/**
 * 함수 선언식
 */
function hello(name) {
  console.log(`안녕 ${name}`);
}
hello("소현");


/**
 * 함수 표현식
 */
const sum = (num1, num2) => {
  const result = num1 + num2;
  // console.log(result);
  return result;
};
console.log(sum(3, 5));