export type Contact = {
  id: number;
  name: string;
  lastname: string;
  img: string;
};
export type Message = {
  id: number;
  receiverId: number;
  senderId: number;
  content: string;
};
