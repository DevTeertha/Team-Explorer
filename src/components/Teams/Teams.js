import React, { useState, useEffect } from 'react';
import TeamCard from '../TeamCard/TeamCard';
const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => {
                const dataMain = data.leagues.splice(0, 15)
                setTeams(dataMain);
            });
    }, [])

    return (
        <div className='row my-5 mx-auto'>
            {
                teams.map(team => <TeamCard key={team.idLeague} team={team}></TeamCard>)
            }
        </div>
    );
};

export default Teams;