import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }


  public get loginUrl(): string {

    return environment.loginUrl;
  }
}
