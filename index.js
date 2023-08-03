// eslint-disable-next-line no-unused-vars
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}

const featuredSpeakers = [
  {
    imageSrc: '../images/speaker 2.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imageSrc: '../images/speaker 2.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imageSrc: '../images/speaker 2.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imageSrc: '../images/speaker 2.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imageSrc: '../images/speaker 2.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imageSrc: '../images/speaker 2.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

];

let speakersToShow = 1;
const cardsPerLoad = 1;

function createFeaturedSpeakers() {
  const featureWrapper = document.getElementById('feature-wrapper');
  featureWrapper.innerHTML = '';

  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    speakersToShow = featuredSpeakers.length;
  } else {
    speakersToShow = Math.min(featuredSpeakers.length, speakersToShow + cardsPerLoad);
  }

  for (let i = 0; i < speakersToShow; i += 1) {
    const speaker = featuredSpeakers[i];

    const speakerDiv = document.createElement('div');
    speakerDiv.classList.add('featured-speaker');

    const img = document.createElement('img');
    img.src = speaker.imageSrc;

    const span = document.createElement('span');
    const h3 = document.createElement('h3');
    h3.textContent = speaker.name;

    const h5 = document.createElement('h5');
    h5.textContent = speaker.title;

    const p = document.createElement('p');
    p.textContent = speaker.description;

    span.appendChild(h3);
    span.appendChild(h5);
    span.appendChild(p);

    speakerDiv.appendChild(img);
    speakerDiv.appendChild(span);

    featureWrapper.appendChild(speakerDiv);
  }

  const seeMoreBtn = document.querySelector('.see-moreBtn');
  if (screenWidth >= 768) {
    seeMoreBtn.style.display = 'none';
  } else if (speakersToShow >= featuredSpeakers.length) {
    seeMoreBtn.style.display = 'none';
  } else {
    seeMoreBtn.style.display = 'block';
  }
}

function showMoreSpeakers() {
  speakersToShow += cardsPerLoad;
  createFeaturedSpeakers();
}

document.addEventListener('DOMContentLoaded', createFeaturedSpeakers);
const seeMoreBtn = document.querySelector('.see-moreBtn');
seeMoreBtn.addEventListener('click', showMoreSpeakers);
window.addEventListener('resize', createFeaturedSpeakers);
