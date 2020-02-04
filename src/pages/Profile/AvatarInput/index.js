import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  // cadastrar o input para que o unform saiba que ele existe
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    // como quero um arquivo só pego a posição 0

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
    console.log(preview);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
