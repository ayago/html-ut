# HTML-UT (HTML Unit Testing)

An npm package that contains utility functions to assert HTML strings. Intended to be used in unit test to assert HTML element rendering reliably.

## How to use this

Via npm execute: `npm i html-ut --save-dev`

### Sample usage

Get hold of the string representation of an HTML element:

`const htmlString = element.innerHTML;`

Then minify the HTML string as follows

`const minifiedHTMLString = minifyHTML(htmlString);`

Full code of this sample

```
const minifyHTML = require('html-ut');

\\element declaration removed for brevity
const htmlString = element.innerHTML;
const minifiedHTMLString = minifyHTML(htmlString);
```