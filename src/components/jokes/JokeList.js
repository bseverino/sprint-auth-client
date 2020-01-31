import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from '../../utils/axiosWithAuth'

import JokeCard from './JokeCard'

const JokeList = () => {
    const [jokes, setJokes] = useState(null)
    console.log(jokes)

    useEffect(() => {
        if (!jokes) {
            axiosWithAuth()
                .get('/jokes')
                .then(res => {
                    setJokes(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [jokes])

    return (
        <div>
            <h2>Jokes</h2>
            <div>
                {jokes && jokes.map(({ id, joke }) => (
                    <JokeCard key={id} joke={joke} />
                ))}
            </div>
        </div>
    )
}

export default JokeList