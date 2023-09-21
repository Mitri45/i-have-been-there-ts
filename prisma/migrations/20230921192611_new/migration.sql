/*
  Warnings:

  - The primary key for the `LocationMetadata` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `latitude` on the `LocationMetadata` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,8)` to `Decimal(6,5)`.
  - You are about to alter the column `longitude` on the `LocationMetadata` table. The data in that column could be lost. The data in that column will be cast from `Decimal(11,8)` to `Decimal(6,5)`.
  - The primary key for the `Photo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pin_id` on the `Photo` table. All the data in the column will be lost.
  - You are about to drop the `pins` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `marker_id` to the `Photo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LocationMetadata" DROP CONSTRAINT "LocationMetadata_photo_id_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_pin_id_fkey";

-- DropForeignKey
ALTER TABLE "pins" DROP CONSTRAINT "pins_user_id_fkey";

-- AlterTable
ALTER TABLE "LocationMetadata" DROP CONSTRAINT "LocationMetadata_pkey",
ALTER COLUMN "photo_id" SET DATA TYPE TEXT,
ALTER COLUMN "latitude" SET DATA TYPE DECIMAL(6,5),
ALTER COLUMN "longitude" SET DATA TYPE DECIMAL(6,5),
ADD CONSTRAINT "LocationMetadata_pkey" PRIMARY KEY ("photo_id", "latitude", "longitude");

-- AlterTable
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_pkey",
DROP COLUMN "pin_id",
ADD COLUMN     "marker_id" TEXT NOT NULL,
ALTER COLUMN "photo_id" DROP DEFAULT,
ALTER COLUMN "photo_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Photo_pkey" PRIMARY KEY ("photo_id");
DROP SEQUENCE "Photo_photo_id_seq";

-- DropTable
DROP TABLE "pins";

-- CreateTable
CREATE TABLE "Marker" (
    "marker_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "latitude" DECIMAL(6,5) NOT NULL,
    "longitude" DECIMAL(6,5) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Marker_pkey" PRIMARY KEY ("marker_id")
);

-- CreateIndex
CREATE INDEX "Marker_latitude_longitude_idx" ON "Marker"("latitude", "longitude");

-- AddForeignKey
ALTER TABLE "Marker" ADD CONSTRAINT "Marker_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_marker_id_fkey" FOREIGN KEY ("marker_id") REFERENCES "Marker"("marker_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationMetadata" ADD CONSTRAINT "LocationMetadata_photo_id_fkey" FOREIGN KEY ("photo_id") REFERENCES "Photo"("photo_id") ON DELETE RESTRICT ON UPDATE CASCADE;
