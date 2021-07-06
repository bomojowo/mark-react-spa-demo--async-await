// function greet(): void {
//   console.log("hello world"!);
// }

// async function promiseToGreet(): Promise<void> {
//   console.log("hello world"!);
// }

async function promiseToAdd(a: number, b:number): Promise<number>{
  return a + b
}

//greet();
console.log(promiseToAdd(2,3))
// promiseToGreet()
// greet().then(() => console.log("CANNOT do this"));
// promiseToGreet().then(() => console.log("CAN do this"));

