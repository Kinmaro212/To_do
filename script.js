// const addBtn = document.querySelector('#btn');
// console.log(addBtn);
// const taskCard = document.querySelector(".todoCard");
// console.log(taskCard);
// const tasksContainer = document.querySelector(".todoCards");
// console.log(tasksContainer);
// /*======================= faire fonctionner boutton de suppression========================*/

// // const delBtn = document.querySelector('.delBtn');
// // delBtn.addEventListener('click',function(){//delete default task on click
// //     deleteTask(taskCard);//target the right task
// // });

// //On crée la fonction de suppression
// // function deleteTask(task){
// //     task.remove();// remove the task
// // }


// //on crée la fonction d'ajout
// addBtn.addEventListener('click', addTask);//add a task on click






// function addTask(){
//     const taskCard = document.querySelector(".todoCard")
//     const newTask = taskCard.cloneNode(true)//clone the task Card
//     // const newDelBtn = delBtn.cloneNode(true)
//     const newTextArea = newTask.querySelector('TextArea')


//     newTextArea.value = "New Task" //set new task text to "New task"
//     // newDelBtn.addEventListener('click', function(){ //add delete event listener to new task
//     //     deleteTask(newTask);//Target the new Task
//     //  });
 
// tasksContainer.appendChild(newTask)// append new task to the tasks container
// // updateCount();

// }

// /* on clone l’élément NewTask (à savoir la Card créée en HTML) 
// Puis on définit la valeur de la zone de texte afin qu’elle ne soit pas vide 
// Enfin on ajoute cette nouvelle carte dans le DOM (afin de l’afficher. Faites le test 
// d’enlever cette ligne et d’en constater le changement)*/

// Sélection des éléments principaux
const addBtn = document.querySelector('#btn');
const tasksContainer = document.querySelector("#todoCards");

// Fonction pour supprimer une tâche
function deleteTask(task) {
    task.remove(); // Supprime l'élément de la liste
}

// Fonction pour ajouter une nouvelle tâche
addBtn.addEventListener('click', function () {
    const taskCard = document.querySelector(".todoCard"); // La carte de base à cloner
    const newTask = taskCard.cloneNode(true); // Clone la carte

    const newTextArea = newTask.querySelector('textarea');
    newTextArea.value = "New Task"; // Réinitialise le texte

    // Ajout de l'événement au bouton de suppression de la nouvelle tâche
    const newDelBtn = newTask.querySelector('.delBtn');
    newDelBtn.addEventListener('click', function () {
        deleteTask(newTask); // Supprime la tâche clonée
    });

    // Ajoute la nouvelle tâche au conteneur
    tasksContainer.appendChild(newTask);
});
