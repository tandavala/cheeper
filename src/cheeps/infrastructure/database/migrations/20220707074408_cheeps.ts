import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cheeps", function (table) {
    table.increments("id");
    table.string("aggregage_id");
    table.string("message");
    table.integer("author_id").unsigned();
    table.timestamps();

    table
      .foreign("author_id")
      .references("id")
      .inTable("authors")
      .onUpdate("cascade");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cheeps");
}
