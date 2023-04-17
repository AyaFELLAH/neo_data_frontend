import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ClientModel } from './client-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {
  clients :ClientModel[]| undefined;
  readonly API_URL="http://localhost:8080/api/v1"
  readonly ENDPOINT_CLIENTS ="/clients"

  constructor(private httpClient:HttpClient) { }

  getClients(){
    this.httpClient.get<Array<ClientModel>>(this.API_URL+this.ENDPOINT_CLIENTS).subscribe((data) => {
      if(data){
        this.clients=data; 
      }
    });
	}


   deleteClient(client:ClientModel)
   {
    return this.httpClient.delete(this.API_URL+this.ENDPOINT_CLIENTS+"/"+client.idClient);
   }

  }
