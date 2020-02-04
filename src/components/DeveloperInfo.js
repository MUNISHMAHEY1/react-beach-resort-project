import React, { Component } from 'react'
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'
import Title from '../components/Title'
// import { Link } from 'react-router-dom'
class DeveloperInfo extends Component {

    constructor(props) {
        super(props)
        const linkedIn="https://www.linkedin.com/in/munish-munish-011224186/"
        const Github = "https://github.com/MUNISHMAHEY1"
        const facebook = "https://www.facebook.com/munish.mahey.7"
        const twitter ="https://twitter.com/Munish38352415"
        this.state = {
            developerService: [
                {
                    id: 1,
                    title: "LinkedIn",
                    icon: <a href={linkedIn} target="_blank"><FaLinkedin /> </a>
                },

                {
                    id: 2,
                    title: "Facebook",
                    icon: <a href={facebook} target="_blank"><FaFacebook/> </a>
                },

                {
                    id: 3,
                    title: "GitHub",
                    icon: <a href={Github} target="_blank"><FaGithub /> </a>
                },
                {
                    id: 4,
                    title: "twitter",
                    icon: <a href={twitter} target="_blank"><FaTwitter/></a>
                }
            ]
        }
    }

    render() {

        const linkedIn="https://react-icons.netlify.com/#/search";
        return (
            <section className="developer" >
                <Title title="Developer Info"></Title>
                <div className="developer-center">
                    {this.state.developerService.map((item, id) => {
                        return (
                            <article key={id}>
                                <span className="developer-icon">{item.icon}</span>
                                <h6>{item.title}</h6>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default DeveloperInfo
