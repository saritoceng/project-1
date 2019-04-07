let nilai = numeral ('100000');
let nilaiInteger = nilai.value();
console.log(nilaiInteger);
console.log('nilainya adalah ',nilai.format('Rp 0,0.00'));


let nilaiKe2 = numeral ('Rp 200,500,000');
console.log('nilai integer ke dua adalah ', nilaiKe2.value());


