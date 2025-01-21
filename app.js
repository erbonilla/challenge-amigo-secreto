// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = document.querySelector('.theme-toggle i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.dataset.theme = savedTheme;
updateThemeIcon(savedTheme);

// Toggle theme function
function toggleTheme() {
    const currentTheme = htmlElement.dataset.theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Add click event listener
themeToggle.addEventListener('click', toggleTheme);

// Initialize array to store friends' names
let friends = [];

// Function to add a friend to the list
function agregarAmigo() {
    const inputElement = document.getElementById('amigo');
    const name = inputElement.value.trim();
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    
    // Clear previous result
    resultado.innerHTML = '';
    
    // Validate input
    if (!name) {
        alert('Por favor, inserte un nombre');
        return;
    }
    
    // Add name to array
    friends.push(name);
    
    // Clear input field
    inputElement.value = '';
    
    // Update displayed list
    actualizarListaAmigos();
}

// Function to update the displayed list of friends
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        listaAmigos.appendChild(li);
    });
}

// Function to create confetti effect
function celebrateWithConfetti() {
    // First burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Side bursts after a small delay
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 250);
}

// Function to randomly select a friend
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    // Validate that we have friends to draw from
    if (friends.length === 0) {
        alert('Por favor, agregue al menos un amigo antes de sortear');
        return;
    }
    
    // Randomly select a friend
    const randomIndex = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomIndex];
    
    // Display the selected friend with a slight delay for effect
    setTimeout(() => {
        const li = document.createElement('li');
        li.textContent = `¡${selectedFriend} ha sido seleccionado!`;
        resultado.appendChild(li);
        
        // Trigger confetti effect
        celebrateWithConfetti();
    }, 100);
}

// Add event listener for Enter key on input field
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
