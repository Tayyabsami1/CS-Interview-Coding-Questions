## Denormalization

- Denormalization is the concept of combining tables to reduce the number of joins and improve query performance.

## Concurrency vs Parallelism:

- Concurrency refers to the ability of a system to handle multiple tasks at the same time, while parallelism refers to the ability of a system to execute multiple tasks simultaneously.
- Concurrency is achieved through techniques such as multitasking and multithreading, while parallelism is achieved through techniques such as multiprocessing and distributed computing.

## Isolation Levels:

- There are 4 levels and it determines how much can one transaction see the changes made by another transaction before it is committed.

### Read Uncommitted:

- Transactions can read data that hasn't been committed. Problem Dirty Read
  -Dirty Read: A transaction reads data that another transaction has changed but not committed.

### Read Committed:

- Transactions can only read data that has been committed. Problem Non-repeatable Read
  - Non-repeatable Read: The same row returns different values because another transaction committed an update between reads.

### Repeatable Read:

- Transactions can read the same data multiple times and get the same result. Problem Phantom Read

### Serializable:

- Transactions are executed in a way that they appear to be executed one after the other, rather than concurrently. This is the highest level of isolation and prevents all concurrency issues. Problem Slow due to locking.
