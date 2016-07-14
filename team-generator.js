function buildTeams(list) {
  let names = list.split('\n').map(name => { return name.replace('@voxmedia.com','') })
  let shuffledNames = _.shuffle(names)
  let teams = _.chunk(shuffledNames, 7)
  teams.forEach((arr, i) => {
    console.log(`Team ${i+1} - ${arr.join(', ')}`)
  })
}

let names = ``

buildTeams(names)