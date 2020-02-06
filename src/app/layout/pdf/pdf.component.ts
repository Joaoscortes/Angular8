import { Component, OnInit } from '@angular/core';

import html2canvas from 'html2canvas';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  title = 'PdfExample';
  faFilePdf = faFilePdf;

  constructor() {
    const pdfMakeBuilder = pdfMake;
    pdfMakeBuilder.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit() { }

  generatePdf() {
    const opt = { letterRendering: 1, allowTaint: true, imageTimeout: 10000, onrendered: (canvas) => { } };
    html2canvas(document.querySelector('#capture'), opt).then(canvas => {
      const img = canvas.toDataURL();
      const documentDefinition = {
        content: {
          image: img,
          width: 520
        }
      };
      pdfMake.createPdf(documentDefinition).open();
    });
  }

  generatePdfTableData() {
    const documentDefinition = {
      content: [
        'Bulleted list example:',
        {
          // to treat a paragraph as a bulleted list, set an array of items under the ul key
          ul: [
            'Item 1',
            'Item 2',
            'Item 3',
            { text: 'Item 4', bold: true },
          ]
        },

        'Numbered list example:',
        {
          // for numbered lists set the ol key
          ol: [
            'Item 1',
            'Item 2',
            'Item 3'
          ]
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }
}
