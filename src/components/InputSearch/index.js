import React, { Fragment, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import api from '../../services/api';

import searchIcon from '../../assets/icons/search-gray.svg';

import './style.css';
import CardGroup from '../CardGroup';
import CardProfessor from '../CardProfessor';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function SearchInput() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  const loading = open && options.length === 0;

  //const [tccsAll, setTccsAll] = useState([]);
  const [profsAll, setProfsAll] = useState([]);

  /* async function getTccsAll() {
    const response = await api.get("/tcc_all");
    setTccsAll(response.data.tccs);
    console.log(tccsAll);
  } */
  async function getProfsAll() {
    const response = await api.get('/teachers_all');
    setProfsAll(response.data.teachers);
    console.log(profsAll);
  }

  useEffect(() => {
    //getTccsAll();
    getProfsAll();
  }, []);
  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(100); // For demo purposes.

      if (active) {
        setOptions([...profsAll]);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div className="input-container">
      <button>
        <img className="search-icon" src={searchIcon} alt="Ícone de pesquisa" />
      </button>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        isOptionEqualToValue={(option, value) =>
          option.firstName === value.firstName
        }
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionLabel={(option) => option.firstName}
        sx={{ width: 300 }}
        loading={loading}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />

      <input
        className="input-search"
        name="search"
        type="text"
        placeholder="Pesquise sobre um orientador..."
      />
      <p>{value?.firstName + ' ' + value?.lastName}</p>
    </div>
  );
}
