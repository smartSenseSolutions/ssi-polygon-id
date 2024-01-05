import { Application } from 'express'
import VerifyRoutes from '../components/verifier/index'

export default (app: Application) => {
	app.use('/verify', VerifyRoutes)
}
