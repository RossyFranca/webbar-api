import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}
  loading = false;
  returnUrl: string;
  logado = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {



    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  async login() {
    this.loading = true;
    try {
      await this.authService.authenticate(this.model.email, this.model.password)

    } catch (error) {
      console.log(error)
    } finally {

      this.loading = false;
    }
    console.log(this.logado)

  }
}
