import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct for React 18

const heading = React.createElement("h1",{id:"heading"},"this is h1 tag");
// basically jsx get transpiled in the above format at the end of th day
 const root = ReactDOM.createRoot(document.getElementById("root"));
//jsx
// how to create a heading using jsx
// jsx is not html in js , they are different . they are like html-like syntax

const jsxHeading = (<h1 id="heading" className="head" tabIndex="1">
    Namaste react using jsx
    </h1>); // if you writng jsx in multiple lines it's mandotary to use wrap it
// lets see what jsxheading is really ...
console.log(jsxHeading);
// jsx is not understandable by browser so it's not js. but still it is getting rendered it's due to parcel. parcel is behind the rendering of this jsx
// it got transpiled before reaching the js engine-    babel is working....


root.render(jsxHeading);