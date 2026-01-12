import { useEffect } from "react";

const useScrollEffects = () => {

  /* ===== Scroll Reveal Effect ===== */
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  /* ===== Navbar Active Section ===== */
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    const activateNav = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("nav-active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("nav-active");
        }
      });
    };

    window.addEventListener("scroll", activateNav);
    activateNav();

    return () => window.removeEventListener("scroll", activateNav);
  }, []);
};

export default useScrollEffects;
