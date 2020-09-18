import React, { Component } from "react";
import styles from "./About.module.scss";

class About extends Component {
    render() {
        return (
            <div className={styles.about}>
                <h4>About Me</h4>
                <p>Louisa had her first piano lesson when she was 5 years old.</p>
                <p>Her debut performance was at the age of nine when she performed on stage with French pianist Richard Clayderman at the Derngate Theatre, Northampton. A year later, she successfully gained a place at the Junior Department of the Royal Academy of Music where she studied for eight years under Timothy Barratt and Druvi de Saram. During her time there, she was awarded the Iris Dyers Piano Prize. She also took part in many local festivals and competitions, and was selected to represent her local Kettering Eisteddfod in the North London Emanuel Piano Prize and the Millennium Music and Drama Celebrations at Leeds Town Hall. </p>   
                <p>Louisa continued to study for an undergraduate Music degree at King’s College London where she received piano tuition from Michael Young and Patsy Toh at the Royal Academy of Music. In her first year, she gained her LRSM qualification with distinction. Before graduating with First Class Honours in 2005, she had the opportunity to perform Shostakovich's 2nd Piano Concerto with the King's College Chamber Orchestra. She relocated to West Sussex and was employed at Ardingly College as Resident Musician and Assistant Housemistress. She built up a solid reputation in the area, and was in constant demand as an exam and festival accompanist, as well as a private piano, singing, theory and aural teacher.</p>
                <p>Supported by a scholarship award from the Worshipful Company of Cutlers in London, Louisa achieved her Masters degree in piano accompaniment at the Guildhall School of Music and Drama under the tutelage of Gordon Back. Louisa has been involved with the Chamber Tots scheme run by the Wigmore Hall – an education project for 2 to 5 year olds – in which she gave termly workshops there with her chamber group, the Kariosa Ensemble. Louisa is proud to have been a part of Yehudi Menuhin’s Live Music Now! scheme with mezzo-soprano Lucinda Stuart-Grant and close-harmony vocal group The Leading Ladies. The scheme focuses mainly on outreach work, aiming to bring music alive to a wide variety of audiences.</p>
                <p>Louisa has performed as soloist and accompanist in many venues across London including the Barbican Hall, Wigmore Hall, Southwark Cathedral and St Martin-in-the-Fields Church, as well as further afield, including the Auditori Winterhur in Barcelona and Musica Eboræ in Portugal. She is currently a staff accompanist at the Guildhall School of Music and Drama (both Senior and Junior departments), accompanist (and online conductor during Covid-19!) for the St John of Jerusalem Festival Chorus in Hackney, and she teaches piano at Christ’s Hospital School in West Sussex as well as building up a thriving private practice in London. Louisa is also an accompanist and performance coach for the Music4People summer school in North Yorkshire, and ProCorda residential string training camps.</p>
                <p>You may have seen Louisa recently on TV accompanying Ellen Baumring-Gledhill (cello) in the BBC Young Musician of the Year 2020 strings category final. You can watch this performance on the BBC iPlayer <a href="https://www.bbc.co.uk/iplayer/episode/m000jqyp/bbc-young-musician-2020-5-strings-final-highlights">here</a>.</p>
            </div>
        )
    }
}

export default About;