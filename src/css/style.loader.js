const fileUrl = 'css/bootstrap.min.css' 
window.externalStyles = [];

fetch(fileUrl)
   .then( r => r.text() )
   .then( t => window.externalStyles.push(t.replace('body{', ':host{')))
