function Tweet({name, username, avatar, children}) {
  return (
    <div className="flex space-x-3 p-4 border-b border-silver">
      <div>
        <img src="/web/src/avatar.png" />
      </div>
      <div>
        <span className="font-bold text-sm">{name}</span>{' '}
        <span className="text-sm text-silver">@{username}</span>
        <p>{children}</p>
      </div>
    </div>
  )
}

export function App() {
  return (
    <>
      <Tweet name="Elon Musk" username="elonmusk" avatar="/web/src/avatar.png">
        Let's make Twitter maximum fun!
      </Tweet>

      <Tweet name="Guilherme Yamasaki" username="guilhermeyamasaki" avatar="/web/src/avatar.png">
        Let's make twitter maximum awesome!
      </Tweet>
    </>
  )
}