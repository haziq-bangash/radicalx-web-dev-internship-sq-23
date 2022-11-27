import React from "react";
import styled from "styled-components";

const Benefits = () => {
  return (
    <Wrapper className="p-3">
      <h1 className="display-6 fs-3 mb-3">Benefits</h1>
      <div class="form-floating">
        <textarea
          class="form-control bg-light"
          placeholder="Description"
          id="floatingTextarea2"
          style={{'height': '100px'}}
        ></textarea>
      </div>
    </Wrapper>
  );
};

export default Benefits;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
`;
