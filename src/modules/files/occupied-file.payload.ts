import {
  OccupiedCoopType,
  OccupiedSalaryType,
  OccupiedService,
} from './files.enum';

export type OccupiedFilePayload = {
  service: OccupiedService;
  type: OccupiedCoopType | OccupiedSalaryType;
  to: number;
};
