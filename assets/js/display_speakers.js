const speakersData = [
  {
    id: '01',
    name: 'Yochai Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'assets/images/speaker_01.png',
  },
  {
    id: '02',
    name: 'SohYeong Noh',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    studies: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: 'assets/images/speaker_02.png',
  },
  {
    id: '03',
    name: 'Lila tretikov',
    profession: 'Executive Director of the Wikimedia Foundation',
    studies: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
    image: 'assets/images/speaker_03.png',
  },
  {
    id: '04',
    name: 'Kilnam Chon',
    profession: '',
    studies: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    image: 'assets/images/speaker_04.png',
  },
  {
    id: '05',
    name: 'Julia Leda',
    profession: 'President of Young Pirates of Europe',
    studies: 'European integration, political democracy and participation of youth through online as her major condemn, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    image: 'assets/images/speaker_05.png',
  },
  {
    id: '06',
    name: 'Ryan Merkley',
    profession: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    studies: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source movement',
    image: 'assets/images/speaker_06.png',
  },
];

const showSpeak = document.querySelector('#speak');
let output = ' ';
speakersData.forEach((speaker) => {
  output += `
  <div class="speaker-card">
    <img src="${speaker.image}" alt="">
    <div class="speaker-card-details">
      <h3>${speaker.name}</h3>
      <p class="primary">${speaker.profession}</p>
      <p>${speaker.studies}</p>
    </div>
  </div>
  `;
});
showSpeak.innerHTML = output;

const showSpeaker = document.querySelector('#speakers');
const speaker = document.querySelector('#speaki');
const showMoreButton = document.createElement('button');
showMoreButton.className = 'show-more';
showMoreButton.textContent = 'More';
showMoreButton.addEventListener('click', () => {
  const moreSpeakers = speakersData.slice(2);
  showSpeaker.innerHTML += moreSpeakers.map((speaker) => `
  <div class="speaker-card">
    <img src="${speaker.image}" alt="">
    <div class="speaker-card-details">
      <h3>${speaker.name}</h3>
      <p class="primary">${speaker.profession}</p>
      <p>${speaker.studies}</p>
    </div>
  </div>
    `).join('');
});
showMoreButton.innerHTML = 'More <i class="fa fa-chevron-down"></i>';
speaker.appendChild(showMoreButton);

// Display the first two speakers
const firstTwoSpeakers = speakersData.slice(0, 2);
firstTwoSpeakers.forEach((speaker) => {
  showSpeaker.innerHTML += `
  <div class="speaker-card">
    <img src="${speaker.image}" alt="">
    <div class="speaker-card-details">
      <h3>${speaker.name}</h3>
      <p class="primary">${speaker.profession}</p>
      <p>${speaker.studies}</p>
    </div>
  </div>
  `;
});