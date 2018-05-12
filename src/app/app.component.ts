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
    public lineChartLabels: Array<any> = [];
    public datas: Array<any> = [];

    public data;
    public data2;

    public populate(data) {
        this.datas = [];

        data.forEach(element => {
            this.datas.push(element.duration);
            this.lineChartLabels.push(element.id);
        });

        // let chartLine = { data: this.datas, label: type};
        this.lineChartData.push(this.datas);
        // this.lineChartLabels.push(type);
        console.log(this.lineChartData);
        console.log(this.lineChartLabels);

        // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
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

