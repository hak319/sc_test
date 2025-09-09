function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const target = document.getElementById(id);
  target.style.display = 'block';
  setTimeout(() => {
    target.classList.add('active');
  }, 10);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showWorkImage(imgElement) {
  const fullImgUrl = imgElement.getAttribute('data-full') || imgElement.src;
  const modal = document.getElementById('workImageModal');
  const img = document.getElementById('workImage');

  if (fullImgUrl) {
    img.src = fullImgUrl;
    modal.style.display = 'flex';
  }
}


function closeWorkImage() {
  const modal = document.getElementById('workImageModal');
  modal.style.display = 'none';
}


function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
