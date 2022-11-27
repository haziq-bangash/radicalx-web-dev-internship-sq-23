import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import styled from "styled-components";
import "../../App.css";

import Insight from './components/insight'
import Table from './table/table'

const internships = () => {
  return (
    <Wrapper className="py-5">
      <TitleDiv className="pb-3" >
        <Title>
          <h1 className="display-6 fs-2">Internships</h1>
        </Title>
        <CreateNew>
          <NavbarLink to="/internship/add">
            <CreateNewBtn>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4917 10H13.3334"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66663 10H9.84163"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 13.3332V6.6665"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.66663 10.8665V12.4998C1.66663 16.6665 3.33329 18.3332 7.49996 18.3332H12.5C16.6666 18.3332 18.3333 16.6665 18.3333 12.4998V7.49984C18.3333 3.33317 16.6666 1.6665 12.5 1.6665H7.49996C3.33329 1.6665 1.66663 3.33317 1.66663 7.49984"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Create New Internship
            </CreateNewBtn>
          </NavbarLink>
        </CreateNew>
      </TitleDiv>
      <InsightDiv>
        <Insight />
      </InsightDiv>
      <TableDiv>
        <Table />
      </TableDiv>
    </Wrapper>
  );
};

export default internships;

const Wrapper = styled.div`
display : grid;
grid-template-columns: 1fr;
row-gap: 10px;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div``;

const CreateNew = styled.div``;

export const NavbarLink = styled(Link)`
color: inherit;
font-size: inherit;
font-family: inherit;
text-decoration: none;
`

const CreateNewBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;

  background: #793ef5;
  border-radius: 12px;
  color: #ffffff;
  border: 1px solid #ffffff;
  font-size : 0.9rem;

  flex: none;
  order: 1;
  flex-grow: 0;

  transition : all 0.2s ease-in-out;

  &:hover {
    background: #4916b5;
  }
`;


const InsightDiv = styled.div`

`;

const TableDiv = styled.div`

`;