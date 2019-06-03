let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 1) {
        resolve("Pass");
    } else {
        reject("Failed");
    }
});

p.then((msg) => console.log(msg)
).catch((msg) => console.log(msg))



// **************************************

const examp1 = new Promise((resolve, reject) => {
    resolve("Exam1 Pass")
})

const examp2 = new Promise((resolve, reject) => {
    resolve("Exam2 Pass")
})

const examp3 = new Promise((resolve, reject) => {
    resolve("Exam3 Pass")
})

Promise.all([examp1, examp2, examp3])
    .then((msg) => console.log(msg))

Promise.race([examp2, examp1, examp3])
    .then((msg) => console.log(msg))