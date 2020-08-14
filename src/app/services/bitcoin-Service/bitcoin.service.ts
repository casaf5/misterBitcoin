import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  private rateUrl = 'https://blockchain.info/tobtc?'; // ADD CURRENCY AND VALUE
  constructor(private http: HttpClient) {}
  rateAtStart:string;
  getRate(value: number, currency: string): Observable<number> {
    const url = `${this.rateUrl}currency=${currency}&value=${value}`;
    return this.http.get<number>(url);
  }
  getMarketPrice() {
    const url =
      'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
    return this.http.get(url);
  }
  getAvgBlockSize() {
    const url =
      'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true';
    return this.http.get(url);
  }
  getTradeVolume() {
    const url =
      'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true';
    return this.http.get(url);
  }
  
}
