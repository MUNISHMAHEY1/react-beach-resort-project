import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import DeveloperInfo from '../components/DeveloperInfo'
import Hero from '../components/Hero'
import AboutInfo from '../components/AboutInfo'
function About() {
    return (
        <>
            <Hero hero="aboutHero">
                <Banner title="Know more About us" subtitle="This page will show all the features of the project">
                    <Link to="/" className="btn-primary">
                        Return to Home
                </Link>
                </Banner>
            </Hero>
            <AboutInfo></AboutInfo>
            <DeveloperInfo></DeveloperInfo>
        </>
    )
}

export default About

