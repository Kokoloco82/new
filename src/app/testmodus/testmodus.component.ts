import { Component, OnInit } from '@angular/core';
// import { Antwort, mcfragen } from '../fragen';
import { FragenService } from '../fragen.service';
import { Kontrollefragen } from '../kontrollefragen';
import { McFrage } from '../mc-frage';
import { ScFrage } from '../sc-frage';
import { FillinFrage } from '../fillin-frage';
import { Antwort, Frage } from '../allefragen';
import { AllefragenService } from '../allefragen.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

// import { fragen } from '../fragen'
@Component({
  selector: 'app-testmodus',
  templateUrl: './testmodus.component.html',
  styleUrls: ['./testmodus.component.css']
})
export class TestmodusComponent implements OnInit {
  // Mcquestions: McFrage[]
  // Scquestions: ScFrage[]
  // fiquestions: FillinFrage[]
  allquestions: Frage[]//= { fid: -1, ftyp: 'none' }
  inputlisteallefragenliste: Frage[]
  frage: Frage
  frageIndex: number
  currentmcfragen: number = -1
  currentallquestions: number = -1
  selectid: number = -1
  learning: boolean = false
  first: boolean = true
  last: boolean = false
  ZeigeRichtige: boolean = true
  visible: boolean = false
  pos: number
  inputliste: Frage[] = []
  answerID: number = -1
  versuche: number = 7
  userinput: string[] = []
  currentfrage: number = -1
  savecorrectans: number = 0
  fillInanswer: string = ""
  unsichtbar: boolean = true
  maxFalse:number = 999
  fillinrichtig:any = []
  testvar:boolean

  kontrolle: Kontrollefragen = {
    fanzahl: 0,
    fbeantwortet: 0,
    fnichtbeantwortet: 0,
    frichtig: 0,
    ffalsch: 0
  }


  constructor(
    private frs: AllefragenService,
    private location: Location,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.mcfragen = this.fs.getAllMcFragen()
    // this.scfragen = this.fs.getAllScFragen()
    // this.fillinfragen = this.fs.getAllFillinFrage()
    this.inputliste = this.frs.getAllAlleFragen()
    // für single/multiple: alle checked felder in antworten auf false setzen = noch nicht gewählt
    this.inputliste.map(q => q.antworten.map(a => a.checked = false))
    // für fillin: fiantwort erstellen = ''
    this.inputliste.map(q => q.fiantwort = '')

    this.frageIndex = 0
    this.frage = this.inputliste[this.frageIndex]
    console.log(this.frage)
    this.visible = false
    this.statistics()
    this.allquestions = this.frs.getAllAlleFragen()
    // this.allquestions = 0
    // this.currentallquestions = this.allquestions[this.currentallquestions]
    this.first = true
    // Abbruch nach maximal hier s falschen fragen
    this.maxFalse = 7
  }
  // next(): Frage {
  //   if (this.frageIndex < this.inputliste.length - 1) {
  //     this.frageIndex++
  //   }
  //   this.statistics()
  //   return this.frage = this.inputliste[this.frageIndex]
  // }

  // this.dialog.open(DialogElementsExampleDialog);
/*   if (this.frage.ftyp === "fillin") {
    console.log("richtig reinlaufen")
    console.log(this.fillinrichtig)
    console.log(this.frage.richtig)
  if (this.frage.richtig == this.fillinrichtig) {
    console.log("richtig")
  }
  }
 */

 /*  next() {
    console.log('fiantwort:', this.frage.fid, this.frage.fiantwort)
    console.log(this.frage.ftyp)
      this.fillinrichtig = this.frage.fiantwort
    if (this.frage.ftyp === "fillin") {
        console.log("richtig reinlaufen")
        console.log(this.fillinrichtig)
        console.log(this.frage.richtig)
      if (this.frage.richtig == this.fillinrichtig) {
        console.log("richtig")
      }
      }
    if (this.frage.ftyp == "fillin") {
      if (this.frage.richtig == this.fillinrichtig) {
        console.log("this.frage.richtig")
        this.testvar == true
    }
    }

    if (this.frageIndex < this.inputliste.length - 1) {
      this.frageIndex++
      this.frage = this.inputliste[this.frageIndex]
      this.first = false
    }
    if (this.frage.antworten)

    if (this.frageIndex === this.inputliste.length - 1) {
      this.last = true
    }

      if (this.frage.richtig == this.userinput) {
      this.frageIndex++
      this.savecorrectans++
      this.fillInanswer = ""
    }
    this.statistics()
    if (this.kontrolle.ffalsch === this.maxFalse) {
      this.gotoRoute(['../lernmodus'])
    }
    return this.frage = this.inputliste[this.frageIndex]
  } */

