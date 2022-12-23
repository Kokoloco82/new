export interface ScFrage {
  fid: number,
  ftyp:string
  frage: string[],
  antworten: ScAntwort[],
  richtig: any[]
}

export interface ScAntwort {
text: string,
correct: boolean,
// checked: boolean
}
