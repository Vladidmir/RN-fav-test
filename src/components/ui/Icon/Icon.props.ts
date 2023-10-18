export type IconNames =
  | 'Heart'
  | 'HeartFill'
  | 'Search'
  | 'NavigateNext'
  | 'NavigatePrev';

export type Props = {
  name: IconNames;
  color: string;
  size: number;
  stroke?: string;
};
