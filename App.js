import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct for React 18

//const heading = React.createElement("h1",{id:"heading"},"this is h1 tag");

 const root = ReactDOM.createRoot(document.getElementById("root"));


// const jsxHeading = (<h1 id="heading" className="head" tabIndex="1">
//     Namaste react using jsx
//     </h1>); 
// console.log(jsxHeading);

// react components
// class-based compoenents and function-based components

const Title = () => (
    <h1 className="head">
        akshay saini
    </h1>
);

const number = 1000;
//this is component composition : component within component :)

const HeadingComponent = () => (
    <div id="container">
     <h2>{number}</h2>
     <Title />
    <h1>Namaste React</h1>
    <Title/>
    </div>
);


root.render(<HeadingComponent/>);