import { Component } from 'angular2/core';

@Component({
    template: `
        <div id="about" class="stripe">
            <div class="container animated slideInRight">
                <div class="row">
                    <div class="offset-1 col-xs-10">

                        <h2>Asp.Net Developer & Online Marketing</h2>
                        <p>
                            I've been a developer for over 12 years. In my most recent position I am working on web applications.
                            I also work on websites which are used to attract internet traffic
                            and convert users to prospect or leads. I enjoy modifying
                            pages as needed to help improve conversions of the landing pages.
                        </p>
                        <p>
                            I use Bootstrap and custom CSS to create responsive web pages as needed. I'll test on all devices to
                            make sure the site is acting as it needs to for the various media queries needed to control.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    `
})
export class AboutComponent {
    public pageTitle: string = "About this site";
}
