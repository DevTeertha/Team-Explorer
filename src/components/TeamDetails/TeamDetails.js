import React, { useState, useEffect } from 'react';
import './TeamDetails.css';
import { useParams } from 'react-router-dom';
import cover from '../../dist/Cover/cover.png';
import './TeamDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faFlag, faFutbol, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const TeamDetails = () => {
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const youtube = <FontAwesomeIcon icon={faYoutube} />

    const founded = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const flag = <FontAwesomeIcon icon={faFlag} />
    const sport = <FontAwesomeIcon icon={faFutbol} />

    const { id } = useParams();
    const [details, setDetails] = useState({});
    const {
        idLeague,
        strSport,
        strLeague,
        strLeagueAlternate,
        strCountry,
        intFormedYear,
        strGender,
        strTwitter,
        strFacebook,
        strYoutube,
        strDescriptionEN,
        strDescriptionHU,
        strBanner,
        strLogo,
        strFanart1,
        strFanart4
    } = details;
    console.log(details);

    useEffect(() => {
        const URL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(URL)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]))
    }, [id])

    return (
        <div>
            <header>
                <div className='header-overlay'>
                    <img className='background-cover' src={cover} alt="background" />
                    <img style={{ width: '35%' }} className='league-cover' src={strLogo} alt="Cover" />
                </div>
            </header>
            <nav className='nav-menu bg-dark text-center py-1 position-sticky sticky-top'>
                <Link className='nav-menu-link' to='/'> Home</Link>
            </nav>
            <main>
                <div className="details-card row my-4 bg-primary text-white">
                    <div className="details-info col ml-3 mt-4">
                        <h1>{strLeagueAlternate}</h1>
                        <h5> {founded} Founded : {intFormedYear}</h5>
                        <h5> {flag} Country : {strCountry}</h5>
                        <h5> {sport} Sports Type : {strSport}</h5>
                        <h5>   {strGender === 'Male' ?
                            <FontAwesomeIcon icon={faMars} />
                            :
                            <FontAwesomeIcon icon={faVenus} />
                        } Gender : {strGender}</h5>
                    </div>


                    <div className="details-img col">

                        {strGender === 'Male' ?
                            <img src={strFanart4} alt="Thumbnail" />
                            :
                            <img src={strFanart1} alt="Thumbnail" />
                        }

                    </div>
                </div>
                <div className="details-description">
                    <p> {strDescriptionEN} </p>
                    <br />
                    <p> {strDescriptionHU} </p>
                </div>
            </main>
            <footer>
                <div className="social-icons mb-4">
                    <a className='text-info' target='_blank' href={'https://' + strTwitter}>
                        {twitter}
                    </a>
                    <a className='text-primary' target='_blank' href={'https://' + strFacebook}>
                        {facebook}
                    </a>
                    <a className='text-danger' target='_blank' href={'https://' + strYoutube}>
                        {youtube}
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default TeamDetails;