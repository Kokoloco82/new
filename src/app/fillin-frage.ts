export interface FillinFrage {
  fid: number,
  ftyp: string,
  frage: string[],
  antworten: FillinAntwort[],
  richtig: any[]
}

export interface FillinAntwort {
text: string,
correct: boolean,
checked?: boolean
}
