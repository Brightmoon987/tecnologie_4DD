// email.model.ts
export class Email {
  constructor(
    public sender: string,
    public subject: string,
    public body: string,
    public expanded: boolean = false, // Inizializza expanded a false di default
    public special: boolean = false // Inizializza special a false di default
  ) {}
}