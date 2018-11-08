import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: './externo-component',
    templateUrl: './externo.component.html',
    styleUrls: ['./externo.style.css']
})

export class ExternoComponent implements OnInit {

    constructor(@Inject(Router) private router: Router) {

    }

    ngOnInit() {

    }

}
