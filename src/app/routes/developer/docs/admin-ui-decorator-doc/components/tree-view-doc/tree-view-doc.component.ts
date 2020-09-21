import { Component } from '@angular/core';
import { TreeViewCase } from 'src/app/routes/developer/dto-pages/tree-view-case';

@Component({selector: 'tree-view-doc', templateUrl: './tree-view-doc.component.html'})
export class TreeViewDocComponent{
    TreeViewCase = TreeViewCase;

}
