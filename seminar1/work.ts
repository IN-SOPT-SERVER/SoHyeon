// ~~는 ~살이고 ~에 살고 있고 ~를 좋아합니다.

interface Info {
  name: string;
  age: number;
  live: string;
  like: string;
};

interface Intro {
  members: Info[];
  introduce(arr: Info[]): void;
};

const members: Info[] = [
  {
    name: '김소현',
    age: 23,
    live: '상도',
    like: '방탈출',
  },
  {
    name: '김경린',
    age: 24,
    live: '일산',
    like: '산책',
  },
  {
    name: '전선희',
    age: 23,
    live: '계봉',
    like: '피자',
  },
  {
    name: '최윤한',
    age: 26,
    live: '신림',
    like: '축구',
  },
  {
    name: '김예린',
    age: 25,
    live: '강남구청',
    like: '고기',
  },
  {
    name: '김동재',
    age: 23,
    live: '상봉',
    like: '치킨',
  },
];

const intro: Intro = {
  members: members,
  introduce(members: Info[]) {
    members.map((member) => {
      console.log(`${member.name}는(은) ${member.age}살이고, ${member.live}에 살고 있으며 ${member.like}를(을) 좋아합니다.`);
    });
  }
};

intro.introduce(intro.members);