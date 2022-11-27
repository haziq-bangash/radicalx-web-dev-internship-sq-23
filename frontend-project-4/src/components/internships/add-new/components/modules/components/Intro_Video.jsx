import React, { useState } from "react";
import styled from "styled-components";
import FileUpload from "./FileUpload";

function IntroVideo() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <Wrapper className='p-3' >
      <h1 className='display-6' >Intro Video</h1>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".mp4,.mov,.wmv,.flv,.avi,.mkv"
          label=""
          multiple
          updateFilesCb={updateUploadedFiles}
        />
        <Button className='btn btn-sm' type="submit">Add Video</Button>
      </form>
    </Wrapper>
  );
}

export default IntroVideo;

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