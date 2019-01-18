import { Component } from '@angular/core';

import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  constructor(private serviceService: ServiceService) { }

  onSave() {
    // this.serviceService.storeServers(this.servers); // still no request is getting sent
    this.serviceService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onGet() {
    this.serviceService.getServers().subscribe(
      (response: Response) => {
        const data = response.json();
        /**
         * json method will look at our body property and get the data from in there and 
         * automatically turn it into a javascript object.
        */
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
