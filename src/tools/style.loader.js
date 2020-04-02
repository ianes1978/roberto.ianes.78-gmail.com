const styleRules = Object.values(document.styleSheets).reduce((obj,styleSheet)=>{
   return obj = {...obj,...styleSheet.cssRules}
   },{})
   
   let externalStyles =  Object.values(styleRules).map(rule=>rule.cssText).join('\n');
   externalStyles = externalStyles.replace(/html {/g,":host {");
   externalStyles = externalStyles.replace(/@import/g,"/@import");
   externalStyles = [externalStyles];

export {externalStyles};