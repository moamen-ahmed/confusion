'use strict';

var app = angular.module('dishDetailModule', []);
	app.controller('dishDetailctrl',['$scope', function($scope){

var dishDetail= {
                    name:'Uthapizza',
                    image: 'images/uthapizza.png',
                    category: 'mains',
                    label:'Hot', 
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                    comments:[{
                    			rating:5,
                    			comment:"its very good hotel",
                    			author:"John Terry",
                    			date:"2012-05-16T17:15:25"
                    		},
                    		{
                    			rating:4,
                    			comment:"Ambiance is Good",
                    			author:"Frank",
                    			date:"2012-05-16T17:15:25"
                    		},
                    		{
                    			rating:4,
                    			comment:"Dal makhni is awesome",
                    			author:"Pedro",
                    			date:"2012-05-16T17:15:25"
                    		},
                    		{
                    			rating:3,
                    			comment:"Good food and service",
                    			author:"Petlur",
                    			date:"2012-05-16T17:15:25"
                    		},
                    		{
                    			rating:2,
                    			comment:"Do not go there!!!",
                    			author:"Anand",
                    			date:"2012-05-16T17:15:25"
                    		}
                        	]
                };

     $scope.dishDetail = dishDetail;
     $scope.comments = $scope.dishDetail.comments;
     $scope.showCommentDiv = false;
     $scope.newcomment = {author:"",rating:"5",comment:"",date: new Date()};

     $scope.addComments = function(){

          $scope.newcomment.author = $scope.newcomment.author;
          $scope.newcomment.comment = $scope.newcomment.comment;
          $scope.newcomment.rating = $scope.newcomment.rating;

          $scope.dishDetail.comments.push($scope.newcomment);
     }

     $scope.showLiveComments = function(){

          if($scope.newcomment.comment.trim().length > 0)
               $scope.showCommentDiv = true;
          else
               $scope.showCommentDiv = false;
     }

}]);