function introduction(name){
    return(`Hi, my name is ${name}.`);

}
function introductionWithLanguage(name, language){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
function introductionWithLanguageOptional(name, language = "javaScript"){
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
console.log(introduction("Keef"));
console.log(introductionWithLanguage("Keef", "javaScript"));
console.log(introductionWithLanguageOptional("Keef"));



