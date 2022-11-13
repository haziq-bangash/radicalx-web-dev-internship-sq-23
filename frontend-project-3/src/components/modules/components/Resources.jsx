import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Resources = () => {
  const urlRef = useRef(null);
  const urlItemRef = useRef(null);
  const [urls, setUrls] = useState([]);

  // add new urls from input to urls hook
  const addNewUrl = () => {
    let url = urlRef.current.value;
    if(url == ''){
      urlRef.current.focus();
    }
    else{
      setUrls(oldUrls => [...oldUrls, url]);
      refresh(urls);
      // console.log(urls);
    }
  }

  // refresh urls on every new url added
  const refresh = (urls) => {
    return urls;
  }

  // remove url from urls hook
  const removeUrl = (event, key) =>{
    // console.log(event.target);
    // console.log('key index: ', key);
    // console.log('url index 1:', urls[1]);
    setUrls([
      ...urls.slice(0, key),
      ...urls.slice(key + 1)
    ]);
    refresh(urls);
    // console.log(urls);
  }

  // enable addNewUrl on enter key
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        addNewUrl();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <Wrapper className="p-3">
      <h1 className="display-6">Resources</h1>
      <div className="row g-3">
        <div class="col-10">
          <input
            type="text"
            class="form-control"
            id="addUrl"
            placeholder="Add URLs"
            ref={urlRef}
          />
        </div>
        <div className="col-2" >
          <Button type="button" className="btn btn-sm" onClick={addNewUrl} >Add</Button>
        </div>
      </div>
      <UrlContainer className="py-3" >
        {refresh(urls).map((url, index) => {
          return (
            <Item key={index} className='p-2' >
              <p>{url}</p>
              <i key={index} onClick={event => removeUrl(event, index)} ><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path stroke="none" fill="#793ef5" d="m8.4 17 3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6L17 8.4 15.6 7 12 10.6 8.4 7 7 8.4l3.6 3.6L7 15.6Zm3.6 5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/></svg></i>
            </Item>
          )
        })}
        <UrlBtn className="btn" onClick={() => { urlRef.current.focus() }} >Add URL</UrlBtn>
      </UrlContainer>
    </Wrapper>
  );
};

export default Resources;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
`;

const Button = styled.button`
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  background-color: white;
  border-color: #793ef5;
  color: #793ef5;

  &:hover {
    background-color: #793ef5;
    color: white;
  }
`;

const UrlContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  width: 100%;
`

const UrlBtn = styled.button`
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  background-color: white;
  border: 1px dashed #793ef5;
  color: #793ef5;

  &:hover {
    background-color: #793ef5;
    color: white;
  }
`

const Item = styled.li`
  list-style-type: none;
  border-radius: 1rem;
  padding: 5px;
  border: 1px solid #793ef5;
  color: #793ef5;
  display: flex;
  justify-content: space-between;
  align-items = center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #793ef5;
    color: white;
    cursor: pointer;
    & > i svg > path {
      fill: white;
    }
  }
`;