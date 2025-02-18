-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2023 at 06:09 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mypet`
--

-- --------------------------------------------------------

--
-- Table structure for table `adoptions`
--

CREATE TABLE `adoptions` (
  `idAdoption` int(11) NOT NULL,
  `Users_idUser` int(11) NOT NULL,
  `Users_PhoneU` bigint(8) NOT NULL,
  `TextAd` varchar(500) NOT NULL,
  `PhotoA` varchar(45) DEFAULT NULL,
  `AgeA` int(2) DEFAULT NULL,
  `NameA` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `adoptions`
--

INSERT INTO `adoptions` (`idAdoption`, `Users_idUser`, `Users_PhoneU`, `TextAd`, `PhotoA`, `AgeA`, `NameA`) VALUES
(2, 1, 12345678, 'qe2r lijkqwer iouhqwer iuhqweriu yghqweu8ryi hqweiur hqiwern u', 'item3.png', 1, 'Assil'),
(3, 2, 87654321, 'qwloeuirhj qiowuehjr iuqowehrj iuowqehnr iuqwebnr iuqwehriuwwew', 'item6.png', 3, 'Ahmed');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `idComment` int(11) NOT NULL,
  `Questions_idQuestion` int(11) NOT NULL,
  `Users_UsernameU` varchar(30) NOT NULL,
  `Users_idUser` int(11) NOT NULL,
  `TextC` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`idComment`, `Questions_idQuestion`, `Users_UsernameU`, `Users_idUser`, `TextC`) VALUES
(4, 2, 'user1', 1, 'comment iuhjqwe iuhjqweri98u qhwefr iuyhqwfiuyhqf '),
(6, 2, 'user2', 2, 'qwert l;ekfgjw iuwefjn iuewrbng uiywbenr gegr '),
(7, 2, 'user1', 1, 'qwer lojuhqwer uhybqweru yhbwqeuyfgb wuqehryfb uihqrwbn erfg wret');

-- --------------------------------------------------------

--
-- Table structure for table `housing`
--

CREATE TABLE `housing` (
  `idHousing` int(11) NOT NULL,
  `NameH` varchar(30) NOT NULL,
  `RegionH` varchar(20) NOT NULL,
  `EmailH` varchar(45) NOT NULL,
  `AddressH` varchar(60) NOT NULL,
  `PhoneH` bigint(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `housing`
--

INSERT INTO `housing` (`idHousing`, `NameH`, `RegionH`, `EmailH`, `AddressH`, `PhoneH`) VALUES
(1, 'Housing1', 'Tunis', 'housing1@gmail.com', '53 Rue des pyramides Cite El Moustakbel Tunis', 12345678),
(32, 'Assil', 'Jendouba', 'assil@gmail.com', 'qwoeirhjqiweojr oiqwejr oiwqerj oiqwejr ', 82374872),
(44, 'jasser', 'Sousse', 'jasser@mail', 'iwjetrijweri jweirj wierj iwejr iwjer iwejr ijweriwejr iwejr', 2943999),
(45, 'ahmed', 'Sousse', 'ahmed@mail', 'kijwer ijif jsd fiasuhf isufhd isuadfh isuadfhd isuaddfh ius', 99823488),
(46, 'jmal', 'Sousse', 'jmal@mail', 'ijqwer iojweoi jofi jasdoif jweoqirj oweiqrj oqiwerj oiqwejr', 23989833);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `idQuestion` int(11) NOT NULL,
  `Users_UsernameU` varchar(30) NOT NULL,
  `Users_idUser` int(11) NOT NULL,
  `TitleQ` varchar(45) NOT NULL,
  `TextQ` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`idQuestion`, `Users_UsernameU`, `Users_idUser`, `TitleQ`, `TextQ`) VALUES
(2, 'user2', 2, 'question2', 'question 2 text'),
(3, 'user1', 1, 'question3', 'question3 text'),
(6, 'user2', 2, 'question6', 'question6 text'),
(45, 'user1', 1, 'qwer qwer ', 'eqw2r qwer qwer qwer qwer qwer qwwer ');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `idReport` int(11) NOT NULL,
  `Users_idUser` int(11) NOT NULL,
  `Users_PhoneU` bigint(8) NOT NULL,
  `TextR` varchar(500) NOT NULL,
  `PhotoR` varchar(45) DEFAULT NULL,
  `LSeenR` date DEFAULT NULL,
  `NameR` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`idReport`, `Users_idUser`, `Users_PhoneU`, `TextR`, `PhotoR`, `LSeenR`, `NameR`) VALUES
(1, 1, 12345678, 'bouomba boumba boumba boumba boumba boumba', 'item3.png', '2023-04-01', 'Boumba'),
(2, 2, 87654321, 'report 2', 'item4.png', '2023-04-06', 'Hook');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `EmailU` varchar(45) NOT NULL,
  `MDPU` varchar(20) NOT NULL,
  `UsernameU` varchar(30) NOT NULL,
  `PhoneU` bigint(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUser`, `EmailU`, `MDPU`, `UsernameU`, `PhoneU`) VALUES
