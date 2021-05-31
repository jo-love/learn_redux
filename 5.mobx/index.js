const { observable, reaction, autorun, runInAction, action } = require("mobx");

const state = observable({
  compA: "기본",
  compB: 10,
  compC: null,
});

//변화 감지하고 실행되는 함수, 스테이트가 뭐든 바껴도 실행됨
autorun(() => {
  console.log("autorun", state.compA);
});

// autorun가 비슷하지만, 첫번째 인수에서 리턴하는 값이 바꼈을 때만 실행됨
reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log("reaction", state.compB);
  }
);

// 함수처럼 만들어서 원할 때 실행
const change = action(() => {
  state.compA = "바뀜";
  state.compB = 20;
  state.compC = "바뀜";
});

// 액션그룹을 구분하기 위해서 넣은 함수로 사실 없어도 무관, 바로실행
runInAction(() => {
  state.compA = "바뀜";
  state.compB = 20;
  state.compC = "바뀜";
});

runInAction(() => {
  state.compC = "혼자바뀜";
});
