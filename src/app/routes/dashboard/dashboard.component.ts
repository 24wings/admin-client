import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

  dataGridData = [{ id: 1, name: 'aaa', birthDate: new Date() }];
}
