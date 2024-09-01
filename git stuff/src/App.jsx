import { Container, Box, TextField, Button, Typography, Divider } from '@mui/material';

function Login() {
  return (
    <Container maxWidth="xs">
      <Box 
        sx={{ 
          mt: 8, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>

        <TextField 
          margin="normal" 
          required 
          fullWidth 
          id="email" 
          label="Email Address" 
          name="email" 
          autoComplete="email" 
          autoFocus 
        />
        
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button 
          fullWidth 
          variant="contained" 
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>

        <Divider sx={{ width: '100%', my: 2 }} />

        <Typography variant="body1">
          Or sign in with
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
          <Button 
            variant="outlined" 
            sx={{ width: '30%' }}
          >
            Google
          </Button>
          
          <Button 
            variant="outlined" 
            sx={{ width: '30%' }}
          >
            Facebook
          </Button>
          
          <Button 
            variant="outlined" 
            sx={{ width: '30%' }}
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
