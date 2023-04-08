## challange-units

# Main Routes for Tests

### Asset Routes

path "/" -> Retrieve an Asset (Get Method)

path "/all" -> Retrieve all Assets (Get Method)

path "/asset" -> Post a new Asset (Post Method)

path "/" -> Update Asset (Patch Method)

path "/" -> Delete an Asset (Delete Method)

### User Routes

path "/user" -> Post a new User (Post Method)

### Company Routes

path "/create-company" -> Create a new company, <b>must be done first!</b> (Post Method)

path "/company-enable-user" -> Associate an user created with path "/user" to the company
