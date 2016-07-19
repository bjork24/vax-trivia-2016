const values = {
  list       : () => { return document.getElementById('list').value.trim().split('\n') },
  chunkSize  : () => { return document.getElementById('size').value },
  minSize    : () => { return document.getElementById('minimum').value },
  randomize  : () => { return document.getElementById('randomize').checked },
  chunkList  : () => { return document.getElementById('chunk-list') },
  templateEl : () => { return document.getElementById('chunk-template') },
  get template() { return this.templateEl().textContent }
}

// main funtion. kicked off by clicking the button
const generate = () => {

  // grab values
  let { list, chunkSize, minSize, randomize, chunkList } = values

  // if list is already on the screen, remove it
  if (!_.isNull(chunkList())) {
    chunkList().parentNode.removeChild(chunkList())
  }

  // if minimum is larger than chunk size, throw error
  if (minSize() >= chunkSize()) {
    alert(`Minimum size must be smaller than chunk size`)
    return
  }

  // clean off email address
  list = list().map(name => {
    name = name.split('@')
    return name[0]
  })

  // randomize if needed
  list = (randomize()) ? _.shuffle(list) : list

  // make chunks
  let chunks = _.chunk(list, chunkSize())

  // check for minimum sizes and resort if needed
  if (_.last(chunks).length < minSize()) {
    chunks = resortChunks(chunks)
  }

  displayChunks(chunks)

}

// this function makes sure all chunks are at least the minimum size
const resortChunks = chunks => {
  
  // grab values
  let { list, minSize } = values

  // determine how many are needed for minimum size
  let offset = minSize() - _.last(chunks).length

  // might want to do this in the future
  // if (offset > chunks.length) {
  //   // need to do something for small lists
  // }

  // for each item that's need
  while (offset > 0) {
    // this is the chunk we'll borrow from
    let loanChunk = chunks[chunks.length - (offset+1)]
    // take an item at random from the chunk
    let newItem = _.sample(loanChunk)
    // put the random item on the last chunk
    _.last(chunks).push(newItem)
    // pull the random item out of the chunk we borrowed it from
    _.pull(loanChunk, newItem)
    // move to the next chunk
    offset = offset - 1
  }

  // return dem chunks
  return chunks

}

// DOM manipulation + insertion of chunks
const displayChunks = chunks => {

  // grab values
  let { template, templateEl } = values

  // compile template
  let compiled = _.template(template)({ chunks })

  templateEl().insertAdjacentHTML('beforebegin', compiled)

}