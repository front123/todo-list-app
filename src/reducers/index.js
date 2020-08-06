export default (state = {itemsList:[]}, action) => {
    switch (action.type) { 
      case 'ADD_ITEM':
        state.itemsList.push(action.item);
        return {
          itemsList: state.itemsList.slice()
        };
      case 'REMOVE_ITEM':
        return {
          itemsList: state.itemsList.filter((item, index) => action.index !== item.id)
        };
      case 'REVERSE_MARK':
        return {
          itemsList: state.itemsList.map((item)=>{
            if (item.id === action.index){
              item.isDone = !item.isDone;
            }
            return item;
          })
        }
      case 'STORE_REMOTE_ITEMS':
        return {
          itemsList: action.remoteItemsList
        }
      default:
        return state
    }
  }

  // item:{id:number, text:'', isDone:boolean}