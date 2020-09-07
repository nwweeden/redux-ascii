const INITIAL_STATE =  ('( ・_・)ノ')


function asciiReducer(state=INITIAL_STATE, action){
  // switch (action.type){
  //   case 'HAPPY':
  //     return '⊙▽⊙';
    
  //   case 'SAD':
  //     return '(◕︿◕✿)';
    
  //   case 'ANGRY':
  //     return '';

  //   case 'CONFUSED':
  //     return ''
    
  //   default:
      return action.payload || state;
}

const store = Redux.createStore(asciiReducer)