var app = angular.module("redditApp", ['ngAnimate', 'angularMoment']);

app.controller("RedditController", ['$scope', function ($scope) {
    $scope.showForm = false;
    $scope.posts = [{
            title: 'Rock Lee',
            description: 'Taijutsu specialist from Konoha.',
            author: 'Might Gai',
            time: 'Wed Dec 02 2015 10:45:35 GMT-0700 (MST)',
            image: 'http://static.comicvine.com/uploads/original/11123/111231311/4551612-6407167790-narut.jpg',
            comments: [{author: 'Might Gai', content: 'What a wonderful student!'}],
            votes: 5
        },
        {
            title: 'Gilgamesh',
            description: 'King of Heroes.',
            author: 'Gilgamesh',
            time: 'Wed Dec 02 2015 10:27:45 GMT-0700 (MST)',
            image: 'https://s-media-cache-ak0.pinimg.com/736x/4d/1a/42/4d1a42a484b97f4568b9ad80c6a6952e.jpg',
            comments: [{author: 'Gilgamesh', content: 'Nobody is a match for me.'}],
            votes: 0   
        },
        {
            title: 'Goku',
            description: 'Super Saiyan God Goku.  I hate him sometimes.',
            author: 'Vegeta',
            time: 'Wed Dec 02 2015 10:34:35 GMT-0700 (MST)',
            image: 'http://pre13.deviantart.net/f7b2/th/pre/f/2013/131/e/1/goku_super_saiyan_god_by_maniaxoi-d64xvw6.jpg',
            comments: [{author: 'King Kai', content: 'You can be a real jerk sometimes, Vegeta.'}],
            votes: 3   
        }];
    $scope.submitPost = function () {
        $scope.showForm = ($scope.showForm === true) ? false : true;
    }
    $scope.showCommentForm = function () {
        $scope.commentForm = ($scope.commentForm === true) ? false : true;
    }
    $scope.addPost = function (isValid) {
        if (isValid) {
            $scope.newPost = {
                title: this.title,
                description: this.description,
                author: this.author,
                time: new Date(),
                comments: [],
                image: this.image,
                votes: 0
            };
            $scope.posts.push($scope.newPost);
            $scope.showForm = false;
        }
    }
    $scope.submitComment = function () {
        $scope.submitted = true;
        var comment = {
            author: this.commentAuthor,
            content: this.commentBody
        }
        this.post.comments.push(comment);
        this.commentAuthor = '';
        this.commentBody = '';
        this.commentForm = !this.commentForm;
    }
    $scope.select = function (item) {
        $scope.selectedItem = item;
    }

}])