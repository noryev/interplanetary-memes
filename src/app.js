import React from 'react';
import './App.css'; // put your CSS here

function App() {
    const memes = [ // you would replace this with the URLs of your images
        "https://bafybeiey4wbvygss4llkgxvcd5r7qdu44cni5u7jmd6habxhrjcvkdhemm.ipfs.w3s.link/awSith.png",
        "https://bafybeicvf2yblhsb37z77s2pvucbnh6wrvuvtmkmlrvlpso6dcou2wqlky.ipfs.w3s.link/ded.png",
        // more image URLs...
    ];

    return (
        <div className="App">
            <h1>Interplanetary Memes</h1>
            <div className="gallery">
                {memes.map((meme, index) => (
                    <div className="gallery-item" key={index}>
                        <a href={meme}>
                            <img src={meme} alt={`Meme ${index}`} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
