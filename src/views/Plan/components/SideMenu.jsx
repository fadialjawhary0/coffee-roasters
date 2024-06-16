import React from 'react';

import { Grid, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';

import { MenuItems } from '../../../constants/menuItems.const';

const SideMenu = ({ scrollToQuestion }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const listItemStyles = isLastItem => ({
    cursor: 'pointer',
    py: '2.4rem',
    borderBottom: isLastItem ? '' : '1px solid #d7d7d7',

    '&:hover .MuiListItemText-root:first-of-type': {
      left: '0.75rem',
      opacity: '0.3',
    },
    '&:hover .MuiListItemText-root:last-of-type': {
      left: '0.75rem',
      opacity: '0.6',
    },
  });

  const orderNumberStyles = {
    position: 'relative',
    opacity: '0.2',
    left: 0,
    transition: 'all 0.3s',
  };

  const orderTitleStyles = {
    position: 'relative',
    opacity: '0.4',
    minWidth: '20rem',
    left: 0,
    transition: 'all 0.3s',
  };

  return !isMobile ? (
    <Grid xs={3} item>
      <List sx={{ position: 'sticky', top: '2rem' }}>
        {MenuItems.map((item, idx) => (
          <ListItem key={idx} sx={listItemStyles(idx === MenuItems.length - 1)} onClick={() => scrollToQuestion(idx)}>
            <ListItemText primary={item?.order} primaryTypographyProps={{ variant: 'h4' }} sx={{ pr: '1.5rem', ...orderNumberStyles }} />
            <ListItemText primary={item?.title} primaryTypographyProps={{ variant: 'h4' }} sx={{ ...orderTitleStyles }} />
          </ListItem>
        ))}
      </List>
    </Grid>
  ) : (
    <></>
  );
};

export default SideMenu;
