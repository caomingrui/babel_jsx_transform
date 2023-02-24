/** @jsx h */


const record = {
    name: 'cmr'
}
const d = <div title={'12312'}>1111 --- { 'record.name' }</div>
console.log(d)


function h (type, props, ...child) {
    console.log(type, props, child)
}