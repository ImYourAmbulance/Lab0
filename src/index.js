function givenFunction(x) {
    // Defined function: f(x) = x/16 + 4sin(x) - 3 
    return x / 16.0 + 4 * Math.sin(x) - 3.0;
}

function calculateIntegral(func, start, end) { 
    let step = 1e-5;
    let numSteps = Math.round((end - start) / step);

    let result = 0.0;
    for (let i = 1; i <= numSteps; i++) {   
        let x_k = start + i * step;
        result += (step * (func(x_k) + func(x_k - step))) / 2.0;
    }

    return result;
}

const start = Number(window.prompt("start", ""));
const end = Number(window.prompt("end", ""));

console.log(calculateIntegral(givenFunction, start, end))