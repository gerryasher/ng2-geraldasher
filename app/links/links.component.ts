import { Component } from 'angular2/core';

@Component({
    templateUrl: './app/links/links.component.html'
})
export class LinksComponent {
    public pageTitle: string = "Links Page";

    links: any[] = [
        {"description": "Tony Robbins - What Do You Need To Do To Make It Happen?", "linkUrl": "https://www.youtube.com/watch?v=apfTz0Ga6Jo"},
        {"description": "Tony Robbins's Top 10 Rules For Success", "linkUrl": "https://www.youtube.com/watch?v=O9F19ban7A4"},
        {"description": "Steve Jobs's Top 10 Rules For Success", "linkUrl": "https://www.youtube.com/watch?v=eHzAtxW3TzY"},
        {"description": "10 Ways to stop making EXCUSES", "linkUrl": "https://www.youtube.com/watch?v=h8jGoaSx1j4"},
        {"description": "10 Ways to THINK BIG", "linkUrl": "https://www.youtube.com/watch?v=VMc23pL5WC8"},
        {"description": "10 ways to be DRIVEN", "linkUrl": "https://www.youtube.com/watch?v=Ok_KzDr-_KU"}
    ];

}
