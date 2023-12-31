import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function EmailInput(props) {
  const { errorText, label, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    <>
      <TextField
        {...field}
        {...rest}
        size="small"
        type="text"
        placeholder={label}
        error={meta.touched && meta.error && true}
        helperText={_renderHelperText()}
        InputProps={{
          startAdornment: (
            <Box
              mr={1}
              sx={{ position: 'relative', top: 3, color: 'text.secondary' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                width="22"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Box>
          ),
        }}
      />
    </>
  );
}
