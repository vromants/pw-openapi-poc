import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import  {AqaEngineerService} from './aqa-enginneer.service';
import { CreateEngineerDto } from './dto/create-engineer.dto';
import { GetEngineerDto } from './dto/get-engineer.dto';
import { AqaEngineer } from './entity/aqa-engineer.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { engineerFactory } from './factory/engineer.factory';

@ApiTags('AQA Engineers')
@Controller('aqa-engineers')
export class AqaEngineerController {
    constructor(private readonly service: AqaEngineerService) {}

    @Post()
    @ApiOperation({ summary: 'Create an AQA Engineer' })
    @ApiResponse({ status: 201, description: 'Engineer successfully created.' })
    @ApiBody({ type: [CreateEngineerDto] })
    create(@Body() body: CreateEngineerDto) {
        const engineer = new AqaEngineer(body.name, body.experience, body.favoriteTool, body.flakinessLevel);
        return this.service.create(engineer);
    }

    @Get('/list/:nth')
    @ApiOperation({ summary: 'Create count of AQA Engineer' })
    @ApiResponse({ status: 201, description: 'Engineer successfully created.' })
    createRandom(@Param('nth') nth: number) {
        const engineers = engineerFactory.buildList(nth)
        return this.service.createRandom(engineers);
    }

    @Get()
    @ApiOperation({ summary: 'Get all AQA Engineers' })
    @ApiResponse({ status: 200, description: 'List of engineers.', type: [GetEngineerDto] })
    findAll(): GetEngineerDto[] {
        return this.service.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get an AQA Engineer by ID' })
    @ApiResponse({ status: 200, description: 'Engineer found.', type: GetEngineerDto})
    @ApiResponse({ status: 404, description: 'Engineer not found.' })
    findOne(@Param('id') id: string) {
        return this.service.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update an AQA Engineer' })
    @ApiResponse({ status: 200, description: 'Engineer successfully updated.' , type: GetEngineerDto})
    @ApiResponse({ status: 404, description: 'Engineer not found.' })
    @ApiBody({ type: CreateEngineerDto })
    update(@Param('id') id: string, @Body() body: Partial<CreateEngineerDto>) {
        return this.service.update(id, body);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete an AQA Engineer' })
    @ApiResponse({ status: 204, description: 'Engineer successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Engineer not found.' })
    remove(@Param('id') id: string) {
        return this.service.remove(id);
    }
}
