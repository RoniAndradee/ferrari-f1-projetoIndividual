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

create table quiz (
idQuiz int primary key auto_increment,
nome varchar(45),
qtdPerguntas int
);

create table tentativaQuiz (
idTentativa int,
fkQuiz int,
fkUsuario int,
qtdAcertos int,
dtTentativa datetime default current_timestamp,
primary key (idTentativa, fkQuiz, fkUsuario),
foreign key (fkUsuario)
	references usuario (idUsuario),
foreign key (fkQuiz)
	references quiz (idQuiz)
);

insert into quiz values
(default, 'Quiz sobre a Scuderia Ferrari', 10);

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
(default, 3, 'Michael Schumacher', '1969-01-03', NULL),
(default, 3, 'Niki Lauda', '1949-02-22', NULL),
(default, 3, 'Fernando Alonso', '1981-07-29', NULL),
(default, 3, 'Kimi Räikkönen', '1979-10-17', NULL),
(default, 3, 'Sebastian Vettel', '1987-07-03', NULL),
(default, 3, 'Charles Leclerc', '1997-10-16', NULL),
(default, 3, 'Carlos Sainz', '1994-09-01', NULL),
(default, 3, 'Outro...', NULL, NULL);