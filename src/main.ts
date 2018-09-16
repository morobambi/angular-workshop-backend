import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);

    const options = new DocumentBuilder()
        .setTitle('Users API')
        .setDescription('The users API description')
        .setVersion('1.0')
        .addTag('users')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);

    await app.listen(3000);
}
bootstrap();
