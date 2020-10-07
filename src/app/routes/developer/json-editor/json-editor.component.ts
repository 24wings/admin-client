import { Component } from '@angular/core';

@Component({selector:'json-editor', templateUrl: './json-editor.component.html'})
export class  JsonEditorComponent{
    json

    config;

    preview(){
        this.config=JSON.parse(this.json);
    }
    clear(){
        this.config=null;
    }

}
