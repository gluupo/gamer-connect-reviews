const { createClient } = require('redis');

class Connection {
  constructor() {
    this.client = createClient();
    this.client.connect();
  }

  async redisGet(name) {
    const value = await this.client.get(name);
    return value;
  }

  async redisSet(name, value) {
    await this.client.setEx(name, 86400, value);
  }
}

const con = new Connection();

module.exports = con;