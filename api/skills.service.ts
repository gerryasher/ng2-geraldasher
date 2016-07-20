import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillsService {
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {

    }
    
    getSkills() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    // createSkills(skill) {
    //      this._http.post(this._url, JSON.stringify(skill))
    //          .map(res =? res.json());    
    // }

    // ...
}
