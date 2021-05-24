const MusicTable = (props) => {
    return(
        <div>
            <table id="sortedTable" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
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
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song) =>
                        <tr>
                            <td>{song.id}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.likes}</td>
                            <td><button onClick={props.deleteSong.bind(this, song.id)}>Delete</button></td>
                        </tr> 
                    )}
                </tbody>   
            </table>
        </div>
    )
}

export default MusicTable