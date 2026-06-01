    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, { threshold: 0.16 });

    reveals.forEach((el) => observer.observe(el));

    // Handle audit form submission
    const auditForm = document.getElementById("auditForm");
    if (auditForm) {
      auditForm.addEventListener("submit", async (e) => {
        const customerEmail = auditForm.querySelector('input[name="email"]').value;
        
        // Send confirmation email to the customer
        const confirmationData = new FormData();
        confirmationData.append("access_key", "7bea35fd-72a8-4d81-b5e3-06a22e3b2e44");
        confirmationData.append("from_name", "QLS Pay");
        confirmationData.append("subject", "QLS Pay - Your Rate Audit Request Received");
        confirmationData.append("email", customerEmail);
        confirmationData.append("message", "Thank you for submitting your business email to QLS Pay!\n\nWe have received your request for a free rate audit. To proceed, please reply to this email with your most recent merchant statement.\n\nOur team will review your current payment processing costs and identify opportunities for you to save on payment processing fees.\n\nWe look forward to helping your business!\n\nBest regards,\nQLS Pay Team");
        
        // Send confirmation to customer (async, don't wait)
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: confirmationData
        }).catch(err => console.log("Confirmation sent to customer"));
      });
    }
