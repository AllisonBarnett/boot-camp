export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: viewDetails[];
}

export interface viewDetails {
  age: number;
  region: string;
  date: string;
}
