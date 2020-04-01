const fileUrls = ['./css/bootstrap.css'] 

window.externalStyles = [];

const loadCss = (url)=>new Promise((resolve,reject)=>{
   fetch(url)
   .then( r => r.text() )
   .then( t => {
      t = t.replace(/html {/g,":host {")
      t = t.replace(/@import/g,"/@import")
      resolve(t)
   })
})

const cssPromises = fileUrls.map((url)=>loadCss(url))

export const loaderCss = Promise.all(cssPromises)
