import { Pool } from 'pg'

const createConnection = async () => {
  const client = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'noorm'

  })

  await client.connect()

  return client
}

export { createConnection }
