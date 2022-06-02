function Title ({title, children}){
  return (
    <h1>{title} {children}</h1> //children => conteúdo entre as tags
  )
}

export function App(){
  return (
    <div id = "col-avatar">
      <div id = "col-avatar" class = "col">
        <img src="/src/avatar.png" alt="#" class="tweet_img" />
      </div>
      <div id="col-text" class="col">
        <span>Elon Musk</span>
        <span>@elonmusk</span>
        <p>Let's make Twitter maximum fun !</p>
      </div>
    </div>
  )
}