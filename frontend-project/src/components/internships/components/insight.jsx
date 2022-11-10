import React from "react";
import styled from "styled-components";
// import "../../../App.css";
import Chart from './chart'

const insight = () => {
  return (
    <Wrapper className="p-2">
      <Desc className="bg-light p-3">
        <h4 style={{ 'font-size' : '1.1rem' }} >Internship Insight</h4>
        <p style={{ 'font-size' : '0.9rem' }}>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic.
        </p>
      </Desc>
      <ChartDiv>
        <Chart /> 
      </ChartDiv>
    </Wrapper>
  );
};

export default insight;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 10px;
  background-color: white;
  border-radius: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Desc = styled.div`
  border-radius: 16px;
`;

const ChartDiv = styled.div`
`;
