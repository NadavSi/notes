export class Note {
  public id = 0;
  public title = '';
  public content = '';
  public appliedTo = 0;
  public priority = 'Normal';
  public createdAt: Date = new Date();
  public createdBy = 0;
  public completionDate: Date = new Date();
  public completed = 'n';
}
