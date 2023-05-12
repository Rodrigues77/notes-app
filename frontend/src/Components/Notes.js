import * as React from 'react';
import api from '../services/Api';
import Note from './Note';

export default function Notes() {
  const [notesData, setNotesData] = React.useState([]);

  async function getNotesData() {
    try {
      const response = await api.get('/notes');

      if (response.status !== 200) {
        window.alert('Falha ao buscar dados das notas...');
        console.log('Falha ao buscar dados das notas..');
      } else {
        console.log('Notas recebidas com sucesso => ', response.data);
        setNotesData(response.data);
      }
    } catch (err) {
      window.alert('Erro durante a chamada da API');
      console.log('Erro durante a chamada da API');
    }
  }

  React.useEffect(() => {
    console.log('useEffect => Notes.js');
    getNotesData();
  }, []);

  return (
    <>
      {notesData.length > 0 ? (
        <>
          {notesData.map((noteData, index) => (
            <Note data={noteData} key={index} />
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
