import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/services/BitcoinService/bitcoin.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  chartData: any;
  chartOptions = { height: 800, width: 1200, title: '' };
  months: any = [
    'January',
    'Fabruary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    const data = this.bitcoinService.getMarketPrice();
    this.chartData = data.values.map((coords, idx) => {
      coords.x = parseInt(coords.x + '000');
      let monthIdx = new Date(coords.x).getMonth();
      return idx % 5 === 0 ? [this.months[monthIdx], coords.y] : ['', coords.y];
    });
    this.chartOptions.title = data.description;
  }
}
