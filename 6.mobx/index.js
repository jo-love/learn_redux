const { observable, reaction, autorun, runInAction, action } = require("mobx");

//initaial state
const userState = observable({
  isLogginIn: true,
  data: null,
});
const postState = observable([]);

//action - 포스트생성 + 계정로그인 동시에 가능
runInAction(() => {
  postState.push({ id: 1, content: "토르입니다." });
  userState.data = {
    id: 1,
    name: "Thor",
  };
});
