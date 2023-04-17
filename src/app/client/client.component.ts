import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceClientService} from './service-client.service'
import { OnInit } from '@angular/core'
import { ClientModel } from './client-model';

@Component({
  standalone: true,
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  imports :[
    CommonModule
  ],
})
export class ClientComponent implements OnInit{
  clients!: ClientModel[];
  constructor (public clientService: ServiceClientService){

  }
  ngOnInit() {
    this.clientService.getClients();
   
  }

  supprimerClient(client:ClientModel) {
    this.clientService.deleteClient(client).subscribe(()=>{
      //this.clients = this.clients.filter(c => c !== client);
      this.ngOnInit();
    });
  }
}
