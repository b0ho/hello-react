import React, { useReducer } from "react";

function reducerB(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducerB, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;
  const onChangeA = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChangeA} />
        <input name="nickname" value={nickname} onChange={onChangeA} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {state.name}
        </div>
        <div>
          <b>닉네임:</b>
          {state.nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
