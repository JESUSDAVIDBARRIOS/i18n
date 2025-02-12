import React from "react";
import {FormattedDate, FormattedNumber} from 'react-intl';
import { FormattedMessage } from "react-intl";

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td><FormattedNumber value={props.offer.salary} /> {Number(props.offer.salary) > 1? <FormattedMessage id="millions"/>:<FormattedMessage id="million"/>}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>{props.offer.views.toLocaleString()}</td>
    </tr>
  );
};

export default Job;
