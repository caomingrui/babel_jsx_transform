const JSXPlugins = require("./index")
const babel = require("@babel/core");
// 测试用例
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