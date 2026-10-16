/* Featured project details verified against the project source and README. */
const projects = {
  'talvyniq': {
    title: 'Talvyniq — Job Portal & Resume Analyzer',
    category: 'FULL-STACK DEVELOPMENT / OCTOBER 2026',
    summary: 'A deployed MERN application connecting job discovery, resume feedback, and application management through candidate, recruiter, and admin workspaces.',
    features: [
      'Search and filter jobs, save opportunities, and track applications.',
      'Upload text-based PDF resumes, review local keyword analysis, and explore explicit skill-overlap recommendations.',
      'Recruiter job management, candidate shortlisting, interview scheduling, and calendar downloads.',
      'Role-based access and private resume downloads, with MongoDB persistence and Cloudinary storage.',
      'React frontend on Vercel and Express API on Render, with automated workflow and service tests.'
    ],
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Cloudinary', 'Socket.IO'],
    sourceUrl: 'https://github.com/balajikumar-dev/talvyniq',
    liveUrl: 'https://talvyniq.vercel.app/'
  },
  'template-store': {
    title: 'Mini SaaS Template Store',
    category: 'FULL-STACK DEVELOPMENT / OCTOBER 2026',
    summary: 'A MERN application for discovering website templates and saving a personal collection of favorites, built for a software engineering internship assessment.',
    features: [
      'A catalog of six sample template concepts with previews, details, search, and category filters.',
      'Registration and sign-in with bcrypt password hashing and JWT authentication.',
      'Personal favorites stored in MongoDB and protected by authenticated API routes.',
      'Responsive React interfaces with loading, error, and empty states.',
      'Express REST APIs, backend integration tests, and GitHub Actions checks.'
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    sourceUrl: 'https://github.com/balajikumar-dev/fullstack-intern-task',
    liveUrl: 'https://mini-saas-template-store.vercel.app/'
  }
};

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);

const dialog = document.querySelector('#project-dialog');
let dialogTrigger;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-category').textContent = project.category;
    document.querySelector('#dialog-summary').textContent = project.summary;
    const features = project.features.map(text => {
      const item = document.createElement('li');
      item.textContent = text;
      return item;
    });
    const technologies = project.technologies.map(text => {
      const item = document.createElement('li');
      item.textContent = text;
      return item;
    });
    document.querySelector('#dialog-features').replaceChildren(...features);
    document.querySelector('#dialog-tags').replaceChildren(...technologies);
    dialog.querySelector('.dialog-github').href = project.sourceUrl;
    dialog.querySelector('.dialog-live').href = project.liveUrl;
    dialogTrigger = button;
    dialog.showModal();
    document.body.classList.add('dialog-open');
    dialog.querySelector('.dialog-close').focus();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  dialogTrigger?.focus({ preventScroll: true });
});

const emailAddress = 'balajikumar.k.2005@gmail.com';
const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
let copyTimeout;
copyButton.addEventListener('click', async () => {
  clearTimeout(copyTimeout);
  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(emailAddress);
      copied = true;
    } else {
      const field = document.createElement('textarea');
      field.value = emailAddress;
      field.setAttribute('aria-label', 'Email address to copy');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      copied = document.execCommand('copy');
      field.remove();
      copyButton.focus({ preventScroll: true });
    }
  } catch {
    copied = false;
  }
  copyStatus.textContent = copied ? 'Email copied. Let’s start a conversation.' : 'Please select and copy the email address shown above.';
  copyButton.querySelector('span').textContent = copied ? 'Copied!' : 'Copy email address';
  copyTimeout = setTimeout(() => {
    copyButton.querySelector('span').textContent = 'Copy email address';
    copyStatus.textContent = '';
  }, 5000);
});

document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const navigationLinks = [...navigation.querySelectorAll('a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach(link => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('main > section').forEach(section => observer.observe(section));
}
