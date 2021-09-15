import { INamedResource } from './INamedResource';

export interface INamedResourceList {
  count: number;
  next?: string;
  previous?: boolean;
  results: INamedResource[];
}
