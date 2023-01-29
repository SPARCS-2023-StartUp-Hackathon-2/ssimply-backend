import {
  TableCell,
  TableRow,
  WidthType,
  Paragraph,
  TextRun,
  AlignmentType,
  HeightRule,
} from 'docx';

export default [
  new TableRow({
    /* 파랑 1 */ height: { value: 400, rule: HeightRule.EXACT },
    children: [
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '사원번호',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '성명',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '기본급',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '식대',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '연금보험',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '건강보험',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1300,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '정기요양보험',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '고용보험',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '소득세',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
    ],
  }),
  new TableRow({
    /* 파랑 2 */ height: { value: 500, rule: HeightRule.EXACT },
    children: [
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '입사일',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '직급',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '지방소득세',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '농특세',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '주민세',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '산재보험',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '공제합계',
                bold: true,
              }),
            ],
          }),
        ],
      }),
    ],
  }),
  new TableRow({
    /* 파랑 3 */ height: { value: 500, rule: HeightRule.EXACT },
    children: [
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '퇴사일',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '부서',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '임금합계',
                bold: true,
              }),
            ],
          }),
        ],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [],
      }),
      new TableCell({
        shading: {
          fill: 'A0BEE0',
        },
        width: {
          size: 1070,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '차인지금액',
                bold: true,
              }),
            ],
          }),
        ],
      }),
    ],
  }),
];
