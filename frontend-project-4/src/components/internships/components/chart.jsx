import React, { useState, useEffect, useRef, useCallback, useResize } from "react";
import styled from "styled-components";

import { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  const useResize = (myRef) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    
    const handleResize = useCallback(() => {
        setWidth(myRef.current.offsetWidth)
        setHeight(myRef.current.offsetHeight)
    }, [myRef])
  
    useEffect(() => {
      window.addEventListener('load', handleResize)
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('load', handleResize)
        window.removeEventListener('resize', handleResize)
      }
    }, [myRef, handleResize])
  
    console.log(width);
    return { width, height }
  }
  const componentRef = useRef()
  const { width, height } = useResize(componentRef)
  return (
    <Wrapper className="p-3">
      <Menu className="bg-light px-3 py-1">
        <div className="d-flex">
          <BtnPurple className="mx-1">This Week</BtnPurple>
          <BtnWhite className="mx-1">This Month</BtnWhite>
        </div>
        <div>
          <BtnWhite className="mx-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66663 4.2915C6.63648 4.2915 6.6052 4.27922 6.57955 4.25358C6.55391 4.22793 6.54163 4.19665 6.54163 4.1665V1.6665C6.54163 1.63636 6.55391 1.60508 6.57955 1.57943C6.6052 1.55379 6.63648 1.5415 6.66663 1.5415C6.69677 1.5415 6.72805 1.55379 6.7537 1.57943C6.77934 1.60508 6.79163 1.63636 6.79163 1.6665V4.1665C6.79163 4.19665 6.77934 4.22793 6.7537 4.25358C6.72805 4.27922 6.69677 4.2915 6.66663 4.2915Z"
                fill="#793EF5"
                stroke="#793EF5"
              />
              <path
                d="M13.3334 4.2915C13.3032 4.2915 13.2719 4.27922 13.2463 4.25358C13.2207 4.22793 13.2084 4.19665 13.2084 4.1665V1.6665C13.2084 1.63636 13.2207 1.60508 13.2463 1.57943C13.2719 1.55379 13.3032 1.5415 13.3334 1.5415C13.3635 1.5415 13.3948 1.55379 13.4204 1.57943C13.4461 1.60508 13.4584 1.63636 13.4584 1.6665V4.1665C13.4584 4.19665 13.4461 4.22793 13.4204 4.25358C13.3948 4.27922 13.3635 4.2915 13.3334 4.2915Z"
                fill="#793EF5"
                stroke="#793EF5"
              />
              <path
                d="M17.0833 7.70019H2.91663C2.88648 7.70019 2.8552 7.68791 2.82955 7.66227C2.80391 7.63662 2.79163 7.60534 2.79163 7.5752C2.79163 7.54505 2.80391 7.51377 2.82955 7.48812C2.8552 7.46248 2.88648 7.4502 2.91663 7.4502H17.0833C17.1134 7.4502 17.1447 7.46248 17.1704 7.48812C17.196 7.51377 17.2083 7.54505 17.2083 7.5752C17.2083 7.60534 17.196 7.63662 17.1704 7.66227C17.1447 7.68791 17.1134 7.70019 17.0833 7.70019Z"
                fill="#793EF5"
                stroke="#793EF5"
              />
              <path
                d="M13.3333 18.4582H6.66667C5.24074 18.4582 4.18404 18.0497 3.48376 17.3494C2.78348 16.6491 2.375 15.5924 2.375 14.1665V7.08317C2.375 5.65725 2.78348 4.60055 3.48376 3.90027C4.18404 3.19999 5.24074 2.7915 6.66667 2.7915H13.3333C14.7593 2.7915 15.816 3.19999 16.5162 3.90027C17.2165 4.60055 17.625 5.65725 17.625 7.08317V14.1665C17.625 15.5924 17.2165 16.6491 16.5162 17.3494C15.816 18.0497 14.7593 18.4582 13.3333 18.4582ZM6.66667 3.0415C5.40151 3.0415 4.36464 3.34892 3.64853 4.06503C2.93242 4.78115 2.625 5.81802 2.625 7.08317V14.1665C2.625 15.4317 2.93242 16.4685 3.64853 17.1846C4.36464 17.9008 5.40151 18.2082 6.66667 18.2082H13.3333C14.5985 18.2082 15.6354 17.9008 16.3515 17.1846C17.0676 16.4685 17.375 15.4317 17.375 14.1665V7.08317C17.375 5.81801 17.0676 4.78115 16.3515 4.06503C15.6354 3.34892 14.5985 3.0415 13.3333 3.0415H6.66667Z"
                fill="#793EF5"
                stroke="#793EF5"
              />
              <path
                d="M7.08333 12.0832C6.975 12.0832 6.86666 12.0582 6.76666 12.0165C6.66666 11.9749 6.57501 11.9165 6.49167 11.8415C6.41667 11.7582 6.35832 11.6665 6.31666 11.5665C6.27499 11.4665 6.25 11.3582 6.25 11.2498C6.25 11.0332 6.34167 10.8165 6.49167 10.6582C6.57501 10.5832 6.66666 10.5248 6.76666 10.4832C6.91666 10.4165 7.08334 10.3998 7.25001 10.4332C7.30001 10.4415 7.35 10.4582 7.4 10.4832C7.45 10.4998 7.5 10.5249 7.55 10.5582C7.59166 10.5915 7.63333 10.6249 7.67499 10.6582C7.70833 10.6999 7.74999 10.7415 7.77499 10.7832C7.80832 10.8332 7.83334 10.8832 7.85001 10.9332C7.87501 10.9832 7.89168 11.0332 7.90001 11.0832C7.90834 11.1415 7.91667 11.1915 7.91667 11.2498C7.91667 11.4665 7.82499 11.6832 7.67499 11.8415C7.51666 11.9915 7.3 12.0832 7.08333 12.0832Z"
                fill="#793EF5"
              />
              <path
                d="M9.99996 12.0832C9.78329 12.0832 9.56663 11.9916 9.4083 11.8416C9.37497 11.7999 9.34164 11.7582 9.3083 11.7166C9.27497 11.6666 9.24995 11.6166 9.23328 11.5666C9.20828 11.5166 9.19162 11.4666 9.18328 11.4166C9.17495 11.3582 9.16663 11.3082 9.16663 11.2499C9.16663 11.1416 9.19161 11.0332 9.23328 10.9332C9.27495 10.8332 9.3333 10.7416 9.4083 10.6582C9.64163 10.4249 10.0166 10.3499 10.3166 10.4832C10.425 10.5249 10.5083 10.5832 10.5916 10.6582C10.7416 10.8166 10.8333 11.0332 10.8333 11.2499C10.8333 11.3082 10.825 11.3582 10.8166 11.4166C10.8083 11.4666 10.7916 11.5166 10.7666 11.5666C10.75 11.6166 10.7249 11.6666 10.6916 11.7166C10.6583 11.7582 10.625 11.7999 10.5916 11.8416C10.5083 11.9166 10.425 11.9749 10.3166 12.0166C10.2166 12.0582 10.1083 12.0832 9.99996 12.0832Z"
                fill="#793EF5"
              />
              <path
                d="M7.08333 15.0002C6.975 15.0002 6.86666 14.9752 6.76666 14.9336C6.66666 14.8919 6.57501 14.8335 6.49167 14.7585C6.41667 14.6752 6.35832 14.5919 6.31666 14.4836C6.27499 14.3836 6.25 14.2752 6.25 14.1669C6.25 13.9502 6.34167 13.7336 6.49167 13.5752C6.57501 13.5002 6.66666 13.4419 6.76666 13.4002C7.075 13.2669 7.44166 13.3419 7.67499 13.5752C7.70833 13.6169 7.74999 13.6586 7.77499 13.7002C7.80832 13.7502 7.83334 13.8002 7.85001 13.8502C7.87501 13.9002 7.89168 13.9502 7.90001 14.0086C7.90834 14.0586 7.91667 14.1169 7.91667 14.1669C7.91667 14.3836 7.82499 14.6002 7.67499 14.7585C7.51666 14.9085 7.3 15.0002 7.08333 15.0002Z"
                fill="#793EF5"
              />
            </svg>
            Select Date
          </BtnWhite>
        </div>
      </Menu>
      <ChartDiv ref={componentRef}>
        <AreaChart
          width={500}
          height={150}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#4916b5" fill="#793ef5" />
        </AreaChart>
      </ChartDiv>
    </Wrapper>
  );
};

export default Chart;

const Wrapper = styled.div`
  background: transparent;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
`;
const BtnPurple = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 7px 12px;
  gap: 8px;

  background: #793ef5;
  border-radius: 12px;
  color: #ffffff;
  border: 1px solid #ffffff;
  font-size : 0.8rem;

  flex: none;
  order: 1;
  flex-grow: 0;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: #4916b5;
  }
`;
const BtnWhite = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 7px 12px;
  gap: 8px;

  background: #ffffff;
  border-radius: 12px;
  color: #793ef5;
  border: 1px solid #793ef5;
  font-size : 0.8rem;

  flex: none;
  order: 1;
  flex-grow: 0;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: #793ef5;
    color: #ffffff;
    & > svg > path {
      stroke: #ffffff;
    }
  }
`;

const ChartDiv = styled.div`
  background: transparent;
  padding : 15px auto;
`;
