import { Queue, Worker } from "bullmq";
import IoRedis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// Connect to Upstash Redis using its standard connection string or URI structure
const connection = new IoRedis(process.env.UPSTASH_REDIS_REST_URL.replace("https://", "rediss://"), {
  maxRetriesPerRequest: null,
});

// 1. Initialize the Queue
export const postQueue = new Queue("postTasks", { connection });

// 2. Initialize the Worker to handle queued jobs out of band
const postWorker = new Worker(
  "postTasks",
  async (job) => {
    if (job.name === "logPostActivity") {
      const { userId, text } = job.data;
      console.log(`🤖 [Background Worker]: Processing post telemetry for User ${userId}. Text snippet: "${text.substring(0, 20)}"`);
    }
  },
  { connection }
);

postWorker.on("completed", (job) => console.log(`✅ Job ${job.id} finished.`));
postWorker.on("failed", (job, err) => console.error(`❌ Job ${job.id} failed:`, err.message));