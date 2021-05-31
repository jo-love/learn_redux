import React from "react";
import { observable } from "mobx";
import { observer, useObserver } from "mobx-react";

// @observer- class 형
const App = () => {
    return useObserver(()=> (
        <div>
            이게 머선일이구
        </div>
    ))
};

export default App;
