import { Inject, Injectable } from '@nestjs/common'
import { Redis } from '@upstash/redis'
import { UPSTASH_REDIS_MODULE_OPTIONS } from './redis.constant'
import { UpstashRedisModuleOptions } from './redis.interface'

@Injectable()
export class UpstashRedisService extends Redis {
  constructor(
    @Inject(UPSTASH_REDIS_MODULE_OPTIONS)
    private readonly options: UpstashRedisModuleOptions,
  ) {
    if (!(options && options.token && options.url)) {
      return
    }

    super(options)
  }
}
