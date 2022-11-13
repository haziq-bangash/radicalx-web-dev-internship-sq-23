import {useEffect, useState} from 'react';
import styled from 'styled-components'
import { Category, Description, Location, Benefits, IntroVideo, MentorDetails, RecommendedRoles, Resources } from './components/index'

const options = [
    {
        'name' : 'Category',
        'component' : 'Category',
    },
    {
        'name' : 'Description',
        'component' : 'Description',
    },
    {
        'name' : 'Location',
        'component' : 'Location',
    },
    {
        'name' : 'Benefits',
        'component' : 'Benefits',
    },
    {
        'name' : 'Intro Video',
        'component' : 'IntroVideo',
    },
    {
        'name' : 'Mentor Details',
        'component' : 'MentorDetails',
    },
    {
        'name' : 'Recommended Roles',
        'component' : 'RecommendedRoles',
    },
    {
        'name' : 'Web Links & Resources',
        'component' : 'Resources',
    },
]

const Modules = () => {
  const [slot, setSlot] = useState("Category");
  return (
    <Wrapper className='row' >
        <Module className='col-12 col-md-6 mb-3'>
            {options.map(function(option, index){
                return (
                    <ModuleItem onClick={() => setSlot(option.component)} key={index} className='my-2 p-2' >
                        <h6>{option.name}</h6>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg></div>
                    </ModuleItem>
                )
            })}
            <AddModuleItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#793ef5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <span className='px-2' >Add More</span>
            </AddModuleItem>
        </Module>
        <ModuleContent className='col-12 col-md-6 mb-3' >
            {slot === "Category" && <Category />}
            {slot === "Description" && <Description />}
            {slot === "Benefits" && <Benefits />}
            {slot === "Location" && <Location />}
            {slot === "IntroVideo" && <IntroVideo />}
            {slot === "MentorDetails" && <MentorDetails />}
            {slot === "RecommendedRoles" && <RecommendedRoles />}
            {slot === "Resources" && <Resources />}
        </ModuleContent>
    </Wrapper>
  )
}
export default Modules

const Wrapper = styled.div`
@media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Module = styled.div`

`

const ModuleItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: white;
        background-color: #793ef5;
        cursor: pointer;
    }
`

const AddModuleItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 1rem;
    border: 1px dashed #793ef5;
    color: #793ef5;
    padding: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #793ef5;
        color: white;
        border-color: #fff;
        cursor: pointer;
        &:svg {
            stroke: white;
        }
    }
`

const ModuleContent = styled.div`

`