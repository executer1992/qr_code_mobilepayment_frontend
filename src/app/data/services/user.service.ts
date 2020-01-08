import { ApiService } from './../../core/api.service';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint: string = 'users';

  constructor(private apiService: ApiService, private storage: Storage) {}

  // getFunds() {
  //   this.apiService.get(this.endpoint)
  // }
}
