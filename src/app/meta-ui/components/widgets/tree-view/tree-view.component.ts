import { Component, Input } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { TreeViewConfig } from 'src/app/meta-ui/core/widgets/tree-view-config';

@Component({selector: 'tree-view', templateUrl: './tree-view.component.html'})
export class TreeViewComponent{
    @Input() config: TreeViewConfig;

    nodes = [
        {
          title: 'parent 1',
          key: '100',
          expanded: true,
          children: [
            {
              title: 'parent 1-0',
              key: '1001',
              expanded: true,
              children: [
                { title: 'leaf', key: '10010', isLeaf: true },
                { title: 'leaf', key: '10011', isLeaf: true },
                { title: 'leaf', key: '10012', isLeaf: true }
              ]
            },
            {
              title: 'parent 1-1',
              key: '1002',
              children: [{ title: 'leaf', key: '10020', isLeaf: true }]
            },
            {
              title: 'parent 1-2',
              key: '1003',
              children: [
                { title: 'leaf', key: '10030', isLeaf: true },
                { title: 'leaf', key: '10031', isLeaf: true }
              ]
            }
          ]
        }
      ];
    
      nzEvent(event: NzFormatEmitEvent): void {
        console.log(event);
      }

}
