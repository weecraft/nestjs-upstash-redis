import { DynamicModule, Module } from '@nestjs/common'
import {
  UpstashRedisModuleAsyncOptions,
  UpstashRedisModuleOptions,
} from './redis.interface'
import { UpstashRedisCoreModule } from './redis-core.module'

@Module({})
export class UpstashRedisModule {
  static forRoot(options?: UpstashRedisModuleOptions): DynamicModule {
    return {
      module: UpstashRedisModule,
      imports: [UpstashRedisCoreModule.forRoot(options)],
    }
  }

  static forRootAsync(options: UpstashRedisModuleAsyncOptions): DynamicModule {
    return {
      module: UpstashRedisModule,
      imports: [UpstashRedisCoreModule.forRootAsync(options)],
    }
  }
}
