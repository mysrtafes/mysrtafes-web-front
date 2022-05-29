-- CreateTable
CREATE TABLE `ChallengeDungeon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TimeStamp` DATETIME(3) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Furigana` VARCHAR(191) NOT NULL,
    `Department1` VARCHAR(191) NOT NULL,
    `Game1` VARCHAR(191) NOT NULL,
    `Goal1` VARCHAR(191) NOT NULL,
    `DiscordName` VARCHAR(191) NOT NULL,
    `TwitterId` VARCHAR(191) NOT NULL,
    `Message` TEXT NOT NULL,
    `TtYesNo` VARCHAR(191) NOT NULL,
    `StreamYesNo` VARCHAR(191) NOT NULL,
    `StreamUrl` VARCHAR(191) NOT NULL,
    `MultiGamesYesNo` VARCHAR(191) NOT NULL,
    `Department2` VARCHAR(191) NOT NULL,
    `Game2` VARCHAR(191) NOT NULL,
    `Goal2` VARCHAR(191) NOT NULL,
    `Department3` VARCHAR(191) NOT NULL,
    `Game3` VARCHAR(191) NOT NULL,
    `Goal3` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
