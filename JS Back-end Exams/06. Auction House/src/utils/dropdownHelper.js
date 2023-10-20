exports.getOptions = (categoryType) => {
    const categories = [
        {
            value: "vehicles",
            title: "Vehicles"
        },
        {
            value: "estate",
            title: "Real Estate"
        },
        {
            value: "electronics",
            title: "Electronics"
        },
        {
            value: "furniture",
            title: "Furniture"
        },
        {
            value: "other",
            title: "Other"
        },
    ];

    const options = categories.map(category => {
        return {
            value: category.value,
            title: category.title,
            selected: category.value === categoryType
        };
    });


    return options;
};