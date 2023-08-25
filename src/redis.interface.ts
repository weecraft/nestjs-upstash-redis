import { ModuleMetadata } from '@nestjs/common'
import { RedisConfigNodejs } from '@upstash/redis'

export type UpstashRedisModuleOptions = RedisConfigNodejs

export interface UpstashRedisModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  name?: string
  useFactory?: (
    ...args: any[]
  ) => Promise<UpstashRedisModuleOptions> | UpstashRedisModuleOptions
  inject?: any[]
}
