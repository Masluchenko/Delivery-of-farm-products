import * as React from 'react';
import { IMaskInput } from 'react-imask';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import PersonIcon from '@mui/icons-material/Person';
import { IconButton, TextField, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }
  
  const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
      const { onChange, ...other } = props;
      return (
        <IMaskInput
          {...other}
          mask="+7(#00) 000-00-00"
          definitions={{
            '#': /[1-9]/,
          }}
          inputRef={ref}
          onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
          overwrite
        />
      );
    },
  );

export default function FormDialog() {
  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);

  const handleClickOpenFirst = () => {
    setOpenFirst(true);
    setOpenSecond(false);

  };

  const handleClickOpenSecond = () => {
    setOpenFirst(false);
    setOpenSecond(true);

  };

  const handleClose = () => {
    setOpenFirst(false);
    setOpenSecond(false);
  };

  const [values, setValues] = React.useState({
    textmask: '+7(900) 000-00-00',

  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      
        <IconButton sx={{marginRight: 1}}
         color='inherit'
         onClick={handleClickOpenFirst}>
            <PersonIcon />
        </IconButton>


        <Dialog open={openFirst}>
        <Box display='flex' justifyContent='space-between'>
        <DialogTitle>Авторизация</DialogTitle>
        <IconButton onClick={handleClose}>
            <CloseIcon />
        </IconButton>
        </Box>
        <DialogContent>
            <DialogContentText>Введите номер телефона, чтобы войти, либо зарегистрироваться, если у вас нет аккаунта.</DialogContentText>
        
        <Stack  justifyContent='center' m={4}>
            <FormControl variant="outlined">
                <InputLabel id="outlined-basic" color='success' htmlFor="outlined-basic">Ваш телефон</InputLabel>
                <Input
                color='success'
                value={values.textmask}
                onChange={handleChange}
                name="textmask"
                id="outlined-basic"
                inputComponent={TextMaskCustom as any}
                />
            </FormControl>
        </Stack>
        </DialogContent>

        <DialogActions sx={{display:'flex', justifyContent:'center'}}>
          <Button color='success' variant="contained" size="large" type="submit" sx={{width: 300}}>Продолжить</Button>
        </DialogActions>
        <DialogActions sx={{display:'flex', justifyContent:'center'}}>
            <Button variant="outlined" size="large" onClick={handleClickOpenSecond} sx={{width: 300}}>Войти по почте</Button>
        </DialogActions>
        

        </Dialog>


        <Dialog
        open={openSecond}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <Box display='flex' justifyContent='space-between'>
        <DialogTitle>Авторизация</DialogTitle>
        <IconButton onClick={handleClose}>
            <CloseIcon />
        </IconButton>
        </Box>
        
        <DialogContent>
          <DialogContentText>Введите e-mail, чтобы войти, либо зарегистрироваться, если у вас нет аккаунта.</DialogContentText>
          <TextField
            color='success'
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Ваш e-mail"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            color='success'
            autoFocus
            required
            margin="dense"
            id="name"
            name="password"
            label="Ваш пароль"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        
        <DialogActions sx={{display:'flex', justifyContent:'center'}}>
          
          <Button color='success' variant="contained" size="large" type="submit" sx={{width: 300}}>Продолжить</Button>
        </DialogActions>
        <DialogActions sx={{display:'flex', justifyContent:'center'}}>
            <Button variant="outlined" size="large" onClick={handleClickOpenFirst} sx={{width: 300}}>Войти по номеру телефона</Button>
        </DialogActions>
      </Dialog>
      
    </React.Fragment>
  );
}
