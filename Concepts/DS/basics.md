# Data Structures Basics

## Complexity Analysis

- Array : O(1) for access, O(n) for search, O(n) for insertion and deletion.
- Linked List : O(n) for access, O(n) for search, O(1) for insertion and deletion.
- Hash Table : O(1) for access, search, insertion and deletion (average case), O(n) in worst case due to collisions.

## Sorting Algorithms

- Bubble Sort : O(n^2) average and worst case, O(n) best case.
- Merge Sort : O(n log n) in all cases. Need O(n) extra space for merging.
- Quick Sort : O(n log n) average and best case, O(n^2) worst case (when pivot selection is poor).

# Trees

## Tree Traversals

### BFS

-

### InOrder

- Left -> Root -> Right
- In BST Inorder traversal gives sorted Order

### PreOrder

- Root -> Left -> Right
- It is used to copy a tree

### PostOrder

- Left-> Right -> Root
- Deleting a Tree

## AVL Tree

- Is a self-balancing binary search tree.
- For every node checks Height of left and right subtree and if the difference is more than 1 then it performs rotations to balance the tree.
- Balanced if hf is -1 ,0 or 1.

### Types of Rotation

- Left Left Rotation (LL)
- Right Right Rotation (RR)
- Left Right Rotation (LR)
- Right Left Rotation (RL)
- Maintains height using O(log n)
