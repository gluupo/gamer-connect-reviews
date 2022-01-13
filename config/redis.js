const { createClient } = require('redis');
require('dotenv').config();

class Connection {
  constructor() {
    this.client = createClient({ url: process.env.REDIS_URL });
    this.client.connect();
  }

  async redisGet(name) {
    const value = await this.client.get(name);
    return value;
  }

  async redisSet(name, value) {
    await this.client.set(name, value);
  }
}

const con = new Connection();

module.exports = con;