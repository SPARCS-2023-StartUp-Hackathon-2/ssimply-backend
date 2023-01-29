import {
  Paragraph,
  HorizontalPositionAlign,
  FrameAnchorType,
  VerticalPositionAlign,
  TextRun,
  AlignmentType,
  ShadingType,
} from 'docx';
import { SalaryCreateRequestDto } from '../../dtos/salary-create-request.dto';

import Newline from './Newline';

export default function Titlebox(dto: SalaryCreateRequestDto) {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: ' [별지 제11호]',
          font: {
            name: 'HY헤드라인M',
          },
          size: 24,
        }),
      ],
    }),
    new Paragraph({
      frame: {
        width: 13800,
        height: 1000,
        anchor: {
          horizontal: FrameAnchorType.TEXT,
          vertical: FrameAnchorType.TEXT,
        },
        position: {
          x: 100,
          y: 100,
        },
        alignment: {
          x: HorizontalPositionAlign.CENTER,
          y: VerticalPositionAlign.CENTER,
        },
      },
      alignment: AlignmentType.CENTER,
      shading: {
        fill: 'E5E5E5',
        type: ShadingType.CLEAR,
        color: 'E5E5E5',
      },
      border: {
        top: {
          color: 'auto',
          space: 1,
          value: 'single',
          size: 6,
        },
        bottom: {
          color: 'auto',
          space: 1,
          value: 'single',
          size: 6,
        },
        left: {
          color: 'auto',
          space: 1,
          value: 'single',
          size: 6,
        },
        right: {
          color: 'auto',
          space: 1,
          value: 'single',
          size: 6,
        },
      },
      children: [
        new TextRun({
          text: '「2022년 예비창업패키지」',
          font: {
            name: 'HY울릉도B',
          },
          size: 30,
        }),
        Newline,
        new TextRun({
          text: `${dto.yearMonth / 100}년  ${dto.yearMonth % 100}월분 급여대장`,
          font: {
            name: 'HY울릉도B',
          },
          size: 40,
        }),
      ],
    }),
  ];
}
