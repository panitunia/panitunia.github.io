const lang = window.location.pathname.includes('/en/') ? 'en' : 'ua';

const headerHTML = `
<header class="site-header">
  <h1>Kanzan Government Archive</h1>
  <div class="subtitle">[TERMINAL LOG: Access granted to personnel level D5+]</div>
  <div class="lang-switch">
    <a href="${lang === 'en' ? '/ua/index.html' : '/en/index.html'}">
      <img src="/assets/${lang === 'en' ? 'ua.svg' : 'en.svg'}" 
           alt="${lang === 'en' ? 'UA' : 'EN'}">
    </a>
  </div>
</header>
`;

const sidebarHTML = `
<div class="sidebar-nav-1">
  <h3>Navigation</h3>
  <a href="/en/index.html" class="nav-item1">Main page</a>
  <a href="/en/about.html" class="nav-item1">About</a>
  <a href="/en/organizations.html" class="nav-item1">Organizations</a>
  <a href="/en/characters.html" class="nav-item1">Subjects</a>
  <a href="/en/documents.html" class="nav-item1">Documents</a>
</div>
`;

const widgetHTML = `
<div class="widget" id="widget">
  <div class="widget-header" id="widget-header">
    <span class="widget-title">SECURITY ALERT</span>
    <div class="window-buttons">
      <span class="btn-min" id="min-btn">_</span>
      <span class="btn-close">×</span>
    </div>
  </div>
  <div class="widget-body" id="widget-body">

    <p>Unauthorized external access detected.</p>

    <p>Status: unknown</p>

    <p>Source: unknown</p>

    <p>
      <a href="https://panitunia.carrd.co/" target="_blank" class="widget-link">
        external node
      </a>
    </p>
  </div>
</div>
`;

function includeHeaderSidebarWidget() {
  const headerContainer = document.createElement('div');
  headerContainer.innerHTML = headerHTML;
  document.body.prepend(headerContainer);

  const frame = document.querySelector('.frame');
  frame.prepend(document.createRange().createContextualFragment(sidebarHTML));

  const links = document.querySelectorAll('.sidebar-nav-1 a.nav-item1');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (currentPath.startsWith(linkPath.replace('.html', ''))) {
      link.classList.add('active');
    }
  });

  const widgetContainer = document.createElement('div');
  widgetContainer.innerHTML = widgetHTML;
  document.body.append(widgetContainer);

  initWidget();
}

document.addEventListener('DOMContentLoaded', includeHeaderSidebarWidget);