document.getElementById('details').addEventListener('submit', function (event) {
    let age = document.getElementById('age').value;
    let name = document.getElementById('name').value;
    let jog = document.getElementById('info');
    event.preventDefault();
    if (age < 18) {
        // Prevent the form from submitting normally
        alert("You are under aged");
    } else {
        let one = document.createElement('div');
        one.className = 'entry';

        let newPara = document.createElement('p');
        newPara.textContent = `Name:${name} Age:${age}`;

        let dlt = document.createElement('button');
        dlt.textContent = 'Delete';
        dlt.className = 'delete';
        dlt.addEventListener('click', function () {
            jog.removeChild(one);
        });

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'delete';
        editButton.addEventListener('click', function () {
            let replacePara = document.createElement('p');
            replacePara.innerHTML = '<input type="text" id="newName" placeholder="Name"><input type="number" id="newAge" placeholder="Age">';

            let save = document.createElement('button');
            save.textContent = 'Save';
            save.className = 'delete';

            one.replaceChild(replacePara, newPara);
            one.replaceChild(save, editButton);

            let newName = document.getElementById('newName');
            let newAge = document.getElementById('newAge');
            save.addEventListener('click', function () {
                newPara.textContent = `Name:${newName.value} Age:${newAge.value}`;
                one.replaceChild(newPara, replacePara);
                one.replaceChild(editButton, save);
            });
        });

        one.appendChild(newPara);
        one.appendChild(dlt);
        one.appendChild(editButton);
        jog.appendChild(one);
        document.getElementById('name').value = "";
        document.getElementById('age').value = "";
    }
});
document.getElementById('Mode').addEventListener('click', function (event) {
    let conditionOfMode = document.getElementById('Mode').textContent;
    let mode = document.querySelector('body');
    if (conditionOfMode == "Dark Mode") {
        mode.style.backgroundColor = "black";
        document.getElementById('Mode').style.backgroundColor = "White"
        document.getElementById('Mode').style.color = "Black"
        document.getElementById('Mode').style.border = "solid Black 1px"
        document.getElementById('Mode').textContent = "Light Mode"
    }
    if(conditionOfMode == "Light Mode"){
        mode.style.backgroundColor = "Lavender";
        document.getElementById('Mode').style.backgroundColor = "Black"
        document.getElementById('Mode').style.color = "White"
        document.getElementById('Mode').style.border = "none"
        document.getElementById('Mode').textContent = "Dark Mode"
    }
});