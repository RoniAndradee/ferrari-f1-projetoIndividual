create database ferrari_f1;
use ferrari_f1;

create table equipe (
idEquipe int primary key auto_increment,
nome varchar(45),
dtEstreia date,
qtdTitulos int
);

create table piloto (
idPiloto int auto_increment,
fkEquipe int,
primary key (idPiloto, fkEquipe),
nome varchar(45),
dtNasc date,
fkInspiracao int,
foreign key (fkInspiracao)
	references piloto(idPiloto),
foreign key (fkEquipe)
	references equipe(idEquipe)
);

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
fkPilotoFavorito int,
foreign key (fkPilotoFavorito)
	references piloto(idPiloto)
);

insert into equipe values
(default, 'Mercedes-AMG Petronas F1 Team', '1954-07-04', 8),
(default, 'Oracle Red Bull Racing', '2005-03-26', 6),
(default, 'Scuderia Ferrari', '1950-05-21', 16),
(default, 'McLaren Formula 1 Team', '1966-05-22', 8),
(default, 'BWT Alpine F1 Team', '1977-01-01', 2),
(default, 'Williams Racing', '1977-05-08', 9),
(default, 'Aston Martin Aramco F1 Team', '1959-05-31', 0),
(default, 'MoneyGram Haas F1 Team', '2016-03-20', 0),
(default, 'Visa Cash App RB Formula One Team', '2006-03-12', 0),
(default, 'Stake F1 Team Kick Sauber', '1993-03-14', 0);

insert into piloto values 
(default, 1, 'Lewis Hamilton', '1985-01-07', NULL),
(default, 1, 'George Russell', '1998-02-15', NULL),
(default, 2, 'Max Verstappen', '1997-09-30', NULL),
(default, 2, 'Sergio Perez', '1990-01-26', NULL),
(default, 3, 'Charles Leclerc', '1997-10-16', NULL),
(default, 3, 'Carlos Sainz', '1994-09-01', NULL),
(default, 4, 'Lando Norris', '1999-11-13', NULL),
(default, 4, 'Oscar Piastri', '2001-04-06', NULL),
(default, 5, 'Esteban Ocon', '1996-09-17', NULL),
(default, 5, 'Pierre Gasly', '1996-02-07', NULL),
(default, 6, 'Alexander Albon', '1996-03-23', NULL),
(default, 6, 'Logan Sargeant', '2000-12-31', NULL),
(default, 7, 'Lance Stroll', '1998-10-29', NULL),
(default, 7, 'Fernando Alonso', '1981-07-29', NULL),
(default, 8, 'Kevin Magnussen', '1992-10-05', NULL),
(default, 8, 'Nico Hülkenberg', '1987-08-19', NULL),
(default, 9, 'Yuki Tsunoda', '2000-05-11', NULL),
(default, 9, 'Daniel Ricciardo', '1989-01-07', NULL),
(default, 10, 'Guanyu Zhou', '1999-05-30', NULL),
(default, 10, 'Valtteri Bottas', '1989-08-28', NULL);

select * from usuario;
