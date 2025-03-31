import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';


export class AqaEngineer {
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

    constructor(name: string, experience: number, favoriteTool: string, flakinessLevel: number) {
        this.id = uuidv4();
        this.name = name;
        this.experience = experience;
        this.favoriteTool = favoriteTool;
        this.flakinessLevel = flakinessLevel;
        this.isActive = false;
    }
}
