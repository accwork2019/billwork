-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2021 at 06:10 PM
-- Server version: 10.2.37-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `acpanel`
--

-- --------------------------------------------------------

--
-- Table structure for table `company_details`
--

CREATE TABLE `company_details` (
  `company_name` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `dt_from` date DEFAULT NULL,
  `dt_to` date DEFAULT NULL,
  `gst` decimal(5,2) DEFAULT NULL,
  `cgst` decimal(5,2) DEFAULT NULL,
  `sgst` decimal(5,2) DEFAULT NULL,
  `bill_start_no` int(11) DEFAULT NULL,
  `bill_copy` int(2) DEFAULT NULL,
  `bill_prefix` varchar(10) DEFAULT NULL,
  `bill_reset_monthly` enum('Yes','No') DEFAULT 'Yes'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `discount_rate` decimal(5,2) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `address`, `phone`, `email`, `discount_rate`, `created_on`) VALUES
(1, 'Bivash Das', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '10.00', '2020-02-23 15:31:39'),
(2, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2008@gmail.com', '10.00', '2020-02-09 11:45:19'),
(3, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2008@gmail.com', '15.00', '2020-02-09 11:45:38'),
(4, 'Bivash Pal', 'kolkata', '08981172322', 'bivashpal2007@gmail.com', '15.00', '2020-02-09 11:47:13'),
(5, 'uuuuuuuuuuu', 'kolkata', '08981172322', 'akash@gmail.com', '20.00', '2020-02-23 15:32:04');

-- --------------------------------------------------------

--
-- Table structure for table `group_master`
--

CREATE TABLE `group_master` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `group_master`
--

INSERT INTO `group_master` (`id`, `name`, `status`) VALUES
(1, 'wwww', 'Active'),
(3, 'Chainees', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `item_master`
--

CREATE TABLE `item_master` (
  `id` int(11) NOT NULL,
  `name` varchar(70) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `rate` decimal(11,2) NOT NULL,
  `f_rate` decimal(11,2) NOT NULL,
  `mrp` decimal(11,2) NOT NULL DEFAULT 0.00,
  `itcode` varchar(10) NOT NULL,
  `grcode` int(11) NOT NULL,
  `bartype` int(1) NOT NULL DEFAULT 0,
  `tax_type` enum('Taxable','Non Taxable') NOT NULL DEFAULT 'Taxable',
  `food_type` enum('Food','Drinks','Others') NOT NULL DEFAULT 'Food',
  `half` int(1) NOT NULL DEFAULT 0,
  `altcode` varchar(10) NOT NULL,
  `peg` decimal(5,2) NOT NULL DEFAULT 0.00,
  `stock` int(1) NOT NULL DEFAULT 0,
  `mltype` enum('','100 ML','750 ML','375 ML','PEG') NOT NULL DEFAULT '',
  `winetype` enum('','Whiskey','Vodka','Rum','Beer','Wine','Scotch','Others') NOT NULL DEFAULT '',
  `special` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item_master`
--

INSERT INTO `item_master` (`id`, `name`, `status`, `rate`, `f_rate`, `mrp`, `itcode`, `grcode`, `bartype`, `tax_type`, `food_type`, `half`, `altcode`, `peg`, `stock`, `mltype`, `winetype`, `special`) VALUES
(1, 'Royal Stag', 'Active', '0.00', '0.00', '0.00', '', 0, 0, 'Taxable', 'Food', 0, '', '0.00', 0, '', '', 0),
(3, 'Teachers', 'Active', '0.00', '0.00', '0.00', '', 0, 0, 'Taxable', 'Food', 0, '', '0.00', 0, '', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `salebill`
--

CREATE TABLE `salebill` (
  `id` int(11) NOT NULL,
  `bill_no` int(8) NOT NULL,
  `table` varchar(70) NOT NULL,
  `bill_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `discper` decimal(5,2) NOT NULL,
  `discamt` decimal(11,2) NOT NULL,
  `vatper` decimal(5,2) NOT NULL,
  `vatamt` decimal(11,2) NOT NULL,
  `roff` decimal(5,2) NOT NULL,
  `totamount` decimal(11,2) NOT NULL,
  `netamount` decimal(11,2) NOT NULL,
  `settle` int(1) NOT NULL DEFAULT 0,
  `paymode` int(1) NOT NULL DEFAULT 0,
  `taxtype` int(1) NOT NULL DEFAULT 0,
  `disctype` int(1) NOT NULL DEFAULT 0,
  `remarks` varchar(70) NOT NULL,
  `print` varchar(1) NOT NULL DEFAULT '',
  `tableamount` decimal(11,2) NOT NULL,
  `cgstper` decimal(5,2) NOT NULL,
  `cgstamount` decimal(11,2) NOT NULL,
  `sgstper` decimal(5,2) NOT NULL,
  `sgstamount` decimal(11,2) NOT NULL,
  `foodamt` decimal(11,2) NOT NULL,
  `drinksamt` decimal(11,2) NOT NULL,
  `custname` varchar(50) NOT NULL DEFAULT '',
  `custgst` varchar(15) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `saleitem`
--

CREATE TABLE `saleitem` (
  `id` int(11) NOT NULL,
  `itcode` varchar(10) NOT NULL,
  `qty` decimal(6,0) NOT NULL DEFAULT 0,
  `rate` decimal(11,2) NOT NULL,
  `mrp` decimal(11,2) NOT NULL DEFAULT 0.00,
  `tax_type` enum('Taxable','Non Taxable') NOT NULL,
  `food_type` enum('Food','Drinks','Others') NOT NULL,
  `amount` decimal(11,2) NOT NULL DEFAULT 0.00,
  `del` varchar(1) NOT NULL,
  `del_qty` decimal(6,0) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE `user_master` (
  `id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `status` enum('Y','N') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`id`, `username`, `password`, `status`) VALUES
(1, 'admin', 'admin', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `wine_group_master`
--

CREATE TABLE `wine_group_master` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `serial` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wine_group_master`
--

INSERT INTO `wine_group_master` (`id`, `name`, `status`, `serial`) VALUES
(1, 'Royal Stag', 'Active', 1),
(3, 'Teachers', 'Active', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group_master`
--
ALTER TABLE `group_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_master`
--
ALTER TABLE `item_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salebill`
--
ALTER TABLE `salebill`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saleitem`
--
ALTER TABLE `saleitem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_master`
--
ALTER TABLE `user_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wine_group_master`
--
ALTER TABLE `wine_group_master`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `group_master`
--
ALTER TABLE `group_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `item_master`
--
ALTER TABLE `item_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `salebill`
--
ALTER TABLE `salebill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_master`
--
ALTER TABLE `user_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wine_group_master`
--
ALTER TABLE `wine_group_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
