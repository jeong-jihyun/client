import React from "react";
import BoardReadContainer from "../../containers/Board/BoardReadContainer";

import MainLayout from "../../layout/MainLayout";

function BoardReadPage({ match }) {
  const { boardNo } = match.params;

  return (
    <MainLayout>
      <BoardReadContainer boardNo={boardNo} />
    </MainLayout>
  );
}

export default BoardReadPage;
