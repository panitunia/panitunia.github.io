const lang = window.location.pathname.includes('/en/') ? 'en' : 'ua';

const headerHTML = `
<header class="site-header">
  <h1>Канзанський урядовий архів</h1>
  <div class="subtitle">[ЖУРНАЛ ТЕРМІНАЛУ: доступ надано персоналу рівня D5+]</div>
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
  <h3>Навігація</h3>
  <a href="/ua/index.html" class="nav-item1">Головна</a>
  <a href="/ua/about.html" class="nav-item1">Про світ</a>
  <a href="/ua/organizations.html" class="nav-item1">Організації</a>
  <a href="/ua/characters.html" class="nav-item1">Суб'єкти</a>
  <a href="/ua/documents.html" class="nav-item1">Документи</a>
</div>
`;

const widgetHTML = `
<div class="widget" id="widget">
  <div class="widget-header" id="widget-header">
    <span class="widget-title">СИСТЕМНЕ ПОПЕРЕДЖЕННЯ</span>
    <div class="window-buttons">
      <span class="btn-min" id="min-btn">_</span>
      <span class="btn-close">×</span>
    </div>
  </div>
  <div class="widget-body" id="widget-body">

    <p>Виявлено несанкціонований зовнішній вхід.</p>

    <p>Статус: невідомо</p>

    <p>Джерело: невідомо</p>

    <p>
      <a href="https://panitunia.carrd.co/" target="_blank" class="widget-link">
        точка доступу
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