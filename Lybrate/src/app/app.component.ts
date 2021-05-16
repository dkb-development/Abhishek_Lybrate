import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lybrate';
  searchEmail="";
  constructor(private http: HttpClient,) { }
  emp_list:any = [];
  ngOnInit(): void {
    this.http.get('https://reqres.in/api/users?page=1').subscribe(
      (res: any)=>{
        this.emp_list = res.data;
        console.log(this.emp_list);
        
      },
      (err: any)=>{
        console.log(err);
      }
    )
  }
}
