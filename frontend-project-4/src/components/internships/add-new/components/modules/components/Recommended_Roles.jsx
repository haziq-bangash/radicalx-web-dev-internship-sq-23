import React from "react";
import styled from "styled-components"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();


const options = [
  { value: 'FullStack Developer', label: 'FullStack Developer' },
  { value: 'Frontend Developer', label: 'Frontend Developer' },
  { value: 'Backend Developer', label: 'Backend Developer' }
]

const RecommendedRoles = () => {
  return (
    <Wrapper className="p-3">
      <h1 className="display-6 fs-3">Recommended Roles</h1>
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

export default RecommendedRoles;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
`;
