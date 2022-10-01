# Estructura de un modulo

- **NestJS**
    - example.model
    - example.module
    - example.service
    - example.service.spec
- **GraphQL**
    - example.dto
    - example.entity
    - example.resolver

## [Module](https://docs.nestjs.com/module)

A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use
of to organize the application structure.

[![](images/module.png)](https://docs.nestjs.com/module)

## [Controller](https://docs.nestjs.com/controller)

Controllers are responsible for handling incoming requests and returning responses to the client.

[![](images/controller.png)](https://docs.nestjs.com/controller)

## [Guard](https://docs.nestjs.com/guard)

A guard is a class annotated with the @Injectable() decorator, which implements the CanActivate interface.

[![](images/guard.png)](https://docs.nestjs.com/guard)

## [Pipes](https://docs.nestjs.com/pipes)

A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface.

[![](images/pipes.png)](https://docs.nestjs.com/pipes)

## [Midleware](https://docs.nestjs.com/midleware)

Middleware is a function which is called before the route handler. Middleware functions have access to the request and
response objects, and the next() middleware function in the application’s request-response cycle.

[![](images/middleware.png)](https://docs.nestjs.com/midleware)

## [Interceptor](https://docs.nestjs.com/interceptors)

An interceptor is a class annotated with the @Injectable() decorator and implements the NestInterceptor interface.

[![](images/interceptor.png)](https://docs.nestjs.com/interceptors)

## [Exception filters](https://docs.nestjs.com/exception-filters)

Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an
application. When an exception is not handled by your application code, it is caught by this layer, which then
automatically sends an appropriate user-friendly response.

[![](images/exception-filters.png)](https://docs.nestjs.com/exception-filters)
