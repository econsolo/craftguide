import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternoService } from './interno.service';

@Component({
  selector: './interno-component',
  templateUrl: './interno.component.html',
  styleUrls: ['./interno.style.css']
})

export class InternoComponent implements OnInit {

  constructor(@Inject(Router) private router: Router,
    @Inject(InternoService) private internoService: InternoService) {

  }


  ngOnInit() {
  }

}
