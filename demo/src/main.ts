import { NestFactory } from '@nestjs/core';
import { AqaEngineerModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AqaEngineerModule);
  const config = new DocumentBuilder()
      .setTitle('AQA Engineer')
      .setDescription('Demo AQA Engineer')
      .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: 'json',
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
