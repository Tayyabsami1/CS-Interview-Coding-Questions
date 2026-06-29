# OOP Notes

## Core Ideas

- Functions improve code reusability and modularity.
- Modularity means breaking a system into smaller, independent parts (modules).

## OOP Pillars

### Encapsulation

- bind data and methods together and restrict access.

### Abstraction

- hide internal details and expose only functionality.

### Polymorphism

- objects take many forms and can be treated as instances of a parent class.
- Compile-time polymorphism: method overloading, operator overloading.
- Run-time polymorphism: method overriding in a subclass.

### Inheritance

- class inherits properties and behaviors from a parent class.
- Single inheritance: one parent.
- Multiple inheritance: more than one parent.
- Multilevel inheritance: parent inherits from another parent.
- Hierarchical inheritance: multiple classes inherit from one parent.

### 4 Pillar Examples

- ENCAPSULATION
  → Protects data inside BankAccount (balance, pin are private)
  ↓
- ABSTRACTION
  → Hides HOW deposit/withdraw works internally via abstract class
  ↓
- INHERITANCE
  → SavingsAccount, CurrentAccount reuse BankAccount's common code
  ↓
- POLYMORPHISM
  → processDeposit() works on any account type via base pointer

## Composition

- strong "has-a" relationship; contained class is part of the owner's state.

## Aggregation

- weaker "has-a" relationship; contained class can exist independently.

## Relationships

- IS-A: Dog is an Animal.
- HAS-A: Car has an Engine.

## Keywords and Types

- `static` creates a shared variable or function among all instances of a class.
- An abstract class cannot be instantiated and is meant to be subclassed.
- An interface defines a contract without providing implementation and should contain at least one pure virtual function.

## SOLID Principles

### SRP (Single Responsibility Principle)

-a class should have only one reason to change.

### OCP (Open/Closed Principle)

-open for extension, closed for modification.

### OCP Example (C++)

```cpp
class Shape {
public:
    virtual double area() = 0;  // pure virtual
};

class Circle : public Shape {
public:
    double area() override { return 3.14 * 5 * 5; }
};

class Rectangle : public Shape {
public:
    double area() override { return 10 * 5; }
};

// Adding Triangle? Just create a new class. Touch NOTHING existing.
class Triangle : public Shape {
public:
    double area() override { return 0.5 * 10 * 8; }
};

class AreaCalculator {
public:
    double calculate(Shape& s) { return s.area(); }
};
```

### Liskov Substitution Principle

- objects of a superclass should be replaceable with objects of a subclass without affecting correctness.

```cpp
class Bird {
public:
    virtual void eat() { cout << "Eating" << endl; }
};

class FlyingBird : public Bird {
public:
    virtual void fly() { cout << "Flying!" << endl; }
};

class Sparrow : public FlyingBird {
public:
    void fly() override { cout << "Sparrow flying" << endl; }
};

class Ostrich : public Bird {
    // No fly() here — correct. Ostrich IS a Bird, just not a FlyingBird.
};

```

### ISP (Interface Segregation Principle)

- clients should not be forced to depend on interfaces they do not use.

```cpp
class IWorkable {
public:
    virtual void work() = 0;
};

class IHuman {
public:
    virtual void eat()   = 0;
    virtual void sleep() = 0;
};

class Robot : public IWorkable {
public:
    void work() override { cout << "Robot working" << endl; }
    // Doesn't implement eat/sleep — correct!
};

class Human : public IWorkable, public IHuman {
public:
    void work()  override { cout << "Human working" << endl; }
    void eat()   override { cout << "Human eating"  << endl; }
    void sleep() override { cout << "Human sleeping" << endl; }
};

```

### DIP (Dependency Inversion Principle)

- high-level modules should not depend on low-level modules; both should depend on abstractions.

```cpp
class IDatabase {  // abstraction
public:
    virtual void save(string data) = 0;
};

class MySQLDatabase : public IDatabase {
public:
    void save(string data) override { cout << "MySQL: " << data << endl; }
};

class MongoDB : public IDatabase {
public:
    void save(string data) override { cout << "MongoDB: " << data << endl; }
};

class UserService {
    IDatabase& db;  // depends on abstraction, not concrete class
public:
    UserService(IDatabase& database) : db(database) {}
    void saveUser(string name) { db.save(name); }
};

int main() {
    MySQLDatabase mysql;
    UserService service(mysql);  // inject any DB you want
    service.saveUser("Ahmed");
}

```
