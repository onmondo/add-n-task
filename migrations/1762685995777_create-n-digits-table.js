/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.createTable('n_digits', {
    id: 'id',
    digit: { type: 'varchar(7)', notNull: true },
    correct_answer: { type: 'varchar(7)', notNull: true },
    timelapse: { type: 'timestamp', notNull: true, default: pgm.func("current_timestamp + interval '3 seconds'") },
    answer: { type: 'varchar(7)' },
    date_answered: { type: 'timestamp' },
    is_answer_correct: { type: 'boolean', notNull: false, default: false },
    created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
    updated_at: { type: 'timestamp' },
    deleted_at: { type: 'timestamp' },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable('n_digits')
};
