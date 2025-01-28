-- CreateTable
CREATE TABLE "boilerplate_schema"."UserFinancial" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "city" TEXT,
    "country" TEXT,
    "state" TEXT,
    "street" TEXT,
    "zipcode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserFinancial_pkey" PRIMARY KEY ("id")
);
