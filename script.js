//your JS code here. If required.
let input = document.getElementById("ip");
let submitBtn = document.getElementById("btn");
let output = document.getElementById("output")

submitBtn.addEventListener('click', () => {
    promiseFunc1().then((data1) => {
        return promiseFunc2(data1);
    }).then((data2) => {
        return promiseFunc3(data2);
    }).then((data3) => {
        return promiseFunc4(data3);
    }).then((data4) => {
        return promiseFunc5(data4);
    }).catch((error) => {
        console.log("Error: ", error);
    })
})

function promiseFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            output.textContent = `Result: ${input.value}`;
            resolve(Number(input.value));
        }, 2000)
    })
}

function promiseFunc2(val){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ans = val*2;
            output.textContent = `Result: ${ans}`;
            resolve(ans);
        }, 1000)
    })
}

function promiseFunc3(val){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ans = val-3;
            output.textContent = `Result: ${ans}`;
            resolve(ans);
        }, 1000)
    })
}

function promiseFunc4(val){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ans = val/2;
            output.textContent = `Result: ${ans}`;
            resolve(ans);
        }, 1000)
    })
}

function promiseFunc5(val){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ans = val+10;
            output.textContent = `Final Result: ${ans}`;
            resolve(ans);
        }, 1000)
    })
}


