import { Component } from 'angular2/core';

@Component({
    template: `
        <div class="stripe">
            <div class="container">
                <div class="row">
                    <div class="offset-1 col-xs-10">

                        <h2>Contact Info</h2>

                        <address>
                            Gerald Asher<br />
                            Whittier, CA.<br />
                        </address>

                        <address>
                            <strong>Phone:</strong> 562 882-1419<br />
                            <strong>Email:</strong>   <a href="mailto:GerryAsher@Gmail.com">GerryAsher@Gmail.com</a>
                        </address>

                    </div>
                </div>
            </div>
        </div>
    `
})
export class ContactComponent {
    public pageTitle: string = "Contact";
}
