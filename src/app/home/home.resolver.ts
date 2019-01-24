import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class HomeResolver implements Resolve<Promise<any>>{

  constructor() { }

  async resolve(): Promise<any> {
    let result

    return result

  }
}
