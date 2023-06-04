let backdropState = {};

const updateBackdropState = (newStatePartial) => {
    backdropState = {
        ...backdropState,
        ...newStatePartial,
    };
    updateBackdropFilterCSS();
};

const resetBackdropState = () => {
    backdropState = {};
    updateBackdropFilterCSS();
};

const updateBackdropFilterCSS = () => {
    const backdropFilterCSS = Object.values(backdropState).join(' ');
    overlayFilterDOM.style.backdropFilter = backdropFilterCSS;
    updateCssFilterInputValues();
};

const updateCssFilterInputValues = () => {
    // state is reseted to its original values
    if (Object.keys(backdropState).length < 1) {
        for (const cssFilter of cssFilters) {
            const domInputElement = document.getElementById(cssFilter.filter);
            domInputElement.value = cssFilter.defaultValue;
        }
        return;
    }
    for (const key of Object.keys(backdropState)) {
        const domInputElement = document.getElementById(key);
        if (domInputElement) {
            const pureValue = backdropState[key]
                .split('(')
                .pop()
                .split(')')[0]
                .replace('%', '')
                .replace('px', '')
                .replace('deg', '');
            const noramlizedValue = pureValue.includes('.')
                ? parseFloat(pureValue) * 100
                : parseInt(pureValue);
            if (isNaN(noramlizedValue)) return;
            domInputElement.value = noramlizedValue;
        }
    }
    console.log(backdropState);
};
