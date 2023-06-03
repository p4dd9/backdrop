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
};
