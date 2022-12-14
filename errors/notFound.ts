 import { customError } from '.'
import StatusCodes from 'http-status-codes'

class NotFound extends customError{
    readonly StatusCode: number
    constructor(message: any){
        super(message)
        this.StatusCode = StatusCodes.NOT_FOUND
    }
}

export default NotFound 
