export interface McFrage {
  fid: number,
  ftyp: string,
  frage: string[],
  antworten: McAntwort[],
  richtig: any[],
  // finfo: string[]
}

export interface McAntwort {
text: string,
correct?: boolean,
checked?: boolean
}

