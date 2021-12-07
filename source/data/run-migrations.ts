/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable node/handle-callback-err */
/* eslint-disable no-unused-expressions */

import { createConnection } from './connection'
import fs from 'fs'
import path from 'path'

(async () => {
  const client = await createConnection()

  const fileDataBaseDir = path.join(__dirname, 'migrations')

  console.log('Start migrations', new Date())

  fs.readdir(fileDataBaseDir, (err, files) => {
    if (err) {
      console.error(err)
    }
    files.forEach(file => {
      fs.readFile(path.join(fileDataBaseDir, file), async (err, content) => {
        if (err) {
          console.error(err)
        }
        const runMigrationsQuery = content.toString()
        await client.query(runMigrationsQuery)
      })
    })
    console.log('Finish migrations', new Date())
  })
})()
