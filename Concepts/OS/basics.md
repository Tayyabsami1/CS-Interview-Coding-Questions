# Operating Systems Basics

## Processes and Threads

- Process has its own memory space, while threads share the same memory space within a process.
- Context switching between threads is faster than between processes due to shared memory.

## Deadlocks

### 4 conditions for deadlock:

- Mutual Exclusion: At least one resource must be held in a non-sharable mode.
- Hold and Wait: A process is holding at least one resource and waiting to acquire additional resources that are currently being held by other processes.
- No Preemption: Resources cannot be forcibly taken away from a process holding them.
- Circular Wait: A set of processes are waiting for each other in a circular chain.

## Scheduling Algorithms

- First-Come, First-Served (FCFS): Non-preemptive, processes are scheduled in the order they arrive. Can lead to long waiting times for short processes (convoy effect).
- Shortest Job Next (SJN): Non-preemptive, schedules the process with the smallest execution time next. Can lead to starvation of long processes.
- Round Robin (RR): Preemptive, each process is assigned a fixed time slice (quantum) and is scheduled in a circular order. Can lead to better response times for interactive processes.