  next() {
    console.log('fiantwort:', this.frage.fid, this.frage.fiantwort)

    this.statistics()
    if (this.kontrolle.ffalsch === this.maxFalse) {
      this.dialog.open(DialogElementsExampleDialog);
    }

    // wenn maximale anzahl falsch beantworteter fragen erreicht
    if (this.kontrolle.ffalsch === this.maxFalse) {
      this.gotoRoute(['../lernmodus'])
    }

    if (this.frageIndex < this.inputliste.length - 1) {
      this.frageIndex++
      this.frage = this.inputliste[this.frageIndex]
      // this.learning = false
      this.first = false
    }
    if (this.frageIndex === this.inputliste.length - 1) {
      this.last = true
    }
    return this.frage = this.inputliste[this.frageIndex]
  }

  gotoRoute(pathArray: string[]) {
    this.router.navigate(pathArray)
  }

  prev(): Frage {
    console.log('fiantwort:', this.frage.fid, this.frage.fiantwort)
    if (this.frageIndex > 0) {
      this.frageIndex--
    }
    this.statistics()
    if (this.kontrolle.ffalsch === this.maxFalse) {
      this.router.navigate(['../lernmodus'])
    }
    return this.frage = this.inputliste[this.frageIndex]
  }

  // skipfrage(fid:number) {
  //   if (this.frage.fid = fid) {
  //     this.frageIndex ++
  //     this.saveskipfrage ++
  //   }
  // }

  toogleVisible() {
    this.visible = !this.visible
  }

  setSingleAnswer(frage: Frage, ant: Antwort) {
    // console.log(frage.fid,ant)
    frage.antworten.map(a => a.checked = false)
    frage.antworten.find(a => a.text === ant.text).checked = true
    // console.log(frage.fid,ant)
  }


  statistics() {
    // berechnet nur die statistischen daten - keine popup usw.
    // popup nur bei next() explizit
    this.kontrolle.fanzahl = this.inputliste.length
    this.kontrolle.fbeantwortet = 0
    this.kontrolle.ffalsch = 0
    this.kontrolle.fnichtbeantwortet = 0
    this.kontrolle.frichtig = 0

    for (let fr of this.inputliste) {
      // beantwortet?
      if (fr.ftyp === 'fillin') {
        if (fr.fiantwort.length > 0) {
          // ist beantwortet
          this.kontrolle.fbeantwortet++
          // check if correct
          if (fr.antworten[0].text === fr.fiantwort) {
            // richtig
            this.kontrolle.frichtig++
          } else {
            // falsch beantwortet
            this.kontrolle.ffalsch++
/*             confirm("Falsch, Vielleicht solltest du weiter lernen")
 */            }
        } else {
          this.kontrolle.fnichtbeantwortet++
        }
      } else {
        // sind multi uoder single
        if (fr.antworten.findIndex(a => a.checked === true) > -1) {
          // ist beantwortet
          this.kontrolle.fbeantwortet++
          if (fr.antworten.findIndex(a => a.correct !== a.checked) > -1) {
            // falsch beantwortet
            this.kontrolle.ffalsch++
/*             confirm("Falsch, Vielleicht solltest du weiter lernen")
 */          } else {
            // richtig
            this.kontrolle.frichtig++
          }
        } else {
          this.kontrolle.fnichtbeantwortet++
        }
      }
      console.log('kff:',this.kontrolle.ffalsch,'mf:',this.maxFalse)

    }
  }


