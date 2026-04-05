import React, { useState } from 'react';

export default function ExperimentBlock({ title, code, image }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Extract the file name from the image path for the download file name
  const fileName = image ? image.split('/').pop() : 'experiment-image';

  return (
    <div className="experiment-card">
      {/* Note: The image preview section has been completely removed! */}
      
      <div className="card-content">
        <h2>{title}</h2>
        
        <div className="button-group">
          <button 
            onClick={handleCopy} 
            className={`copy-btn ${copied ? 'copied' : ''}`}
          >
            {copied ? '✅ Copied!' : '📋 Copy Code'}
          </button>

          {/* 👇 The download button still shows up if there is an image attached 👇 */}
          {image && (
            <a href={image} download={fileName} className="download-btn">
              🖼️ Download Image
            </a>
          )}
        </div>

      </div>
    </div>
  );
}