import { Request, Response } from 'express'
import { Authorize } from './services/identityTypes'

declare namespace Environment {
	/**
	 * Custom request that includes all the types of express Request Object
	 */
	interface CustomRequest extends Request {
		user?: Authorize.ResponseObj
		files?: any
		custom: any
	}

	/**
	 * Custom response that includes all the types of express Response Object
	 */
	interface CustomResponse extends Response {
		body?: any
	}

	/**
	 * Order by object type
	 */
	interface Order {
		orderBy: any
		sortField: string
	}

	/**
	 * Pager
	 */
	interface Pager {
		sortField: string
		sortOrder: string
		rowNumber: number
		recordsPerPage: number
		filteredRecords: number
		totalRecords: number
	}
}

export = Environment
