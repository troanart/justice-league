const createmarkup = () => {
  const items = [
    {
      color:
        'linear-gradient(135.87deg, rgb(253, 9, 63) 2.396%,rgb(243, 131, 241) 100%)',
      description: 'Romance',
      icon: '/src/icons/sprite.svg#icon-hearts',
    },
    {
      color:
        'linear-gradient(143.47deg, rgb(15, 255, 218) 2.223%,rgb(60, 219, 119) 68.837%)',
      description: 'Drama',
      icon: '../img/sprite.svg#icon-cinema',
    },
    {
      color:
        'linear-gradient(135.87deg, rgb(185, 54, 255) 2.396%,rgb(87, 222, 218) 100%)',
      description: 'Historical',
      icon: '../img/sprite.svg#icon-documentary',
    },
    {
      color:
        'linear-gradient(135.87deg, rgb(253, 9, 63) 2.396%,rgb(251, 19, 120) 2.405%,rgb(252, 203, 26) 100%)',
      description: 'Action',
      icon: '../img/sprite.svg#icon-killer',
    },
    {
      color:
        'linear-gradient(135.87deg, rgb(255, 100, 114) 2.396%,rgb(253, 167, 93) 100%)',
      description: 'Sci-fi',
      icon: '../img/sprite.svg#icon-rocket',
    },
    {
      color:
        'linear-gradient(137.08deg, rgb(19, 84, 122) 2.366%,rgb(128, 208, 199) 96.773%)',
      description: 'Horror',
      icon: '../img/sprite.svg#icon-ghost',
    },
    {
      color:
        'linear-gradient(136.77deg, rgb(255, 247, 123) 2.374%,rgb(255, 191, 66) 50%)',
      description: 'Comedy',
      icon: '../img/sprite.svg#icon-smile',
    },
    {
      color:
        'linear-gradient(135.87deg, rgb(31, 162, 255) 2.396%,rgb(31, 162, 255) 2.405%,rgb(31, 83, 92) 97.458%)',
      description: 'Documentary',
      icon: '../img/sprite.svg#icon-castle',
    },
  ];

  const list = document.querySelector('.geners');

  items.forEach(itemData => {
    const li = document.createElement('li');
    li.classList.add('geners__item');
    li.style.backgroundImage = `${itemData.color}`;

    const link = document.createElement('a');
    link.href = '#';
    link.classList.add('link', 'geners__link');

    const svg = document.createElement('svg');
    svg.classList.add('geners__icon');

    const use = document.createElement('use');
    use.setAttribute('xlink:href', itemData.icon); // Используем xlink:href
    svg.appendChild(use);

    const span = document.createElement('span');
    span.textContent = itemData.description;

    link.appendChild(svg);
    link.appendChild(span);
    li.appendChild(link);
    list.appendChild(li);
  });
};

createmarkup();
