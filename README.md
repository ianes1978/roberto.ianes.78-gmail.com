# lit-element webcomponent starter JS (Bootstrap)

## intro
This is a simple starter of a webcomponent builded with lit-element library and webpack bundler.
![screen](https://github.com/ianes1978/lit-element-webpack-starter/blob/master/images/screenshot.PNG)

##first-component
example of naked webcomponent

##bs-component
A component that load from external css a global style.
**But preserve the shadowdom for scoped style**.
I think can be usefull to create a library of webcomponent that have to reditate the global style.
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
