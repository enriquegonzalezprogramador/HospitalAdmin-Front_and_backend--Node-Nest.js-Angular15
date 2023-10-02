import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo';

    // Doughnut
    @Input('labels') doughnutChartLabels: string[] = [
      'Download Sales',
      'In-Store Sales',
      'Mail-Order Sales',
    ];
    @Input('data') doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [350, 450, 100] },
        { data: [50, 150, 120] },
        { data: [250, 130, 70] },
      ],
    };
    public doughnutChartType: ChartType = 'doughnut';

   /* public colors: Color[] = [
      { backgroundColor: ['#9E120E', '#FF5800', '#FFB414']}
  ]*/

}
