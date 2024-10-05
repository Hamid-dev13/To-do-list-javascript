let myInput = document.getElementById("myInput");
let Myspan = document.querySelector(".span-box");
let InputText = ""; // Initialisation





  function todo () {
    InputText = myInput.value; // Récupérer la valeur de l'input
    if (InputText !== "") {
        let newSpan = document.createElement ("span");
        newSpan.style.userSelect = 'none'; // Empêche la sélection du texte
        newSpan.style.fontFamily = "'Segoe UI', sans-serif"; // Police Segoe UI
        newSpan.style.color = '#90EE90'; // Couleur du texte
        newSpan.textContent = InputText;
        Myspan.appendChild(newSpan);
        Myspan.appendChild(document.createElement('br'));
        newSpan.addEventListener('click', ()=>{
            const userConfirmed = confirm(`Are you sure you want to remove "${InputText}" from the list?`);
            if (userConfirmed) {
newSpan.remove();
            }
            
        })

        myInput.value = "";      
}
};


todoForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire (et donc le rechargement)
    todo(); 
});
