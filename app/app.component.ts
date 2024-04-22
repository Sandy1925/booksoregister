import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'register';
  regForm!:FormGroup;
  result!:Customer;

  constructor(private http:HttpClient,private builder:FormBuilder){
    this.regForm=this.builder.group({
      name:new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
      contact:new FormControl()

      })


  }

  goToLog(){
    console.log(this.regForm.value);
    this.http.post<Customer>("http://localhost:8001/api/newCustomer",this.regForm.value).subscribe(data=>{
      console.log(data);
      document.cookie="bookso"+data.email;
    },error=>{
    console.log(error.error);
    alert(error.error.message);
    })
    
    window.location.href="http://localhost:4202";

    
  }
}
