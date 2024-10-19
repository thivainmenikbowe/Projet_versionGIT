-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2024 at 04:41 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cinéma`
--

-- --------------------------------------------------------

--
-- Table structure for table `acteur`
--

CREATE TABLE IF NOT EXISTS `acteur` (
  `IDENT_ACTEUR` int(11) NOT NULL,
  `NOM` varchar(60) NOT NULL,
  `PRENOM` varchar(60) NOT NULL,
  `DATE_NAISSANCE` date NOT NULL,
  `NB_FILM` int(11) NOT NULL,
  PRIMARY KEY (`IDENT_ACTEUR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `acteur`
--

INSERT INTO `acteur` (`IDENT_ACTEUR`, `NOM`, `PRENOM`, `DATE_NAISSANCE`, `NB_FILM`) VALUES
(1, 'DURIS ', 'Romain', '1974-05-28', 60),
(2, 'EXATCHOPOULOS', 'Adele', '1993-11-22', 23),
(3, 'BORHINGER', 'Richard', '1942-06-16', 132),
(4, 'GALABRU', 'Michel', '1922-10-27', 277),
(5, 'PARILLAUD', 'Anne', '1960-05-06', 35),
(6, 'FORD', 'Harrison', '1942-06-13', 64),
(7, 'FISHER', 'Carrie', '1956-10-21', 74),
(8, 'SALDANA', 'Zoe', '1978-06-19', 31),
(9, 'WEAVER', 'Sigourney', '1949-10-08', 66),
(10, 'RENO', 'Jean', '1948-06-30', 75);

-- --------------------------------------------------------

--
-- Table structure for table `casting`
--

CREATE TABLE IF NOT EXISTS `casting` (
  `IDENT_FILM` int(11) NOT NULL,
  `IDENT_ACTEUR` int(11) NOT NULL,
  `ROLE` varchar(60) NOT NULL,
  `NB_JUOR_TOURNAGE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `casting`
--

INSERT INTO `casting` (`IDENT_FILM`, `IDENT_ACTEUR`, `ROLE`, `NB_JUOR_TOURNAGE`) VALUES
(1, 1, 'François', 100),
(1, 2, 'Julia', 100),
(2, 5, 'Nikita', 68),
(2, 10, 'Victor Le Nettoyeur', 9),
(3, 6, 'Han Solo', 201),
(3, 7, 'Princesse Leia', 203),
(4, 8, 'Neytiri', 50),
(4, 9, 'Dr. Grace Augustine', 45);

-- --------------------------------------------------------

--
-- Table structure for table `distributeur`
--

CREATE TABLE IF NOT EXISTS `distributeur` (
  `IDENT_DISTRIBUTEUR` int(11) NOT NULL,
  `NOM` varchar(60) NOT NULL,
  PRIMARY KEY (`IDENT_DISTRIBUTEUR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `distributeur`
--

INSERT INTO `distributeur` (`IDENT_DISTRIBUTEUR`, `NOM`) VALUES
(1, 'GAUMONT'),
(2, '20th Century Fox');

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE IF NOT EXISTS `film` (
  `IDENT_FILM` int(11) NOT NULL,
  `TITRE` varchar(30) NOT NULL,
  `GENRE1` varchar(30) NOT NULL,
  `GENRE2` varchar(30) DEFAULT NULL,
  `DATE_SORTIE` date NOT NULL,
  `PAYS` int(11) NOT NULL,
  `IDENT_REALISATEUR` int(11) NOT NULL,
  `IDENT_DISTRIBUTEUR` int(11) NOT NULL,
  `DUREE` int(11) NOT NULL,
  PRIMARY KEY (`IDENT_FILM`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`IDENT_FILM`, `TITRE`, `GENRE1`, `GENRE2`, `DATE_SORTIE`, `PAYS`, `IDENT_REALISATEUR`, `IDENT_DISTRIBUTEUR`, `DUREE`) VALUES
(1, 'SUBWAY', 'POLICIER', 'DRAME', '1985-04-10', 1, 1, 1, 104),
(2, 'NIKITA', 'DRAME', 'ROMANTIQUE', '1990-02-21', 1, 1, 1, 118),
(3, 'STRA WARS 6 : LE RETOUR DU JED', 'ACTION', 'SF', '1983-10-19', 2, 2, 2, 133),
(4, 'AVATAR', 'ACTION', 'SF', '2009-10-16', 2, 3, 2, 170),
(5, 'Bienvenue chez les Chti''s', 'Comédie', NULL, '2008-02-27', 1, 4, 1, 100);

-- --------------------------------------------------------

--
-- Table structure for table `pays`
--

CREATE TABLE IF NOT EXISTS `pays` (
  `IDENT_PAYS` int(11) NOT NULL,
  `LIBELLE` varchar(60) NOT NULL,
  PRIMARY KEY (`IDENT_PAYS`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pays`
--

INSERT INTO `pays` (`IDENT_PAYS`, `LIBELLE`) VALUES
(1, 'FRANCE'),
(2, 'ETATS-UNIS');

-- --------------------------------------------------------

--
-- Table structure for table `realisateur`
--

CREATE TABLE IF NOT EXISTS `realisateur` (
  `IDENT_REALISATEUR` int(11) NOT NULL,
  `NOM` varchar(60) NOT NULL,
  `PRENOM` varchar(60) NOT NULL,
  `DATE_NAISSANCE` date DEFAULT NULL,
  `NB_FILM_ECRIT` int(11) DEFAULT NULL,
  `NB_FILM_PRODUIT` int(11) DEFAULT NULL,
  PRIMARY KEY (`IDENT_REALISATEUR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `realisateur`
--

INSERT INTO `realisateur` (`IDENT_REALISATEUR`, `NOM`, `PRENOM`, `DATE_NAISSANCE`, `NB_FILM_ECRIT`, `NB_FILM_PRODUIT`) VALUES
(1, 'BESSON', 'LUC', '1959-03-18', 40, 99),
(2, 'LUCAS', 'GEORGES', '1944-05-14', 75, 64),
(3, 'CAMEERON', 'JAMES', '1954-08-16', 22, 23),
(4, 'BOON', 'DANNY', NULL, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
