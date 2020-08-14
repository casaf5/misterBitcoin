import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin-service/bitcoin.service';
import { Chart } from 'chart.js';
import * as moment from 'moment';
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
  charts = { market: null, avarage: null, trade: null };
  constructor(private bitcoinService: BitcoinService) {}
  buildData(data) {
    let timeData = [];
    let numData = [];
    data.values.map((coords) => {
      coords.x = parseInt(coords.x + '000');
      timeData.push(new Date(coords.x).toLocaleDateString());
      numData.push(coords.y);
    });
    return { time: timeData, numbers: numData };
  }
  buildChart(title: string, data: any) {
    return {
      data: {
        labels: data.time,
        datasets: [
          {
            data: data.numbers,
            backgroundColor: 'yellow',
            borderColor: 'orange',
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 2,
            label: 'Rate',
            pointHitRadius: 20,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: title+'(March-August)',
          fontSize: 25,
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                stepSize: 30,
                maxTicksLimit: 200,
              },
              display: false,
            },
          ],
          yAxes: [
            {
              ticks: {
                stepSize: 20,
                maxTicksLimit: 11,
                fontSize: 15,
              },
              display: true,
            },
          ],
        },
      },
    };
  }
  ngOnInit(): void {
    this.bitcoinService.getMarketPrice().subscribe((data: any) => {
      this.chartData.avgChart = this.buildData(data);
      this.charts.market = new Chart(
        'canvasMarketPrice',
        this.buildChart(data.description, this.chartData.avgChart)
      );
    });
    this.bitcoinService.getTradeVolume().subscribe((data: any) => {
      this.chartData.tradeVolume = this.buildData(data);
      this.charts.market = new Chart(
        'canvasTradeVolume',
        this.buildChart(data.description, this.chartData.tradeVolume)
      );
    });
    this.bitcoinService.getAvgBlockSize().subscribe((data: any) => {
      this.chartData.avgChart = this.buildData(data);
      this.charts.market = new Chart(
        'canvasAvgTrade',
        this.buildChart(data.description, this.chartData.avgChart)
      );
    });
  }
}
