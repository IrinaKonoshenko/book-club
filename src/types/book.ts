export interface Review {
  name: string;
  rating: string;
  text: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;

  chosenBy: string;
  readDate: string;

  reviews: Review[];

  photos: string[];
}