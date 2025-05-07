import { useState, type SetStateAction } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [file, setFile] = useState<Blob>();
  const [url, setUrl] = useState("");

  const handleChange = (e) => setUrl(e.target.value);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('text', url);

    try {
      const response = await axios.post("http://localhost:8000/upload", {'url2Process': url}, {
        headers: {
          'Content-Type': 'application/json',
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
