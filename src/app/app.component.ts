import { AppService } from './app.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public allDataFetched;
    public lineChartType: string = 'line';

    // lineChart
    public lineChartData: Array<any> = [];
    public lineChartLabels: Array<any> = [1, 3, 5, 8, 10];
    public datas: Array<any> = [];

    public data;
    public data2;

    public populate(data) {
        this.datas = [];

        data.forEach(element => {
            this.datas.push(element.duration);
        });

        this.lineChartData.push(this.datas);
        console.log(this.lineChartData);
        console.log(this.lineChartLabels);

    }

    constructor(private _appService: AppService) { }

    ngOnInit(): void {
        this._appService.getData1().subscribe(
            data => {
                this.data = data;
                this.populate(this.data);
                this._appService.getData2().subscribe(
                    data2 => {
                        this.data2 = data2;
                        this.populate(this.data2);
                        this.allDataFetched = true;
                    },
                    err => console.log(err)
                );

            },
            err => console.log(err)
        );
    }

}

