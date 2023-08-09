import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardList from "../../components/Board/BoardList";
import { fetchList, FETCH_LIST } from "../../store/Board";
//import { isMember as hasRoleMember } from "../../store/selector";

const BoardListContainer = () => {
  const dispatch = useDispatch();

  const { boards, isLoading, isMember } = useSelector((state) => ({
    boards: state.board.boards,
    isLoading: state.loading[FETCH_LIST],
    //isMember: hasRoleMember(state),
  }));

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return <BoardList boards={boards} isLoading={isLoading} isMember={isMember} />;
};

export default BoardListContainer;
