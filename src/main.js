require( "@babel/runtime/regenerator" );
require("react-hot-loader/patch");
require("@babel/register");
require("webpack-hot-middleware/client?reload=true");
require("./main.less");
require("./images/link.jpg");
require("./index.html");
require("./react/app.js");

const a = async ()=>{
    await console.log('Hello');
}

a();
