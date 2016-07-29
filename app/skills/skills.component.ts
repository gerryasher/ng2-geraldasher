import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
    templateUrl: './app/skills/skills.component.html'
})

export class SkillsComponent {
    public pageTitle: string = "Skills Page";

    skills: any[] = [{"name":"Bootstrap","category":"css"},{"name":"CSS","category":"css"},{"name":"Media Queries","category":"css"},{"name":"C#","category":"developer"},{"name":"Phonegap","category":"tools"},{"name":"MVC","category":"developer"},{"name":"Entity Framework","category":"data"},{"name":"Razor","category":"developer"},{"name":"Interfaces","category":"patterns"},{"name":"Repository","category":"patterns"},{"name":"VB","category":"developer"},{"name":"IIS","category":"tools"},{"name":"Sublime","category":"tools"},{"name":"TFS","category":"tools"},{"name":"SCRUM","category":"tools"},{"name":"Resharper","category":"tools"},{"name":"JQuery","category":"scripting"},{"name":"HighCharts","category":"scripting"},{"name":"Google Charts","category":"scripting"},{"name":"Javascript","category":"scripting"},{"name":"MeteorJS","category":"scripting"},{"name":"KnockoutJS","category":"scripting"},{"name":"AngularJS","category":"scripting"},{"name":"AJAX","category":"scripting"},{"name":"HTML","category":"css"},{"name":"XML","category":"data"},{"name":"WebForms","category":"developer"},{"name":"JSON","category":"data"},{"name":"PhoneGap","category":"mobile"},{"name":"Mobile Apps","category":"mobile"},{"name":"VS 2013","category":"tools"},{"name":"Dreamweaver","category":"tools"},{"name":"Photoshop","category":"tools"},{"name":"SQL Server","category":"data"},{"name":"MySQL","category":"data"},{"name":"SEM","category":"marketing"},{"name":"SEO","category":"marketing"},{"name":"PPC","category":"marketing"},{"name":"Conversions","category":"marketing"},{"name":"Goals","category":"marketing"},{"name":"Marketing Automation","category":"marketing"},{"name":"Bounce Rate","category":"marketing"},{"name":"Adwords","category":"marketing"},{"name":"Google Analytics","category":"marketing"},{"name":"Clicky","category":"marketing"},{"name":"Webmaster Tools","category":"marketing"},{"name":"Acton Software","category":"marketing"},{"name":"Strategy","category":"marketing"},{"name":"SQL Queries","category":"data"},{"name":"Stored Procedures","category":"data"},{"name":"Linq","category":"data"},{"name":"TDD","category":"developer"},{"name":"SOLID","category":"patterns"},{"name":"Web API","category":"developer"},{"name":"Responsive Web","category":"css"}];   
    
}
