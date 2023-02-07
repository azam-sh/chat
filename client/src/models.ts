export type Contact = {
  id: number;
  name: string;
  lastname: string;
  image: string;
}

export type Message = {
  id?: number;
  recieverId: number;
  senderId: number;
  content: string;
}

export type User = {
  id: number;
  name: string;
  img: string;
}
