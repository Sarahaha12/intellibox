import React, { useRef, useState } from 'react';
import '../styles/Pages.css';

export default function EmailProcessing() {
  const fileInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [editableResponse, setEditableResponse] = useState(
    'Dear John, thank you for your update. We will get back to you shortly.'
  );

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="page-container">
      <div className="email-processing">
        <div className="upload-section">
          <h3>Drag & Drop Email Here</h3>
          <div
            className="drop-zone"
            onClick={handleClick}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            Click or Drag file here
          </div>
          <input
            type="file"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileSelect}
          />

          {selectedFile && (
            <div className="file-info">
              <p><strong>File Name:</strong> {selectedFile.name}</p>
              <p><strong>File Type:</strong> {selectedFile.type || 'Unknown'}</p>
            </div>
          )}

          <p>Status: Parsed</p>
        </div>

        <div className="output-section">
          <div className="output-box">
            <h4>Summary</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="output-box">
            <h4>Keywords</h4>
            <ul className="keywords-list">
              <li>update</li>
              <li>report</li>
              <li>meeting</li>
              <li>urgent</li>
            </ul>
          </div>

          <div className="output-box">
            <h4>Sentiment</h4>
            <p>Positive</p>
          </div>

          <div className="output-box">
            <h4>Suggested Response</h4>
            <textarea
              className="editable-response"
              value={editableResponse}
              onChange={(e) => setEditableResponse(e.target.value)}
              rows={8}
              placeholder="Edit the suggested response here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
