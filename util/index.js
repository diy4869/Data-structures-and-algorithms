function callClass (Fn,  method, args) {
  const [ClassFn, ...classMethod] = method
  const [ClassArgs, ...restArgs] = args

  if (ClassFn !== Fn.name) throw new Error(`${ClassFn} is not defind`)

  const obj = new Fn(...ClassArgs)

  for (let i = 0; i < classMethod.length; i++) {
    
    obj[classMethod[i]].apply(obj, restArgs[i])
  }
}

module.exports.callClass = callClass
