import React from 'react'
import DormCard from '../components/DormCard'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';

function Dorms() {
  const theme = useTheme();

  return (
    <div>
      <Typography variant="h1" sx={{ textAlign: 'center', fontSize: theme.typography.pxToRem(40), marginTop: '60px', marginBottom: '40px', fontWeight: '600' }}>
        Dorms
      </Typography>

      <DormCard />
    </div>
  )
}

export default Dorms