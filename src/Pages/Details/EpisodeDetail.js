import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./Detail.css";

export function EpisodeByID({ episode }) {


    return (

        <div  className="episodes">
            <div  className="episodeTitle">
                <h3>Episode's Name: {episode.name} </h3>
            </div>
            <div  className="episodeTitle">
                <h4> Episode's air date: {episode.air_date} </h4>

            </div>



            {episode.characters.map((exact = false,characters) =>
                <div className="characters">

                    <div className="media">

                        <div className="subTitle">

                            <Button  disableElevation>
                                <img
                                    src={characters.image}
                                    alt={characters.name}
                                    className="ContentModal__portrait"
                                />
                                <Link exact to={`/character/${characters.id}`}>
                                    {characters.name}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>




    )
}
