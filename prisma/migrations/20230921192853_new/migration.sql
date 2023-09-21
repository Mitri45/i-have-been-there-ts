/*
  Warnings:

  - You are about to alter the column `latitude` on the `Marker` table. The data in that column could be lost. The data in that column will be cast from `Decimal(16,15)` to `Decimal(17,17)`.
  - You are about to alter the column `longitude` on the `Marker` table. The data in that column could be lost. The data in that column will be cast from `Decimal(16,15)` to `Decimal(17,17)`.

*/
-- AlterTable
ALTER TABLE "Marker" ALTER COLUMN "latitude" SET DATA TYPE DECIMAL(17,17),
ALTER COLUMN "longitude" SET DATA TYPE DECIMAL(17,17);
