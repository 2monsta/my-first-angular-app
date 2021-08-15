import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignmenttwo',
  templateUrl: './assignmenttwo.component.html',
  styleUrls: ['./assignmenttwo.component.css']
})
export class AssignmenttwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = "";
  allowClick = false;

  onClickMe(){
    return this.username="";
  }

  onDisable(){
    if(this.username == ""){
      return true;
    }
    else{
      return false;
    }
  }
}
