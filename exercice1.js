const pattern = /Emily/gi

const text = `Emily is probably the best coach I've ever had. I'm an absolute fan of Emily's exercices on regular expressions. 
I wouldn't be as fluent in JavaScript if I had not crossed Emily's path`

const NewSentence = text.replace(pattern, "Killian")


console.log(NewSentence)
