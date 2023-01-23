import url from 'url';

const myURL = new URL('https://example.ord/foo');
myURL.pathname = '/bar'
myURL.search = '?sd'
myURL.hash = '#abc'

console.log(myURL)
console.log(myURL.href)