/*
  Warnings:

  - Added the required column `phone` to the `applicant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `applicant` ADD COLUMN     `phone` INTEGER NOT NULL;
