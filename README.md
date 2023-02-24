## Usage
```javascript
const JSXPlugin = require("../plugins/index");


const baseConfig = {
    module: {
        rules: [
            {
                test: /\.js|.ts|.tsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }], '@babel/preset-typescript'],
                    plugins: [[JSXPlugin, { "pragma": "createElement" }]]
                },
            }]
    }
}
```

## Example
### yarn start:test
```javascript
const JSXPlugins = require("./index")
const babel = require("@babel/core");
// demo
const code = `
  function Demo (props) {
    return (
        <div>
            <h1 title="111" name={ 'ee' }>Hello { 'dd' }</h1>
            <div>123</div>
        </div> 
    );
  }
`;


const options = {
    plugins: [JSXPlugins],
};

const result = babel.transformSync(code, options);
console.log(result.code);
```

## Result
```javascript
function Demo(props) {
  return createElement("div", null, createElement("h1", {
    title: "111",
    name: "{ee}"
  }, "Hello ", "{dd}"), createElement("div", null, "123"));
}

```