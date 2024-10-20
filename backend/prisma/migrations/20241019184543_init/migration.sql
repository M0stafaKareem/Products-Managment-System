-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "category" VARCHAR(1023) NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
