-- CreateTable
CREATE TABLE "scrapeflow_schema"."ExecutionLog" (
    "id" TEXT NOT NULL,
    "logLevel" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "executionPhaseId" TEXT NOT NULL,

    CONSTRAINT "ExecutionLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scrapeflow_schema"."ExecutionLog" ADD CONSTRAINT "ExecutionLog_executionPhaseId_fkey" FOREIGN KEY ("executionPhaseId") REFERENCES "scrapeflow_schema"."ExecutionPhase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
