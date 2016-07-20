import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { LinksComponent } from './links/links.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

export const routes: RouterConfig = [
  
  { path: '',    component: HomeComponent },
  { path: 'about',   component: AboutComponent },
  { path: 'blog',   component: BlogComponent },
  { path: 'links',   component: LinksComponent },
  { path: 'skills',   component: SkillsComponent },
  { path: 'contact', component: ContactComponent }

  // { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
