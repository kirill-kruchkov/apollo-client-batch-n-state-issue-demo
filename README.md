This is a repository to demostrate the difference in batched response format between Apollo Server and Absinthe.

## How to use it

First, run a server you want to try:

```
cd server-apollo
yarn install
node index.js
```

or

```
cd server-absinthe
mix deps.get
iex -S mix phx.server
```

(or both)

Then, run a client app to connect to apollo server (port 4000):

```
cd client
yarn install
yarn start
```

or to absinthe server (port 5000):

```
cd client
yarn install
yarn start:absinthe
```
