/*create database db_estoque; /*drop database */
 
/* use db_estoque;
 create table tb_marcas(
 id bigint(5) auto_increment,
 nome varchar(20) not null,
 ativo boolean,
 primary key (id)
 );*/
 
 /*use db_estoque;
 create table tb_produtos(
 id bigint(4) auto_increment,
 nome varchar(35) not null,
 preco decimal(6, 2) not null,
 id_marca bigint not null,

 primary key (id),
 foreign key(idmarca) references tb_marcas(id)
 );*/
 
 
 /*select*from tb_produtos;*/
 
 /*insert into tb_marcas(nome, ativo) values("Adidas", false);
  insert into tb_marcas(nome, ativo) values("Nike", true);
   insert into tb_marcas(nome, ativo) values("Lacoste", true);
 insert into tb_marcas(nome, ativo) values("Asics", false);
  insert into tb_marcas(nome, ativo) values("Fila", false);*/
  
  
 /* select*from tb_marcas;
  /*delete from tb_marcas where id = 2*/

/*insert into tb_marcas(nome,ativo) values ("Dryworld", false);*/

update tb_marcas set nome
