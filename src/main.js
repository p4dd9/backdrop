const menuDOM = document.getElementById('menu');
const menuContentDOM = document.getElementById('menuContent');
const overlayFilterDOM = document.getElementById('overlayFilter');

const filters = [
    {
        filter: 'blur',
        unit: 'px',
        defaultValue: 0,
    },
    {
        filter: 'brightness',
        unit: '%',
        defaultValue: 100,
    },
    {
        filter: 'contrast',
        unit: '%',
        defaultValue: 100,
    },
    {
        filter: 'grayscale',
        unit: '%',
        defaultValue: 0,
    },
    {
        filter: 'hue-rotate',
        unit: 'deg',
        defaultValue: 0,
    },
    {
        filter: 'invert',
        unit: '%',
        defaultValue: 0,
    },
    {
        filter: 'sepia',
        unit: '%',
        defaultValue: 0,
    },
    {
        filter: 'saturate',
        unit: '%',
        defaultValue: 100,
    },
];

let backdropState = {};

const createBackdropFilterDOM = (type, unit, defaultValue) => {
    return `
        <div id="${type}-filter" class="filter">
            <label class="filter-label">
                <p>${type} (${unit})</p>
                <input id="${type}" class="filter-input" value="${defaultValue}" min="0" type="number"></input>
            </label>
        <div>`;
};

const updateBackdropState = (newStatePartial) => {
    backdropState = {
        ...backdropState,
        ...newStatePartial,
    };
    updateBackdropFilterCSS();
};

const updateBackdropFilterCSS = () => {
    const backdropFilterCSS = Object.values(backdropState).join(' ');
    overlayFilterDOM.style.backdropFilter = backdropFilterCSS;
};

const injectFilter = (filter, unit, defaultValue) => {
    const filterDOMContent = createBackdropFilterDOM(
        filter,
        unit,
        defaultValue
    );
    const filterDOM = document.createElement('div');
    filterDOM.innerHTML = filterDOMContent;

    menuContentDOM.appendChild(filterDOM);
    const filterInputDOM = document.getElementById(filter);
    filterInputDOM.addEventListener('input', (e) => {
        updateBackdropState({
            [`${filter}`]: `${filter}(${e.target.value}${unit})`,
        });
    });
};

// inject all the filters
filters.map((el) => {
    injectFilter(el.filter, el.unit, el.defaultValue);
});

menuControl.addEventListener('click', () => {
    menuDOM.classList.toggle('menu-close');
});

/**
// ignore drop-shadow for now
 */
