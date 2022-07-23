let path = require('path');
let fs = require ('fs')

let utility = require('../utility.js');



let OrganiseHelper = (srcAddrs,destAddrs,file) =>{
    if(!fs.existsSync(destAddrs)){
        fs.mkdirSync(destAddrs);
    }
    fs.writeFileSync(path.join(destAddrs,file),"");
    fs.copyFileSync(srcAddrs,path.join(destAddrs,file));
    console.log(`copying ${file} .................................................`)
}

let findCat = (extension)=> {
        for(let key in utility){
            let flag=0
            for(extn in utility[key]){
                if(utility[key][extn] == extension){
                    flag=1;
                    break;
                }   
            }
            if(flag==1)     return key;
        }

        return "others";
}

let Organise = (srcAddrs)=>{

    if(fs.existsSync(srcAddrs)){
            let files=fs.readdirSync(srcAddrs);

            fs.mkdirSync(path.join(srcAddrs,`organised`))

            for(let i=0 ; i<files.length ; i++){
                let file = files[i];
                let filestat = fs.lstatSync(path.join(srcAddrs,file));
                if(filestat.isFile()){
                    let catName = findCat(path.extname(file).substring(1));
                    OrganiseHelper( path.join(srcAddrs,file), path.join(srcAddrs,`organised/${catName}`), file)
                }
            }
    }
    else    
        console.log("please provide correct directory !!!")
}




module.exports =  Organise;