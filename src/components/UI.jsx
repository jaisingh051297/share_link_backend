import React, { useState } from "react";
import axios from "axios";
import { Box,Button,Image,Text,useToast} from '@chakra-ui/react';
import './Ui.css';

const ErrorText = ({ children, ...props }) => (
  <Text fontSize="lg" color="red.300" mt='6' {...props} >
    {children}
  </Text>
);
const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];

function UI() {
  const toast = useToast();
  const [file, setFile] = useState(null);
  const [shortLink, setShortLink] = useState(null);
  const [error, setError] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setShortLink(null);
    setUploadedImage(null);
    console.log(file)
     if(file === null || file===''){
      setError('It should not be Empty Upload');
      return;
    }
    else if( !validFileTypes.find(type => type === file.type)) {
      setError('File must be in JPG/PNG format');
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post("https://short-link-backend.onrender.com/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setShortLink(response.data.shortLink);
      setUploadedImage(URL.createObjectURL(file));
      toast({
        title: 'Successfully Added Image',
        status: 'success',
        duration: 2500,
        position: 'top',
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(`https://short-link-backend.onrender.com/${shortLink}`);
  };

  return (
    <div className="Outer_area">
      <Box  p={10} border='1px dashed' borderColor='gray.200 doted '>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" id="file-input" onChange={handleFileInputChange} />
        </div>
        <Button variant='solid' colorScheme='green' fontSize="xl" mt='10' type="submit">Upload</Button>
      </form>
      </Box>
      {uploadedImage && <Image src={uploadedImage}  mt='10' alt="Uploaded file" />}
      {shortLink && (
        <div >
          <Box color='#f00' border='1px' borderColor='gray.200' mt='10'>
            <Button background={"blue.200"}>
            <a href={`https://short-link-backend.onrender.com/${shortLink}`} target="_blank" rel="noopener noreferrer">
              Share the link 
            </a>
            </Button>
            <Button onClick={handleCopyClick} m='6'>Copy</Button>
          </Box>
        </div>
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

export default UI;
