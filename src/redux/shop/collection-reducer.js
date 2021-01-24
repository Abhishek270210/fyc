import collection_data from './collection-preview-data'

const initial_state={
    collection_data:collection_data
}

const collectionReducer=(state=initial_state,action)=>{
    switch(action.type)
    {
        default:
        return state;
    }
}

export default collectionReducer