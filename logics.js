
const fs= require('fs')

const addPerson=(fname, lname,city,age,id)=>{
    const allData=loadData()
    const duplicated=allData.find((obj)=>{
        return obj.id==id
    })
    if(duplicated){
        console.log('this id exists already')
    }
    else{
        allData.push({
        fname,
        lname,
        city,
        age,
        id
    })
    console.log('data is added succeccfully')
    saveData(allData)
    }   
}

const loadData=()=>{
    try {
    const allData=fs.readFileSync('customersData.json').toString()
    return JSON.parse(allData)
    }

    catch{
        return []
    }
}

const saveData=(objectData)=>{
    const jsonData=JSON.stringify(objectData)
    fs.writeFileSync('customersData.json',jsonData)
}


const deleteData=(id)=>{
    const allData=loadData()
    const neededPerson=allData.find((obj)=>{
        return obj.id ==id
    })
    if(neededPerson){
        const dataToKeep=allData.filter((obj)=>{
        return obj.id!=id
        })
        saveData(dataToKeep)
        console.log('person is deleted successfully')
    }
    else{
        console.log('id is not found')
    }
}
const deleteAll=(password)=>{
    var allData=loadData()
    if(password=='backendNodeJs'){
        allData=[]
        saveData(allData)
        console.log('deleted successfully')
    }
    else{
        console.log('wrong password')
    }
}

const readData=(id)=>{
    const allData=loadData()
    const neededPerson=allData.find((obj)=>{
        return obj.id==id
    })
    if(neededPerson){
        console.log(neededPerson)
    }
    else{
        console.log('id not found')
    }
}

const readAll=()=>{
    const allData=loadData()
    console.log(allData)
    };

const listData=()=>{
    const allData=loadData()

    allData.forEach((element) => {
        console.log(element.fname,element.lname,element.city)
    });


    // const needed = allData.map(({ fname, lname, id }) => ({
    //     fname,
    //     lname,
    //     id
    // }));
    // console.log(needed)
}

const gover=()=>{
    var allData=loadData()
    const groupedData = Object.groupBy(allData, (obj) => {
        return obj.city;
    });
    console.log(groupedData)
}





module.exports={
    addPerson,
    deleteData,
    deleteAll,
    readData,
    readAll,
    listData,
    gover
}