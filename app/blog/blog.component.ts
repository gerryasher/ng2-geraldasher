import { Component } from 'angular2/core';

@Component({
    templateUrl: './app/blog/blog.component.html'
})
export class BlogComponent {
    public pageTitle: string = "Blog Page";

    blogList: any[] = [
        {"title": "Artificial intelligence is dead: long live data analytics", "blogLink": "http://www.irishtimes.com/business/technology/artificial-intelligence-is-dead-long-live-data-analytics-1.2733881", "blogDate":"07/28/2016", "blogEntry":"By no means is AI dead! Just like saccharine is not real sugar, AI is not real intelligence. AI is a tool to help analyze and monitor the big data. I like to think of it as an intern who does the dirty work for the true intelligence. That is not to say AI is not much better at many things than a human is ..."},
        {"title": "How artificial intelligence will transform your business", "blogLink": "http://www.businessinsider.com.au/how-artificial-intelligence-will-transform-your-business-2016-7", "blogDate":"07/29/2016", "blogEntry":"Like I said it is kind of like having a intern who has a very specific specialty. A specialty which can be done for pennies as opposed to dollars."},
        {"title": "Wearables Creating New Opportunities For Intimate Marketing", "blogLink": "http://bandt.com.au/marketing/wearables-creating-new-opportunities-intimate-marketing-jason-dooris", "blogDate":"07/29/2016", "blogEntry":"WOW! what a great idea! Enhancing and even tracking the pleasure between the sheets. I could only imagine the competitive nature of this not to mention the augmented reality side of this. Can't wait!!"}
    ];
}
