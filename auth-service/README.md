# authentication service

Basic auth service with `/signup` and `/signin` endpoints.

## todo

1. Return JWT token from the endpoints
   1. should create refresh token for added layer of security
2. Persist / capture the logins and tokens into a kv storage
3. Publish an auth event to the kafka topic
4. Work with API gateway / cognito
