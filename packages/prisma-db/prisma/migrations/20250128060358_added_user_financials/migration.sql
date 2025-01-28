/*
  Warnings:

  - Added the required column `email` to the `UserFinancial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `UserFinancial` table without a default value. This is not possible if the table is not empty.
  - Made the column `city` on table `UserFinancial` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `UserFinancial` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `UserFinancial` required. This step will fail if there are existing NULL values in that column.
  - Made the column `street` on table `UserFinancial` required. This step will fail if there are existing NULL values in that column.
  - Made the column `zipcode` on table `UserFinancial` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "boilerplate_schema"."UserFinancial" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "country" SET NOT NULL,
ALTER COLUMN "state" SET NOT NULL,
ALTER COLUMN "street" SET NOT NULL,
ALTER COLUMN "zipcode" SET NOT NULL;
