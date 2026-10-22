
// // node --watch app.js    to cancel    ctrl + C

// console.log(process.argv)

// const fs=require('fs')
// fs.writeFileSync('data.txt','karim younis')

// fs.appendFileSync('data.txt',' , ibrahim mohamed')
// console.log(fs.readFileSync('data.txt').toString())


// const data1=require("./data1")

// console.log(data1.age)
// console.log(data1.lname)


// // // extrenal package

// const validator =require('validator')

// console.log(validator.isEmail('karimyounis'))
// console.log(validator.isEmail('karimyounis@gmail.com'))

///////////////////////////////////////////////////////////////////////////////////////

const yargs=require('yargs')
const logics =require('./logics')
// // console.log(process.argv[2])
// console.log(yargs.argv.name)

// // "yargs": "^18.2.0",


yargs.command({
    command : 'add',
    describe : ' add an item',
    builder:{
        fname:{
            describe:'first name',
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:'last name',
            demandOption:true,
            type:"string"
        },
        city:{
            describe:'last name',
            demandOption:0,
            type:"string"
        },
        age:{
            describe:'last name',
            demandOption:0,
            type:"string"
        },
        id:{
            describe:'last name',
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        logics.addPerson(x.fname,x.lname,x.city,x.age,x.id)
    }
})

yargs.command({
    command:'delete',
    describe:'delete an item',
    builder:{
        id:{
            describe:"id of item",
            demandOption:true,
            type:'string'
        }
    },
    handler: (x) => {
        logics.deleteData(x.id)
    }

})

yargs.command({
    command:'deleteAll',
    describe:'delete all Data',
    builder:{
        password:{
            describe:"",
            demandOption:true,
            type:'string'
        }
    },
    handler: (x) => {
        logics.deleteAll(x.password)
    }

})

yargs.command({
    command:'read',
    describe:'read an item of data by id',
    builder:{
        id:{
            describe:'person id',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        logics.readData(x.id)
    }
})

yargs.command({
    command:'readAll',
    describe:'read all data',
    handler:(x)=>{
        logics.readAll()
    }
})

yargs.command({
    command:'list',
    describe:'show fullname and city of each person',
    handler:(x)=>{
        logics.listData()
    }
})

yargs.command({
    command:'gover',
    describe:'list city of each item',
    
    handler:()=>{
        logics.gover()
    }
})
yargs.parse() // to activate the command
// console.log(yargs.argv) // acitvate commands and print analyzed input arguments
