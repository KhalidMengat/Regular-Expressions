const words = /god/g;

const p = `In ancient Egypt a god was an entity with the head of an animal and a human body. An egyptian god is not to be mistaken with the God that is worshipped in churches and mosque around the globe these days! God is not a god!`

const NewP = p.replace(words, "deity")

console.log(NewP)