// ====================================
// Gère la soumission des formulaires (order.html et contact.html)
// ====================================

document.addEventListener("DOMContentLoaded", function () {
  
  // --- Gestion du formulaire de commande (order.html) ---
  const orderForm = document.getElementById("orderForm");
  const orderFeedback = document.getElementById("formFeedback");

  if (orderForm && orderFeedback) {
    orderForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      orderFeedback.textContent =
        "Merci ! Votre commande fictive SafeCup a bien été enregistrée pour la démonstration.";
      orderFeedback.style.display = 'block';
      orderFeedback.scrollIntoView({ behavior: "smooth", block: "center" });
      
      setTimeout(() => {
        orderFeedback.style.display = 'none';
        orderForm.reset();
      }, 5000);
    });
  }

  // --- Gestion du formulaire de contact (contact.html) ---
  const contactForm = document.getElementById("contactForm");
  const contactFeedback = document.getElementById("contactFeedback");
  
  if (contactForm && contactFeedback) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        contactFeedback.textContent =
          "Message reçu ! Un membre de l'équipe SafeCup vous recontactera bientôt (dans notre scénario !).";
        contactFeedback.style.display = 'block';
        contactFeedback.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
          contactFeedback.style.display = 'none';
          contactForm.reset();
        }, 5000);
    });
  }


  // ====================================
  // Gère la simulation du changement de couleur (index.html)
  // ====================================
  const productImage = document.getElementById('productImage');
  const statusList = document.querySelector('.hero-content .status-list');
  
  if (productImage && statusList) {
    // Ajouter un événement clic sur le bloc de statut pour simuler le changement
    statusList.addEventListener('click', () => {
        // Toggle la classe 'alert-red' pour changer l'apparence via CSS
        const isAlert = productImage.classList.toggle('alert-red');

        // Mettre à jour la console pour le présentateur
        if (isAlert) {
            console.log("SafeCup DEMO: État 'ROUGE' activé. Taux d'alcoolémie élevé.");
        } else {
            console.log("SafeCup DEMO: État 'VERT' activé. Taux d'alcoolémie normal.");
        }
    });

    // Ajout d'une info pour le présentateur dans la console
    console.log("SafeCup DEMO: Cliquez sur la liste 'Vert/Rouge' dans la section Hero pour simuler le changement d'état du gobelet 3D.");
  }
});