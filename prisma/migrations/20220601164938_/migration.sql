/*
  Warnings:

  - A unique constraint covering the columns `[EditUrl]` on the table `ChallengeDungeon` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `EditUrl` to the `ChallengeDungeon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ChallengeDungeon` ADD COLUMN `EditUrl` VARCHAR(191) NOT NULL,
    MODIFY `DiscordName` VARCHAR(191) NULL,
    MODIFY `Message` TEXT NULL,
    MODIFY `StreamYesNo` VARCHAR(191) NULL,
    MODIFY `StreamUrl` VARCHAR(191) NULL,
    MODIFY `Department2` VARCHAR(191) NULL,
    MODIFY `Game2` VARCHAR(191) NULL,
    MODIFY `Goal2` VARCHAR(191) NULL,
    MODIFY `Department3` VARCHAR(191) NULL,
    MODIFY `Game3` VARCHAR(191) NULL,
    MODIFY `Goal3` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ChallengeDungeon_EditUrl_key` ON `ChallengeDungeon`(`EditUrl`);
