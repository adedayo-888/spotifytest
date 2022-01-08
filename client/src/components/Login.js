import React from 'react';
import { Container } from 'react-bootstrap';
//
const authUrl =
  'https://accounts.spotify.com/authorize?client_id=fc140efeb2964eb2b62425b149eafe2c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming&20user-read-email&20user-read-private%20user-library-read%20user-read-modify%20user-read-playback-state%20user-modify-playback-state';
const Login = () => {
  return (
    <Container
      className='d-flex
     justify-content-center
      align-items-center'
      style={{
        minHeight: '100vh',
        background: '#a23e48',
        maxWidth: '1400px',
        width: '100%',
      }}>
      <div
        className='d-flex text-center align-items-center py-4 justify-content-center'
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          height: '75px',
          lineHeight: '75px',
          maxWidth: '1400px',
          width: '100%',
          background: '#ffc338',
          color: 'black',
        }}>
        <h2>
          Musicified
          <br /> <h6>Music app</h6>
        </h2>
      </div>

      <div
        className='d-flex flex-column text-center py-4 '
        style={{
          color: 'black',
          // background: 'white',
        }}>
        <h1>Welcome To Musicified Your Music App</h1>
        <h4>For All Your Favourite Tunes With Lyrics</h4>
        <br />
        <br />
        <a
          href={authUrl}
          className='btn btn-large btn-success'
          style={{
            borderRadius: '30px',
          }}>
          Login With Sportify
        </a>
      </div>
    </Container>
  );
};

export default Login;
