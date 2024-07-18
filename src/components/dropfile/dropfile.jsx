import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./dropfile.module.css";
import QRCode from 'qrcode';

export const Dropfile = () => {
  const dropZoneRef = useRef(null);
  const copyLinkRef = useRef(null);
  const [isDragged, setIsDragged] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const [qrCodeSrc, setQrCodeSrc] = useState('');

  useEffect(() => {
    const dropZone = dropZoneRef.current;

    const handleDragOver = (e) => {
      e.preventDefault();
      setIsDragged(true);
    };

    const handleDragLeave = () => {
      setIsDragged(false);
    };

    const handleDrop = (e) => {
      e.preventDefault();
      setIsDragged(false);
      const droppedFiles = e.dataTransfer.files;
      if (droppedFiles.length > 0) {
        const file = droppedFiles[0];
        uploadFile(file);
      }
    };

    const preventDefault = (e) => {
      e.preventDefault();
    };

    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("dragleave", handleDragLeave);
    dropZone.addEventListener("drop", handleDrop);
    document.addEventListener("dragover", preventDefault);
    document.addEventListener("drop", preventDefault);

    return () => {
      dropZone.removeEventListener("dragover", handleDragOver);
      dropZone.removeEventListener("dragleave", handleDragLeave);
      dropZone.removeEventListener("drop", handleDrop);
      document.removeEventListener("dragover", preventDefault);
      document.removeEventListener("drop", preventDefault);
    };
  }, []);

  const uploadFile = (file) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "filefly_upload_preset");

    xhr.open("POST", `https://api.cloudinary.com/v1_1/dft4hagr4/upload`, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        showLink(response.secure_url);
      } else {
        console.error("File upload failed:", xhr.statusText);
      }
    };

    xhr.onerror = () => {
      console.error("Network error occurred during file upload.");
    };

    xhr.send(formData);
  };

  const showLink = (url) => {
    setFileUrl(url);
    generateQRimage(url);
  };

  const generateQRimage = async (url) => {
    try {
      const qrCode = await QRCode.toDataURL(url);
      setQrCodeSrc(qrCode);
    } catch (error) {
      console.error("QR Code generation failed:", error);
    }
  };

  const handleCopy = () => {
    if (copyLinkRef.current) {
      copyLinkRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <section className={styles.container}>
      {fileUrl ? (
        <>
          <div className={styles.sendBox}>
            <div className={styles.linkBox}>
              <p className={styles.expireMsg}>Link expires in 24hrs</p>
              <div className={styles.link}>
                <input
                  type="text"
                  id={styles.fileURL}
                  readOnly
                  ref={copyLinkRef}
                  value={fileUrl}
                  onClick={handleCopy}
                />
                <img
                  className={styles.copyIcon}
                  src="./copy-icon.svg"
                  alt="copy-icon"
                  onClick={handleCopy}
                />
              </div>
            </div>
            <div className="qrImg">
              {qrCodeSrc && <img src={qrCodeSrc} id={styles.qrImg} alt="QR Code" />}
            </div>
          </div>
          <div className={styles.content}></div>
        </>
      ) : (
        <div className={styles.content}>
          <div className={`${styles.overlay} ${isDragged ? styles.dragged : ''}`} ref={dropZoneRef}>
            <div className={styles.iconContainer}>
              <img src="./drop-box-icon.svg" className={styles.icon} alt="drop-box-icon" draggable="false" />
            </div>
            <div className="drop-text">Drop your file here</div>
          </div>
          <div className={styles.browseFile}>
            <label htmlFor="fileinput" className="custom-file-upload">
              Or <span className={styles.browseBtn}>Browse</span>
            </label>
            <input
              type="file"
              id="fileinput"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  uploadFile(e.target.files[0]);
                }
              }}
              style={{ display: 'none' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
