import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BoardModifyForm({
  board,
  isLoading,
  onModify,
  myInfo,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let isOwn = false;
  if(myInfo && board) {
    if(myInfo.userId === board.writer) {
      isOwn = true;
    }
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onModify(board.boardNo, title, content, board.writer);
  };

  useEffect(() => {
    if(board) {
      setTitle(board.title);
      setContent(board.content);
    }
  }, [board]);

  return (
    <div align="center">
      <h2>게시판 수정</h2>
      {isLoading && "로딩중..."}
      {!isLoading && board && (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>번호</td>
                <td>
                  <input value={board.boardNo} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>등록일시</td>
                <td>
                  <input value={board.regDate} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>제목</td>
                <td>
                  <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                  />
                </td>
              </tr>
              <tr>
                <td>작성자</td>
                <td>
                  <input type="text" value={board.writer} disabled />
                </td>
              </tr>
              <tr>
                <td>내용</td>
                <td>
                  <textarea
                    value={content}
                    rows="5"
                    onChange={handleChangeContent}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            {isOwn && (
              <button type="submit">수정</button>
            )}
            <Link to={`/board/read/${board.boardNo}`}>취소</Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default BoardModifyForm;
