import { Injectable } from '@angular/core';
import { FillinFrage } from './fillin-frage';

@Injectable({
  providedIn: 'root'
})
export class FillinfragenService {
  // Mcquestions: McFrage[] //= MultipleChoiceJson

  // Scquestions: ScFrage[]
  fiquestions: FillinFrage[]
  // questions: Question[]
  // fragen: Fragen[] = AllFragenJson

  constructor() {

     this.fiquestions =
    [
      {
        fid:6,
        ftyp:"fillin",
        frage:['Which program updates the database that is used by the locate command? (Specify ONLY the command',
        'without any path or parameters).'],
        antworten:[
          {text:'updatedb', correct: true},
        ],
        richtig: ['updatedb']
      },
      {
        fid:11,
        ftyp:"fillin",
        frage:['Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the',
        'command without any path or parameters.)'],
        antworten:[
          {text:'df', correct: true},
        ],
        richtig: ['df']
      },
      {
        fid:15,
        ftyp:"fillin",
        frage:['Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the',
        'file name only without any path.)'],
        antworten:[
          {text:'cmdline', correct: true},
        ],
        richtig: ['cmdline']
      },
      {
        fid:41,
        ftyp:"fillin",
        frage:['Which program runs a command in specific intervals and refreshes the display of the program’s output?',
        '(Specify ONLY the command without any path or parameters.)'],
        antworten:[
          {text:'watch', correct: false},
        ],
        richtig: ['watch']
      },
      {
        fid:59,
        ftyp:"fillin",
        frage:['Which command is used to start another command with a given nice level? (Specify ONLY the command',
        'without any path or parameters.)'],
        antworten:[
          {text:'nice', correct: false},
        ],
        richtig: ['nice']
      },
      {
        fid:63,
        ftyp:"fillin",
        frage:['What directory contains configuration files for additional yum repositories? (Specify the full path to the directory.)'],
        antworten:[
          {text:'/etc/yum.repos.d', correct: false},
        ],
        richtig: ['/etc/yum.repos.d']
      },
      {
        fid:73,
        ftyp:"fillin",
        frage:['Which file from the /proc/ filesystem contains a list of all currently mounted devices? (Specify the full name of the file, including path.)'],
        antworten:[
          {text:'/proc/mounts', correct: false},
        ],
        richtig: ['/proc/mounts']
      },
      {
        fid:85,
        ftyp:"fillin",
        frage:['Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by',
        'the system administrator be placed in order to be made available to all users on the system? (Specify the full path to the directory.)'],
        antworten:[
          {text:'/usr/local/bin', correct: false},
        ],
        richtig: ['/usr/local/bin']
      },
      {
        fid:110,
        ftyp:"fillin",
        frage:['Which command displays a list of all background tasks running in the current shell? (Specify ONLY the',
        'command without any path or parameters.)'],
        antworten:[
          {text:'jobs', correct: false},
        ],
        richtig: ['jobs']
      },
      {
        fid:111,
        ftyp:"fillin",
        frage:['Which command is used to change the priority of an already running process? (Specify ONLY the command without any path or parameters.)'],
        antworten:[
          {text:'renice', correct: false},
        ],
        richtig: ['renice']
      },
      {
        fid:119,
        ftyp:"fillin",
        frage:['Which System V init configuration file is commonly used to set the default run level? (Specify the full name of the file, including path.)'],
        antworten:[
          {text:'/etc/inittab', correct: false},
        ],
        richtig: ['/etc/inittab']
      },
    ]
  }

  // getAllMcFragen(): McFrage[] {
  //   return this.Mcquestions
  // }
  // getAllScFragen(): ScFrage[] {
  //   return this.Scquestions
  // }
  getAllFiFragen(): FillinFrage[] {
    return this.fiquestions
  }
  // getAll(): Question[] {
  //   return this.questions
  // }
}
