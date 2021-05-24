const MusicTable = (props) => {
    return(
        <div>
            <table className="table table-dark table-hover" cellSpacing="0" width="100%">
                <thead>
                    <tr> 
                        <th>Song Id</th>
                        <th>Song Name</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Likes</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song) =>
                        <tr key={song.id}>
                            <td>{song.id}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.likes}</td>
                            {/* <td><button className="btn btn-dark" onClick="" >Update</button></td> */}
                            <td><button className="btn btn-dark" onClick={props.deleteSong.bind(this, song.id)}>Delete</button></td>
                        </tr> 
                    )}
                </tbody>   
            </table>
        </div>
    )
}

export default MusicTable