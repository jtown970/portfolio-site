insert into users (full_name, email)
values ( $1, $2 ) returning full_name, email;