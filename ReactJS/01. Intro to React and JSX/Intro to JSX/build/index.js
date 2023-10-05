var rootEl = document.getElementById("root");
console.dir(rootEl);
var root = ReactDOM.createRoot(rootEl);
/* 
// html from react
const heading = React.createElement(
    "h1",
    {},
    "Hello from React!"
);
const headingTwo = React.createElement(
    "h2",
    {},
    "Hello from React 2!"
);
const header = React.createElement(
    "header",
    {},
    heading,
    headingTwo
);
console.log(JSON.parse(JSON.stringify(heading)));
 */

// using JSX syntax - superset of JS syntax

// this will be converted to the one above
var headerEl = React.createElement(
    "div",
    { className: "parent" },
    React.createElement(
        "header",
        { className: "header" },
        React.createElement(
            "h1",
            null,
            "Hello from React!"
        ),
        React.createElement(
            "h2",
            null,
            "Hello from React 2!"
        ),
        React.createElement(
            "p",
            null,
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia iusto molestiae ipsum eum saepe illo eius accusamus illum minus assumenda?"
        )
    ),
    React.createElement(
        "button",
        null,
        "Hello"
    )
);
root.render(headerEl);