import 'dotenv/config';
import { Pool, PoolClient, PoolConfig } from 'pg';

export default class DBClient {
  private static instance: DBClient

  private pool: Pool

  private constructor() {
    const config: PoolConfig = {
      user: process.env.PGUSER,
      host: 'localhost',
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: Number(process.env.PGPORT),
    }
    const pool = new Pool(config);
    this.pool = pool;
  }

  public async getClient(): Promise<PoolClient> {
    const client = await this.pool.connect();
    return client;
  }

  public static getInstance(): DBClient {
    if (!DBClient.instance) {
      console.log("Creating new db client instance...")
      DBClient.instance = new DBClient()
      return DBClient.instance;
    }

    return DBClient.instance;
  }
}