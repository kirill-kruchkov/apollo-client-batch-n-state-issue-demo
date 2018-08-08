defmodule ServerAbsintheWeb.NewsResolver do
  alias ServerAbsinthe.News

  def all_links(_root, _args, _info) do
    links = News.list_links()
    {:ok, links}
  end
end
