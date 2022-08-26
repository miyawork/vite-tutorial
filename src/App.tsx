import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FirstPage } from "./pages/First";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage></FirstPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