  neustart() {
 /*    this.router.navigate(['../testmodus'])
    this.gotoRoute(['../testmodus']) */
    this.inputliste = this.frs.getAllAlleFragen()
    // für single/multiple: alle checked felder in antworten auf false setzen = noch nicht gewählt
    this.inputliste.map(q => q.antworten.map(a => a.checked = false))
    // für fillin: fiantwort erstellen = ''
    this.inputliste.map(q => q.fiantwort = '')
    this.frageIndex = 0
    this.frage = this.inputliste[this.frageIndex]
    console.log(this.frage)
    this.visible = false
    this.statistics()
    this.allquestions = this.frs.getAllAlleFragen()
    // this.allquestions = 0
    // this.currentallquestions = this.allquestions[this.currentallquestions]
    this.first = true
    // Abbruch nach maximal hier s falschen fragen
    this.maxFalse = 7
    // this.router.navigate(['../testmodus'])
    // this.gotoRoute(['../home', '../testmodus'])
  }

  onclick() {
    this.ZeigeRichtige = !this.ZeigeRichtige;
    this.visible = !this.visible
  }

  skip() {
    if (this.frageIndex < this.inputliste.length - 1) {
      this.frageIndex++
      this.frage = this.inputliste[this.frageIndex]
      // this.learning = false
      this.first = false
    }
    if (this.frageIndex === this.inputliste.length - 1) {
      this.last = true
    }
    return this.frage = this.inputliste[this.frageIndex]
  }

  ergebniss(frageid: number) {
    if (this.answerID == -1) {
      this.visible = !this.visible
    } if (this.answerID == frageid) {
      this.visible = !this.visible
    } else {
      this.answerID = frageid
    }
  }

  erstequestion() {
    this.currentallquestions = 0
    this.frage = this.allquestions[this.currentallquestions]
    this.learning = false
    this.first = true
    this.last = false
  }

  letztequestion() {
    this.currentallquestions = this.allquestions.length - 1
    this.frage = this.allquestions[this.currentallquestions]
    this.learning = false
    this.first = false
    this.last = true
  }
  mischeFragen() {
    this.allquestions = this.allquestions.sort((a, b) => 0.5 - Math.random())
    this.erstequestion()
  }
  fragenSortieren() {
    this.allquestions = this.allquestions.sort((a, b) => a.fid - b.fid)
/*     this.letztequestion()
 */    this.erstequestion()

  }
/*
  getvalue(userinput: string) {
    this.userinput[""] = userinput
    this.frage.fiantwort = userinput
    console.log(this.userinput)
  } */


  end() {
    confirm("Bist du dir Sicher ?!")
    this.statistics()
   /*  this.kontrolle.fanzahl = this.inputliste.length
    this.kontrolle.fbeantwortet = 0
    this.kontrolle.ffalsch = 0
    this.kontrolle.fnichtbeantwortet = 0
    this.kontrolle.frichtig = 0


    if (this.testvar == true) {
      this.kontrolle.fbeantwortet++
      this.kontrolle.frichtig++ */
    }
 /*    else {
      this.kontrolle.ffalsch++
    }
 */

/*
    for (let fr of this.inputliste) {
      // beantwortet?
      if (fr.antworten.findIndex(a => a.checked === true) > -1) {
        // ist beantwortet
        this.kontrolle.fbeantwortet++
        if (fr.antworten.findIndex(a => a.correct !== a.checked) > -1) {
          // falsch beantwortet
          this.kontrolle.ffalsch++
        } else {
          // richtig
          this.kontrolle.frichtig++
        }
      } else {
        this.kontrolle.fnichtbeantwortet++
      }
    }
  } */
  // prevmcfragen() {
  //   if (this.currentmcfragen > 0) {
  //     this.currentmcfragen--
  //     this.mcfragen = this.mcfragens[this.currentmcfragen]
  //     this.learning = false
  //     this.last = false
  //   }
  //   if(this.currentmcfragen === 0) {
  //     this.first = true
  //   }
  // }
  // learn(id: number) {
  //   if (this.selectid === id) {
  //     this.learning = !this.learning
  //   } else {
  //     this.selectid = id
  //     this.learning = true
  //   }
  // }
  // }
  // // scrolling in the template :)
  // scrollToElement($element: any): void {
  //   $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  // }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog { }
