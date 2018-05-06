class CustomError extends Error {
    constructor (code, msg) {
      super()
      this.code = code
      this.msg = msg  || 'unkown error'
    }
    getCodeMsg () {
      return {
        code: this.code,
        msg: this.msg
      }
    }
  }

  const a = new CustomError(1,'222')
  console.log(a.getCodeMsg())
  try {
  throw new CustomError(1,'222')
  } catch (error) {
    console.log(error.message)
  }