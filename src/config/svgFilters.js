const svgFilters = [
    {
        id: 'fNoneButton',
        name: 'none',
        description: 'Aaaaand its gone',
        values: {},
    },
    {
        id: 'fHorror',
        name: 'horror',
        description: 'Very spooky',
        values: {
            url: "url('#grain')",
            grayscale: 'grayscale(1)',
            sepia: 'sepia(0.5)',
            brightness: 'brightness(1.3)',
            invert: 'invert(0.8)',
        },
    },
    {
        id: 'fDuoTonePeachy',
        name: 'duotone peachy',
        description: 'Peach party',
        values: {
            url: "url('#duotone_peachypink')",
        },
    },
];
