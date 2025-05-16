-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 16, 2025 at 05:47 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phaseup`
--

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `id` int(10) NOT NULL,
  `image` text NOT NULL,
  `alt` varchar(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `hours` varchar(20) NOT NULL,
  `link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`id`, `image`, `alt`, `title`, `description`, `hours`, `link`) VALUES
(1, '/assets/course banners/Csharp course 2.svg', 'C#', 'C# for .NET Developers', 'Master C# Programming from A to Z. Dive deep into .NET, OOP, Clean Code, LINQ, WPF, Generics, Unit Testing, and more.', '10h', '/pages/overview/cs-overview.php'),
(2, './assets/course banners/تعلم HTML في فيديو واحد 1.svg', 'javascript', 'Learn HTML in 4 Hours', 'The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!', '4h', '/pages/overview/html-overview.php'),
(3, '/assets/course banners/كورس بايثون 1.svg', 'python', 'Python for Data Science, AI & Development', 'Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!', '56h 21m', '/pages/overview/python-overview.php'),
(4, '/assets/course banners/Unreal Engine 1.svg', 'unreal', 'Unreal Engine Fundamentals', 'Code Your First Four Game Projects in Unreal Engine 5 with Blueprint Visual Scripting - From Beginner to Advanced!', '41h 26m', '/pages/overview/unreal-overview.php');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `card_id` int(10) NOT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`card_id`, `category`) VALUES
(1, 'English'),
(1, 'Game'),
(2, 'Arabic'),
(2, 'Web'),
(3, 'Arabic'),
(3, 'Data Science'),
(4, 'English'),
(4, 'Game');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`card_id`,`category`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `fk_categories_cards` FOREIGN KEY (`card_id`) REFERENCES `cards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
