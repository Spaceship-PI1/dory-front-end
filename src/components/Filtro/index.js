import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filtro({ nome, idFiltro, value, onChange, itens }) {
    return (
        <FormControl sx={{ width: 170, marginRight: '12px' }}>
            <InputLabel id={idFiltro} sx={{fontSize: '1.6rem'}}>{nome}</InputLabel>
            <Select
                labelId={idFiltro}
                id="select"
                value={value}
                label={nome}
                onChange={onChange}
                sx={{
                    fontSize: '1.6rem',
                    borderRadius: '12px',
                }}
            >
                { itens.map((item, index) => <MenuItem key={index} value={item.value} sx={{fontSize: '1.6rem'}}>{item.nome}</MenuItem>)}
                <MenuItem value="" sx={{fontSize: '1.2rem'}}><em>Limpar o filtro</em></MenuItem>
            </Select>
        </FormControl>
    )
}