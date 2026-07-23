- It is a NodeJS framework
- Req -> Middleware 1 -> Middleware 2 \_> Route Handler -> Response
- Middleware is just a function with req , res , next
- Route Level Middleware , Application Level Middleware
- Put replace the entire resource
- Patch update only specific fields
- 201 created , 204 no content (delete success)
- 400 bad request , 404 not found , 401 unauthorized , 403 forbidden , 409 conflict (duplicate)

### Auth

- Problem with Session ID is server must store every session.
- Dont scale as easily without shared session storage. TODO: Learn in depth
- JWT (Json Web Token ) 3 parts Header.payload.signature
  - Header {
    alg:SHA256 or HS256
    }
  - Payload {
    id: 15 , email:"abc123@gmail.com"
    }
  - Signature generated using a secret key

- HTTP only cookies cannot be read by JS and hense prevent XSS attacks
