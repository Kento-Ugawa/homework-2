const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i=1; i<=5; i++) {
    const newImage = document.createElement('img');

    newImage.setAttribute('src', `gallery-start/gallery-start/images/pic${i}.jpg`);
    newImage.setAttribute('alt', `gallery-start/gallery-start/images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);

    newImage.onclick = () => {
      displayedImage.setAttribute('src', newImage.src);
    }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = () => {
  let getAt = btn.getAttribute('class');

  if (getAt === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
  else if (getAt === 'light') {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
};