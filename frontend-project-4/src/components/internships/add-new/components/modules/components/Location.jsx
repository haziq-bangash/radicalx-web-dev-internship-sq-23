import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function Location() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [paginate, setpaginate] = useState(8);
  const refContent = useRef('');

  useEffect(() => {
    const request_headers = new Headers();
    const api_key = "VfBNQESiFcnnyeFPCTwKGScw0YJCCQcZ1RluQb23";
    request_headers.append("Authorization", `Bearer ${api_key}`);
    request_headers.append("Content-Type", "application/json");

    const request_options = {
      method: "GET",
      headers: request_headers,
    };

    fetch("https://countryapi.io/api/all", request_options)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setItems(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);

  const data = Object.values(items);

  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 8);
  };

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(items) {
    return items.filter((item) =>
      search_parameters.some((parameter) =>
        item[parameter].toString().toLowerCase().includes(query)
      )
    );
  }

  if (error) {
    return <>{error.message}</>;
  } else if (!loaded) {
    return <h1 className="display-6">loading...</h1>;
  } else {
    return (
      <Wrapper className="wrapper p-3">
        <h1 className="display-6">Location</h1>
        <div className="input-group mb-3">
          <label htmlFor="search-form" className="form-label">
            <input
              type="text"
              name="search-form"
              id="search-form"
              className="search-input form-control"
              placeholder="Search for Location..."
              onChange={(e) => setQuery(e.target.value)}
              ref={refContent}
            />
          </label>
        </div>
        <Container>
          {search(data)
            .slice(0, paginate)
            .map((item) => (
              <Item key={item.alpha3Code} onClick={() => refContent.current.value = item.name } >
                <article className="">
                  <div className="card-image">
                    <Image src={item.flag.large} alt={item.name} />
                  </div>
                  <div className="">
                    <p className="card-name">{item.name}</p>
                  </div>
                </article>
              </Item>
            ))}
            <Button onClick={load_more} className='btn btn-sm fw-bold' >Load More</Button>
        </Container>
      </Wrapper>
    );
  }
}

export default Location;

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  width: 100%;
`;

const Image = styled.img`
  width: 50px;
  height: 100%;
`;

const Item = styled.li`
  list-style-type: none;
  border-radius: 1rem;
  padding: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #793ef5;
    color: white;
    cursor: pointer;
  }
`;

const Button = styled.button`
border: 1px solid #793ef5;
color: #793ef5;
transition: all 0.2s ease-in-out;
border-radius: 1rem;
&:hover {
  background-color: #793ef5;
  color: white;
}
`
