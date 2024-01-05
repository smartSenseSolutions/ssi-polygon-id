import { Response } from 'express'
import jwt from 'jsonwebtoken'
import STATUS_CODES from 'http-status-codes'

export const createResponse = (res: Response, status: number, message: string, payload: object | null = {}, pager: object | null = {}) => {
	const resPager = typeof pager !== 'undefined' ? pager : {}

	return res.status(status).json({
		status,
		message,
		payload,
		pager: resPager
	})
}

export const createValidationResponse = (res: Response, errors: any) => {
	return createResponse(res, STATUS_CODES.UNPROCESSABLE_ENTITY, errors[Object.keys(errors)[0]], { error: errors[Object.keys(errors)[0]] }, {})
}

export const getDefaultSortOrder = (sortOrder: string): string => {
	const order: string = sortOrder && ['asc', 'desc'].indexOf(sortOrder.toLowerCase()) !== -1 ? (sortOrder.toLowerCase() === 'asc' ? 'ASC' : 'DESC') : 'DESC'
	return order
}
