import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import "./App.css";

import { Sidebar, Internships } from './components/index';
 
 function App() {
  return (
    <Wrapper className="App container-fluid p-3 bg-light">
      <Sidebar />
      <Internships />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width : 100%;
  display : grid;
  grid-template-columns : 1fr 4fr;
  column-gap: 30px;
`
