const mainReducer = (state = {
    allRepos: [], //This is used to access all the repos, on init as well as on indexing.
    someRepos: [], // Used to display relevant range based on the index.
    index: 0 // The reference for where in allRepos to index
}, action) => {
    let newState = {...state};
    switch(action.type){

        case 'FETCH_REPOS':
            //maniulating state in order to access the new data in my component (App)
            console.log('fetching repos: ', action.payload);
            newState.allRepos = action.payload;
            newState.someRepos = action.payload.slice(newState.index, newState.index + 20);
            return newState;

        case 'TOGGLE_PAGE':
        //A pretty straightforward validation of the pagination index. Checking to see if the index is withing 0-100, if so
            // adding or extracting Number 20 in the index property of state.
            let direction = action.payload.target.getAttribute('data-arrow');
            let newIndex;
            if(direction === 'left'){
                if(newState.index-20 <= 0 === false){
                    newIndex = newState.index - 20;
                }

                else{
                    newIndex = 80;
                };
            };

            if(direction === 'right'){
                if(newState.index+20 >= newState.allRepos.length === false){
                    newIndex = newState.index + 20;
                }
                else{
                    newIndex = 0;
                };
            }
            newState.someRepos = newState.allRepos.slice(newIndex, newIndex+20);
            newState.index = newIndex;
            return newState;

            default:
                return newState;
            }
}
export default mainReducer;