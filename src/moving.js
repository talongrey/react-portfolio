const img = document.getElementsByClassName('.moving-img')[0];

document.addEventListener('mousemove', (event) => {
  const { innerWidth, innerHeight } = window;
  
  // Calculate offset (-50px to +50px range)
  const offsetX = (event.clientX / innerWidth - 0.5) * 100;
  const offsetY = (event.clientY / innerHeight - 0.5) * 100;

  img.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
});