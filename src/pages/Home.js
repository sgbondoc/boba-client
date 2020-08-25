import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <h4>All things boba and more!</h4>
            <p>Register to track what's new, popular, and trending.</p>
            <ul>
                <li><a href='/register'>Register Now</a></li>
                <li><a href='/search'>Search Yelp</a></li>
            </ul>
        </div>
    )
}

export default Home