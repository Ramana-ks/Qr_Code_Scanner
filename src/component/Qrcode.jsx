import React, { useState } from 'react';

const Qrcode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [size, setSize] = useState("200");

  // Generate QR Code from input
  const GenerateQr = async () => {
    if (!data) {
      alert("Please enter some data for the QR code.");
      return;
    }

    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        data
      )}&size=${size}x${size}`;
      setImg(url);
    } catch (error) {
      alert("Failed to generate QR code.");
    } finally {
      setLoading(false);
    }
  };

  // Download the QR Code image
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = img;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>QR CODE GENERATOR</h1>

      {loading && <p>Please wait...</p>}

      {img && <img src={img} alt="QR Code" style={{ marginTop: '20px' }} />}

      <div className="input" style={{ margin: '20px 0' }}>
        <label>Data for QR Code: </label>
        <input
          type="text"
          placeholder="Enter text or link"
          value={data}
          onChange={(e) => setData(e.target.value)}
          // style={{ margin: '10px', padding: '5px' }}
        />

        <label>Image Size (e.g., 150): </label>
        <input
          type="text"
          placeholder="Enter image size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          // style={{ margin: '10px', padding: '5px' }}
        />
      </div>

      <button className="btn1" onClick={GenerateQr} style={{ marginRight: '10px' }}>
        Generate QR Code
      </button>

      {img && (
        <button className="btn2" onClick={downloadImage}>
          Download QR Code
        </button>
      )}

      <div className="footer" >
      {/* // style={{ marginTop: '40px' }} */}
        <h3>
          <span>Designed By</span> Ramana
        </h3>
      </div>
    </div>
  );
};

export default Qrcode;
