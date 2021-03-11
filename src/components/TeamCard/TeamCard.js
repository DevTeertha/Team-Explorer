import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './TeamCard.css'
import TeamDetails from '../TeamDetails/TeamDetails';
import {Link} from "react-router-dom";

const TeamCard = (props) => {
    const { idLeague, strLeague, strSport, strTeamBadge, strLeagueAlternate } = props.team;
    const [logo,setLogo] = useState({});
    const {strBadge} = logo;

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res=>res.json())
        .then(data=>setLogo(data.leagues[0]))
    },[idLeague]);

    return (
        <div className='col card-container'>
            <Card className='league-card' style={{ width: '20rem' }}>
                <Card.Img className='p-5 card-img' variant="top" src={strBadge} />
                <Card.Body>
                    <Card.Title className='card-title'>{strLeagueAlternate}</Card.Title>
                    <Card.Text className='text-center'>{strSport}</Card.Text>
                    <Link to={`/${idLeague}`}>
                        <Button className='w-100 font-weight-bold' variant="warning">Explore</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};
export default TeamCard;