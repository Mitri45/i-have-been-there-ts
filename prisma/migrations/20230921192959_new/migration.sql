/*
  Warnings:

  - The primary key for the `LocationMetadata` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `latitude` on the `LocationMetadata` table. The data in that column could be lost. The data in that column will be cast from `Decimal(16,15)` to `Decimal(17,17)`.
  - You are about to alter the column `longitude` on the `LocationMetadata` table. The data in that column could be lost. The data in that column will be cast from `Decimal(16,15)` to `Decimal(17,17)`.
  - You are about to alter the column `latitude` on the `Marker` table. The data in that column could be lost. The data in that column will be cast from `Decimal(17,17)` to `Decimal(20,7)`.
  - You are about to alter the column `longitude` on the `Marker` table. The data in that column could be lost. The data in that column will be cast from `Decimal(17,17)` to `Decimal(20,7)`.

*/
-- AlterTable
ALTER TABLE "LocationMetadata" DROP CONSTRAINT "LocationMetadata_pkey",
ALTER COLUMN "latitude" SET DATA TYPE DECIMAL(17,17),
ALTER COLUMN "longitude" SET DATA TYPE DECIMAL(17,17),
ADD CONSTRAINT "LocationMetadata_pkey" PRIMARY KEY ("photo_id", "latitude", "longitude");

-- AlterTable
ALTER TABLE "Marker" ALTER COLUMN "latitude" SET DATA TYPE DECIMAL(20,7),
ALTER COLUMN "longitude" SET DATA TYPE DECIMAL(20,7);
