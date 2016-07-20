import { Component } from '@angular/core';

@Component({
    template: '<h3>{{pageTitle}}</h3>'
})
export class SkillsComponent {
    public pageTitle: string = "Skills Page";
}
