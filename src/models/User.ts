export interface UserData {
  adm: number;
  created_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  name: string;
  roles: Array<[]>;
}

export interface CredentialsUser {
  email: string;
  password: string;
}
