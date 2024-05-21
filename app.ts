#! /usr/bin/env node
console.log(chalk.yellowBright("\n\t\t\t\t*******************************************************************************************************"));
 console.log(chalk.greenBright("\n\t\t\t\t\t\t!!!!!!!!!!!!!!!number gussing game!!!!!!!!!!!!!!!!!"));
 console.log(chalk.yellowBright("\n\t\t\t\t*******************************************************************************************************"));

 import chalk from  "chalk";
import inquirer from "inquirer";
type ans ={
    user_guess :number
}
let system_generate = Math.floor(Math.random()*5 +1);
  const userinput :ans = await inquirer.prompt(
    [
        {
            type: "number",
            name : "user_guess",
            message: "\n\t\t\t\t\t\tenter your gussing number 1 to 6 = ",
            prefix:" ",
        },
    ]
);

const {user_guess} = userinput;
console.log(chalk.blueBright(`\n\t\t\t\t\t ${user_guess}    you are gussing number , system generate is    ${system_generate}`))

if( userinput.user_guess === system_generate ){
 console.log(chalk.greenBright("\n\t\t\t\t\tyou are win game"));
 
}
else{
    console.log(chalk.redBright("\n\t\t\t\t\t\t\t\tTRY AGIAN"));
}
console.log(chalk.cyanBright("\n\t\t\t\t\t______________________ XXXX_________XXXX________XXXX________XXXX_________________________"));

