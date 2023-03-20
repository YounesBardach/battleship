const shipMaker = (length, hits, sunk) => {
    const ship = {length, hits, sunk}
    ship.hit = () => {
        ship.hits += 1
        return ship.hits
    }
    ship.isSunk = () => {
        const hp = ship.length - ship.hits
        if(hp === 0) {ship.sunk = true}
        return hp
    }
    return ship
};

export default shipMaker