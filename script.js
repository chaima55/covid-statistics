
// Make a request for a user with a given ID
axios.get('https://api.covid19api.com/countries')
    .then(function (response) {
        // handle success
        console.log(response.data);
        response.data.map(e => {
            console.log(e.Country)
            var node = document.createElement("tr");
            node.onclick=function(){
                axios.get('https://api.covid19api.com/dayone/country/' + e.Country.toLowerCase() + '/status/confirmed')
                .then(function (responseCases) {
                   console.log(responseCases);
                }).catch(function (error) {
                    // handle error
                })
            }
            var textnode = document.createTextNode(e.Country);
            node.appendChild(textnode);
            document.getElementById("countryTable").appendChild(node);
        }


        )
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
    