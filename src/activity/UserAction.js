import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate, FormattedTime, FormattedRelative } from 'react-intl';
import { Tooltip } from 'antd';
import UserActionIcon from './UserActionIcon';
import UserActionMessage from './UserActionMessage';

const UserAction = ({
  action,
  totalVestingShares,
  totalVestingFundSteem,
}) => {
  const actionType = action.op[0];
  const actionDetails = action.op[1];
  return (
    <div className="UserActivityActions__action">
      <UserActionIcon actionType={actionType} actionDetails={actionDetails} />
      <div className="UserActivityActions__content">
        <UserActionMessage
          actionType={actionType}
          actionDetails={actionDetails}
          totalVestingShares={totalVestingShares}
          totalVestingFundSteem={totalVestingFundSteem}
        />
        <span className="UserActivityActions__timestamp">
          <Tooltip
            title={
              <span>
                <FormattedDate value={`${action.timestamp}Z`} />{' '}
                <FormattedTime value={`${action.timestamp}Z`} />
              </span>
            }
          >
            <span>
              <FormattedRelative value={`${action.timestamp}Z`} />
            </span>
          </Tooltip>
        </span>
      </div>
    </div>
  );
};

UserAction.propTypes = {
  action: PropTypes.shape(),
  totalVestingShares: PropTypes.string.isRequired,
  totalVestingFundSteem: PropTypes.string.isRequired,
};

UserAction.defaultProps = {
  action: {
    op: [],
  },
};

export default UserAction;
