export class CreateUserDto {
    id: number;
    userName: string;
    phoneNumber: number; 
    email: string;
    password: string;
    role: 'Admin' |"SimpleUser"
}
