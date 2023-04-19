const users = [
    {fullName: "Sulaiman", country: "Pakistan", city:"Faisalabad", age:"20", status: "active", id:"1"},
    {fullName: "Stefan", country: "Germany", city:"Berlin", age:"17", status: "active", id:"2"},
    {fullName: "Zaid", country: "Pakistan", city:"Islamabad", age:"22", status: "inactive", id:"3"},
    {fullName: "Ahmet", country: "Turkey", city:"Istambul", age:"19", status: "active", id:"4"},
    {fullName: "Walter", country: "Germany", city:"Manich", age:"21", status: "deleted", id:"5"},
    {fullName: "Usman", country: "Pakistan", city:"Lahore", age:"16", status: "deleted", id:"6"},
    {fullName: "Ayanokoji", country: "Japan", city:"Tokyo", age:"18", status: "active", id:"7"},
    {fullName: "Daniel", country: "UK", city:"Birmingham", age:"20", status: "inactive", id:"8"},
    {fullName: "Umair", country: "Pakistan", city:"Faisalabad", age:"18", status: "inactive", id:"9"},
    {fullName: "Eun-Woo", country: "Korea", city:"Seoul", age:"17", status: "inactive", id:"10"},
    {fullName: "Zack", country: "UK", city:"London", age:"22", status: "active", id:"11"},
    {fullName: "Danish", country: "Pakistan", city:"Karachi", age:"20", status: "deleted", id:"12"},
]


const activeUsers = users.filter((user, id)=>{
    return user.status === "active"
})
const inactiveUsers = users.filter((user, id)=>{
    return user.status === "inactive"
})
const deletedUsers = users.filter((user, id)=>{
    return user.status === "deleted"
})

//----------------------------------------------------------------------------------------

function showUsers(showTable) {
    users.push(showTable)
    showToast("A new user has been successfully added", "success");
    if (!showTable.length) {
       showToast("There is not a single user available", "error")
       return
   }

   let startingCode = '<div class="table-responsive"><table class="table table-hover">'
   let headCode = '<thead><tr><th scope="col">#</th><th scope="col">Full Name</th><th scope="col">Country</th><th scope="col">City</th><th scope="col">Age</th><th scope="col">Status</th><th scope="col">Id</th></tr></thead>'

   let endingCode = '</table></div>'

   let bodyCode = ''

   for (let i = 0; i < showTable.length; i++) {
       bodyCode += '<tr><th scope="row">'+ (i +1) +'</th><td>'+showTable[i].fullName + '</td><td>' + showTable[i].country + '</td><td>'+ showTable[i].city +'</td><td>'+ showTable[i].age +'</td><td>'+ showTable[i].status +'</td>' +'</td><td>'+ showTable[i].id +'</td></tr>'
   }

   let table = startingCode + headCode + "<tbody>" + bodyCode + "</tbody>" + endingCode

   showOutput(table)
}

// --------------------------------------------------------------------------------------------------------

const active = () => {
    console.log(activeUsers)

    showUsers(activeUsers)
}
const inactive = () => {
    console.log(inactiveUsers)
    
    showUsers(inactiveUsers)
}
const deleted = () => {
    console.log(deletedUsers)
    
    showUsers(deletedUsers)
}
// -------------------------------------------------------------------------
function showOutput(output) {
    document.getElementById("output").innerHTML = output
}
const clearOutput = () => {
    let clearOutput = document.getElementById("output").innerHTML;

    if (!clearOutput) {
          showToast("Output Is Already Clear", "error")
    } else {
        showOutput("")
        showToast("Output Has Been Cleared", "success")

    }
}


function showToast(msg, type) {
    let bgColor 
    switch (type) {
        case "error":
            bgColor = "linear-gradient(to right, #1a2a6c, #b21f1f, #f64f59)"
            break;
        case "success":
            bgColor = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)"
            break;
        default:
            bgColor = "#000"
            break;
    }

    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        style: {
          background: bgColor,
        },
      }).showToast();
}


