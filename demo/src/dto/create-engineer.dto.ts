import { ApiProperty } from '@nestjs/swagger';

export class CreateEngineerDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    experience: number;
    @ApiProperty()
    favoriteTool: string;
    @ApiProperty()
    flakinessLevel: number
}
