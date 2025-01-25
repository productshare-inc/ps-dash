/*
  Warnings:

  - Made the column `details` on table `Connection` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "boilerplate_schema"."Connection" ALTER COLUMN "details" SET NOT NULL,
ALTER COLUMN "details" SET DEFAULT '{}';
