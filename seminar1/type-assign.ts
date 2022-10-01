const hello = (name: string): void => {
  console.log(`${name}아 안녕`);
};

const sum = (a: number, b: number): number => {
  return a + b;
};

 /**
  * as
  */
const test11: any = '이종현';
const nameLength = (test11 as string).length;
console.log(nameLength);

/**
 * angle-bracket
 */
const test12: any = '김경린';
const nameLength2 = (<string>test12).length;
console.log(nameLength2);