var a = Number(prompt("A = "));
var b = Number(prompt("B = "));

if (a > b) {
    console.log("Number 'A' is higher");
} else if (a < b) {
    console.log("Number 'B' is higher");
} else {
    console.log("Numbers are even");
}

var colour = prompt("What color is the street light?").toLowerCase();

switch (colour) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Invalid color");
        break;
}

function ToRoman(num) {
        var romanMap = [
            { value: 1000, symbol: "M" },
            { value: 900, symbol: "CM" },
            { value: 500, symbol: "D" },
            { value: 400, symbol: "CD" },
            { value: 100, symbol: "C" },
            { value: 90, symbol: "XC" },
            { value: 50, symbol: "L" },
            { value: 40, symbol: "XL" },
            { value: 10, symbol: "X" },
            { value: 9, symbol: "IX" },
            { value: 5, symbol: "V" },
            { value: 4, symbol: "IV" },
            { value: 1, symbol: "I" }
        ];

        var result = "";
        for (var i = 0; i < romanMap.length; i++) {
            while (num >= romanMap[i].value) {
                result += romanMap[i].symbol;
                num -= romanMap[i].value;
            }
        }
        return result;
    }

    while (true) {
        var input = prompt("Input a number from 1 to 3999 or enter 'exit' to cancle: ");

        if (input === null) break;
        if (input.toLowerCase() === "exit") {
            console.log("Cancled");
            break;
        }

        var num = Number(input);

        if (Number.isInteger(num) && num >= 1 && num <= 3999) {
            console.log(num + " → " + ToRoman(num));
        } else {
            console.warn("Warning: Invalid number");
        }
    }