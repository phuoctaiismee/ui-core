export type User = {
  id: string;
  name: string;
  email: string;
};

// REGISTER
export interface IRequestRegister {
  email: string;
  password: string;
}
export interface IResponRegister extends IResponseLogin {}

// LOGIN
export interface RequestLogin {
  email: string;
  password: string;
}
export interface IResponseLogin {
  user?: User;
  access_token: string;
  refresh_token: string;
}

export interface ResponseAuthWithToken extends IResponseLogin {}
