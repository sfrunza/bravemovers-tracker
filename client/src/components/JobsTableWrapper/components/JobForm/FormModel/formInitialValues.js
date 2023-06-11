import moment from 'moment';
import submitFormModel from './submitFormModel';
const {
  formField: {
    date,
    jobId,
    workTime,
    tips,
    comments,
    teammates,
    image,
    role,
  },
} = submitFormModel;

export default {
  [date.name]: moment(),
  [jobId.name]: '',
  [workTime.name]: '',
  [tips.name]: '',
  [comments.name]: '',
  [teammates.name]: [],
  [image.name]: [],
  [role.name]: '',
};
