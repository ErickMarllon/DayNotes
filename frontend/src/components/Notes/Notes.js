import React, { useState } from 'react';
import { AiOutlineExclamationCircle, AiTwotoneDelete } from 'react-icons/ai';
import api from '../services/api';
import {
  DeletedIcon,
  Li,
  NoteInfos,
  Span,
  Strong,
  TextArea,
} from './NotesStyle';

function Notes({ data, handleDelete, handleChangePriority }) {
  const [changeNote, setChangeNote] = useState('');

  function handleEdit(e, priority) {
    e.style.cursor = 'text';
    e.style.borderRadius = '5px';

    if (priority) {
      e.style.boxShadow = '0 0 5px white';
    } else {
      e.style.boxShadow = '0 0 5px gray';
    }
  }

  async function handleSave(e, notes) {
    e.style.cursor = 'default';
    e.style.boxShadow = 'none';

    if (changeNote && changeNote !== data.notes) {
      await api.put(`/UpdateAnnotation/${data._id}`, {
        notes: changeNote,
      });
    }
  }

  return (
    <>
      <Li className={data.priority ? 'priority' : 'notepad-infos'}>
        <NoteInfos>
          <Strong>{data.title}</Strong>
          <DeletedIcon>
            <AiTwotoneDelete size='20' onClick={() => handleDelete(data._id)} />
          </DeletedIcon>
        </NoteInfos>
        <TextArea
          defaultValue={data.notes}
          onClick={(e) => handleEdit(e.target, data.priority)}
          onChange={(e) => setChangeNote(e.target.value)}
          onBlur={(e) => handleSave(e.target, data.notes)}
        />
        <Span>
          <AiOutlineExclamationCircle
            size='20'
            onClick={() => handleChangePriority(data._id)}
          />
        </Span>
      </Li>
    </>
  );
}

export default Notes;
