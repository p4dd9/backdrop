const menuDOM = document.getElementById('menu');
const overlayFilterDOM = document.getElementById('overlayFilter');
const filters = [
    {
        filter: 'blur',
        unit: 'px',
    },
    {
        filter: 'brightness',
        unit: '%',
    },
    {
        filter: 'contrast',
        unit: '%',
    },
    {
        filter: 'grayscale',
        unit: '%',
    },
    {
        filter: 'hue-rotate',
        unit: 'deg',
    },
    {
        filter: 'invert',
        unit: '%',
    },
    {
        filter: 'sepia',
        unit: '%',
    },
    {
        filter: 'saturate',
        unit: '%',
    },
];

let backdropState = {};

const createBackdropFilterDOM = (type, unit) => {
    return `
        <div id="${type}-filter" class="filter">
            <label class="filter-label">
                <p>${type} (in ${unit})</p>
                <input id="${type}" type="text"></input>
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

const injectFilter = (filter, unit) => {
    const filterDOMContent = createBackdropFilterDOM(filter, unit);
    const filterDOM = document.createElement('div');
    filterDOM.innerHTML = filterDOMContent;

    menuDOM.appendChild(filterDOM);
    const filterInputDOM = document.getElementById(filter);
    filterInputDOM.addEventListener('change', (e) => {
        updateBackdropState({
            [`${filter}`]: `${filter}(${e.target.value}${unit})`,
        });
    });
};

// inject all the filters
filters.map((el) => {
    injectFilter(el.filter, el.unit);
});

/**
// ignore drop-shadow for now
 */
