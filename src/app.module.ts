import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ControllerModule } from './controller/controller.module';

@Module({
  imports: [
    PrismaModule,
    ControllerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
