import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/services/BitcoinService/bitcoin.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  chartData = { tradeVolume: null, avgChart: null, marketPrice: null };
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
  buildChart(data) {
    // console.log('data', data);
    return data.values.map((coords) => {
      coords.x = parseInt(coords.x + '000');
      let monthIdx = new Date(coords.x).getMonth();
      return [this.months[monthIdx], coords.y];
    });
  }
  ngOnInit(): void {
    this.bitcoinService
      .getAvgBlockSize()
      .subscribe((data) => (this.chartData.avgChart = this.buildChart(data)));
    this.bitcoinService
      .getTradeVolume()
      .subscribe(
        (data) => (this.chartData.tradeVolume = this.buildChart(data))
      );
    this.bitcoinService
      .getMarketPrice()
      .subscribe(
        (data) => (this.chartData.marketPrice = this.buildChart(data))
      );
  }
}
