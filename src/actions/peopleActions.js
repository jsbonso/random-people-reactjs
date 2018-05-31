export function getPeople(list){
    return function(dispatch){
        fetch('https://randomuser.me/api/?results=15&?nat=gb,us,au,ca,nz').then(function(response) {
            return response.json();
        }).then(function(response) {
            dispatch({
                type:"GET_PEOPLE",
                payload: list ? [...list,...response.results] : response.results
            })
        }).catch(function(error) {
            console.log(JSON.stringify(error))
        });
    }
}

