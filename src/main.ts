import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'http-exception.filter';
import rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(
    rateLimit({
      windowMs: 5 * 60 * 1000, // 5 minutes
      max: 500, // limit each IP to 500 requests per windowMs
      message: 'Você excedeu o limite de requisições, tente novamente após 5 minutos'
    })
  )

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  app.setGlobalPrefix('v1');

  const config = new DocumentBuilder()
    .setTitle('Books playlist - API')
    .setDescription('Api para você criar suas playlists de seus livros favoritos')
    .setVersion('1.0')
    .build();
  
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document());
  
  await app.listen(process.env.PORT ?? 7000);
}
bootstrap();
