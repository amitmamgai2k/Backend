class ApiError extends Error{
    constructor(
         statusCode,
         message='something went wrong',
         errors = [],
         statck = ""

    ){
        super(message)
        this.statusCode = statusCode
        this.data   = null
        this.messsage = message
        this.success = false,
        this.errors = this.errors   
        
        if(stack){
            this.stack  = statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}