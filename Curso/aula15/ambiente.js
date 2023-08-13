let num = [5, 4, 2, 7, 3, 10, 1, 20]
/*num[5] = 6
num.push(9)
console.log(`nosso vetor é o ${num}`)
console.log(`o comprimento do vetor é ${num.length}`)
// console.log(`a ordem crescente do vetor é ${num.sort()}`)
console.log(num[1])*/
num.sort()
console.log(num)

function compararNumeros(a, b) {
    return a - b;
  }

num.sort(function(a, b) {
   return a - b;
});

console.log(num)

// num.push(1)
// console.log(num)

/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])

for (let pos = 0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/