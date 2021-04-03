from database import cursor, db


def add_person(first, last):
    sql = (f"INSERT INTO people(first_name, last_name) VALUES (%s, %s)")
    cursor.execute(sql, (first, last))
    db.commit()
    people_id = cursor.lastrowid
    print(f'Added Log {people_id}')


# add_person('test', 'one')
# add_person('test', 'two')
# add_person('test', 'three')


def get_people():
    sql = ("SELECT * FROM people")
    cursor.execute(sql)
    result = cursor.fetchall()
    for row in result:
        print(row)


get_people()


def get_person(id):
    cursor.execute(f"SELECT * FROM people WHERE id = {id}")
    result = cursor.fetchone()
    print(result)


get_person(1)


def update_person(id, first, last):
    cursor.execute(
        f"UPDATE people SET first_name='{first}', last_name='{last}' WHERE id = {id}")
    db.commit()
    print(f"Person {id} updated!")
update_person(1, 'newTest', 'new')

def delete_person(id):
    cursor.execute(f"DELETE FROM people WHERE id = {id}")
    db.commit()
    print(f"Person {id} removed")

delete_person(4)