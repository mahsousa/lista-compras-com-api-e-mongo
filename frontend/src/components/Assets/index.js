import React from "react";
import * as C from "./style";
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfLayout from "../PdfLayout"

import {
  AiFillPrinter,
} from "react-icons/ai";

function Assets({data}) {
  console.log('Assets', data);
  return (
    <>
      <C.Container>
        <PDFDownloadLink document={<PdfLayout data={data} />} fileName="somename.pdf">
          {({ loading }) =>
            loading ? 'Loading document...' : ''
          }
          <AiFillPrinter style={{
            color: "#215581",
            height: '40px',
            width: '40px',
            padding:'5px'
          }} />
        </PDFDownloadLink >
      </C.Container>
    </>
  )

}

export default Assets;