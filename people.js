const {log} = require('console')
const fullName = require('./names.js')
const hobbies = require('./hobbies')


const person = () => {
  return {
    fullName:fullName('Mattia','Natella'),
    hobbies:hobbies('Curling','Palestra','Nuoto')
  }
}

log(person())