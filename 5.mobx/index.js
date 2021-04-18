const { observable, autorun, runInAction } = require("mobx");

const state = observable({
  compA: "기본",
  compB: 10,
  compC: null,
});

//변화 감지하는 함수
autorun(() => {
  console.log("changed", state.compA);
});

// 액션그룹을 구분하기 위해서 넣은 함수로 사실 없어도 무관
runInAction(() => {
  state.compA = "바뀜";
  state.compB = "바뀜";
  state.compC = "바뀜";
});

runInAction(() => {
  state.compC = "혼자바뀜";
});
