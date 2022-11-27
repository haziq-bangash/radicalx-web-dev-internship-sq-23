import React from "react";
import styled from "styled-components"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();


const options = [
  { value: 'technology', label: 'Technology' },
  { value: 'development', label: 'Development' },
  { value: 'reactjs', label: 'Reactjs' }
]

const Category = () => {
  return (
    <Wrapper className="p-3">
      <h1 className="display-6 fs-3">Category</h1>
      <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      // defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={options}
    />
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
`;
