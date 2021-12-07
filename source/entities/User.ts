import { randomUUID } from 'crypto'

export default class User {
    id: string
    name: string;
    email: string

    constructor () {
      if (!this.id) {
        this.id = randomUUID()
      }
    }
}
