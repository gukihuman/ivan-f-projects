import "./style.sass";

const projects = [
    {
        title: 'fylo-landing-page',
        liveLink: 'https://ivan-f-sokolov.github.io/fylo-landing-page',
        codeLink: 'https://github.com/ivan-f-sokolov/fylo-landing-page',
    },
    {
        title: 'slick-slider',
        liveLink: 'https://ivan-f-sokolov.github.io/slick-slider',
        codeLink: 'https://github.com/ivan-f-sokolov/slick-slider',
    },
    {
        title: 'stopwatch',
        liveLink: 'https://ivan-f-sokolov.github.io/stopwatch',
        codeLink: 'https://github.com/ivan-f-sokolov/stopwatch',
    },
    {
        title: 'link-tree',
        liveLink: 'https://ivan-f-sokolov.github.io/link-tree',
        codeLink: 'https://github.com/ivan-f-sokolov/link-tree',
    },
    {
        title: 'documentation',
        liveLink: 'https://ivan-f-sokolov.github.io/documentation',
        codeLink: 'https://github.com/ivan-f-sokolov/documentation',
    },
];

const list = document.getElementById('list');

function formatTitle(title) {
    return title[0].toUpperCase() + title.slice(1)
        .split('-')
        .join(' ');
};

projects.forEach( ({ title, liveLink, codeLink }) => {
    const listItem = document.createElement('li');

    let titleFormatted = formatTitle(title);

    listItem.innerHTML = `
        <a href="${liveLink}" class="live-link" target="blank">
            <img src="./images/${title}.png" alt="${titleFormatted}">
            <h3>${titleFormatted}</h3>
        </a>
        <a href="${codeLink}" class="code-link" target="blank">
            <i class="fa-brands fa-github"></i>
            <p>Code</p>
        </a>
    `;

    list.appendChild(listItem);
});
