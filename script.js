// === Sélection des éléments DOM ===

// Cette constante sélectionne le bouton d'ajout de son id btn 
// C'est le bouton sur lequel l'utilisateur cliquera pour ajouter une nouvelle tâche.
const addBtn = document.querySelector('#btn');

// Cette constante sélectionne la carte de tâche initiale (ayant la classe 'todoCard') définie dans le HTML.
// Elle servira de modèle pour créer de nouvelles tâches en la clonant.
const taskCard = document.querySelector('.todoCard');

// Cette constante sélectionne le conteneur où toutes les cartes de tâches seront placées.
// Ce conteneur contient la carte initiale et recevra les cartes clonées.
const taskContainer = document.querySelector('#todoCards');

// Cette constante sélectionne le bouton de suppression de la carte initiale (ayant la classe 'delBtn').
// Ce bouton permettra de supprimer une tâche.
const delBtn = document.querySelector('.delBtn');

// Cette constante sélectionne l'élément affichant le compteur de tâches (ayant la classe 'counter').
// Cet élément sera mis à jour chaque fois qu'une tâche est ajoutée ou supprimée.
const label = document.querySelector('.counter');

// === Gestion du compteur de tâches ===

    // Cette variable `count` sert à compter le nombre total de tâches affichées.
    // Elle commence à 1, car la carte initiale est déjà présente par défaut.
let count = 1;

// === Ajout des fonctionnalités au bouton de suppression de la carte initiale ===


// Quand ce bouton est cliqué, la fonction `deleteTask` est appelée avec la carte initiale comme argument.

delBtn.addEventListener('click', function () {
    deleteTask(taskCard);
});

// === Définition des fonctions ===

    // Fonction `deleteTask`: Supprime une tâche 
    // Elle prend en compte l'élément HTML représentant la tâche (`task`).
function deleteTask(task) {
    task.remove(); // Supprime la tâche du DOM.
    count--; // Diminue le compteur car une tâche a été supprimée.
    updateCount(); // Met à jour l'affichage du compteur.
}

// Fonction `updateCount`: Met à jour l'affichage du compteur de tâches.
// Elle modifie le contenu texte de l'élément `label` pour afficher la valeur actuelle de `count`.
function updateCount() {
    label.textContent = count; // Change le texte de l'élément pour refléter le nouveau nombre de tâches.
    console.log(count);
}

// Fonction `addTask`: Ajoute une nouvelle tâche en clonant la carte initiale.
//  Clone la carte initiale pour créer une nouvelle carte.
// Met à jour ses propriétés (par exemple, le texte par défaut du champ de texte).
//  Ajoute un écouteur d'événement au bouton de suppression de cette nouvelle carte.
//  Ajoute la nouvelle carte au conteneur.
//  Met à jour le compteur de tâches.
function addTask() {
    // Clone la carte de tâche initiale.
    const newTask = taskCard.cloneNode(true);

    // On ajoute le boutton corbeille a chaque carte 
    const newDelBtn = newTask.querySelector('.delBtn');

    // Fais apparaitre le champs de texte modifiable a chaque carte 
    const newTextArea = newTask.querySelector('TextArea');

    // Augmente le compteur de tâches car une nouvelle carte a été ajoutée.
    count++;

    // Définit un texte par défaut pour le champ de texte dans la nouvelle carte.
    newTextArea.value = "New Task";

    // Ajoute un écouteur d'événement qui associe un evenement au bouton de suppression de la nouvelle carte.
    // Lorsque ce bouton est cliqué, il supprime la carte spécifique.
    newDelBtn.addEventListener('click', function () {
        deleteTask(newTask);
    });

    // Ajoute la nouvelle carte au conteneur principal.
    taskContainer.appendChild(newTask);

    // Met à jour l'affichage du compteur pour inclure la nouvelle carte.
    updateCount();
}

// === Ajout des fonctionnalités au bouton d'ajout de tâches ===

// Ajoute un écouteur d'événement "click" au bouton d'ajout.
// Quand ce bouton est cliqué, la fonction `addTask` est appelée pour créer une nouvelle tâche.
addBtn.addEventListener('click', addTask);
