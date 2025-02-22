import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Books playlist - API')
    .setDescription('Api para criação de playlists de livros pesquisando na API do Google Books')
    .setVersion('1.0')
    .build();
  
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document());
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
