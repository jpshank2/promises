function message(msg) {
    console.log(msg);
}

message("Hello World!");

setTimeout(() => {message("Goodbye World")}, 2000);

(function getWords() {
    console.log("immediate");
    setTimeout(() => {
        console.log("3 seconds");
        setTimeout(() => {
            console.log("2 seconds");
            setTimeout(() => {
                console.log("1 second");
            }, 1000);
        }, 2000);
    }, 3000);
})()

function done() {
    console.log("Job's done!")
}

function countdown(num, callback) {
    console.log(num)
    if (num > 1) {
        setTimeout(() => {
            num--;
            countdown(num, callback)
        }, 1000);
    } else {
        callback()
    }
}

countdown(5, done);

let lunchTime = true;

function orderMeSomeFood() {
    return new Promise((resolve, reject) => {
        let notLunch = new Error("It is not lunch time.")
        if (lunchTime) {
            resolve({food: "Arepas", drink: "Mojito"})
        } else {
            reject(notLunch)
        }
    })
}

orderMeSomeFood()
    .then(function(result) {console.log(result)})
    .catch(function(result) {console.log(result)});

// let orderMeSomeFood = async () => {
//     let promise = new Promise((resolve, reject) => {
//         let notLunch = new Error("It is not lunch time.")
//         if (lunchTime) {
//             resolve({food: "Arepas", drink: "Mojito"})
//         } else {
//             reject(notLunch)
//         }
//     })
//     let result = await promise;
//     console.log(result);
// }

// orderMeSomeFood()
