chickApp.factory("ClientService", ["$http", function($http){
    var client = {};

    var alterDefaults = function(object){
        $http.put('/defaults/' + object._id, object).then(function(){
            getDefaults();
        });
    };

    var getDefaults = function(){
        $http.get("/defaults").then(function(response){
            client.defaults = response.data[0];
        });
    };

    var submitEmail = function(data){
        $http.post("/submit", data).then(function(response){
            console.log("this was the response from the service submitemail", response);
        });
    };

    /* the following variable and function are for loading initial values
    into the DB if there are none. there should be no need to include
    them into the return object for this factory. */
    var initialValues = {

        bio:"I was born in Boston and moved to Woodstock, VT at less than a year old. I lived there until going to Proctor Academy for highschool in Andover NH. After spending one year in Boulder Colorado I moved between Minnesota and Washington state a few times (with a couple of summers milking cows in Vermont). I settled at school at Augsburg College where I dove into my love of Mathematics and Physics. Logic and the sciences had always played a large role in my intellectual pursuits, and at a small school I was fully able to pursue them. It was not until near the end of my time at Augsburg College that I realized that computer science is where I wanted to be, however it was too late in my college carrier. Thus I went of to Prime Academy where I was able to grow my development skills too a level beyond what I would have been able to learn on my own.  ",
        coreBeliefs:"I have four main principles. The first is 'perfection is the killer good.' The second is Arete, 'perfection in all things.' The first two might seem contradictory however that's life. Thirdly that we must judge ourselves by our actions while trying to judging other's by their intentions (while giving the benfit of the doubt in all cases). Lastly, you dont always have to be there, just when it counts. ",
        development:"I am very much interested in a number of avenues of development. I do not want to want to be chained down by any language or software, thus I try to learn as many new languages as I can at any given time, but rather would like to stick my self to a sector. One of my favorite things to do is create little black boxes, send me the information you need and I will do the math, the logic that you need and give you the results you want. That being said I prefer client side logic but I love server side as well.",
        interests:" I love all sorts of things. I love skiing, comic books, running, rock climbing, weightlifting, lacrosse, mountain biking, wikipediaing, coocking, modernist cooking, landscaping, drawing, painting, writing, computer programming (duh), computer modelling, logic puzzles, and haning out with my wife and dog. "



    };

    var checkIfThereIsData = function(){
        $http.get('/checkDB').then(function(response){
            var bool = response.data;
            if(bool === false){
                $http.post('/defaults', initialValues).then(function(response){
                    getDefaults();
                });
            }else{
                getDefaults();
            }
        });
    };
    checkIfThereIsData();

    return {
        alterDefaults: alterDefaults,
        client: client,
        getDefaults: getDefaults,
        submitEmail: submitEmail
    };
}]);
