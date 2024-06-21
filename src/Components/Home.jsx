import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MovieList from './MovieList'

const Home = ({setpage}) => {
    const [search, setsearch] = useState("")
    const [movies, setmovies] = useState([
        {
          image:
            "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19204904_b_v13_al.jpg",
          name: "Lupin",
          description:
            "Lupin is a French mystery thriller television series created by George Kay and François Uzan. It premiered on Netflix on 8 January 2021, when the first set of five episodes were released. Another five aired on 11 June 2021. The series was renewed for a third instalment, which debuted",
          rate: 3,
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
          name: "Game of thrones",
          description:
            "All eight seasons of Game of Thrones are available to stream on Max. If you don't have that subscription service, you can purchase individual episodes/seasons on Prime Video or Apple TV.",
          rate: 5,
        },
        {
          image:
            "https://m.media-amazon.com/images/I/91pHAQqpFWL._AC_UF1000,1000_QL80_.jpg",
          name: "The black phone",
          description:
            "I have to be careful when I call The Black Phone horror, because it certainly wasn't all that scary. The situation was certainly horrifying, as was Handsome Hawke's performance as The Grabber,",
          rate: 3,
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_.jpg",
          name: "The babadook",
          description:
            "Sam, a young boy, is convinced of a monster's presence in his home, due to certain disturbing visions. His erratic behaviour concerns his single mother, Amelia, who spirals into a state of paranoia.",
          rate: 6,
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
          name: "Breaking Bad",
          description:
            "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
          rate: 7,
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
          name: "Better Call Saul",
          description:
            "Ex-con artist Jimmy McGill turns into a small-time attorney and goes through a series of trials and tragedies, as he transforms into his alter ego Saul Goodman, a morally challenged criminal lawyer.",
          rate: 8,
        },
      ]);
      const [test, settest] = useState(0)
    //   useEffect(() => {
    //     alert("hello")
    //   }, [test])
      
  return (
    <div>
      <Navbar setsearch={setsearch} setpage={setpage} />
      <button onClick={()=>settest(test+1)} >Click</button>
      <MovieList movies={movies} search={search}  />
    </div>
  )
}

export default Home
