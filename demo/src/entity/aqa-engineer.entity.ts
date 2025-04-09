import { v4 as uuidv4 } from 'uuid';


export class AqaEngineer {
    id: string;
    name: string;
    experience: number; // Years of experience
    favoriteTool: string;
    flakinessLevel: number; // Scale from 1 to 10
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
