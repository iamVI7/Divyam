import { MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

/**
 * Lazily creates (and caches) a single MongoClient connection.
 * The client is only constructed the first time it's actually needed
 * (i.e. when an API route runs), never at module-load / build time,
 * so builds don't fail if MONGODB_URI isn't set yet.
 */
export default function getMongoClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env.local (see .env.local.example) before submitting the consultation form."
    );
  }

  if (process.env.NODE_ENV === "development") {
    // Preserve the client across hot reloads in dev.
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    return global._mongoClientPromise;
  }

  return new MongoClient(uri).connect();
}
