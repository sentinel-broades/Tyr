create or replace function get_person_salary_history(_personId INTEGER)
returns setof personsalary
language plpgsql
as
$$

  BEGIN
     RETURN QUERY (SELECT * FROM personsalary where personid = _personId);
  end;

$$
