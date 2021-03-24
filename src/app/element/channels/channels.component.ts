import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../service/service.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  data: any = [];
  constructor(private Service: ServiceService) {}

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    return this.Service.getchannel().subscribe((result) => {
      console.log(result);
      this.data = result;
    });
  }
}

