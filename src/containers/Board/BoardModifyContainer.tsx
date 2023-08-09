import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardModifyForm from "../../components/Board/BoardModifyForm";
import * as api from "../../lib/api";
import { fetchOne, FETCH_ONE } from "../../store/Board";

const BoardModifyContainer = ({ boardNo, history }) => {
  const dispatch = useDispatch();

  const { board, isLoading, myInfo } = useSelector(({ board, loading, auth }) => ({
    board: board.board,
    isLoading: loading[FETCH_ONE],
    myInfo: auth.myInfo,
  }));

  const onModify = async (boardNo, title, content, writer) => {
    try {
      await api.modifyBoard(boardNo, title, content, writer);

      alert("수정이 완료되었습니다.");

      history.push("/board/read/" + boardNo);
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

  useEffect(() => {
    dispatch(fetchOne(boardNo));
  }, [dispatch, boardNo]);

  return (
    <BoardModifyForm
      board={board}
      isLoading={isLoading}
      onModify={onModify}
      myInfo={myInfo}
    />
  );
};

export default withRouter(BoardModifyContainer);
