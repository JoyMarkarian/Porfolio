const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [project.title]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [project.title, project.id]
    );
  }
}

module.exports = ProjectManager;
