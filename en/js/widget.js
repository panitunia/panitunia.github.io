function initWidget() {
  const widget = document.getElementById('widget');
  const header = widget.querySelector('.widget-header');
  const body = document.getElementById('widget-body');
  const minBtn = document.getElementById('min-btn');

  const savedLeft = localStorage.getItem('widget-left');
  const savedTop = localStorage.getItem('widget-top');
  const savedCollapsed = localStorage.getItem('widget-collapsed');

  if (savedLeft && savedTop) {
      widget.style.left = savedLeft + 'px';
      widget.style.top = savedTop + 'px';
  }

  body.style.display = savedCollapsed === 'true' ? 'none' : 'block';

  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  header.addEventListener('mousedown', e => {
      isDragging = true;
      offsetX = e.clientX - widget.offsetLeft;
      offsetY = e.clientY - widget.offsetTop;
      header.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', e => {
      if (isDragging) {
          widget.style.left = e.clientX - offsetX + 'px';
          widget.style.top = e.clientY - offsetY + 'px';
      }
  });

  document.addEventListener('mouseup', () => {
      if (isDragging) {
          localStorage.setItem('widget-left', parseInt(widget.style.left));
          localStorage.setItem('widget-top', parseInt(widget.style.top));
      }
      isDragging = false;
      header.style.cursor = 'grab';
  });

  minBtn.addEventListener('click', () => {
      if (body.style.display === "none") {
          body.style.display = "block";
          localStorage.setItem('widget-collapsed', 'false');
      } else {
          body.style.display = "none";
          localStorage.setItem('widget-collapsed', 'true');
      }
  });
}