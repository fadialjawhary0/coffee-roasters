import React, { useRef, useState } from 'react';

import { Box, Grid, Icon, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import SideMenu from './SideMenu';
import { PlanQuestions, SectionsStyles } from '../../../constants';
import OrderSummary from './OrderSummary';

const CreatePlan = () => {
  const [activeQuestion, setActiveQuestion] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const questionsRef = useRef([]);
  console.log(selectedOptions);

  /* Function to toggle the active question, if it is already active, remove it from the active questions array
   * and if it is not active, add it to the active questions array.
   * Added question ids will be expanded and the options will be shown.
   *
   * @param {number} id - The question id */
  const onQuestionClick = id => {
    setActiveQuestion(prev => (prev.includes(id) ? prev.filter(questionId => questionId !== id) : [...prev, id]));
  };

  /* Function to scroll to the question when the user clicks on the question in the side menu.
   *
   * @param {number} idx - The question index */
  const scrollToQuestion = idx => {
    questionsRef.current[idx].scrollIntoView({ behavior: 'smooth' });
    onQuestionClick(PlanQuestions[idx].id);
  };

  /* Function to set the selected option for the question.
   * When the user clicks on the option, the selected option's title will be set in the state.
   * The selected option will be highlighted with a different color.
   *
   * @param {number} questionId - The question id
   * @param {string} optionTitle - The option title */
  const onOptionClick = (questionId, optionTitle) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionId]: optionTitle,
    }));
  };

  return (
    <Grid container sx={{ justifyContent: { xs: 'center', md: 'space-between' }, ...SectionsStyles }}>
      {/* Side Menu Component*/}
      <SideMenu scrollToQuestion={scrollToQuestion} />

      {/* Questions Component*/}
      <Grid xs={12} md={8} item sx={{ py: '3rem' }}>
        {PlanQuestions.map((item, idx) => (
          <Box key={idx} ref={el => (questionsRef.current[idx] = el)} sx={{ mb: '4rem' }}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', mb: '4rem' }}
              onClick={() => onQuestionClick(item?.id)}>
              <Typography
                variant='h2'
                sx={{
                  color: 'grey.main',
                  transition: 'all 0.2s ease',
                  '&:hover': { color: 'grey.400' },
                  width: '100%',
                  userSelect: 'none',
                }}>
                {item.question}
              </Typography>
              <Icon
                component={ExpandMore}
                sx={{ color: 'darkcyan.main', fontSize: '4rem', rotate: activeQuestion.includes(item?.id) ? '180deg' : '0deg', transition: 'all 0.2s' }}
              />
            </Box>
            <Grid
              container
              sx={{
                gap: '1rem',
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
                maxHeight: activeQuestion.includes(item?.id) ? { xs: '50rem', sm: '25rem' } : 0,
                overflow: 'hidden',
                transition: 'max-height 0.5s ease',
              }}>
              {item?.options.map((option, idx) => (
                <Grid
                  item
                  key={idx}
                  xs={12}
                  sm={4}
                  onClick={() => onOptionClick(item?.id, option?.title)}
                  sx={{
                    backgroundColor: selectedOptions[item.id] === option.title ? 'darkcyan.main' : 'grey.100',
                    borderRadius: '1rem',
                    minHeight: { xs: '14rem', sm: '25rem' },
                    padding: { xs: '3rem 3rem 1rem 3rem', md: '3rem 2rem 0 2rem', lg: '3rem 6rem 0 3rem' },
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': { backgroundColor: selectedOptions[item.id] === option.title ? 'none' : 'orange.main' },
                  }}>
                  <Typography
                    variant='h4'
                    sx={{ minHeight: { xs: '5rem', sm: '6rem' }, color: selectedOptions[item.id] === option.title ? '#ffffff' : 'none' }}>
                    {option?.title}
                  </Typography>
                  <Typography variant='body1' sx={{ color: selectedOptions[item.id] === option.title ? 'grey.100' : 'none' }}>
                    {option?.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

        {/* Order Summary Component*/}
        <OrderSummary options={selectedOptions} questionsLength={PlanQuestions.length} />
      </Grid>
    </Grid>
  );
};

export default CreatePlan;
