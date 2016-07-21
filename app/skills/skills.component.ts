import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

import { SkillsService } from '../api/skills.service';

@Component({
    template: '<h3>{{pageTitle}}</h3>',
    providers: [SkillsService, HTTP_PROVIDERS]
})

export class SkillsComponent {
    public pageTitle: string = "Skills Page";
    
    constructor (private _skillsService: SkillsService) {
        this._skillsService.getSkills()
            .subscribe(skills => console.log(skills));
    }
}
