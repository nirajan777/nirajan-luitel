const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Thanks! Your message is ready to send. Replace this with your own backend or email script.';
  form.reset();
});

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('siteTheme', currentTheme);
});

const savedTheme = localStorage.getItem('siteTheme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

const heading = document.querySelector('.hero-copy h1');
const heroText = [
  'Web Developer',
  'SEO-Friendly Designer',
  'Personal Brand Builder'
];
let heroIndex = 0;
let textIndex = 0;

if (heading) {
  const typed = document.createElement('span');
  typed.className = 'hero-typed';
  typed.style.display = 'block';
  typed.style.marginTop = '0.8rem';
  typed.style.color = '#1c7ed6';
  heading.after(typed);

  const typeLoop = () => {
    const current = heroText[heroIndex];
    typed.textContent = current.slice(0, textIndex);
    if (textIndex < current.length) {
      textIndex += 1;
      setTimeout(typeLoop, 120);
    } else {
      setTimeout(() => {
        textIndex = 0;
        heroIndex = (heroIndex + 1) % heroText.length;
        typeLoop();
      }, 1800);
    }
  };

  typeLoop();
}
