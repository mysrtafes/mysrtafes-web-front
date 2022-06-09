/*
  Warnings:

  - You are about to drop the `ChallengeDungeon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ChallengeDungeon`;

-- CreateTable
CREATE TABLE `Challenger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `EditUrl` VARCHAR(191) NOT NULL,
    `TimeStamp` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Furigana` VARCHAR(191) NOT NULL,
    `Department1` VARCHAR(191) NOT NULL,
    `Game1` VARCHAR(191) NOT NULL,
    `Goal1` VARCHAR(191) NOT NULL,
    `DiscordName` VARCHAR(191) NULL,
    `TwitterId` VARCHAR(191) NOT NULL,
    `Message` TEXT NULL,
    `TtYesNo` VARCHAR(191) NOT NULL,
    `StreamYesNo` VARCHAR(191) NULL,
    `StreamUrl` VARCHAR(191) NULL,
    `MultiGamesYesNo` VARCHAR(191) NOT NULL,
    `Department2` VARCHAR(191) NULL,
    `Game2` VARCHAR(191) NULL,
    `Goal2` VARCHAR(191) NULL,
    `Department3` VARCHAR(191) NULL,
    `Game3` VARCHAR(191) NULL,
    `Goal3` VARCHAR(191) NULL,

    UNIQUE INDEX `Challenger_EditUrl_key`(`EditUrl`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
