import { Component, OnInit } from '@angular/core';
import { DropDown } from './DropDown';
import { DateCheck } from './DateCheck';
import {IMyDpOptions} from 'mydatepicker';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public myDatePickerOptions: IMyDpOptions = {  
    dateFormat: 'yyyy-mm-dd',  
};  


  dateCheck:DateCheck;
  checklist:DropDown[];
  currentDate:Date;

  constructor(private datePipe: DatePipe){
this.dateCheck=new DateCheck();
this.currentDate= new Date();
this.dateCheck.lastMonth=null;
this.dateCheck.last15Days=null;
this.dateCheck.next15Days=null;
this.dateCheck.next7Days=null;
this.dateCheck.today=null;
this.dateCheck.tomorrow=null;
this.dateCheck.yesterday=null;
  }
  ngOnInit(): void {
    
   
    this.checklist=[
      {id: 0, text: 'Please select'},
      {id: 1, text: 'hello'}
    ];
    
  }
  formatDate
  title = 'DatePickerNew';
  enableDate:boolean;
  onChangeMake(id){
  if(id.value!=0){
    this.enableDate=true;
  }else{
    window.location.reload();
  }
  
  } 
  dateChange(event){
    if(event!=null){
    if(event=="1"){
      this.setDateValue(1,"lastMonth");
    }
  else if(event=="2"){
      this.setDateValue(15,"lastDate");
    }
    else if(event=="3"){
      this.setDateValue(7,"lastDate");
    }
    else if(event=="4"){
      this.setDateValue(1,"lastDate");
    }
    else if(event=="5"){
      this.setDateValue(1,"addDate");
    }
    else if(event=="6"){
      this.setDateValue(7,"addDate");
    }
    else if(event=="7"){
      this.setDateValue(15,"addDate");
    }
    else if(event=="8"){
      this.setDateValue(1,"both");
    }
  }
  }

  setDateValue(increase,data){
    
    var year=this.currentDate.getFullYear();
    var date=this.currentDate.getDate();
    var month=this.currentDate.getMonth()+1;
    
    this.currentDate= new Date();
    if(data=="lastMonth"){
     var newDate = new Date();
     newDate.setMonth(this.currentDate.getMonth());
      this.dateCheck.endDate={date:{year:year,
        month:month,day:date}};
        this.dateCheck.startDate={date:{year:newDate.getFullYear(),
          month:newDate.getMonth(),day:newDate.getDate()}};
   
    }else if(data=="lastDate"){
     var newDate = new Date();
     
      newDate.setDate(this.currentDate.getDate()-increase);
      this.dateCheck.endDate={date:{year:year,
        month:month,day:date}};
       this.dateCheck.startDate={date:{year:newDate.getFullYear(),
          month:newDate.getMonth(),day:newDate.getDate()}};
         
         
    }
    else if(data="addDate"){
      var newDate = new Date();
     newDate.setDate(this.currentDate.getDate()+increase);
     this. dateCheck.startDate={date:{year:year,
        month:month,day:date}};
       this.dateCheck.endDate={date:{year:newDate.getFullYear(),
          month:newDate.getMonth()+1,day:newDate.getDate()}};
          
    }
   else if(data="both"){
    var  newDate = new Date();
      newDate.setMonth(this.currentDate.getMonth()+1);
     this. dateCheck.startDate={date:{year:year,
        month:month,day:date}};
       this. dateCheck.endDate={date:{year:newDate.getFullYear(),
           month:newDate.getMonth(),day:newDate.getDate()}};
      }

    
  }
}


