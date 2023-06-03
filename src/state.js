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
    for (const key of Object.keys(backdropState)) {
        const domInputElement = document.getElementById(key);
        if (domInputElement) {
            const pureValue = backdropState[key]
                .split('(')
                .pop()
                .split(')')[0]
                .replace(/[^0-9.,]/g, '');
            /**
             * TODO: fix this for number decimals
             */
            console.log(pureValue);
            domInputElement.value = parseFloat(pureValue);
        }
    }
    console.log(backdropState);
};
