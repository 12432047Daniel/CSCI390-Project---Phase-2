import react from 'react';
import '../style/Gallary.css';
const Gallery = () => {
    return <div className='gallery-container'>
        <h1>Gallery</h1>
        <p>Welcome to our gallery!</p>
    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6d/ed/a4/sala.jpg?w=900&h=500&s=1"
        class="rounded float-start" alt="..."/>
    <img src="https://images.squarespace-cdn.com/content/v1/5ca7759452395864029ec716/1574458112838-L33NLAV889OZWFBGXJOJ/TPC-15.jpg?format=2500w"
        class="rounded float-end" alt="..." width="900" height="500"/>
    <img src="https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FmZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
        class="rounded float-start" alt="..." width="900" height="500"/>
    <img src="https://www.naturecafebar.com.au/ressources/images/lp-support-shutterstock-180241331_fa45_lg.jpg"
        class="rounded float-end" alt="..." width="900" height="500"/>
    </div>
}
export default Gallery;