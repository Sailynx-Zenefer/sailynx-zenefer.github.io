import HypAirLink from './HypAirLink'

export default function HypAir() {

    const hwPath = '/hyperweave/'

return (
    <div id="hyp-air">
    <p>{"(navigate to ("}</p>
    <nav>
        <HypAirLink endpoint={`${hwPath}siderealism`} linkText={'(siderealism is (what?))'}/>
        <HypAirLink endpoint={`${hwPath}psytrus-beeshine`} linkText={'(this be (psytrus-beeshine))'}/>
        <HypAirLink endpoint={`${hwPath}psytrus-beeshine/sidereal-sales`} linkText={'(sidereal (sales))'}/>
        <HypAirLink endpoint={`${hwPath}psytrus-beeshine/sidereal-research`} linkText={'(sidereal (research))'}/>
        <HypAirLink endpoint={`${hwPath}psytrus-beeshine/sidereal-tshirts`} linkText={'(sidereal (T.shirts))'}/>
        <HypAirLink endpoint={`${hwPath}sailynx-zenefer`} linkText={'(this be (sailynx-zenefer))'}/>
        <HypAirLink endpoint={`${hwPath}sailynx-zenefer/sews-gallery`} linkText={'(sews (gallery))'}/>
        <HypAirLink endpoint={`${hwPath}sailynx-zenefer/sees-gallery`} linkText={'(sees (gallery))'}/>
        <HypAirLink endpoint={`${hwPath}willow-bumble`} linkText={'(this be (willow.bumble))'}/>
        <HypAirLink endpoint={`${hwPath}willow-bumble/sings`} linkText={'(sings of (willow.bumble))'}/>
        <HypAirLink endpoint={`${hwPath}willow-bumble/sounds`} linkText={'(sounds of (willow.bumble))'}/>
        <HypAirLink endpoint={`${hwPath}willow-bumble/cosmic-mumbles`} linkText={'(cosmic mumbles of (willow.bumble))'}/>
        <HypAirLink endpoint={`${hwPath}willow-bumble/friends`} linkText={'(friends of (willow bumble)'}/>
        <p>{"))"}</p>
    </nav>
    
</div>
)
}



