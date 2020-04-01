# lit-element webcomponent starter JS (+Bootstrap)

## intro
This is a simple starter of a webcomponent builded with lit-element library and webpack bundler.
![screen](https://github.com/ianes1978/lit-element-webpack-starter/blob/master/images/screenshot.PNG)

## first-component
example of naked webcomponent

## bs-component
A component that load from external css a global style.
**But preserve the shadowdom for scoped style**.
I think can be usefull to create a library of webcomponent that have to ereditate the global style.
*webcomponents-loader.js* is a polyfill for webcomponents

*To boostrap it, the css files must be loaded before your webcomponent library:*
```    <!-- Load polyfills -->
        <script src="libs/webcomponents-loader.js" defer> </script>
       <script type="module">
        window.WebComponents = window.WebComponents || {
            waitFor(cb) { addEventListener('WebComponentsReady', cb) }
        }

        WebComponents.waitFor(async () => {
            await import('./css/style.loader.js');
            await import('./main.js');
        });
        </script>
```
## style.loader.js
```
const fileUrl = 'css/bootstrap.min.css' 
window.externalStyles = [];

fetch(fileUrl)
   .then( r => r.text() )
   .then( t => window.externalStyles.push(t.replace('body{', ':host{')))
```
It simple save in a Array the files css (and replace body tag with :host). you can upload as many files css as you want

# Use it
### Project setup
```
git clone https://github.com/ianes1978/lit-element-webpack-starter.git

npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

