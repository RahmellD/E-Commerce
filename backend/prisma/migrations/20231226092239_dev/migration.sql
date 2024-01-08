/*
  Warnings:

  - The values [User] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('Admin', 'Costumer') NOT NULL;
