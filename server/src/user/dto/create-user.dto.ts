export class CreateUserDto {
  id: number;
  firsName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: 'Admin' | 'SimpleUser';
}
