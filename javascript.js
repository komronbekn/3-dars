let string1 = prompt('string typedagi malumot kiriting')
let number1 = +prompt('Number typedagi malumot kiritin')
let boolean1 = prompt('boolean typedagi malumot kiriting')
boolean1=Boolean
confirm('kiritilgan malumotlar toriligiga ishochingiz komilmi ?')
alert(`siz kirtgan ${string1} sozi string typega tegishli
siz kiritgan ${number1} sozi number type ga tegishli 
siz kirtgan ${boolean1} boolean typega tegishli`)
console.log(string1,typeof(string1) );
console.log(number1, typeof(number1));
console.log(boolean1, typeof(boolean1));