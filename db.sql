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

-- Dumping structure for table acpanelacpanelacpanelacpanel.company_details
DROP TABLE IF EXISTS `company_details`;
CREATE TABLE IF NOT EXISTS `company_details` (
  `company_name` VARCHAR(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `remarks` text,
  `dt_from` date DEFAULT NULL,
  `dt_to` date DEFAULT NULL,
  `gst` DECIMAL(5,2) DEFAULT NULL,
  `cgst` DECIMAL(5,2) DEFAULT NULL,
  `sgst` DECIMAL(5,2) DEFAULT NULL,
  `bill_start_no` int(11) DEFAULT NULL,
  `bill_copy` int(2) DEFAULT NULL,
  `bill_prefix` VARCHAR(10) DEFAULT NULL,
  `bill_reset_monthly` enum('Yes','No') DEFAULT 'Yes'
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
  `discount_rate` DECIMAL(5,2) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

-- Dumping data for table acpanel.customers: ~18 rows (approximately)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` (`id`, `name`, `address`, `phone`, `email`, `discount_rate`, `created_on`) VALUES
	(1, 'Bivash Das', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', 10, '2020-02-23 21:01:39'),
	(2, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2008@gmail.com', 10, '2020-02-09 17:15:19'),
	(3, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2008@gmail.com', 15, '2020-02-09 17:15:38'),
	(4, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', 15, '2020-02-09 17:17:13'),
	(5, 'uuuuuuuuuuu', 'kolkata', '08981172322', 'akash@gmail.com', 20, '2020-02-23 21:02:04');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Dumping structure for table acpanel.group_master
DROP TABLE IF EXISTS `group_master`;
CREATE TABLE IF NOT EXISTS `group_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table acpanel.group_master: ~2 rows (approximately)
/*!40000 ALTER TABLE `group_master` DISABLE KEYS */;
INSERT INTO `group_master` (`id`, `name`, `status`) VALUES
	(1, 'wwww', 'Active'),
	(3, 'Chainees', 'Active');
/*!40000 ALTER TABLE `group_master` ENABLE KEYS */;

-- Dumping structure for table acpanel.wine_group_master
DROP TABLE IF EXISTS `wine_group_master`;
CREATE TABLE IF NOT EXISTS `wine_group_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR (50) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `serial` int(5) NOT NULL ,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table acpanel.wine_group_master: ~2 rows (approximately)
/*!40000 ALTER TABLE `wine_group_master` DISABLE KEYS */;
INSERT INTO `wine_group_master` (`id`, `name`, `status` , `serial`) VALUES
	(1, 'Royal Stag', 'Active', 1),
	(3, 'Teachers', 'Active',2);
/*!40000 ALTER TABLE `wine_group_master` ENABLE KEYS */;


-- Dumping structure for table acpanel.item_master
DROP TABLE IF EXISTS `item_master`;
CREATE TABLE IF NOT EXISTS `item_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(70) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `rate` decimal(11,2) NOT NULL ,
  `f_rate` decimal(11,2) NOT NULL ,
  `mrp` decimal(11,2) NOT NULL DEFAULT 0,
  `itcode` VARCHAR(10) NOT NULL,
  `grcode` INT(11) NOT NULL,
  `bartype` int(1) NOT NULL DEFAULT 0,
  `tax_type` enum('Taxable','Non Taxable') NOT NULL DEFAULT 'Taxable',
  `food_type` enum('Food','Drinks','Others') NOT NULL DEFAULT 'Food',
  `half` int(1) NOT NULL DEFAULT 0,
  `altcode` VARCHAR(10) NOT NULL,
  `peg` DECIMAL(5,2) NOT NULL DEFAULT 0.00,
  `stock` int(1) NOT NULL DEFAULT 0,
  `mltype` ENUM('','100 ML','750 ML','375 ML','PEG') NOT NULL DEFAULT '',
  `winetype` ENUM('','Whiskey','Vodka','Rum','Beer','Wine','Scotch','Others') NOT NULL DEFAULT '',
  `special` int(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table acpanel.item_master: ~2 rows (approximately)
/*!40000 ALTER TABLE `item_master` DISABLE KEYS */;
INSERT INTO `item_master` (`id`, `name` ) VALUES
	(1, 'Royal Stag'),
	(3, 'Teachers');  
	
/*!40000 ALTER TABLE `wine_group_master` ENABLE KEYS */;



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

