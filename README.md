# My Small Angular implementation
There are some methods in the module:
- **`directive`** `(attrName, callback)` - accepts a  name and a callback and registers a directive
- **`compile`** `(node)` - accepts a node, checks directives on it and applies them
- **`bootstrap`** `([node])` - initializes the application start. Accepts a node or has the default node with attribute `ng-app`

## 🚩 Getting Started
```sh
npm i
```
## 🚩 How to use
- Use `smallAngular.bootstrap()` to bootstrap Your applocation.
```javascript
smallAngular.bootstrap();
```
or
```javascript
smallAngular.bootstrap([nodeElement]);
```
- Use smallAngular.directive() to register new directives
```javascript
smallAngular.directive('directive-name', callback(scope, element)});
```
## 🚩 Default directives
- `ng-init` - executes initialization code
```html
<div ng-init="name='ivan', age=25"></div>
```
- `ng-repeat` - creates instances of the pattern for each item in the collection
```html
<li ng-repeat='letter in name'></li>
```
- `ng-show` - show or hide part of the DOM tree
```html
<div ng-show="name==='ivan'"></div>
```
- `ng-hide` - hide or show part of the DOM tree
```html
<div ng-hide="true"></div>
```
- `ng-click` - sets the action that will be executed when the item is clicked
```html
<button ng-click="alert('Click!')"></button>
```
- `ng-model` - binds data in two sides
```html
<input ng-model="name"/>
```
- `ng-bind` - inserts the variable value into the DOM element
```html
<p ng-bind="name"></p>
```

## 🚩 Custom directives
- `random-color` - sets a random background color
```html
<div random-color></div>
```
- `make-short` - sets the length of the text content. Use additional attribute `length` where you can set the length value. If there is no `length`, a standard length of 5 will be used.
```html
    <p make-short length="3">Some text</p>
```
or
```html
    <p make-short>Some text</p>
```
- `uppercase` - sets the content text to upper case
```html
<p uppercase>Some text</p>
```
- `lowercase` - sets the content text to lower case
```html
<p lowercase>Some text</p>
```