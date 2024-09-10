import React from "react";
import "./Tickets.css";

const Tickets = () => {

    const shows = [
        { date: 'JUL 16', city: 'DETROIT, MI', place: 'DTE ENERGY MUSIC THEATRE' },
        { date: 'JUL 19', city: 'TORONTO, ON', place: 'BUDWEISER STAGE' },
        { date: 'JUL 22', city: 'BRISTOW, VA', place: 'JIGGY LUBE LIVE' },
        { date: 'JUL 29', city: 'PHOENIX, AZ', place: 'AK-CHIN PAVILION' },
        { date: 'AUG 02', city: 'CONCORD, CA', place: 'CONCORD PAVILION' },
        { date: 'AUG 05', city: 'LAS VEGAS, NY', place: 'T-MOBILE ARENA' },
      ];
      
    return <section className="ticketsection">
        <h1>BOOK TICKETS</h1>
      <table className="tickettable">
        <tbody>
            {shows.map((show) => {
                return <tr key={Math.random()} className="showrow">
                    <td className="showdate">{show.date}</td>
                    <td className="showcity">{show.city}</td>
                    <td className="showplace">{show.place}</td>
                    <td className="showbutton"><button className="ticketbutton">BUY TICKETS</button></td>
                </tr>
            })}
        </tbody>
      </table>
    </section>
    
    
}

export default Tickets;