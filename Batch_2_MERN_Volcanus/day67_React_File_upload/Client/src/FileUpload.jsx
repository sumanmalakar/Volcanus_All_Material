import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:1000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      setUploadedFile(res.data.db.imgUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input type="file" onChange={onChange} />
          </div>
          <input type="submit" value="Upload" />
        </form>

        {uploadedFile && (
          <div>
            <img src={uploadedFile} alt="" style={{ width: "100%" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
