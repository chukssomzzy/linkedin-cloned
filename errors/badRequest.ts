
import { customError } from '.'
import StatusCodes from 'http-status-codes'

class BadRequest extends customError{
    readonly StatusCode: number
    constructor(message: any){
        super(message)
        this.StatusCode = StatusCodes.BAD_REQUEST
    }
}

export default BadRequest
