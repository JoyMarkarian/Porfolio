const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  find(id) {
    return this.connection.query(
      `select p.id, p.name, p.description, p.picture, p.githubLink from ${this.table} as p where p.id = ?`,
      [id]
    );
  }

  insert(project) {
    return this.connection.query(
      `insert into ${this.table} (name, description, picture, githubLink) values (?, ?, ?, ?)`,
      [project.name, project.description, project.picture, project.githubLink]
    );
  }

  update(project, id) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      project,
      id,
    ]);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = ProjectManager;
