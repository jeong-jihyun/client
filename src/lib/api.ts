import client from "./client";
export const fetchBoard = (boardNo:string) => client.get(`/boards/${boardNo}`);
export const fetchBoardList = () => client.get("/boards");
export const modifyBoard = (boardNo:number, title:string, content:string, writer:string) => client.put(`/boards/${boardNo}`, { title, content, writer });
export const writeBoard = (title:string, content:string) => client.post("/boards", { title, content });
export const removeBoard = (boardNo:number, writer:string) => client.delete(`/boards/${boardNo}?writer=${writer}`);