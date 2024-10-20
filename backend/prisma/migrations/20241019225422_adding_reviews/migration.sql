/*
  Warnings:

  - You are about to alter the column `description` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1023)`.

*/
-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "description" SET DATA TYPE VARCHAR(1023);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" INTEGER NOT NULL,
    "reviewerName" VARCHAR(255) NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" VARCHAR(1023),

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
