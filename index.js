#! /usr/bin/env node
import inquirer from "inquirer";
const input = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (input.operator === "addition") {
    console.log(input.firstnumber + input.secondnumber);
}
else if (input.operator === "subtraction") {
    console.log(input.firstnumber - input.secondnumber);
}
else if (input.operator === "multiplication") {
    console.log(input.firstnumber * input.secondnumber);
}
else if (input.operator === "division") {
    console.log(input.firstnumber / input.secondnumber);
}
else {
    console.log("please select valid operator");
}
