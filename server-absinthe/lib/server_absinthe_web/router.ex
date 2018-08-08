defmodule ServerAbsintheWeb.Router do
  use ServerAbsintheWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/" do
    pipe_through(:api)

    forward(
      "/graphiql",
      Absinthe.Plug.GraphiQL,
      schema: ServerAbsintheWeb.Schema,
      interface: :simple,
      context: %{pubsub: ServerAbsintheWeb.Endpoint}
    )

    forward(
      "/",
      Absinthe.Plug,
      schema: ServerAbsintheWeb.Schema,
      context: %{pubsub: ServerAbsintheWeb.Endpoint}
    )
  end
end
