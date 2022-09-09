# Java

## Inversion of Control

Inversion of control reflects the model of relationship between a caller and a callee, where the control is inverted in way that the callee takes control over calls between the callee and the caller.

The control is inverted when it calls my methods rather me calling the framework.

## Dependency Injection

Before we use methods of other classes, we first need to create the object of that class i.e. class A needs to create an instance of class B.

When class A uses a functionality of class B, then its said that class A has a dependency of class B.

The dependencies of a class should be configured by some other class from outside.

Dependency injection enables you to use classes to inject them into any other object.

Dependency Injection can be performed by Constructor Injection, Interface Injection or Setter Injection.

Constructor Injection: When dependencies are provided through the dependent class constructor.

Interface Injection: When dependencies are provided directly into a dependent class method as an argument.

Setter Injection: When dependencies are provided via a public property of the dependent class.

## Spring

Dependency Injection is the main functionality provided by Spring.

Java classes that are instantiated by Spring IoC Container are called beans.

Spring IoC Container uses Dependency Injection to manage the components that make up the application.

There are two types of Spring Dependency Injection.

Setter Dependency Injection (SDI)

Dependency Injection will be injected with the help of setter and getter methods.

Constructor Dependency Injection (CDI)

Dependency Injection will be injected with the help of constructors.

We can declare the dependencies by annotating a constructor.

Spring provides implementations of IoC Container in the form of Application Context and BeanFactory in org.springframework.context and org.springframework.beans packages.

BeanFactory loads beans on-demand, while ApplicationContext loads all beans at startup.

A link to Docker Hub for amd64/openjdk

https://hub.docker.com/r/amd64/openjdk/

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.11/java-spring-project.png?raw=true)

## References

Inversion of Control Containers and the Dependency Injection pattern https://martinfowler.com/articles/injection.html

Spring IoC Container https://docs.spring.io/spring-framework/docs/6.0.x/reference/html/core.html#beans