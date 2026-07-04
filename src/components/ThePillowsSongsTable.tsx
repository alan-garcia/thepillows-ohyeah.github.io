import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const ThePillowsSongsTable = () => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('/thepillowsYeahSongs.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const songs = await response.json();
        setSongs(songs);
        setFilteredSongs(songs);
      } catch (error) {
        console.error("Error fetching the pillows' songs", error);
      }
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    const filtered = songs.filter((row: any) => 
      ["songName", "albumName", "year"].some(key =>
        row[key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    
    setFilteredSongs(filtered);
  }, [searchTerm, songs]);

  const handleSearchChange = (event: any) => {
    const searchTerm = event.target.value.toLocaleLowerCase();
    setSearchTerm(searchTerm);
  };

  const columns = [
    { field: 'id', headerName: '#', width: 60 },
    { field: 'songName', headerName: 'Song Name', width: 390, flex: 1 },
    { field: 'albumName', headerName: 'Album Name', width: 250, flex: 1 },
    { field: 'discType', headerName: 'Disc Type', width: 120 },
    { field: 'year', headerName: 'Year', type: 'number', width: 90 },
    { field: 'numberOfYeah', headerName: 'Yeahs', type: 'number', width: 100 }
  ];

  return (
    <>
      <div className="tp-search">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>

        <input id="tp-search-song" aria-label="Search a song, album or year" type="search" value={searchTerm} onChange={handleSearchChange} placeholder="Search a song, album, or year" />
      </div>
      
      <Box>
        <DataGrid columns={columns} rows={filteredSongs} density='compact'
            initialState={{
              sorting: {
                sortModel: [{ field: "numberOfYeah", sort: "desc" }],
              },
              pagination: {
                  paginationModel: {
                    pageSize: 10
                  }
              }
            }}
            pageSizeOptions={[10, 25, { value: -1, label: 'All' }]}
            sx={{
                '.MuiDataGrid-columnSeparator': {
                    display: 'none',
                },
                '.MuiDataGrid-columnHeader': {
                    backgroundColor: '#ffbc09',
                },
                '.MuiDataGrid-columnHeaderTitle': {
                    fontSize: 16,
                    fontWeight: '700'
                },
                '.MuiDataGrid-row:nth-of-type(2n+1)': {
                    backgroundColor: 'rgba(0,0,0,.07)'
                },
                '.MuiTablePagination-root': {
                    margin: 'auto'
                },
            }}
            autoHeight
            disableRowSelectionOnClick
            disableColumnFilter
            disableColumnMenu
            disableAutosize
            disableColumnResize
        />
      </Box>
    </>
  );
};

export default ThePillowsSongsTable;
