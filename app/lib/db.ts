import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Define type for cached connection info
interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend global to hold mongoose cache
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: Cached | undefined;
}

// Initialize cached variable or assign from global
let cached: Cached;

if (!global.mongooseCache) {
  global.mongooseCache = { conn: null, promise: null };
}
cached = global.mongooseCache;

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // Use non-null assertion on MONGODB_URI here
    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn!;
}
