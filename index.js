const ipBtn = document.getElementById("save-el")
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("delete-el")
const saveTab = document.getElementById("save-tab")
let myLead = []

function render(lead){
    
    let listItem = ""
    // console.log(myLead)
    for(let i = 0 ; i< lead.length ; i++){
        // ulEl.innerHTML +=  "<li>" + myLead[i] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myLead[i]
        // ulEl.append(li)
        // listItem +=  "<li><a target = '_blank' href = '"+validateURL(myLead[i])+"'>" + myLead[i] +"</a></li>"
        listItem += 
        `<li>
                <a target = '_blank' href = '${validateURL(lead[i])}'> 
                    ${lead[i]}
                </a>
        </li>`;

        // listItem +=  "<li><a href = '"+myLead[i]+"'>" + myLead[i] +"</a></li>"
    }
    ulEl.innerHTML = listItem
}
ipBtn.addEventListener("click",function(){
    myLead.push(inputEl.value)
    // console.log("clicked using event listner")
    // console.log(myLead)
    localStorage.setItem("myLead" ,JSON.stringify(myLead))
    render(myLead)
    // console.log(localStorage.getItem("myLead"))
 
    inputEl.value = ""
})

const variable =  JSON.parse(localStorage.getItem("myLead"))
if (variable){
    myLead = variable
    render(myLead)
}



function validateURL(varifyUrl) {
    return /^https?:\/\//.test(varifyUrl) ? varifyUrl : 'http://' + varifyUrl;
}

delBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLead=[]
    // ulEl.innerHTML = null
    render(myLead)
})

saveTab.addEventListener("click",function(){

    chrome.tabs.query({active:true ,currentWindow:true},function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead" , JSON.stringify(myLead))
        render(myLead)
    })
    
})