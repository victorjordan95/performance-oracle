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
    public lineChartType = 'line';

    // lineChart
    public lineChartData: Array<any> = [];
    public lineChartLabels: Array<any> = [1, 3, 5, 8, 10];
    public datas: Array<any> = [];

    public data;
    public data2;
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['Análise'];
    public barChartType = 'bar';
    public barChartLegend = true;

    public barChartData = [];

    public populate(data) {

        data.forEach(element => this.barChartData.push({'data': [element.valor], 'label': element.nome}));

    }

    constructor(private _appService: AppService) { }

    ngOnInit(): void {
        this._appService.getData().subscribe(
            data => {
                this.data = data;
                console.log(this.data);
                this.allDataFetched = true;
                this.populate(this.data);
            },
            err => console.log(err)
        );
    }

}

