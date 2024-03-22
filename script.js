//create a list (array) to store names
const nameArray = [] 

function addName(){
    const nameInput = document.getElementById('nameInput')
    //get a trimmed verion of what was in the input box
    const name = nameInput.value.trim()
    nameArray.push(name)
    displayName()
    nameInput.value = '' //clears input box after clicking enter
}

function displayNames(){
    const nameList = document.getElementById('nameList') //get the <ul> element
    nameList.innerHTML = '' //clears the list

    //will show nothing at 0; and runs as many times as there are names in the nameArray list
    for (let i = 0; i < nameArray.length; i++){
        const name = nameArray[i] //get the current name from the array
        const li = document.createElement('li') //created an <li>
        li.className = 'list-group-item' //add a class to the <li>; this class styles the list item

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span) //(makes span the child tag of li); span inside li
        nameList.appendChild(li) // nests the li inside the name list
    }
}


//add onclick to add names
document.getElementById('addNameBtn').addEventListener('click', addName)