import { Component } from 'angular2/core';

@Component({
    templateUrl: './app/links/links.component.html'
})
export class LinksComponent {
    public pageTitle: string = "Links Page";

    links: any[] = [
        {"description": "something", "linkUrl": "http://geraldasher.com"},
        {"description": "special", "linkUrl": "http://geraldasher.com"},
        {"description": "Top 10 links", "linkUrl": "http://geraldasher.com"},
        {"description": "Some top 10", "linkUrl": "http://geraldasher.com"},
        {"description": "Grwoth", "linkUrl": "http://geraldasher.com"},
        {"description": "Hacking", "linkUrl": "http://geraldasher.com"}
    ];

}
