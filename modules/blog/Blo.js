if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
/*@RouteConfig({
  path: '/blog', component: Blog, alias: 'blog'
})*/
var Blog = (function () {
    function Blog() {
        console.log("lets blog");
        this.blogs = [];
        this.blogs.push(new BlogArticle("Swag", "Swagging my swagger", ["Swag", "Swig", "Swoog"]));
    }
    Blog = __decorate([
        angular2_1.Component({
            selector: 'main'
        }),
        angular2_1.View({
            template: '<section class="content blog">' +
                '<article *for="blog of blogs">' +
                '<div class="title-meta-wrap cf">' +
                '<h1>{blog.title}</h1>' +
                '<span class="meta">' +
                '<span class="date">{blog.date}</span>' +
                '<span class="categories">' +
                '<ul class="inline">' +
                '<li *for="#tag of blog.tags">' +
                '<a href="{tab.url}">{tab.label}</a>' +
                '</li>' +
                '</ul>' +
                '</span>' +
                '</span>' +
                '</div>' +
                '<p>' +
                '{blog.content}' +
                '</p>' +
                '</article>' +
                '            ' +
                '</section>',
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [])
    ], Blog);
    return Blog;
})();
var BlogArticle = (function () {
    function BlogArticle(title, content, tags) {
        this.title = title;
        this.content = content;
        this.tags = tags;
    }
    return BlogArticle;
})();
angular2_1.bootstrap(Blog);
