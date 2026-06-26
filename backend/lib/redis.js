import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://enjoyed-doe-137013.upstash.io',
  token: 'gQAAAAAAAhc1AAIgcDJiOTNlZTU2OGI5ZTM0Y2U1YjRmNzZiNmNiNmZhN2Y3Yg',
})

await redis.set("foo", "bar");
await redis.get("foo");