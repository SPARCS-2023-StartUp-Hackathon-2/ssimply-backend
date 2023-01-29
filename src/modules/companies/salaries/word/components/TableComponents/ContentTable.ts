import {
  TableCell,
  TableRow,
  WidthType,
  Paragraph,
  TextRun,
  AlignmentType,
  HeightRule,
} from 'docx';

export interface ContentTableInterface {
  '0-0': number;
  '0-1': string;
  '0-2': number;
  '0-3': number;
  '0-7': number;
  '0-8': number;
  '0-9': number;
  '0-10': number;
  '0-11': number;
  '1-0': string;
  '1-12': number;
  '2-7': number;
  '2-12': number;
}

export default function ContentTable(content: ContentTableInterface) {
  return [
    new TableRow({
      /* 인당 1 */ height: { value: 500, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['0-0'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['0-1'],
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['0-2'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['0-3'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          shading: {
            fill: 'E5E5E5',
          },
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['0-7'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['0-8'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['0-9'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['0-10'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['0-11'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          shading: {
            fill: 'E5E5E5',
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
      /* 인당 2 */ height: { value: 500, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['1-0'],
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          shading: {
            fill: 'E5E5E5',
          },
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          shading: {
            fill: 'E5E5E5',
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
                  text: content['1-12'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new TableRow({
      /* 인당 3 */ height: { value: 500, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          shading: {
            fill: 'E5E5E5',
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
                  text: content['2-7'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          shading: {
            fill: 'E5E5E5',
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
                  text: content['2-12'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ];
}
