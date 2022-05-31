import { AfterViewInit,ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {

  @ViewChild('GT') GT!: ElementRef;
  @ViewChild('RCB') RCB!:ElementRef;
  @ViewChild('RR') RR!: ElementRef;
  @ViewChild('CSK') CSK!:ElementRef;
  @ViewChild('MI') MI!: ElementRef;
  @ViewChild('SRH') SRH!:ElementRef;
  @ViewChild('PBKS') PBKS!: ElementRef;
  @ViewChild('LSG') LSG!: ElementRef;
  @ViewChild('DC') DC!:ElementRef;
  @ViewChild('KKR') KKR!:ElementRef;

  teamName:string| undefined;
  
  constructor(private data:DataService, private route:Router) { }
  

  ngOnInit(): void {
    this.teamName = this.data.sendName();
  }

  ngAfterViewInit(): void {
    
    if (this.teamName === 'GT') {
      this.GT.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if (this.teamName === 'RCB') {
      this.RCB.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if (this.teamName === 'MI') {
      this.MI.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if (this.teamName === 'RR') {
      this.RR.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if (this.teamName === 'CSK') {
      this.CSK.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if (this.teamName === 'LSG') {
      this.LSG.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if (this.teamName === 'DC') {
      this.DC.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if (this.teamName === 'SRH') {
      this.SRH.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if (this.teamName === 'PBKS') {
      this.PBKS.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if (this.teamName === 'KKR') {
      this.KKR.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  toChart(){
    this.route.navigate(['/chart']);
  }

  toTop(){
    window.scroll(0,0);
  }

}

