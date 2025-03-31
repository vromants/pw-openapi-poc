import { Injectable } from '@nestjs/common';
import { AqaEngineer } from './entity/aqa-engineer.entity';

@Injectable()
export class AqaEngineerService {
    private engineers: AqaEngineer[] = [];

    create(engineer: AqaEngineer) {
        this.engineers.push(engineer);
        return engineer;
    }

    createRandom(engineers: Omit<AqaEngineer, 'id'>[]) {
        this.engineers.push(...engineers as AqaEngineer[]);
        return this.engineers;
    }

    findAll() {
        return this.engineers;
    }

    findOne(id: string) {
        return this.engineers.find((e) => e.id === id);
    }

    update(id: string, updateData: Partial<AqaEngineer>) {
        const engineer = this.findOne(id);
        if (engineer) {
            Object.assign(engineer, updateData);
            return engineer;
        }
        return null;
    }

    remove(id: string) {
        this.engineers = this.engineers.filter((e) => e.id !== id);
        return { message: 'Engineer removed' };
    }
}
