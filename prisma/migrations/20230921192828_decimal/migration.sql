/*
  Warnings:

  - The primary key for the `LocationMetadata` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "LocationMetadata" DROP CONSTRAINT "LocationMetadata_pkey",
ALTER COLUMN "latitude" SET DATA TYPE DECIMAL(16,15),
ALTER COLUMN "longitude" SET DATA TYPE DECIMAL(16,15),
ADD CONSTRAINT "LocationMetadata_pkey" PRIMARY KEY ("photo_id", "latitude", "longitude");
