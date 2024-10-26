import { pgEnum, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const moodEnum = pgEnum('role', ['user', 'admin', 'superAdmin']);

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	username: text('username').unique().notNull(),
	password: text('password').notNull(),
	mail: text('mail').unique(),
	role: moodEnum('role').notNull().default('user')
});
