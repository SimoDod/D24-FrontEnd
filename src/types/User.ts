export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  username: string;
} & LoginData;

export type User = {
  token: string;
  _id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type AuthResponse = {
  token: string;
  user: User;
};
