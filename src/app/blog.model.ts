export class Blog {
  constructor (
    public id: number,
    public title: string,
    public author: string,
    public content: string,
    public image: string,
    public category: string
  ) {}
}
