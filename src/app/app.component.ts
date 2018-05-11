import { AppService } from './app.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit{
	public allDataFetched;
	public lineChartType: string = 'line';
	
	// lineChart
	public lineChartData: Array<any> = [];
	public lineChartLabels: Array<any> = [];
	public data;

	public populate(data){
		data.forEach(element => {
			console.log(element);
			this.lineChartData.push(element.cost);
			this.lineChartLabels.push(element.tempo);
		});
	}

	constructor(private _appService: AppService){ }

	ngOnInit(): void {
		this._appService.getData().subscribe(
			data => {
				this.data = data;
				this.populate(this.data);
				this.allDataFetched = true;	
			},
			err => console.log(err)
		  );
	}

}

