import GlobalStyle from '../../app.styles';
import Heading from '../../components/common/Heading';
import Text from '../../components/common/Text';
import LoginWrapper, { Card, LoginLayout, Separator} from './login.style';
import {
    FormControlLabel,
    Checkbox,
    Button,
    createTheme,
    IconButton,
    InputAdornment
} from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useDispatch } from 'react-redux';
import { appLogin } from '../../redux/ducks/app_d';
import { isUserAuthenticated } from '../../utils/helpers';
import useDuck from '../../utils/hooks/useDuck';

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#283891',
    },
    secondary: {
      main: '#E8207A',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  shape: {
    borderRadius: 12,
  },
});

const AppLogin = () => {
    const dispatch = useDispatch()

    //Data States
    const [values, setValues] = useState({
        mail: '',
        password: '',
        showPassword: false,
    });

    //Ducks
    const loginFetch = useDuck({reducer: 'app', status: 'GET_APP_LOGIN'})

    //Helpers
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };

    //Fetchers
    const onSubmit = () => { dispatch(appLogin(values.mail, values.password)) };

    //useEffects
    // useEffect(() => {isUserAuthenticated() && window.location.replace('/app')}, [])
    

    return ( 
        <ThemeProvider theme={themeOptions}>
            <LoginWrapper>
            <GlobalStyle />
            <ValidatorForm onSubmit={onSubmit}>
                <LoginLayout>
                    <Card >
                        <Heading content={'Hola'} style={{fontWeight: '700', marginBottom: '5px'}}/>
                        <Text content={'Es bueno verte de nuevo 👋'} style={{color: 'rgba(14, 14, 23, 0.7)'}}/>
                        <Separator/>
                      
                        <TextValidator
                            label="Correo" fullWidth
                            onChange={handleChange('mail')}
                            name="mail"
                            value={values.mail}
                            validators={['required', 'isEmail']}
                            errorMessages={['Campo obligatorio', 'Correo no valido']}
                        />
                        <Separator/>
                        <TextValidator 
                            label="Contraseña" fullWidth
                            onChange={handleChange('password')}
                            name="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            validators={['required']}
                            errorMessages={['Campo obligatorio']}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                    </InputAdornment>
                                ),
                              }}
                        />
                        <Separator/>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '15px'}}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Recuérdame" />
                            <Button variant="text">Olvidé la contraseña </Button>
                        </div>
                        <Separator/>
                        <Button 
                            variant="contained" color='primary' 
                            size='large' type="submit" disabled={loginFetch.isFetching(() => {})}
                            style={{width: '90%', alignSelf: 'center'}}
                        >
                                Iniciar Sesión
                        </Button>
                        <Separator/>
                        <div  style={{alignSelf: 'center', display: 'flex'}}>
                            <Text content={'¿No tienes una cuenta?'} style={{color: 'rgba(14, 14, 23, 0.7)'}}/>
                            <Link to="/register"><b style={{color: themeOptions.palette.primary.main, cursor: 'pointer', marginLeft: '5px'}}>Registrate</b></Link>
                        </div>
                    </Card>
                </LoginLayout>
            </ValidatorForm>
        </LoginWrapper>
        </ThemeProvider>
     );
}
 
export default AppLogin;