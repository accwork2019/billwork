-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.13-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table acpanel.company_details
DROP TABLE IF EXISTS `company_details`;
CREATE TABLE IF NOT EXISTS `company_details` (
  `company_name` varchar(255) DEFAULT NULL,
  `address` int(11) DEFAULT NULL,
  `remarks` text,
  `dt_from` date DEFAULT NULL,
  `dt_to` date DEFAULT NULL,
  `gst` varchar(5) DEFAULT NULL,
  `cgst` varchar(5) DEFAULT NULL,
  `sgst` varchar(5) DEFAULT NULL,
  `bill_start_no` int(11) DEFAULT NULL,
  `bill_copy` int(2) DEFAULT NULL,
  `bill_prefix` varchar(50) DEFAULT NULL,
  `bill_reset_monthly` enum('Y','N') DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table acpanel.company_details: ~0 rows (approximately)
/*!40000 ALTER TABLE `company_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `company_details` ENABLE KEYS */;

-- Dumping structure for table acpanel.customers
DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `discount_rate` varchar(20) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

-- Dumping data for table acpanel.customers: ~18 rows (approximately)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` (`id`, `name`, `address`, `phone`, `email`, `discount_rate`, `created_on`) VALUES
	(1, 'Bivash Das', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '3', '2020-02-23 21:01:39'),
	(2, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2008@gmail.com', '3', '2020-02-09 17:15:19'),
	(3, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2008@gmail.com', '3', '2020-02-09 17:15:38'),
	(4, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '5', '2020-02-09 17:17:13'),
	(5, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '44', '2020-02-09 17:57:40'),
	(6, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '3', '2020-02-09 18:09:33'),
	(7, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '3', '2020-02-09 18:26:00'),
	(8, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '35', '2020-02-09 18:27:41'),
	(9, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '88', '2020-02-09 18:32:41'),
	(10, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '88', '2020-02-09 18:34:15'),
	(11, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '57', '2020-02-09 18:54:01'),
	(12, 'akash halder', 'kolkata', '08981172322', 'akash@gmail.com', '8.5', '2020-02-22 22:31:44'),
	(13, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '5', '2020-02-23 20:34:02'),
	(14, 'sssssssssssssss', 'kolkata', '08981172322', 'akash@gmail.com', '8.5', '2020-02-23 21:01:14'),
	(15, '14,12,akash halder1', 'kolkata', '08981172322', 'akash@gmail.com', '8.5', '2020-02-23 20:45:35'),
	(16, '14,wwwwwwwww', 'kolkata', '08981172322', 'akash@gmail.com', '8.5', '2020-02-23 20:47:48'),
	(17, '14,12,akash halder1', 'kolkata', '08981172322', 'akash@gmail.com', '8.5', '2020-02-23 20:48:59'),
	(18, 'uuuuuuuuuuu', 'kolkata', '08981172322', 'akash@gmail.com', '8.5', '2020-02-23 21:02:04');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Dumping structure for table acpanel.group_master
DROP TABLE IF EXISTS `group_master`;
CREATE TABLE IF NOT EXISTS `group_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(70) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table acpanel.group_master: ~2 rows (approximately)
/*!40000 ALTER TABLE `group_master` DISABLE KEYS */;
INSERT INTO `group_master` (`id`, `group_name`, `status`) VALUES
	(1, 'wwww', 'Active'),
	(3, 'Chainees', 'Active');
/*!40000 ALTER TABLE `group_master` ENABLE KEYS */;

-- Dumping structure for table acpanel.user_master
DROP TABLE IF EXISTS `user_master`;
CREATE TABLE IF NOT EXISTS `user_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `status` enum('Y','N') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table acpanel.user_master: ~0 rows (approximately)
/*!40000 ALTER TABLE `user_master` DISABLE KEYS */;
INSERT INTO `user_master` (`id`, `username`, `password`, `status`) VALUES
	(1, 'admin', 'admin', 'Y');
/*!40000 ALTER TABLE `user_master` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
