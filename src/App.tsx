import React from "react";
import "./App.css";
import { Provider as ReduxProvider } from "react-redux";
import {DndProvider} from 'react-dnd'
import { BrowserRouter } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
//import {AuthProvider} from './contexts'
import { useStore } from "./store";
import PageRouters from "./routes/PageRoutes";

function App() {
  const store = useStore();

  return (
    <>
      <ReduxProvider store={store}>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <PageRouters/>
          </BrowserRouter>
        </DndProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
