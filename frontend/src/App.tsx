import { useState, type SetStateAction } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [file, setFile] = useState<Blob>();
  const [url, setUrl] = useState("");

  const handleChange = (e) => setUrl(e.target.text[0]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('text', url);

    try {
      const response = await axios.post("http://localhost:8000/upload", url, {
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      alert('Uploaded File' + response.data);
    } catch (err){
      console.error(err);
      alert("Upload Failed");
    }
  };

  return (
    <>
      <div>
        <h1>Enter the URL you would like transcribed</h1>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </>
  )
}

export default App
