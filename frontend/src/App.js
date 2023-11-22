import React, { useEffect, useState } from 'react';

import {
  AppStyle,
  Aside,
  Button,
  Form,
  Input,
  Item,
  Label,
  Main,
  Strong,
  TextArea,
  Ul,
} from './AppStyle';
import Notes from './components/Notes/Notes';
import RadioButton from './components/RadioButton/RadioButton';
import api from './components/services/api';

function App() {
  const [selectdValue, setSelectdValue] = useState('all');
  const [title, setTitles] = useState('');
  const [notes, setNotes] = useState('');
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false,
    });
    setTitles('');
    setNotes('');
    if (selectdValue !== 'all') {
      getAllNotes();
      setSelectdValue('all');
    }
    setAllNotes([...allNotes, response.data]);
  }

  async function getAllNotes() {
    const response = await api.get('/allannotations');
    setAllNotes(response.data);
  }

  async function loadNotes(option) {
    const params = { priority: option };
    const response = await api.get('/priorities', { params });
    if (response) {
      setAllNotes(response.data);
    }
  }
  function handleChange(e) {
    setSelectdValue(e.value);
    if (e.checked && e.value !== 'all') {
      loadNotes(e.value);
    } else {
      getAllNotes();
    }
  }

  async function handleDeleted(id) {
    const deletedNote = await api.delete(`/annotations/${id}`);
    if (deletedNote) {
      setAllNotes(allNotes.filter((note) => note._id !== id));
    }
  }

  async function handleChangePriority(id) {
    const priorityNote = await api.put(`/priorities/${id}`);
    if (priorityNote && selectdValue !== 'all') {
      loadNotes(selectdValue);
    } else if (priorityNote) {
      getAllNotes();
    }
  }

  return (
    <AppStyle>
      <Aside>
        <Strong>Caderno de Notas</Strong>
        <Form onSubmit={handleSubmit}>
          <Item>
            <Label htmlFor='title'>Titulo da Anotação</Label>
            <Input
              required
              maxLength={50}
              value={title}
              onChange={(e) => setTitles(e.target.value)}
            />
          </Item>
          <Item className='input-block'>
            <Label htmlFor='nota'>Anotações</Label>
            <TextArea
              required
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Item>
          <Button id='btn_submit' type='submit' disabled={!title || !notes}>
            Salvar
          </Button>

          <RadioButton
            selectdValue={selectdValue}
            handleChange={handleChange}
          />
        </Form>
      </Aside>

      <Main>
        <Ul>
          {allNotes.map((data) => (
            <Notes
              key={data._id}
              data={data}
              handleDelete={handleDeleted}
              handleChangePriority={handleChangePriority}
            />
          ))}
        </Ul>
      </Main>
    </AppStyle>
  );
}

export default App;
