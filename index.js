
class A {
  constructor() {

    console.log(A.#test())
  }

  #test() {
    console.log(1)
  }
}

const a = new A()

console.log(a)