document.addEventListener('DOMContentLoaded', function() {
    const sectionContainer = document.getElementById('section-container');

    sectionContainer.addEventListener('click', function(event) {
        if (event.target.id === 'ajouter') {
            addSection(sectionContainer);
        } else if (event.target.classList.contains('remove-section')) {
            removeSection(event.target.closest('section'));
        }
    });

    function addSection(section) {
        const newSection = section.cloneNode(true);
        newSection.querySelectorAll('input[type="text"]').forEach(input => {
            input.value = '';
        });

        // Ajout du bouton de suppression sur les sections dupliquées
        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.classList.add('remove-section', 'px-4', 'py-2', 'bg-red-500', 'hover:bg-red-600', 'text-white', 'rounded-md', 'shadow-sm', 'focus:outline-none', 'focus:ring-2', 'focus:ring-red-500', 'focus:ring-opacity-50', 'ml-2');
        removeButton.textContent = 'Supprimer';

        // Ajout du bouton de suppression après le bouton d'ajout
        newSection.querySelector('#ajouter').insertAdjacentElement('afterend', removeButton);
        section.parentNode.insertBefore(newSection, section.nextSibling);
    }

    function removeSection(section) {
        if (document.querySelectorAll('#section-container').length > 1) {
            section.remove();
        }
    }
});