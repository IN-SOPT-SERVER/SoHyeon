
interface SOPT {
  name: string;
  age: number;
  isSOPT: boolean;
  favoriteFood?: string;
};

const info: SOPT = {
  name: '김소현',
  age: 23,
  isSOPT: true,
  favoriteFood: '마라탕',
};

const infos: SOPT[] = [
  info,
  {
    name: '김경린',
    age: 24,
    isSOPT: true,
  },
  {
    name: '김솝트',
    age: 30,
    isSOPT: false,
  },
];
