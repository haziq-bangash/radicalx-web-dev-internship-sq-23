import React, { useRef, useState } from "react";
import styled from "styled-components";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
const KILO_BYTES_PER_BYTE = 1000;

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const MentorDetails = () => {

  const [url, setUrl] = useState();

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      setUrl(URL.createObjectURL(newFiles[0]));
      console.log('url: ' ,url);
      // callUpdateFilesCb(updatedFiles);
    }
  };
  // console.log(files);
  return (
    <Wrapper className="p-3">
      <h1 className="display-6">Mentor Details</h1>
      <form className="py-2">
        <ImageContainer>
          <Image
                src={url ?? 'assets/bg.jpeg'}
                alt='pic'
              />
          <UploadComponent class="file-upload">
            <Upload
              type="file"
              accept=".jpg,.png,.jpeg"
              onChange={handleNewFileUpload}
            />
            <i class="fa fa-arrow-up"></i>
          </UploadComponent>
        </ImageContainer>
        <div class="row">
          <div class="col mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              aria-label="Name"
              id="name"
            />
          </div>
          <div class="col mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email Address"
              aria-label="Email"
              id="email"
            />
          </div>
          <div class="col-12 mb-3">
            <input
              type="text"
              class="form-control"
              id="linkedIn"
              placeholder="LinkedIn URL(optional)"
            />
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default MentorDetails;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
`;

const ImageContainer = styled.div`
  width: 100px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

const UploadComponent = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: relative;
  top: -15px;
  right: -15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #793ef5;
  overflow: hidden;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(50%, #793ef5),
    color-stop(50%, #ffffff)
  );
  background-image: linear-gradient(to bottom, #793ef5 50%, #ffffff 50%);
  background-size: 100% 200%;
  -webkit-transition: all 1s;
  transition: all 1s;
  color: #ffffff;
  font-size: 1.1rem;

  &:hover {
    background-position: 0 -100%;
    color: #793ef5;
  }
`;

const Upload = styled.input`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;
