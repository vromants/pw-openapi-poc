import { Module } from '@nestjs/common';
import {AqaEngineerService} from './aqa-enginneer.service';
import {AqaEngineerController} from './aqa-engineers.controller';

@Module({
  imports: [],
  controllers: [AqaEngineerController],
  providers: [AqaEngineerService],
})
export class AqaEngineerModule {}
