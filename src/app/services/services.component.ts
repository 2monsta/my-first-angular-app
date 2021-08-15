import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  allowNewServer = false;
  serverCreationstatus = "no server was created";
  serverName="testServer";
  serverCreated = false;


  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    } ,2000);
   }

  ngOnInit(): void {
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = event.target.value;
    if(this.serverName == ""){
      this.serverCreated = false;
    }
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationstatus="this was created";
  }
}
