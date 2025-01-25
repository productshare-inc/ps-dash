-- AlterTable
ALTER TABLE "boilerplate_schema"."Connection" ALTER COLUMN "details" DROP NOT NULL,
ALTER COLUMN "details" SET DATA TYPE TEXT;
