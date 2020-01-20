import { User } from './user';
export interface AuthResponse {
  access_token: string;
  expires_in: number;
  user: User;
}
