/**
 * Created by agaur on 10/8/15.
 */


var axios = require('axios');


var base_url= "https://api.github.com/users/";


function getProfile(username){

    return axios.get(base_url+username);
}

function getRepos(username){

    return axios.get(base_url+username+"/repos");

}


var helpers ={
     getAll : function(username){

    return  axios.all([getProfile(username), getRepos(username)]).then(function(arr){
        console.log("result from axios get all", arr);
        return {
            bio: arr[0].data,
            repos: arr[1].data
        }
    }).catch(function(error) {
        console.log("error", error);
        return {
            bio: "not found",
            repos: "not found"
        }
    });

}
}

module.exports = helpers;
