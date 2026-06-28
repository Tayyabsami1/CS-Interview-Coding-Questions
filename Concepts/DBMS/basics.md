# DBMS

## Acid Properties

- Atomicity: All operations of a transaction are completed successfully or none of them are performed.
- Consistency: A transaction must take the database from one consistent state to another consistent state.
- Isolation: Concurrent transactions should not interfere with each other.
- Durability: Once a transaction is committed, it will remain so, even in the event of power loss or system failure.

## DDL , DML , DQL , TCL

## Joins

## Views

- A saved SELECT query that behaves like a table, but does not store data physically.

## Stored Procedures

## Normalization

- Process of organizing database tables to reduce redundancy and dependency.
- 1 NF: Atomic values, no repeating groups. Each column should contain single values.
- 2 NF: 1 NF + no partial dependency. Non-key attributes must depend on the whole primary key.
- 3NF : 2 NF + no transitive dependency. Non-key attributes must not depend on other non-key attributes.
- 4NF: 3 NF + no multi-valued dependency. A table should not have multi-valued dependencies.

### Example of Normalization:

## Indexes

- Data structure that improves the speed of data retrieval operations on a database table.
- DB maintains a seperate data structure (like B-tree) to allow fast lookups based on the indexed column(s).

### Clustered Index:

- determines the physical order of data in the table. Only one clustered index per table.
- No extra storage is needed for clustered index as it is the actual data.

### Non-clustered Index:

- does not affect the physical order of data. Multiple non-clustered indexes can exist on a table.
- Increases read performance. Like Select and join operations.
- Can slow down write operations (Insert, Update, Delete) due to the need to update the index.

## Relations

- One-to-One: Each record in Table A is linked to one and only one record in Table B, and vice versa.
- One-to-Many: Each record in Table A can be linked to multiple records in Table B, but each record in Table B is linked to only one record in Table A.
- Many-to-Many: Records in Table A can be linked to multiple records in Table B, and records in Table B can be linked to multiple records in Table A. This is typically implemented using a junction table.
