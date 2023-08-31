import { useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import('react-quill'), { ssr: false })
 

const WysiwygEditor = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleContentChange} />
    </div>
  );
};

export default WysiwygEditor;
