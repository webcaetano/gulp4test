'use strict';

var gulp = require('gulp');
var _ = require('lodash');


var wrench = require('wrench');

var options = {
	src: 'src',
	dist: 'dist',
	delay: 500,
	tmp: '.tmp'
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
	return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
	require('./gulp/' + file)(options);
});

var eat = function eat(a,done,c,d){
	console.log(a,done,c,d)
	setTimeout(function(){
		done();
	},1000)
}

var testFunc = function(arg){
	console.log(arg);
	return function testFunc(done){
		setTimeout(function(){
			done();
		},1000);
	}
}


gulp.task('default', gulp.series('egg','milk',gulp.parallel('bake','cream'),eat,testFunc('lol')), function (done) {
	console.log('gulp')
	done();
});


var a = function(x=3){
	return x;
}

console.log(`test: `+a(12))
