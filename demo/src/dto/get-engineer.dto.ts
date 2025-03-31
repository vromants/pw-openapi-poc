import { ApiProperty, ApiSchema } from '@nestjs/swagger';

export class GetEngineerDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    experience: number; // Years of experience
    @ApiProperty()
    favoriteTool: string;
    @ApiProperty()
    flakinessLevel: number; // Scale from 1 to 10
    @ApiProperty()
    isActive: boolean;
}
