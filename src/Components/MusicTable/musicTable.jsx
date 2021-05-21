const MusicTable = (props) => {
    console.log(props.songs)
    return(
        <div>
            <table>
                <tr> 
                    <th>Song Id</th>
                    <th>Song Name</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Likes</th>
                </tr>
                {props.songs.map((song) =>
                    <tr>
                        <td>{song.id}</td>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <td>{song.likes}</td>
                    </tr> 
                )}
            </table>
        </div>
    )
}


export default MusicTable