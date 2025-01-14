-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "scrapeflow_schema";

-- AlterTable
ALTER TABLE "boilerplate_schema"."User" ADD COLUMN     "creditsTotal" INTEGER NOT NULL DEFAULT 20;

-- CreateTable
CREATE TABLE "scrapeflow_schema"."Workflow" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "definition" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workflow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_userId_name_key" ON "scrapeflow_schema"."Workflow"("userId", "name");

-- AddForeignKey
ALTER TABLE "scrapeflow_schema"."Workflow" ADD CONSTRAINT "Workflow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "boilerplate_schema"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
