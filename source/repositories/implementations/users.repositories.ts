/* eslint-disable no-return-assign */
import { Pool } from 'pg'
import user from '../../entities/User'
import IUsersRepositories from './i.user.repositories'
import { createConnection } from '../../data/connection'

export class UsersRepositories implements IUsersRepositories {
private client: Pool

constructor () {
  createConnection().then(client => this.client = client)
}

async create ({ id, name, email }: user): Promise<void> {
  await this.client.query('INSERT INTO USERS(ID, NAME, EMAIL) VALUES ($1, $2, $3)', [id, name, email])
}
}
