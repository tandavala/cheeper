import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("authors", function (table) {
    table.increments("id");
    table.string("aggregate_id");
    table.string("username");
    table.string("name");
    table.string("email");
    table.string("biography");
    table.string("location");
    table.string("website");
    table.dateTime("birth_date");
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {}
