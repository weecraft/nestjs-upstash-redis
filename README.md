# NestJS Upstash Redis

Wrapper for Upstash redis for NestJs

<!-- Shields -->

[![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=flat&logo=nestjs&logoColor=white)](https://nestjs.com/)
![GitHub contributors](https://img.shields.io/github/contributors/nyomansunima/nestjs-upstash-redis)
![GitHub language count](https://img.shields.io/github/languages/count/nyomansunima/nestjs-upstash-redis)
![GitHub issues](https://img.shields.io/github/issues/nyomansunima/nestjs-upstash-redis)
![GitHub](https://img.shields.io/github/license/nyomansunima/nestjs-upstash-redis)
![GitHub repo size](https://img.shields.io/github/repo-size/nyomansunima/nestjs-upstash-redis)

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Installation

```bash
npm install nestjs-upstash-redis
```

## 🤖 Getting Started

Before you start using this package, you need to have a Upstash account and a database set up. If you haven't already done this, head over to the [Upstash site](https://upstash.com) and follow their instructions to get started.

Once you have your Redis credentials, you can configure the package in your NestJS application.

### Configuration

In your NestJS application, create a `.env` file in the root directory and add your Redis secret key:

```dotenv
UPSTASH_REDIS_URL = your redis url
UPSTASH_REDIS_TOKEN = your redis account token
```

Make sure to load the `.env` file using a package like `@nestjs/config` in your application's app module file.

### Module Registration

Register the Upstash Redis module in your NestJS application. Import the `UpstashRedisModule` and pass in the configuration options:

```typescript
import { Module } from '@nestjs/common'
import { UpstashRedisModule } from 'nestjs-upstash-redis'

@Module({
  imports: [
    UpstashRedisModule.forRoot({
      url: process.env.UPSTASH_REDIS_URL,
      token: process.env.UPSTASH_REDIS_TOKEN,
      // Other options if needed
    }),
  ],
})
export class AppModule {}
```

## 🏀 Usage

With the Upstash Redis module configured, you can now inject the `UpstashRedisService` into your services or controllers to interact with the redis client.

```typescript
import { Injectable } from '@nestjs/common'
import { UpstashRedisService } from 'nestjs-upstash-redis'

@Injectable()
export class MyService {
  constructor(private readonly cacheService: UpstashRedisService) {}

  async getCache(key: string): Promise<any> {
    const res = await cacheService.get(key)
    return res
  }

  // Add more methods to interact with upstash redis as needed
}
```

In the example above, we use the `UpstashRedisService.get` method to execute a query against the redis client. You can leverage Upstash redis's powerful query language to perform various operations on your sets.

For more information on the available query functions and how to use them, refer to the [Upstash Redis documentation](https://upstash.com/docs/redis/overall/getstarted).

## ✅ Features

- Seamless integration with NestJS applications.
- Easy-to-use API for interacting with Upstash Redis.
- Utilizes Redis's powerful query language for flexible database operations.
- Configurable and supports multiple environments using environment variables.
  <br/>

## 🩷 Contributing

We welcome contributions from the community to improve this package. If you find any issues or have suggestions for enhancements, please open an issue or submit a pull request.

To contribute please follow the instruction on [Contributing](CONTRIBUTING.md)

Please ensure your code follows the established coding standards and includes appropriate unit tests.

## 🪪 License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as you see fit.
