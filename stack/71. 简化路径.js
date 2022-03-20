var simplifyPath = function(path) {
    const result = new Array()
    const pathList = path.split('/')
    const len = pathList.length

    for (let  i = 0; i < len; i++) {
        if (pathList[i] === '' || pathList[i] === '.') {
            continue
        }

        pathList[i] === '..' ? result.pop() : result.push('/' + pathList[i])     
    }

    return result.length === 0 ? '/' : result.join('')

}
simplifyPath('/../')
simplifyPath('/home//foo/')
simplifyPath('/home/')
simplifyPath('/a/b/c/../../d/e/')
simplifyPath("/a/./b/../../c/")