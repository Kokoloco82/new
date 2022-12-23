import { Component, OnInit } from '@angular/core';
import { FillinFrage } from '../fillin-frage';
import { FragenService } from '../fragen.service';
import { McFrage } from '../mc-frage';
import { ScFrage } from '../sc-frage';
import { AllefragenService } from '../allefragen.service';
import { Frage } from '../allefragen';

@Component({
  selector: 'app-lernliste',
  templateUrl: './lernliste.component.html',
  styleUrls: ['./lernliste.component.css']
})
export class LernlisteComponent implements OnInit {
  // @Input() frage: AllefragenService;
  // mcfragen: McFrage[]
  // scfragen: ScFrage[]
  // fillinfragen: FillinFrage[]
  allefragenliste: Frage[]
  ZeigeRichtige:boolean = true
  visible:boolean = false
  pos:number
  inputliste=[]
  answerID: number = -1
  fragen: Frage[];


  constructor(
    private frs: AllefragenService,
    // private route: ActivatedRoute,
    // private heroService: HeroService,
    // private location: Location
  ) { }

  ngOnInit(): void {
    this.allefragenliste= this.frs.getAllAlleFragen()
    // this.getfrage()
    // this.getfragen()
  }
  // lernen(id: number) {
  //   if (this.selectid === fid) {
  //     this.learning = !this.learning
  //   } else {
  //     this.selectid = fid
  //     this.learning = true
  //   }
ergebniss(frageid:number){
  if (this.answerID == -1) {
    this.visible = !this.visible
  } if (this.answerID == frageid) {
  this.visible = !this.visible
  } else {
    this.answerID = frageid
  }
  }
  // getfrage(): void {
  //   this.Allefragenservice.getfrage()
  //   .subscribe(Frage => this.allefragenliste = Frage.fid);
  // }

  // {
  //  let nummerrichtigerantworten:number = 0
  //   for(let nummer of this.inputliste) {
  //     if (listerichtig.indexOf(nummer.substring(0,1))>=0) {
  //       nummerrichtigerantworten += 1
  //     }
  //     if (nummerrichtigerantworten== listerichtig.length){
  //     }
  //   }
  //  }

  // getHero(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.allefragenliste.getfragen(fid)
  //     .subscribe(einzel => this.allefragenliste = this.allefragenliste);
  // }

  // goBack(): void {
  //   this.location.back();
  // }


// }

lernlisteflow() {

}

richtig(anstext:string) {
  this.pos = this.inputliste.indexOf(anstext)
  if (this.pos == -1) {
    this.inputliste.push(anstext)
    console.log(this.inputliste)
  }
  else {this.inputliste.slice(this.pos,1)}

}
}
