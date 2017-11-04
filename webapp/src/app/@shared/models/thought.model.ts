export class Thought {
  public id?: string;
  public name: string;
  public thought: string;

  constructor(thought?: any) {
    this.id = thought ? thought.id : '';
    this.name = thought ? thought.name : '';
    this.thought = thought ? thought.thought : '';
  }
}
