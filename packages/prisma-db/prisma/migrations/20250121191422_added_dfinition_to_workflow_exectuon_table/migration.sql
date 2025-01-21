-- AlterTable
ALTER TABLE "scrapeflow_schema"."WorkflowExecution" ADD COLUMN     "definition" TEXT NOT NULL DEFAULT '{}';
