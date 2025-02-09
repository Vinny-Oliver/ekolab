CREATE TABLE usuario 
( 
 cpf INT,  
 DataNascimento INT,  
 email INT,  
 senha INT,  
 idUsuario INT PRIMARY KEY,  
 nomeCompleto INT,  
); 

CREATE TABLE cursos 
( 
 status INT,  
 idCursos INT PRIMARY KEY,  
 QuantidadeDeVagas INT,  
 nomeDoCurso INT,  
 DescricaoDoCurso INT,  
 cargaHoraria INT,  
); 

CREATE TABLE matricula 
( 
 status INT,  
 DataDeMatricula INT,  
 avaliacao INT,  
 idmatricula INT PRIMARY KEY,  
 idUsuario INT PRIMARY KEY,  
 idCursos INT PRIMARY KEY,  
); 

ALTER TABLE matricula ADD FOREIGN KEY(idUsuario) REFERENCES usuario (idUsuario)
ALTER TABLE matricula ADD FOREIGN KEY(idCursos) REFERENCES cursos (idCursos)
