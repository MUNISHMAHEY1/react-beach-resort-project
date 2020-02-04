import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
// import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

class SingleRoom extends Component {
    // The props being received here are not explicitly passed by us instead it is given my react-router-dom
    constructor(props) {
        super(props)
        // console.log(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
                <div className="error">
                    <h3>No Such Room could be found...</h3>
                    <Link to="/rooms" className='btn-primary'>Back to Rooms</Link>
                </div>)
        }

        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images } = room;
        const [mainImg, ...defaultImg] = images
        // console.log(defaultImg);
        return (
            <>
                <StyledHero img={mainImg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
                    </Banner>
                </StyledHero>

                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name}></img>
                        })}
                    </div>

                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>price : ${price}</h6>
                            <h6>Size : {size} SQFT</h6>
                            <h6>
                                    max capacity : {" "}
                                    {capacity > 1 ? `${capacity} people` :
                                    `${capacity} person`}
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>

                <section className="room-extras">
                    <h3>Extras</h3>
                    <ul className="extras">
                        {extras.map((item,index) =>{
                        return <li key={index}> - {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

export default SingleRoom
