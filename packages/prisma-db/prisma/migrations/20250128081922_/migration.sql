/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserFinancial` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserFinancial_userId_key" ON "boilerplate_schema"."UserFinancial"("userId");
