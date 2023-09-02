const ipBtn = document.getElementById("save-el")
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let myLead = []

ipBtn.addEventListener("click",function(){
    myLead.push(inputEl.value)
    // console.log("clicked using event listner")
    // console.log(myLead)
    renderLead()
    inputEl.value = ""
})


function renderLead(){
    
    let listItem = ""
    // console.log(myLead)
    for(let i = 0 ; i< myLead.length ; i++){
        // ulEl.innerHTML +=  "<li>" + myLead[i] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myLead[i]
        // ulEl.append(li)
        // listItem +=  "<li><a target = '_blank' href = '"+validateURL(myLead[i])+"'>" + myLead[i] +"</a></li>"
        listItem += 
        `<li>
                <a target = '_blank' href = '${validateURL(myLead[i])}'> 
                    ${myLead[i]}
                </a>
        </li>`;

        // listItem +=  "<li><a href = '"+myLead[i]+"'>" + myLead[i] +"</a></li>"
    }
    ulEl.innerHTML = listItem
}

function validateURL(url) {
    return /^https?:\/\//.test(url) ? url : 'http://' + url;
}
