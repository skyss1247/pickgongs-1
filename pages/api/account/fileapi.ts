import formidable from "formidable";
import FormData from "form-data";
import fs from "fs";
import axios from "axios";

export const config = {
  api: {
    bodyParser: false,
  }
};

export default async function (req:any, res:any) {
  const url = "localhost:3000";
  try {
    if (req.method === "POST") {
      // file 업로드 처리
      const {fileData, fields} = await new Promise((resolve, reject) {
        const form = new formidable.IncomingForm({
          maxFiles: 5 * 1024 * 1024,  // 최대 파일 크기 지정
          keepExtension: true,
        });
        
        form.parse(req, (error, fields, files) => {
          if (error) return reject(error);
          return resolve({
            fileData: files,
            fields: fields,
          });
        });
      });
      
      const formData = new FormData();
      const image = fileData.image; // 업로드된 파일의 post 항목의 이름이 image 임.
      const readStream = fs.createReadStream(image.filepath);  // 업로드된 파일을 버퍼로 읽음
      
      formData.append("image", readStream); // formData에 읽은 파일을 추가함
      for (const key in fields) {
        // 다른 필드가 있으면 역시 formData에 추가
        formData.append(key, fields[key]);
      }
      
      // 데이터를 처리할 서버로 데이터를 다시 전달
      const result = await axios.post(url, formData);
      res.status(200).json(result);
    } else {
      // 지원하지 않는 http method에 대한 예외처리
      res.statue(200).json({
        result: false,
        message: `Do not support to ${req.method}`;
      });
    }
  } catch (error) {
    res
      .status(error.response?error.response.status : 500)
      .send(error.response ? error.response.data : error.message);
  }
}