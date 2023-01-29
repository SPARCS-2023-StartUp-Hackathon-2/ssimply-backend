import {
  TableCell,
  TableRow,
  WidthType,
  Paragraph,
  TextRun,
  AlignmentType,
  HeightRule,
} from 'docx';

export interface TitleTableInterface {
  companyName: string;
  belonging: {
    year: number;
    month: number;
  };
  given: {
    year: number;
    month: number;
    day: number;
  };
  amount: number;
}

export default function TitleTable(content: TitleTableInterface) {
  return [
    new TableRow({
      /* 회사명 등 */
      height: {
        value: 400,
        rule: HeightRule.EXACT,
      },

      children: [
        new TableCell({
          columnSpan: 4,
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `회사명: ${content.companyName}`,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          columnSpan: 4,
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `[귀속: ${content.belonging.year}년 ${content.belonging.month}월]`,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          columnSpan: 3,
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `[지급: ${content.given.year}년 ${content.given.month}월 ${content.given.day}일]`,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          columnSpan: 2,
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `${content.amount} (단위: 원)`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new TableRow({
      /* 인적사항 등 */
      height: { value: 400, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          columnSpan: 2,
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: '인적사항',
                  bold: true,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          columnSpan: 5,
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: '기본급여 및 재수당',
                  bold: true,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          columnSpan: 6,
          width: {
            size: 1070,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: '공제 및 차인지급액',
                  bold: true,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ];
}
