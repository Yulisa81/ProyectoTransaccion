import { Component, OnInit } from '@angular/core';
import { CtrlInternetAccessService } from '../ctrl-internet-access.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SegUsuario } from '../Shared/SegUsuario';
import { CtrlWebServiceService } from '../ctrl-web-service.service';

@Component({
  selector: 'app-frm-login',
  templateUrl: './frm-login.page.html',
  styleUrls: ['./frm-login.page.scss'],
})


export class FrmLoginPage extends CtrlInternetAccessService implements OnInit {

  private myForm: FormGroup;
  private usuario = new SegUsuario();
  public disabled = true;


  constructor(private router: Router, private formBuilder: FormBuilder, private ctrlWebServiceService: CtrlWebServiceService) {
    super()
    this.myForm = this.validForm();
  }

  ngOnInit() {

  }


  login() {


    var consulta = {
      Modelo: {
        StrUsuario: this.usuario.StrUsuario,
        StrPassword: this.usuario.StrPassword
      }
    }

    console.log(consulta.Modelo);

    if (this.checkInternetConnection()) {
      console.log("TIENE CONEXION");
    } else {
      console.log("NO TIENE CONEXION");
    }
    this.ctrlWebServiceService.create(1, "");

  }

  private validForm() {
    return this.formBuilder.group({
      txtUsuario: ['', Validators.compose([Validators.maxLength(50), Validators.required]), Validators.email],
      txtPassword: ['', Validators.required,Validators.pattern('[a-zA-Z ]*')]

    });
  }

  saveData() {

    alert(JSON.stringify(this.myForm.value));
  }
  public change() {
    this.disabled = !this.disabled;
  }
}
