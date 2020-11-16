let inputKata = 'malam'
let hasilDeklarasi = []
const strToArr = inputKata.split('')

for (let i = inputKata.length -1; i >= 0; i--) {
    hasilDeklarasi.push(strToArr[i])
}

const result = hasilDeklarasi.join('')

if (inputKata === result) {
    console.log(`Kata ${inputKata} Adalah Kata Palindrom`)
} else {
    console.log(`Kata ${inputKata} Adalah Bukan Palindrom`)
}