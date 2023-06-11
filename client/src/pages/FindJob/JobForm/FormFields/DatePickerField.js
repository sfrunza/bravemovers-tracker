import React from 'react';
import { useField } from 'formik';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import Box from '@mui/material/Box';

export default function DatePickerField(props) {
  const [field, meta, helper] = useField(props);
  // const { touched, error } = meta;
  const { setValue } = helper;
  const { value } = field;
  const { label, ...rest } = props;

  return (
    <div>
      <Box
        component="label"
        htmlFor="date"
        sx={{ fontSize: 14, fontWeight: 500 }}
      >
        Date
      </Box>
      <DesktopDatePicker
        {...field}
        {...rest}
        name="date"
        id="date"
        value={value}
        onChange={(date) => setValue(date)}
        slotProps={{
          textField: {
            size: 'small',
            fullWidth: true,
            readOnly: true,
            id: 'date',
          },
        }}
      />
    </div>
  );
}
