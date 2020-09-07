//Don't need onload based on teh ordering in our html
window.onload = function(){
  const ascii = document.querySelector('#ascii')
  ascii.innerHTML = store.getState()

  const buttons = document.querySelector('.buttons')
  buttons.addEventListener('click', function(evt){
    // console.log('evt.target.id:', evt.target.id) 
    store.dispatch({
      type: evt.target.id,
      payload: asciiSource[evt.target.id]
    })
    const currentAscii = store.getState()
    ascii.innerHTML = currentAscii
  })
}

const asciiSource = {
  HAPPY: '⊙▽⊙',
  SAD: '(◕︿◕✿)',
  ANGRY: '(╬ಠ益ಠ)',
  CONFUSED: '(⊙_◎)'
}