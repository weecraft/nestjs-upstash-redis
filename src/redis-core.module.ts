import { Global, Module, DynamicModule } from '@nestjs/common'
import { UpstashRedisService } from './redis.service'
import {
  UpstashRedisModuleAsyncOptions,
  UpstashRedisModuleOptions,
} from './redis.interface'
import { UPSTASH_REDIS_MODULE_OPTIONS } from './redis.constant'

@Global()
@Module({
  providers: [UpstashRedisService],
  exports: [UpstashRedisService],
})
export class UpstashRedisCoreModule {
  static forRoot(options: UpstashRedisModuleOptions): DynamicModule {
    const upstashRedisModuleOptions = {
      provide: UPSTASH_REDIS_MODULE_OPTIONS,
      useValue: options,
    }

    return {
      module: UpstashRedisCoreModule,
      providers: [upstashRedisModuleOptions],
      exports: [UpstashRedisService],
    }
  }

  static forRootAsync(options: UpstashRedisModuleAsyncOptions): DynamicModule {
    const upstashRedisModuleOptions = {
      provide: UPSTASH_REDIS_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    }

    return {
      module: UpstashRedisCoreModule,
      imports: options.imports,
      providers: [upstashRedisModuleOptions],
      exports: [UpstashRedisService],
    }
  }
}
