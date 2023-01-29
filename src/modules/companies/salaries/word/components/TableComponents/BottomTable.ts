import {
  TableCell,
  TableRow,
  Paragraph,
  TextRun,
  AlignmentType,
  HeightRule,
} from 'docx';

export interface BottomTableInterface {
  etc: string;
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
}

export default function BottomTable(content: BottomTableInterface) {
  return [
    new TableRow({
      height: {
        value: 500,
        rule: HeightRule.EXACT,
      },
      children: [
        new TableCell({
          columnSpan: 7,
          rowSpan: 3,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content.etc,
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          columnSpan: 6,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: '4대보험 회사 부담금',
                  bold: true,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new TableRow({
      height: {
        value: 500,
        rule: HeightRule.EXACT,
      },
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: '연금보험',
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: '건강보험',
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: '정기요양보험',
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: '고용보험',
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: '산재보험',
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: '합계',
                  bold: true,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new TableRow({
      height: {
        value: 500,
        rule: HeightRule.EXACT,
      },
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['A'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['B'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['C'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['D'].toString(),
                  font: '맑은 고딕',
                  size: 20,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['E'].toString(),
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
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: content['F'].toString(),
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
