import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components'

const topbar = () => {
  return (
    <Wrapper className='container-fluid py-3' >
        <Options className='py-2 px-4 fw-bold text-secondary montserrat d-flex align-items-center' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span className='px-2' >Back</span>
        </Options>
        <Title>
            <h3 className='montserrat text-dark' >Add New Internship</h3>
        </Title>
        <Options>
            <button className='btn btn-light d-flex align-items-center text-muted' >
                Continue to Next Step
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
        </Options>
    </Wrapper>
  )
}

export default topbar

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 1rem;
    // box-shadow: 26px 31px 72px -30px rgba(82,78,78,1);
    // -webkit-box-shadow: 26px 31px 72px -30px rgba(82,78,78,1);
    // -moz-box-shadow: 26px 31px 72px -30px rgba(82,78,78,1);
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
      }
`

const Options = styled.div`

`

const Title = styled.div`

`