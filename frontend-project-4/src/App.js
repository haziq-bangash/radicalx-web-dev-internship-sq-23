import './App.css';
import { Topbar, Flow, Modules } from './components/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

function App() {
  return (
    <Wrapper className='bg-light' >
      <Topbar />
      <Flow />
      <Modules />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  row-gap: 20px;
  grid-template-columns : 1fr;
`

