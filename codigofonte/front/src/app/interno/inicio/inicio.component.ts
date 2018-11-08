import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioService } from './inicio.service';

@Component({
  selector: 'inicio-component',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.style.css']
})

export class InicioComponent implements OnInit {

  constructor(@Inject(Router) private router: Router,
    @Inject(InicioService) private inicioService: InicioService) {

  }

  public ngOnInit(): void {

  }

}
