let tasksList = []

const userInput = document.getElementById('user-input')
const saveTaskBtn = document.getElementById('saveTaskBtn')
const tasksOutput = document.getElementById('tasksOutput')
let listModule = document.getElementById('list-module')

saveTaskBtn.addEventListener('click', saveTask)

function saveTask(){
    //list module appears
    listModule.style.display='block';
    //create a list of tasks 
    let newTask = document.createElement('li')
    let newTaskContent = userInput.value
    newTask.textContent = newTaskContent
    tasksOutput.appendChild(newTask)
    //to clean user input
    document.querySelector('#user-input').value = ''
    //to add tasks to local storage 
    tasksList.push(newTaskContent)
    //save list button appears
    saveListBtn.style.display='block'
   
}

//saving task by clicking ENTER button
const task = document.getElementById('user-input')
task.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        saveTaskBtn.click()
    }
})

const closedListModule = document.getElementById('closed-list-module')
const saveListBtn = document.getElementById('saveListBtn')
saveListBtn.addEventListener("click", prepareToSaveList)
const saveAsBtn = document.getElementById('saveAsBtn')

const fileInput = document.getElementById('fileName')

//saving created list to the local storage and  closing list visually
function prepareToSaveList() {
    fileInput.style.display = 'block'
    //localStorage.setItem(date, JSON.stringify(tasksList))
    saveListBtn.style.display='none'
    saveAsBtn.style.display='block'
}


saveAsBtn.addEventListener("click", saveAs)
const openListBtn = document.getElementById('open-saved-list')

const reloadOffer = document.getElementById('reloadOffer')
const primaryModule = document.getElementById('primary-module')

const reloadBtn = document.getElementById('reload')
reloadBtn.addEventListener('click', reload)

const reloadBtn2 = document.getElementById('reload2')
reloadBtn2.addEventListener('click', reload)

function reload() {
    location.reload();
}



function saveAs(){
    let fileName = fileInput.value
    localStorage.setItem(fileName, JSON.stringify(tasksList))
    fileInput.style.display='none'
    saveAsBtn.style.display='none'
    tasksOutput.style.display='none'
    //openListBtn.style.display='block'
    let savedPlan = document.createElement('h3')
    savedPlan.innerText = `Your plan is saved as: "${fileName}".`
    savedPlan.style.textAlign='center';
    
    closedListModule.appendChild(savedPlan)
    savedPlan.classList.add('archived-plan')
    reloadOffer.style.display = 'block'
    primaryModule.style.display = 'none'
    
}

let reopenedPlan = document.getElementById('reopenedPlan')

let reopenedPlanModule = document.getElementById('reopened-plan-module')

let openPlanListBtn = document.getElementById('openPlanListBtn')


window.onload = function showClosedList(){
    closedListModule.style.display = 'block'
    //closedListModule.style.background='gray'
    for (let [key, value] of Object.entries(localStorage)) {
        console.log(`${key}: ${value}`);
        let renewedList = document.createElement('p')
        renewedList.classList.add('archived-plan')
        renewedList.innerText = `${key}`
        closedListModule.append(renewedList)
        let openButton = document.createElement('button')
        openButton.innerText ='Open'
        openButton.classList.add('openBtn')
        renewedList.appendChild(openButton);
        let deleteButton = document.createElement('button')
        deleteButton.innerText ='X'
        
        deleteButton.classList.add('deleteBtn');
        renewedList.appendChild(deleteButton);
        
        openButton.addEventListener('click', openListOfPlans)

        //deletes a single plan from saved plans list
        deleteButton.addEventListener('click', deletePlan)
        function deletePlan(){
            localStorage.removeItem(key)
            renewedList.style.display='none'

        }

        function openListOfPlans() {
            openButton.style.background='lightblue';

            let savedTaskContent = JSON.parse(localStorage.getItem(key));
            const iterator = savedTaskContent.values();
            for (let value of iterator) {
                let renewedPlan = document.createElement('li');
                renewedPlan.innerText = `${value}`;

                tasksOutput.append(renewedPlan);
                const tomorrowTitle =document.getElementById('tomorrowTitle');
                tomorrowTitle.innerText = 'Below is your previously saved plan';
               closedListModule.style.display = 'none';
                reopenedPlanModule.style.display = 'none';
               openPlanListBtn.style.display='block'
                
                //reopenedPlanModule.innerText = `${key}`

                openPlanListBtn.addEventListener('click', reopenClosedPlansContainer)
                function reopenClosedPlansContainer() {
                    closedListModule.style.display = 'block';
                    renewedPlan.style.display = 'none';
                    openPlanListBtn.style.display = 'none';
                    reopenedPlanModule.style.display = 'none';
                    tomorrowTitle.innerText = 'Now you can write your plan'
                    
            }           
        }
    }         
}

}

const openCloseBtn = document.getElementById('open-closeBtn');
openCloseBtn.addEventListener('click', openClose)

function openClose() {
    document.getElementById('first-instruction').style.display = "none";
    

}

const showInstructionBtn = document.getElementById('showInstructionBtn')
showInstructionBtn.addEventListener('click', showInstruction)

function showInstruction() {
    document.getElementById('first-instruction').style.display = "block";
}






