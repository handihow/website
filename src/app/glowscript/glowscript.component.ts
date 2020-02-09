import { Component,Input,OnInit} from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-glowscript',
  templateUrl: './glowscript.component.html',
  styleUrls: ['./glowscript.component.css']
})
export class GlowscriptComponent implements OnInit {

  id:string = 'https://handihow.github.io/lagrange-points/'; 
  url: SafeResourceUrl;
  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit() {
  	this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.id);
  }

}
