import { Component } from 'angular2/core';

@Component({
    templateUrl: './app/blog/blog.component.html'
})
export class BlogComponent {
    public pageTitle: string = "Blog Page";

    blogList: any[] = [
        {"title": "something", "blogLink": "http://geraldasher.com", "blogDate":"01/10/2016", "blogEntry":"Some text in the blog entry"},
        {"title": "something", "blogLink": "http://geraldasher.com", "blogDate":"01/10/2016", "blogEntry":"Some text in the blog entry"},
        {"title": "something", "blogLink": "http://geraldasher.com", "blogDate":"01/10/2016", "blogEntry":"Some text in the blog entry"},
        {"title": "something", "blogLink": "http://geraldasher.com", "blogDate":"01/10/2016", "blogEntry":"Some text in the blog entry"},
        {"title": "something", "blogLink": "http://geraldasher.com", "blogDate":"01/10/2016", "blogEntry":"Some text in the blog entry"},
        {"title": "something", "blogLink": "http://geraldasher.com", "blogDate":"01/10/2016", "blogEntry":"Some text in the blog entry"},
        {"title": "something", "blogLink": "http://geraldasher.com", "blogDate":"01/10/2016", "blogEntry":"Some text in the blog entry"}
    ];
}
