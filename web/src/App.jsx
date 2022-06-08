import {HeartIcon} from '@heroicons/react/outline'
import {useState} from 'react'

const MAX_TWEET_CHAR = 250

function TweetForm(){

  const [text, setText] = useState('') //exporta array
  function changeText(e){
    setText(e.target.value) //value => valor escrito
  }

  return(
    <div className="border-b border-silver p-4 space-y-6">
      <div className="flex space x-5">
        <img src="/src/avatar.png" className="w-7" />
        <h1 className="font-bold text-xl">Página inicial</h1>
      </div>

      <form className="pl-12" text-lg flex flex-col>
        <textarea
        name="text" 
        value={text}
        onChange={changeText}
        className="bg-transparent w-full disabled:opacity-50" 
        placeholder="O que está acontecendo ?"
        //disabled={true}
        />
      </form>

      <div className="flex justify-end items-center space-x-3">
        <span className = "text-sm">
          <span>{text.length}</span> / <span className="text-birdBlue">{MAX_TWEET_CHAR}</span>
        </span>
        <button className="bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50" 
        disabled={text.length > MAX_TWEET_CHAR }>Tweet</button>
      </div>
      
    </div>
  )
}
function Tweet({name, username, avatar, children}) {
  return (
    <div className="flex space-x-3 p-4 border-b border-silver">
      <div>
        <img src="/src/avatar.png" />
      </div>
      <div className="space-y-1">
        <span className="font-bold text-sm">{name}</span>{' '}
        <span className="text-sm text-silver">@{username}</span>

        <p>{children}</p>

        <div className="flex space-x-1 text-silver text-sm items-center">
          <HeartIcon className="w-6 stroke-1"/>
          <span>1,2k</span> 
        </div>
        
      </div>
    </div>
  )
}

export function App() {
  return (
    <>
    <TweetForm />
      <div>
        <Tweet name="Elon Musk" username="elonmusk" avatar="/web/src/avatar.png">
          Let's make Twitter maximum fun!
        </Tweet>

        <Tweet name="Guilherme Yamasaki" username="guilhermeyamasaki" avatar="/web/src/avatar.png">
          Let's make twitter maximum awesome!
        </Tweet>
      </div>
    </>
    
  )
}