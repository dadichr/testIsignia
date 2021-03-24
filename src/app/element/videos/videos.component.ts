import { ServiceService } from './../../service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  data: any = []
  image: any = []
  big: any = []
  constructor(private Service: ServiceService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData():any{
    this.Service.getPict().subscribe((result) => {
      result.length -= 95;
      this.data = result.slice(1, 3);
      this.image = result.slice(0, 2);
      this.big = result.slice(2, 3, 5);
      console.log(result);
    });
  }
}
