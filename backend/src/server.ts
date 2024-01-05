import { createServer } from 'http'
import { config } from 'dotenv'
import { resolve } from 'path'
import { logger } from './utils/logger'
/**
 * Load Env
 */
config({
	path: resolve(__dirname, '../.env')
})

import app from './app'

import { Server } from 'socket.io'

const server = createServer(app)
const port: number = Number(process.env.PORT) || 3000

const io = new Server(server, {
	cors: {
		origin: process.env.FRONTEND_URL
	}
})
;(async () => {
	try {
		server.listen(port, () => {
			logger.info(__filename, '', '', `Server is running on ${port}`, ``)
		})
	} catch (err) {
		logger.error(__filename, '', '', `Unable to connect to the server`, err)
		process.exit(1)
	}
})()

export { io }
