let path = require('path');
let fs = require ('fs')


let tree = (srcAddrs,str)=> {
    let files = fs.readdirSync(srcAddrs);
    for(let i=0 ; i<files.length ; i++){
        let file = files[i];

        if(fs.lstatSync(path.join(srcAddrs,file)).isFile()==1){
            console.log(str + `|-- ${path.basename(file).substr(0,20)}\n`);
        }
        else{
            console.log(str + `|-- ${file}\n`);
            tree(path.join(srcAddrs,file), str+"             ");
        }
    }
}



module.exports =  tree;