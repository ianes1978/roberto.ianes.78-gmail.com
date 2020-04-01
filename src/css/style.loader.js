const fileUrlS = ['css/bootstrap.min.css'] 

window.externalStyles = [];

const loadCss = (url)=>new Promise((resolve,reject)=>{
   fetch(url)
   .then( r => r.text() )
   .then( t => resolve(t))
})

const cssPromises = fileUrlS.map((url)=>loadCss(url))

export const loaderCss = Promise.all(cssPromises)
