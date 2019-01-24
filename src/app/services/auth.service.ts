import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { AjaxService } from './ajax.service';
import { ConfigService } from './config.service';


@Injectable()
export class AuthService {

  constructor(
    private route: ActivatedRoute,
    private ajaxService: AjaxService,
    private router: Router,
    private configService: ConfigService
  ) { }

  public async authenticate(email: string, senha: string) {
    const loginUrl = this.configService.loginUrl;
    console.log(loginUrl)
    const returnUrl = this.route.snapshot.queryParams.return || '';

    const response = await this.ajaxService.post<any>(loginUrl, { email, senha });
    // this.router.navigate([])
    console.log(response)
  }


}
