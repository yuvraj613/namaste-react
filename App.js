const heading = React.createElement("div",
    {id:"Parent"},
    React.createElement("div"
        ,{id:"Child"}
        ,[React.createElement("h1",{},"This is nested"),React.createElement("h1",{},"This is 2nd nested")])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

root.render(heading);