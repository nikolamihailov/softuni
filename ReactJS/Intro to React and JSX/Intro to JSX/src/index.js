const rootEl = document.getElementById("root");
console.dir(rootEl);
const root = ReactDOM.createRoot(rootEl);
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
const headerEl = (
    <div className="parent">
        <header className="header">
            <h1>Hello from React!</h1>
            <h2>Hello from React 2!</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia iusto molestiae ipsum eum saepe illo eius accusamus illum minus assumenda?</p>
        </header>
        <button>Hello</button>
    </div>
);
root.render(headerEl);