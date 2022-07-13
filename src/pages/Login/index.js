import GlobalStyle from '../../app.styles';
import Heading from '../../components/common/Heading';
import Text from '../../components/common/Text';
import LoginWrapper, { Card, LoginLayout, Separator} from './login.style';
import {
    Button,
    createTheme,
    IconButton,
    InputAdornment
} from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useDispatch } from 'react-redux';
import { appLogin } from '../../redux/ducks/app_d';
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
                        <Heading content={'Iniciar Sesion'} style={{fontWeight: '700', marginBottom: '15px'}}/>
                        <Text content={'Hola! Bienvenido de nuevo 👋'} style={{color: 'rgba(14, 14, 23, 0.7)'}}/>
                        <Separator/>
                      
                        <TextValidator
                            label="Nombre (s)" fullWidth
                            onChange={handleChange('mail')}
                            name="name"
                            value={values.name}
                            validators={['required']}
                            errorMessages={['Campo obligatorio']}  
                        />
                        <Separator/>

                        <TextValidator
                            label="Primer apellido" fullWidth
                            onChange={handleChange('mail')}
                            name="secondName1"
                            value={values.secondName1}
                            validators={['required']}
                            errorMessages={['Campo obligatorio']}
                        />
                        <Separator/>

                        <TextValidator
                            label="Segundo apellido" fullWidth
                            onChange={handleChange('mail')}
                            name="secondName2"
                            value={values.secondName2}
                            validators={['required']}
                            errorMessages={['Campo obligatorio']}
                        />
                        <Separator/>
                        
                        <TextValidator 
                            label="Codigo de clase" fullWidth
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
                        <Separator/>
                        <Separator/>
                        <Button 
                            variant="contained" color='primary' 
                            size='large' type="submit" disabled={loginFetch.isFetching(() => {})}
                            style={{width: '90%', alignSelf: 'center'}}
                        >
                                Iniciar Sesión
                        </Button>
                        <Separator/>
                        <Separator/>
                        <Separator/>
                    </Card>
                </LoginLayout>
            </ValidatorForm>
        </LoginWrapper>
        </ThemeProvider>
     );
}
 
export default AppLogin;