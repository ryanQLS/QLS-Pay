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

    // Minimal copy-to-clipboard for audit email
    (function() {
      const emailEl = document.getElementById('copyEmail');
      if (!emailEl) return;
      const email = 'info@qlspay.ca';

      emailEl.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (!navigator.clipboard || !navigator.clipboard.writeText) return;
        navigator.clipboard.writeText(email).then(() => {
          const original = emailEl.textContent;
          emailEl.textContent = 'Copied!';
          emailEl.classList.add('copied');
          setTimeout(() => {
            emailEl.classList.remove('copied');
            emailEl.textContent = original;
          }, 1200);
        }).catch(() => {});
      });
    })();
