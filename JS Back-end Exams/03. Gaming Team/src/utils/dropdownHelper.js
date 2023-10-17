exports.getOptions = (type) => {
    const platforms = [
        'PC',
        'Nintendo',
        'PS4',
        'PS5',
        'XBOX',
    ];

    const options = platforms.map((platform) => ({
        title: platform,
        selected: type === platform,
    }));

    return options;
};