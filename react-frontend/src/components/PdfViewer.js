import React, { useEffect, useState, useRef } from "react";
// Import the main component
// Import the styles
// Worker
import { Document, Page, pdfjs } from 'react-pdf';
import Container from '@mui/material/Container';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const PdfViewer = ({pdfFile, handleSendPdf}) => {  
  useEffect(() => { pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;});
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({numPages}) => {
    setNumPages(numPages);
  }

  const handlePageLeft = () => {
    setPageNumber(pageNumber - 1)
  }
  
  const handlePageRight = () => {
    setPageNumber(pageNumber + 1)
  }
  
  return (
    <div className="w-full flex flex-col items-center justify-center">
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}
        pageLayout="oneColumn">
            <Page pageNumber={pageNumber} 
            renderAnnotationLayer={false}
            renderTextLayer={false}/>
        </Document>
        <div className="flex flex-row">
          <KeyboardDoubleArrowLeftIcon onClick={pageNumber==1?null:handlePageLeft}/>
          <p>
              Page {pageNumber} of {numPages}
          </p>
          <KeyboardDoubleArrowRightIcon onClick={pageNumber==numPages?null: handlePageRight}/>
        </div>
        <button className="btn p-4 mt-4 rounded-3xl bg-blue-400" 
                onClick={handleSendPdf}>
          <div className="bg-gradient-to-r bg-clip-text text-transparent 
            from-white to-orange-400 animate-text">
            <p className="text-xl font-bold">
              PARSE PDF
            </p>
          </div>
        </button>
    </div>
  );
};

export default PdfViewer;
