//first algorithm task
const convertFahrToCelsius = (c) => {
    if(c===null || isNaN(Number(c))){
        if(Array.isArray(c)){
            return `[${c}] is not a valid number but an array`;
        }
        else if(typeof c === "object"){
            return `${JSON.stringify(c)} is not a valid number but an object`;
        }
        return `${c} is not a valid number but a/an ${typeof c}`;
    }
    else if(typeof c === "boolean"){
        return `${c} is not a valid number but a boolean`;
    }
    c = Number(c);
    x = (c - 32) / 1.8;
    return Number(x.toFixed(4));
}
//logging to check if it carters for the edge cases
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius(5));
console.log(convertFahrToCelsius(true));
console.log(convertFahrToCelsius(false));
console.log(convertFahrToCelsius({a:true}));
console.log(convertFahrToCelsius([1, 2]));
console.log(convertFahrToCelsius(null));
console.log(convertFahrToCelsius(undefined));
console.log(convertFahrToCelsius("weddedd"));
console.log(convertFahrToCelsius("true"));
console.log(convertFahrToCelsius("null"));
console.log(convertFahrToCelsius("undefined"));


// second algorithm task
const checkYuGiOh = (n) => {
    if(n===null || isNaN(Number(n))){
        let err = "";
        if(Array.isArray(n)){
            err = `invalid parameter: [${n}]`;
        }
        else if(typeof n === "object"){
            err = `invalid parameter: ${JSON.stringify(n)}`;
        }else{
            err = `invalid parameter: ${n}`;
        }
        console.log(err);
        return err;
    }else if(typeof n === "boolean"){
        err = `invalid parameter: ${n}`;
        console.log(err)
        return err;
    }
    let listOfNumbers = [];
    for (let i = 1; i <= n; i++) {
        let temp = "";
        if (i % 2 === 0) {
            temp = "yu";
        }
        if (i % 3 === 0) {
            temp = getString(i, temp, "gi");
            //functionality extracted to a function (getString) to avoid repetition
            // if(temp){
            //     temp = temp + "-gi";
            // }
            // else{
            //     temp = "gi";
            // }
        }
        if (i % 5 === 0) {
            temp = getString(i, temp, "oh");
            //functionality extracted to a function (getString) to avoid repetition
            // if(temp){
            //     temp = temp + "-oh";
            // }
            // else{
            //     temp = "oh";
            // }
        }
        if (temp) {
            listOfNumbers.push(temp);
        }
        else {
            listOfNumbers.push(i);
        }
    }
    console.log(listOfNumbers);
    return listOfNumbers;
}
const getString = (i, temp, val) => {
    if (temp) {
        return temp + `-${val}`;
    }
    else {
        return temp = val;
    }
}
//logging to check if it carters for the edge cases.
console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));
console.log(checkYuGiOh({a:2}));
console.log(checkYuGiOh(true));
console.log(checkYuGiOh([1,2]));