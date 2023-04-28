export interface Sneaker {
  modelName: string;
  brand: string;
  colorway: string;
  size: string;
  link?: string;
  pictures?: Array<string>;
  launchDate?: string;
  addToCalendar?: boolean;
}