(1, 'user1@gmail.com', 'user1', 'user1', 12345678),
(2, 'user2@gmail.com', 'user2', 'user2', 87654321);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adoptions`
--
ALTER TABLE `adoptions`
  ADD PRIMARY KEY (`idAdoption`),
  ADD KEY `fk_Adoptions_Users1_idx` (`Users_idUser`),
  ADD KEY `fk_Adoptions_Users2_idx` (`Users_PhoneU`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`idComment`,`Questions_idQuestion`),
  ADD UNIQUE KEY `idComment_UNIQUE` (`idComment`),
  ADD KEY `fk_Comments_Users1_idx` (`Users_idUser`),
  ADD KEY `fk_Comments_Users2_idx` (`Users_UsernameU`),
  ADD KEY `fk_Comments_Questions1_idx` (`Questions_idQuestion`);

--
-- Indexes for table `housing`
--
ALTER TABLE `housing`
  ADD PRIMARY KEY (`idHousing`),
  ADD UNIQUE KEY `idHousing_UNIQUE` (`idHousing`),
  ADD UNIQUE KEY `EmailH_UNIQUE` (`EmailH`),
  ADD UNIQUE KEY `PhoneH_UNIQUE` (`PhoneH`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`idQuestion`),
  ADD UNIQUE KEY `idQuestion_UNIQUE` (`idQuestion`),
  ADD KEY `fk_Questions_Users1_idx` (`Users_idUser`),
  ADD KEY `fk_Questions_Users2_idx` (`Users_UsernameU`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`idReport`),
  ADD UNIQUE KEY `idReport_UNIQUE` (`idReport`),
  ADD KEY `fk_Reports_Users1_idx` (`Users_idUser`),
  ADD KEY `fk_Reports_Users2_idx` (`Users_PhoneU`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `idUser_UNIQUE` (`idUser`),
  ADD UNIQUE KEY `UsernameU_UNIQUE` (`UsernameU`),
  ADD UNIQUE KEY `EmailU_UNIQUE` (`EmailU`),
  ADD UNIQUE KEY `PhoneU_UNIQUE` (`PhoneU`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adoptions`
--
ALTER TABLE `adoptions`
  MODIFY `idAdoption` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `idComment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `housing`
--
ALTER TABLE `housing`
  MODIFY `idHousing` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `idQuestion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `idReport` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adoptions`
--
ALTER TABLE `adoptions`
  ADD CONSTRAINT `fk_Adoptions_Users1` FOREIGN KEY (`Users_idUser`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `fk_Adoptions_Users2` FOREIGN KEY (`Users_PhoneU`) REFERENCES `users` (`PhoneU`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fk_Comments_Questions1` FOREIGN KEY (`Questions_idQuestion`) REFERENCES `questions` (`idQuestion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Comments_Users1` FOREIGN KEY (`Users_idUser`) REFERENCES `users` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Comments_Users2` FOREIGN KEY (`Users_UsernameU`) REFERENCES `users` (`UsernameU`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `fk_Questions_Users1` FOREIGN KEY (`Users_idUser`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `fk_Questions_Users2` FOREIGN KEY (`Users_UsernameU`) REFERENCES `users` (`UsernameU`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `fk_Reports_Users1` FOREIGN KEY (`Users_idUser`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `fk_Reports_Users2` FOREIGN KEY (`Users_PhoneU`) REFERENCES `users` (`PhoneU`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
