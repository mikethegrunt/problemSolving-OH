
create database grocery_list;
use grocery_list;

create table items (
  id int not null auto_increment,
  item varchar(50),
  primary key(id)
);