-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Sep 24, 2018 at 01:00 PM
-- Server version: 5.7.20
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blog_id` int(11) NOT NULL,
  `blog_name` varchar(222) NOT NULL,
  `blog_description` varchar(322) NOT NULL,
  `blog_image` varchar(233) NOT NULL,
  `blog_date` varchar(233) NOT NULL,
  `blog_like` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blog_id`, `blog_name`, `blog_description`, `blog_image`, `blog_date`, `blog_like`) VALUES
(1, 'aman', 'amancced', 'upload/aman.jpg', '11/12/2029', 1),
(2, 'scdscd', 'scscc', '', '2018-09-24T12:37:17.643Z', 0),
(3, 'sfdsf', 'dfdgfgfr', '', '2018-09-24T12:38:05.200Z', 0);

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(222) NOT NULL,
  `name` varchar(222) NOT NULL,
  `email` varchar(222) NOT NULL,
  `password` varchar(222) NOT NULL,
  `created_at` varchar(222) NOT NULL,
  `updated_at` varchar(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'aman', 'aman@mail.com', '12345', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(8, 'aman', 'aman9893jian@gmail.com', '1223333', '2018-09-01 16:45:37', '2018-09-01 16:45:37'),
(9, 'aman123', 'aman9893jian@gmail.comm', '1223333', '2018-09-01 16:52:18', '2018-09-01 16:52:18'),
(10, 'swded', 'deded', 'ededed', '2018-09-01 17:01:29', '2018-09-01 17:01:29'),
(11, 'aman', 'aman@gmail.com', '123456', '2018-09-03 11:49:05', '2018-09-03 11:49:05'),
(12, 'aman', ' aman@.com', '123456', '2018-09-03 12:13:43', '2018-09-03 12:13:43'),
(13, 'aanand', 'a@gmail.com', '123', '2018-09-11 14:57:05', '2018-09-11 14:57:05'),
(14, 'baljeet', 'baljeet@gmail.com', '12345', '2018-09-13 15:04:15', '2018-09-13 15:04:15'),
(15, 'nare', 'n@gmail.com', '1234', '2018-09-15 10:48:38', '2018-09-15 10:48:38'),
(16, 'dcdfrfr', 'n@gmail.com', '1', '2018-09-15 10:49:29', '2018-09-15 10:49:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blog_id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
