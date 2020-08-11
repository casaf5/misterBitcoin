import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
const marketPriceChartData = {
  name: 'Market Price (USD)',
  unit: 'USD',
  period: 'day',
  description: 'Average USD market price across major bitcoin exchanges',
  values: [
    {
      x: 1583971200,
      y: 7936.65,
    },
    {
      x: 1584057600,
      y: 4830.21,
    },
    {
      x: 1584144000,
      y: 5609.03,
    },
    {
      x: 1584230400,
      y: 5166.26,
    },
    {
      x: 1584316800,
      y: 5348.44,
    },
    {
      x: 1584403200,
      y: 5026.35,
    },
    {
      x: 1584489600,
      y: 5357.61,
    },
    {
      x: 1584576000,
      y: 5410.23,
    },
    {
      x: 1584662400,
      y: 6195.2,
    },
    {
      x: 1584748800,
      y: 6226.44,
    },
    {
      x: 1584835200,
      y: 6189.85,
    },
    {
      x: 1584921600,
      y: 5822.62,
    },
    {
      x: 1585008000,
      y: 6502.16,
    },
    {
      x: 1585094400,
      y: 6768.49,
    },
    {
      x: 1585180800,
      y: 6698.46,
    },
    {
      x: 1585267200,
      y: 6763.75,
    },
    {
      x: 1585353600,
      y: 6369.09,
    },
    {
      x: 1585440000,
      y: 6260.95,
    },
    {
      x: 1585526400,
      y: 5885.41,
    },
    {
      x: 1585612800,
      y: 6405.29,
    },
    {
      x: 1585699200,
      y: 6428.28,
    },
    {
      x: 1585785600,
      y: 6652.87,
    },
    {
      x: 1585872000,
      y: 6809.11,
    },
    {
      x: 1585958400,
      y: 6741.67,
    },
    {
      x: 1586044800,
      y: 6871.69,
    },
    {
      x: 1586131200,
      y: 6777.44,
    },
    {
      x: 1586217600,
      y: 7343.2,
    },
    {
      x: 1586304000,
      y: 7205.55,
    },
    {
      x: 1586390400,
      y: 7365.03,
    },
    {
      x: 1586476800,
      y: 7293.69,
    },
    {
      x: 1586563200,
      y: 6873.24,
    },
    {
      x: 1586649600,
      y: 6891.6,
    },
    {
      x: 1586736000,
      y: 6915.37,
    },
    {
      x: 1586822400,
      y: 6857.66,
    },
    {
      x: 1586908800,
      y: 6871.95,
    },
    {
      x: 1586995200,
      y: 6623.8,
    },
    {
      x: 1587081600,
      y: 7112.27,
    },
    {
      x: 1587168000,
      y: 7034.89,
    },
    {
      x: 1587254400,
      y: 7259.36,
    },
    {
      x: 1587340800,
      y: 7130.04,
    },
    {
      x: 1587427200,
      y: 6840.24,
    },
    {
      x: 1587513600,
      y: 6852.52,
    },
    {
      x: 1587600000,
      y: 7130.99,
    },
    {
      x: 1587686400,
      y: 7477.6,
    },
    {
      x: 1587772800,
      y: 7507.08,
    },
    {
      x: 1587859200,
      y: 7549.52,
    },
    {
      x: 1587945600,
      y: 7699.27,
    },
    {
      x: 1588032000,
      y: 7790.66,
    },
    {
      x: 1588118400,
      y: 7765.33,
    },
    {
      x: 1588204800,
      y: 8777.63,
    },
    {
      x: 1588291200,
      y: 8628.77,
    },
    {
      x: 1588377600,
      y: 8824.66,
    },
    {
      x: 1588464000,
      y: 8973.82,
    },
    {
      x: 1588550400,
      y: 8903.95,
    },
    {
      x: 1588636800,
      y: 8885.93,
    },
    {
      x: 1588723200,
      y: 9030.96,
    },
    {
      x: 1588809600,
      y: 9170.79,
    },
    {
      x: 1588896000,
      y: 10002.48,
    },
    {
      x: 1588982400,
      y: 9821.8,
    },
    {
      x: 1589068800,
      y: 9527.39,
    },
    {
      x: 1589155200,
      y: 8754.46,
    },
    {
      x: 1589241600,
      y: 8617.25,
    },
    {
      x: 1589328000,
      y: 8814.53,
    },
    {
      x: 1589414400,
      y: 9305.93,
    },
    {
      x: 1589500800,
      y: 9790.31,
    },
    {
      x: 1589587200,
      y: 9303.59,
    },
    {
      x: 1589673600,
      y: 9385.7,
    },
    {
      x: 1589760000,
      y: 9669.4,
    },
    {
      x: 1589846400,
      y: 9719.37,
    },
    {
      x: 1589932800,
      y: 9785.74,
    },
    {
      x: 1590019200,
      y: 9510.67,
    },
    {
      x: 1590105600,
      y: 9057.57,
    },
    {
      x: 1590192000,
      y: 9167.26,
    },
    {
      x: 1590278400,
      y: 9178.32,
    },
    {
      x: 1590364800,
      y: 8730.73,
    },
    {
      x: 1590451200,
      y: 8899.66,
    },
    {
      x: 1590537600,
      y: 8842.85,
    },
    {
      x: 1590624000,
      y: 9197.54,
    },
    {
      x: 1590710400,
      y: 9569.21,
    },
    {
      x: 1590796800,
      y: 9425.98,
    },
    {
      x: 1590883200,
      y: 9698.1,
    },
    {
      x: 1590969600,
      y: 9450.84,
    },
    {
      x: 1591056000,
      y: 10204.23,
    },
    {
      x: 1591142400,
      y: 9525.57,
    },
    {
      x: 1591228800,
      y: 9658.04,
    },
    {
      x: 1591315200,
      y: 9794.56,
    },
    {
      x: 1591401600,
      y: 9623.75,
    },
    {
      x: 1591488000,
      y: 9670.43,
    },
    {
      x: 1591574400,
      y: 9753.85,
    },
    {
      x: 1591660800,
      y: 9782.59,
    },
    {
      x: 1591747200,
      y: 9775.15,
    },
    {
      x: 1591833600,
      y: 9892.13,
    },
    {
      x: 1591920000,
      y: 9286.42,
    },
    {
      x: 1592006400,
      y: 9459.97,
    },
    {
      x: 1592092800,
      y: 9473.5,
    },
    {
      x: 1592179200,
      y: 9330.07,
    },
    {
      x: 1592265600,
      y: 9426.7,
    },
    {
      x: 1592352000,
      y: 9526,
    },
    {
      x: 1592438400,
      y: 9454.81,
    },
    {
      x: 1592524800,
      y: 9380.03,
    },
    {
      x: 1592611200,
      y: 9300.15,
    },
    {
      x: 1592697600,
      y: 9357.43,
    },
    {
      x: 1592784000,
      y: 9284.78,
    },
    {
      x: 1592870400,
      y: 9691.9,
    },
    {
      x: 1592956800,
      y: 9621.49,
    },
    {
      x: 1593043200,
      y: 9276.58,
    },
    {
      x: 1593129600,
      y: 9240.85,
    },
    {
      x: 1593216000,
      y: 9154.45,
    },
    {
      x: 1593302400,
      y: 9004.23,
    },
    {
      x: 1593388800,
      y: 9127.47,
    },
    {
      x: 1593475200,
      y: 9185.35,
    },
    {
      x: 1593561600,
      y: 9133.97,
    },
    {
      x: 1593648000,
      y: 9236.38,
    },
    {
      x: 1593734400,
      y: 9087.98,
    },
    {
      x: 1593820800,
      y: 9072.42,
    },
    {
      x: 1593907200,
      y: 9131.31,
    },
    {
      x: 1593993600,
      y: 9089.09,
    },
    {
      x: 1594080000,
      y: 9348.91,
    },
    {
      x: 1594166400,
      y: 9256.23,
    },
    {
      x: 1594252800,
      y: 9440.07,
    },
    {
      x: 1594339200,
      y: 9238.04,
    },
    {
      x: 1594425600,
      y: 9287.4,
    },
    {
      x: 1594512000,
      y: 9235.96,
    },
    {
      x: 1594598400,
      y: 9295.9,
    },
    {
      x: 1594684800,
      y: 9238.13,
    },
    {
      x: 1594771200,
      y: 9254.52,
    },
    {
      x: 1594857600,
      y: 9193.51,
    },
    {
      x: 1594944000,
      y: 9131,
    },
    {
      x: 1595030400,
      y: 9154.19,
    },
    {
      x: 1595116800,
      y: 9174.71,
    },
    {
      x: 1595203200,
      y: 9214.66,
    },
    {
      x: 1595289600,
      y: 9163.87,
    },
    {
      x: 1595376000,
      y: 9392.66,
    },
    {
      x: 1595462400,
      y: 9537.4,
    },
    {
      x: 1595548800,
      y: 9613.11,
    },
    {
      x: 1595635200,
      y: 9551.28,
    },
    {
      x: 1595721600,
      y: 9707.5,
    },
    {
      x: 1595808000,
      y: 9938.83,
    },
    {
      x: 1595894400,
      y: 11042.4,
    },
    {
      x: 1595980800,
      y: 10934.94,
    },
    {
      x: 1596067200,
      y: 11102.67,
    },
    {
      x: 1596153600,
      y: 11114.93,
    },
    {
      x: 1596240000,
      y: 11343.88,
    },
    {
      x: 1596326400,
      y: 11823.69,
    },
    {
      x: 1596412800,
      y: 11077.77,
    },
    {
      x: 1596499200,
      y: 11242.57,
    },
    {
      x: 1596585600,
      y: 11194.25,
    },
    {
      x: 1596672000,
      y: 11750.28,
    },
    {
      x: 1596758400,
      y: 11772.94,
    },
    {
      x: 1596844800,
      y: 11605.6,
    },
    {
      x: 1596931200,
      y: 11767.6,
    },
  ],
};
@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  private rateUrl = 'https://blockchain.info/tobtc?'; // ADD CURRENCY AND VALUE
  constructor(private http: HttpClient) {}
  getRate(value: number, currency: string): Observable<number> {
    const url = `${this.rateUrl}currency=${currency}&value=${value}`;
    console.log(url);
    return this.http.get<number>(url);
  }
  getMarketPrice() {
    return marketPriceChartData;
  }
  getConfirmedTransactions() {}
}