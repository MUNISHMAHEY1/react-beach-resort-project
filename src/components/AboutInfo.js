import React, { Component } from 'react'
import { FaReact } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'
import Title from '../components/Title'

class AboutInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tech: [
                {
                    id: 1,
                    icon: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><DiJavascript></DiJavascript></a>,
                    title: "JavaScript"
                },
                {
                    id: 2,
                    icon: <a href="https://reactjs.org/" target="_blank"><FaReact></FaReact></a>,
                    title: "Reactjs "
                },
                {
                    id: 3,
                    title: <a href="https://react-icons.netlify.com/#/">react-icons API</a>
                },
                {
                    id: 5,
                    title: <a href="https://reactjs.org/docs/context.html" target="_blank">react-context API</a>
                }

            ],
            description: [
                {
                    id: 1,
                    title: "Home Page",
                    info: 
                    "Home page of the project shows four main components. First on is the Navbar which has a home icon, logo, Home button, Rooms Button and About button in the same order. As it is a responsive website therefore it will work in mobile form also. When in the mobile form it will show a sandwich icon on the right top of the screen. The main screen has image of the resort and a banner on it which shows a link to go to the rooms page. Next comes the Services provided by the Resort to the customers like free Cocktails, Hiking trips, Free shuttle service and Free Beer. Scrolling futher down will show the featured rooms with pricing and the category to each. All the rooms can be explored more by clicking on the link provided for each.    "
                },
                {
                    id: 2,
                    title: "Rooms Page",
                    info: "In the rooms page a customer xan search for a room with parameters provided to match their needs. These parameters are Room Type, Numbers of Guests, Rooms Price, Rooms Size, Breakfast and Pets. Below this, are all the rooms displayed which are available in the resort. The display of these rooms changes when the parameters are changes. If the parameters does not match any room then it will show the massage saying No room matches the search parameters." 
                },
                {
                    id: 3,
                    title: "Single Room Page",
                    info: "It displays the picture of the room. Below that it has the details of the room and info on the right hand side shwoing the price, size, max capacity, and shwoing if a pet is allowed or not. After that comes the extras which shows more details of the features included in the room "
                },
                {
                    id: 4,
                    title: "About Page",
                    info: "It has the details of the project, the technology used in the project and the important links to the developer's profile like LinkedIn, Facebook, Twitter and GitHub. Every icon ic clickable and wiil take you to the developer's respective website. TRY IT!!!"
                },
            ]

        }
    }



    render() {
        // const description = "Home Page";
        return (
            <>

                <section className="about-info">
                    <Title title="About the Project"></Title>
                    <div>
                        {this.state.description.map((item, id) => {
                            return (
                                <article>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p><br/><br/>
                                </article>
                            )
                        })}
                    </div>
                </section>

                <section className="developer">
                    <Title title="Technology used"></Title>
                    <div className="developer-center">
                        {this.state.tech.map((item, id) => {
                            return (
                                <article key={id}>
                                    <span className="developer-icon">{item.icon}</span>
                                    <h6>{item.title}</h6>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </>
        )
    }
}

export default AboutInfo

