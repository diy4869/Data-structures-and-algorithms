class NTree {
  constructor(val, children = null) {
    this.val = val
    this.children = children
  }
}


function buildNTree(arr, len = 3) {
  const first = arr.shift()
  const nTree = new NTree(first)


  const run = (parent, depth = 2) => {
    if (arr.length === 0) return

    const children = []

    for (let j = 0; j < len; j++) {
      if (arr.length === 0) break
      const first = arr.shift()

      children.push(
        new NTree(first)
      )
    }


    for (let i = 0; i < children.length; i++) {
      run(children[i], depth++)
    }

    parent.children = children

    
  }

  nTree.children = run(nTree)
}

buildNTree(
  new Array(10).fill(undefined).map((_, index) => index + 1)
)