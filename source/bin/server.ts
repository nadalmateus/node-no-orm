import express from 'express'
import { routes } from '../routes'

import '../data/run-migrations'

const server = express()

server.use(express.json())

server.use(routes)

server.listen(3333, () => { console.log('[ON] Server running') })
