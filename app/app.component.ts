import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { SkillsService } from './api/skills.service';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { LinksComponent } from './links/links.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';


// additional imports

@Component({
    selector: 'gasher-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [SkillsService, HTTP_PROVIDERS]
})
export class AppComponent {

    constructor(private _skillService: SkillsService) {
        this._skillService.getSkills()
            .subscribe(posts => console.log(posts));
    }
    
}
