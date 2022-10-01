/* 

도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기

*/

interface Member {
  name: string;
  group: string;
};

interface Dinner {
  member: Member[];
  shuffle(array: Member[]): Member[];
  organize(array: Member[]): void;
};

const dinner: Dinner = {
  member: [
    {
      name: "권세훈",
      group: "ob",
    },
    {
      name: "김소현",
      group: "yb",
    },
    {
      name: "김경린",
      group: "yb",
    },
    {
      name: "김민욱",
      group: "ob",
    },
    {
      name: "최승빈",
      group: "ob",
    },
  ],
  shuffle(array: Member[]) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array: Member[]) {
    const dinnerMember: Member[] = this.shuffle(array);

    console.log(`결과 ${dinnerMember[0].name}, ${dinnerMember[1].name}`);
  },
};

dinner.organize(dinner.member);