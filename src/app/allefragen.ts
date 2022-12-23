export interface Frage {
  fid: number,
  ftyp: string,
  frage: string[],
  antworten: Antwort[],
  richtig: any[],
  fiantwort?: string,
  // fskip:any
  // finfo: string[]
}

export interface Antwort {
text: string,
correct?: boolean,
checked?: boolean
}
