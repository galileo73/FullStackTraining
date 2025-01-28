// Fetch and inject footer
fetch('templates/footer.html') // Percorso aggiornato
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load footer');
        }
        return response.text();
    })
    .then(data => {
        // Inserisce il contenuto del footer
        document.getElementById('footer-placeholder').innerHTML = data;

        // Inizializza le icone Lucide
        lucide.createIcons();

        // Imposta dinamicamente l'anno corrente
        const currentYearSpan = document.getElementById('currentYear');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    })
    .catch(error => console.error('Errore nel caricamento del footer:', error));


// Update current year in footer
//document.getElementById('currentYear').textContent = new Date().getFullYear();