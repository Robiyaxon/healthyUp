import React, { useRef } from "react";
import otherAccount from '../../../assets/login/otherAccount.webp'

const UploadImg = ({setImg, setPassword}) => {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    console.log(e.target.files);
    setImg(e.target.files);
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
      setImg(file)
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "auto",
          width: "130px",
          cursor:"pointer"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "acsolute"
          }}
          src={otherAccount}
          alt='rasm bor edi!'
        />
      </div>
    </div>
  );
}

export default UploadImg