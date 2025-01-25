/*
  Warnings:

  - A unique constraint covering the columns `[userId,name]` on the table `Connection` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Connection_userId_name_key" ON "boilerplate_schema"."Connection"("userId", "name");
