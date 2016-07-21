import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { LinksComponent } from './links/links.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@RouteConfig([  
  { path: '/',          name: 'Home',       component: HomeComponent, useAsDefault: true },
  { path: '/about',     name: 'About',      component: AboutComponent },
  { path: '/blog',      name: 'Blog',       component: BlogComponent },
  { path: '/links',     name: 'Links',      component: LinksComponent },
  { path: '/skills',    name: 'Skills',     component: SkillsComponent },
  { path: '/contact',   name: 'Contact',    component: ContactComponent },
  { path: '/*other',    name: 'Other',      redirectTo: ['Home'] }
])

@Component({
    selector: 'gasher-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {    
}
