import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {UserModule} from './user/user.module';

@Module({
  imports: [
      UserModule,
  ],
  controllers: [],
  providers: [],
})
export class ApplicationModule implements NestModule {

    configure(consumer: MiddlewaresConsumer): void {
    }
}
