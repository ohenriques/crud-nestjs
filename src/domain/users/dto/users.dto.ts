import { ApiProperty } from '@nestjs/swagger';
export class UsersDTO {

    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    creationDate: Date;
}