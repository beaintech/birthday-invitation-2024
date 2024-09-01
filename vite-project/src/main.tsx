import { useEffect } from 'react';

const useScrollEffect = () => {
  useEffect(() => {
    const headerMove = () => {
      const scrollPosition = window.pageYOffset;
      const navClass = document.querySelector('.logo');
      if (navClass) {
        if (scrollPosition > 15 && navClass.className === 'logo') {
          navClass.classList.add('toggleMenu');
        } else if (scrollPosition < 15 && navClass.className === 'logo toggleMenu') {
          navClass.classList.remove('toggleMenu');
        }
      }
    };

    const scrollFunction = () => {
      const logoImg = document.getElementById('logo-img');
      const logoText = document.querySelector('.logo-text');
      const backlinkExp = document.getElementById('backlinkExp');
      const backlinkPro = document.getElementById('backlinkPro');
      const backlinkCon = document.getElementById('backlinkCon');
      const header = document.querySelector('header');

      if (window.pageYOffset > 10) {
        if (logoImg) {
          logoImg.style.width = '60px';
          logoImg.style.marginTop = '0%';
          logoImg.style.marginBottom = '0%';
          logoImg.style.transition = 'all 1s ease-in-out';
        }
        if (logoText) {
          logoText.style.width = '100%';
          logoText.style.fontSize = '30px';
          logoText.style.transition = 'all 1s ease-in-out';
        }
        if (backlinkExp) backlinkExp.style.fontSize = '22px';
        if (backlinkPro) backlinkPro.style.fontSize = '22px';
        if (backlinkCon) backlinkCon.style.fontSize = '22px';

        if (header) {
          header.style.height = '70px';
          header.style.background = 'rgba(250, 250, 250, 0.9)';
          header.style.transition = 'all 1s ease-in-out';
        }
      } else if (window.pageYOffset < 200) {
        if (logoImg) {
          logoImg.style.width = '100px';
          logoImg.style.marginBottom = '40%';
          logoImg.style.marginTop = '40%';
        }
        if (logoText) {
          logoText.style.fontSize = '100px';
          logoText.style.width = '35%';
          logoText.style.justifyContent = 'center';
        }
        if (backlinkExp) backlinkExp.style.fontSize = '20px';
        if (backlinkPro) backlinkPro.style.fontSize = '20px';
        if (backlinkCon) backlinkCon.style.fontSize = '20px';

        if (header) {
          header.style.height = '100vh';
          header.style.background = 'rgba(250, 250, 250)';
          header.style.transition = 'all 1s ease-in-out';
        }
      }
    };

    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);
};

const main = () => {
  useScrollEffect();

  useEffect(() => {
    const arrWasatea = document.getElementById('wasaIntro')?.children;
    if (arrWasatea) {
      Array.from(arrWasatea).forEach((element) => {
        const el = element as HTMLElement;
        el.style.opacity = '0';
        el.style.transform = 'rotateZ(45deg)';
      });
    }
  }, []);
};

// Call the main function to initialize everything
main();

