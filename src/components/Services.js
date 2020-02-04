import React, { Component } from 'react'
import Title from '../components/Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail></FaCocktail>,
                title: "Free Cocktails",
                info: "Free cocktails on the House. Just enjoy and part hard "
            },
            {
                icon: <FaHiking></FaHiking>,
                title: "Hiking Trips",
                info: "Enjoy the beauty of the nearby hills and track them for adventure with pit stops to recharge yourself with refreshing drinks"
            },
            {
                icon: <FaShuttleVan></FaShuttleVan>,
                title: "Free ShuttleVan",
                info: "Free ShuttleVan service available from the resort to the FootHills of the Hiking hills. The service is to and from the hills."
            },
            {
                icon: <FaBeer></FaBeer>,
                title: "Free Beer",
                info: "Free Beer on the house. Enjoy and dance to crazy music."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>)
                    })}
                </div>
            </section>
        )
    }
}

export default Services
