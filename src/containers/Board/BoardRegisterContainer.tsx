import React from "react";
import BoardRegisterForm from "../../components/Board/BoardRegisterForm";
import * as api from "../../lib/api";
import { withRouter } from "react-router-dom";

const BoardRegisterContainer = ({ history }) => {
  const onRegister = async (title, content) => {
    try {
      const response = await api.writeBoard(title, content);

      alert("등록이 완료되었습니다.");

      history.push("/board/read/" + response.data.boardNo);
    } catch (e) {
      if (e.response.status === 400) {
        alert("잘못된 요청입니다.");
      } else if (e.response.status === 401) {
        alert("로그인이 필요합니다.");
        history.push("/signin");
      } else if (e.response.status === 403) {
        alert("접근 권한이 없습니다.");
        history.goBack();
      } else {
        alert(e.response.data.message);
      }
    }
  };

  return <BoardRegisterForm onRegister={onRegister} />;
};

export default withRouter(BoardRegisterContainer);
