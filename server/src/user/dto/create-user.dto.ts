export class CreateUserDto {
  id: number;
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: 'Admin' | 'SimpleUser';
}
