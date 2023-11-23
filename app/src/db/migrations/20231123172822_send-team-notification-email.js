exports.up = function (knex) {
  return Promise.resolve()
    .then(() => knex.schema.alterTable('form', table => {
      table.boolean('sendSubReceivedEmail').defaultTo(true).comment('Keeps track of if forms should send a notification email');
    }));
};

exports.down = function (knex) {
  return Promise.resolve()
    .then(() => knex.schema.alterTable('form', table => {
      table.dropColumn('sendSubReceivedEmail');
    }));
};
