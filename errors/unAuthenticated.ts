 import { customError } from '.'
import StatusCodes from 'http-status-codes'

class UnAuthenticated extends customError{
    readonly StatusCode: number
    constructor(message: any){
        super(message)
        this.StatusCode = StatusCodes.UNAUTHORIZED
    }
}

export default UnAuthenticated 
