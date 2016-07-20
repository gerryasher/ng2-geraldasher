import { Component } from '@angular/core';

@Component({
    template: '<h3>{{pageTitle}}</h3>'
})
export class BlogComponent {
    public pageTitle: string = "Blog Page";
}
