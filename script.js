


 function handleSubmit(){
    let zbi = document.getElementById("TitleText")
    let ul = document.getElementById("ul")

    let tasks = []
    if(zbi.value){
        tasks.push(zbi.value)
        console.log(zbi.value)
    }else{
        console.log("mxi thwa")
    }
    let taskList = tasks.map(({id ,title})=>{
        `
       <li><input type="checkbox" name="zbi" id="lihwak">${}</li> 
        `
    })
    ul.innerHTML(
        `
       <li><input type="checkbox" name="zbi" id="lihwak">${}</li> 
        `
    )
}