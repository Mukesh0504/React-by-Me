let num = [6, 8, 4, 3, 5, 2]
const target = 7

let comp = [];

for (let i = 0; i < num.length; i++) {
    for (let j = 1; j < num.length; j++) {

        if (comp.includes(num[i] || comp.includes(num[j]))) {
            continue
        }
        if ((num[i] + num[j]) === 7) {
            comp = [num[i], num[j]]
            console.log(`${num[i]} + ${num[j]} = ${target} and index is : ${i}, ${j}`);
        }
    }
}