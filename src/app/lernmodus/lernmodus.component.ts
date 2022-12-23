import { Component, OnInit } from '@angular/core';
import { AllefragenService } from '../allefragen.service';
// import { FragenService } from '../fragen.service';
// import { McFrage } from '../mc-frage';
// import { ScFrage } from '../sc-frage';
// import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-lernmodus',
  templateUrl: './lernmodus.component.html',
  styleUrls: ['./lernmodus.component.css']
})
export class LernmodusComponent implements OnInit {
  // mcfragen: McFrage[]
  // scfragen: ScFrage[]
  // fillinfrage: fillin[]

  constructor(
    private frs: AllefragenService,
  ) { }

  ngOnInit(): void {
    // this.mcfragen = this.fs.getAllMcFragen()
    // this.scfragen = this.fs.getAllScFragen()
    // this.fillinfrage = this.fs.getAllfillin()
  }
  // lernen(id: number) {
  //   if (this.selectid === fid) {
  //     this.learning = !this.learning
  //   } else {
  //     this.selectid = fid
  //     this.learning = true
  //   }
// // scrolling in the template :)
// scrollToElement($element: any): void {
//   $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
// }

}
