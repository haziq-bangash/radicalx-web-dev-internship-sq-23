import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "./App.css";

import { Sidebar, Internships, Dashboard, Apprentices, Jobs, Settings } from "./components/index";

import AddNew from "./components/internships/add-new/add_new";

function App() {
  return (
    <Wrapper className="App container-fluid p-3 bg-light">
      <Router>
        <Sidebar />
        {/* <Internships /> */}
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/apprentices" element={<Apprentices />}></Route>
          <Route exact path="/internships" element={<Internships />}></Route>
          <Route exact path="/jobs" element={<Jobs />}></Route>
          <Route exact path="/settings" element={<Settings />}></Route>
          <Route exact path="/internship/add" element={<AddNew />}></Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  column-gap: 30px;
`;
