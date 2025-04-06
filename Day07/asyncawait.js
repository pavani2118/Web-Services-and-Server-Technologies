//Async/Await

const fs = require('fs').promises;

const readFile = async ()=>{
    try{
        /*
        const data = await fs.readFile('file.txt', 'utf8')
        const data2 = await fs.readFile('data.txt', 'utf8')
        */
        const [data, data2] =  await Promise.allSettled([
            fs.readFile('file.txt', 'utf8'),
            fs.readFile('data.txt', 'utf8')
        ])
        console.log(data)
        console.log(data.value)
        console.log(data.status)
        
        console.log(data2)
        console.log(data2.value)
        console.log(data2.status)
    }catch (err){
        console.error(err);
    }
} 
readFile()