import url from '../url.js';

export function togglePage (e){
    return {
        type: 'TOGGLE_PAGE',
        payload: e
    }
}

{/*Fetching repos. When response comes retrieve desired data (data.items)
 and last dispatching a type and a payload (with Reduc Thunk) for the reducer to process*/}
export function fetchRepos (e){
    return (dispatch) => {
        var request = new Request('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100', {
            method: 'GET',
            mode: "cors",
            headers: new Headers({
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(function (response) {
                return response.json()
            })
            .then((data) => {
            let allRepos = data.items;
                dispatch({type: 'FETCH_REPOS', payload: allRepos});
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}