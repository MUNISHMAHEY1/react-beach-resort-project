import React, { Component } from 'react'
import items from './data'
import Client from './contentful'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true,
            type: 'all',
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
        }
    }

    //getData from contentful
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "beachResort",
                // order:"sys.createdAt", //will show everything in order
                order:'-fields.price' // higfhes price first
            });
            let rooms = this.formatData(response.items)//items is from the data.js file
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price))
            let maxSize = Math.max(...rooms.map(item => item.size))
            this.setState({
                rooms: rooms,
                featuredRooms: featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice: maxPrice,
                maxSize: maxSize
            })
        } catch (error) {
            console.log(error);

        }
    }


    componentDidMount() {
        this.getData()
    }

    formatData(items) {
        //items is a parameter 
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => {
                return image.fields.file.url;
            })
            let room = { ...item.fields, images: images, id: id }
            return room;
        })
        return tempItems;
    }

    // This function is used in singleroom component 
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    // the parameterss entered here will be caught and the values in the states will be set accordingly
    handleChange = event => {
        const target = event.target
        /* next line check to see that if the value is coming from checkbox or not. 
            If value if coming from checkbox it will check the attribute checked or not else will get the value from the field
        */
        const value = target.type === 'checkbox' ?
            target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]: value
        }, this.filterRooms)

    }

    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state

        // all the rooms
        let tempRooms = [...rooms]
        //transform value
        capacity = parseInt(capacity)
        price = parseInt(price)
        // filter by type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
            // console.log(tempRooms)
        }

        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        // filter by price
        if (price !== 600) {
            tempRooms = tempRooms.filter(room => room.price <= price)
        }

        //filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        // filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        // filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        //change state
        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            //To pass in object as value to RoomContext.Provider it requires two sets of curly brases 
            <RoomContext.Provider value={{
                ...this.state, getRoom: this.getRoom, handleChange: this.handleChange
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

//HOC higher Order Component

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value}></Component>
                }
            </RoomConsumer>
        );

    }
}

export { RoomProvider, RoomConsumer, RoomContext }
