import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardRead from "../../components/";
import { fetchOne, FETCH_ONE } from "../../store/Board";
import * as api from "../../lib/api";
import { withRouter } from "react-router-dom";

const BoardReadContainer = ({ boardNo, history }) => {
  const dispatch = useDispatch();

  const { board, isLoading, myInfo } = useSelector(({ board, loading, auth }) => ({
    board: board.board,
    isLoading: loading[FETCH_ONE],
    myInfo: auth.myInfo,
  }));

  useEffect(() => {
    dispatch(fetchOne(boardNo));
  }, [dispatch, boardNo]);

  const onRemove = async () => {
    try {
      await api.removeBoard(boardNo, board.writer);

      alert("삭제가 완료되었습니다.");

      history.push("/board");
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

  return (
    <BoardRead
      board={board}
      isLoading={isLoading}
      boardNo={boardNo}
      onRemove={onRemove}
      myInfo={myInfo}
    />
  );
};

export default withRouter(BoardReadContainer);
