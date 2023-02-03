const AbstractManager = require("./AbstractManager");

class SkillManager extends AbstractManager {
  constructor() {
    super({ table: "skill" });
  }

  findByType(type) {
    return this.connection.query(
      `select * from  ${this.table} where type = ?`,
      [type]
    );
  }

  findByProject(id) {
    return this.connection.query(
      `select s.id, s.name, s.type, s.picture from ${this.table} as s inner join skillUsed as su on s.id = su.skill_id where su.project_id = ?`,
      [id]
    );
  }

  insert(skill) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [skill.name]
    );
  }

  update(skill) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [skill.name, skill.id]
    );
  }
}

module.exports = SkillManager;
