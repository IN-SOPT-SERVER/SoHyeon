
/**
 * resolve
 */

const condition: boolean = true;

//* 최초 생성 시점
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("우와 Promise다!");
  } else {
    reject(new Error("비동기 처리 도중 실패!"));
  }
});

//* 비동기 처리 성공(then), 비동기 처리 실패(catch)
promise
  .then((resolvedData): void => console.log(resolvedData))
  .catch((error): void => console.log(error));



/**
 * reject
 */

const condition2: boolean = false;

//* 최초 생성 시점
const promise2 = new Promise((resolve, reject) => {
  if (condition2) {
    resolve("우와 Promise다!");
  } else {
    reject(new Error("비동기 처리 도중 실패!"));
  }
});

//* 비동기 처리 성공(then), 비동기 처리 실패(catch)
promise2
  .then((resolvedData): void => console.log(resolvedData))
  .catch((error): void => console.log(error));