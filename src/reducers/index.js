export default (state = {itemsList:[]}, action) => {
    switch (action.type) { 
      case 'ADD_ITEM':
        state.itemsList.push(action.item);
        return {
          itemsList: state.itemsList.slice()
        };
      case 'REMOVE_ITEM':
        return {
          itemsList: state.itemsList.filter((item, index) => action.index !== index)
        };
      case 'SET_DONE':
        state.itemsList[action.index].isDone = !state.itemsList[action.index].isDone
        return {
          itemsList: state.itemsList.slice()
        };
      case 'LOAD_REMOTE_ITEM':
        return {
          itemsList: action.remoteItemsList
        }
      default:
        return state
    }
  }

  // item:{text:'', isDone:boolean}