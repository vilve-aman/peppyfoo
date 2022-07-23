#!/usr/bin/env node

let help = require('./commands/help');
let tree =   require('./commands/tree');
let org = require('./commands/organise')


let args = process.argv.slice(2); 



let printWelNote = ()=>{
    let welNote = ` 
    ---------------------------------------------------------------------------------------------------
    Hey There you landed in File Organiser...\n    you can callme peppyfoo
    .
    .
    .
    .
    you can try > peppyfoo help
    ---------------------------------------------------------------------------------------------------
    `;

    console.log(welNote);
}



if(args.length==0)  printWelNote();

else{
    switch(args[0]){
        case "help" : //call to helper;     
                                help();
                                break;
        case "organise" : //call to helper;
                                org(args[1])
                                break;
        case "birdview" : //call to helper;
                                console.log("\n")
                                tree(args[1],"             ")
                                break;   
        default :   console.log("Command not found : ( ");                    
    }
}





