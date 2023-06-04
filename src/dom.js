const menuDOM = document.getElementById('menu');
const menuContentDOM = document.getElementById('menuContent');
const overlayFilterDOM = document.getElementById('overlayFilter');
const svgFiltersWrapperDOM = document.getElementById('svgFiltersWrapper');
/**
 * SVG Filter Template for DOM injection
 */
const createSvgFilterDOM = (svgFilter) => {
    const { id, name, description } = svgFilter;
    return `<button id="${id}" title="${description}">${name}</button>`;
};

/**
 * CSS Filter Template for DOM injection
 */
const createCssFilterDOM = (type, unit, defaultValue) => {
    return `
        <div id="${type}-filter" class="filter">
            <label class="filter-label">
                <p>${type} (${unit})</p>
                <input id="${type}" class="filter-input" value="${defaultValue}" min="0" type="number"></input>
            </label>
        <div>`;
};

/**
 * Inject the template and apply interaction
 */
const injectCssFilter = (filter, unit, defaultValue) => {
    const filterDOMContent = createCssFilterDOM(filter, unit, defaultValue);
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

/**
 * Inject the template and apply interaction
 */
const injectSvgFilter = (svgFilter) => {
    const filterDOMContent = createSvgFilterDOM(svgFilter);
    const svgFilterValues = svgFilter.values;

    const filterDOM = document.createElement('div');
    filterDOM.style.display = 'contents';
    filterDOM.innerHTML = filterDOMContent;
    svgFiltersWrapperDOM.appendChild(filterDOM);

    const filterInputDOM = document.getElementById(svgFilter.id);
    filterInputDOM.addEventListener('click', () => {
        // handle reset svg filter button
        if (Object.keys(svgFilterValues).length < 1) {
            resetBackdropState();
        }
        // reset current state to cleanup any existing state so that the full preset is used
        resetBackdropState();
        updateBackdropState({
            ...svgFilterValues,
        });
    });
};

/**
 * Inject all filters
 */
svgFilters.map((svgFilter) => {
    injectSvgFilter(svgFilter);
});

/**
 * Inject all filters
 */
cssFilters.map((el) => {
    injectCssFilter(el.filter, el.unit, el.defaultValue);
});

menuControl.addEventListener('click', () => {
    menuDOM.classList.toggle('menu-close');
});
