import express, { Application, NextFunction, Request, Response } from 'express'
import { logger } from '../utils/logger'
import { i18n } from './i18n'
// import swagger from './swagger'
import uuid from './uuid'

export default (app: Application) => {
	app.use(express.json())
	app.use(express.urlencoded({ limit: '500mb', extended: true }))
	app.use(i18n.init)
	uuid(app)
}
