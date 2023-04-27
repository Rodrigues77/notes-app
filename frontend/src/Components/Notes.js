import * as React from 'react';
import Note from './Note';
import api from '../services/Api';
import { Grid, Paper, TextField } from '@mui/material';

export default function Notes() {
  const [notesData, setNotesData] = React.useState([]);

  async function getNotesData() {
    try {
      const response = await api.get('/notes');

      if (response.status !== 200) {
        window.alert('Falha ao buscar dados das notas...');
        console.log('Falha ao buscar dados das notas..');
      } else {
        console.log('Notas recebidas com sucesso');
        console.log('response.data', response.data);
        setNotesData(response.data);
      }
    } catch (err) {
      window.alert('Erro durante a chamada da API');
      console.log('Erro durante a chamada da API');
    }
  }

  React.useEffect(() => {
    getNotesData();
  }, []);

  return (
    <div>
      {notesData.length > 0 ? (
        <div>
          {notesData.map((noteData) => (
            <Note data={noteData} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
