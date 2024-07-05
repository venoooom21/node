const fs=require('fs');
fs.writeFile('welcome.txt','hello node',(err)=>{
    if (err)throw err;
    console.log('we created file');
})
fs.readFile('welcome.txt','utf-8'),(err,data)=>{
    if (err)throw err;
    console.log(data);

}