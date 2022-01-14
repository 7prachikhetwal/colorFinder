




import { Component } from '@angular/core';
import { ColorOutput } from './app.model';
import { HttpService } from './http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ColorApp';
  searchColor: ColorOutput | undefined;
   isLoading: boolean;
  inValid: boolean;

  constructor(private httpService: HttpService) {
    this.isLoading = false;
    this.inValid = false;

  }
  getSearchColor(searchQueryString: string) {
    if (searchQueryString) {
      this.isLoading = true;
      this.inValid = false;
      const url = 'https://backend.picular.co/api/search?query=' + searchQueryString;
      this.httpService.fetchData(url).subscribe((data:any) => {
        this.isLoading = false;
        this.searchColor = data;
      })
    } else {
      this.inValid = true;
    }

  }
}